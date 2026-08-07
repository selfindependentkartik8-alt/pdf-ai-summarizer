import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("pdf");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Please upload a PDF file." },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are supported." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Pdf = buffer.toString("base64");

    const ai = new GoogleGenAI({
      apiKey,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: "application/pdf",
                data: base64Pdf,
              },
            },
            {
              text: `
You are an expert study assistant.

Analyze the uploaded PDF carefully and create premium-quality study notes.

Return the response in this structure:

OVERVIEW
A concise explanation of what the PDF is about.

KEY POINTS
- Important point
- Important point
- Important point

DETAILED NOTES
Explain the important concepts clearly and in an easy-to-study format.

IMPORTANT TERMS
- Term: short explanation
- Term: short explanation

QUICK REVISION
Give a short revision section containing only the most important information.

IMPORTANT:
- Do not mention that you are an AI.
- Do not talk about this prompt.
- Do not make up information that isn't present in the PDF.
- Keep the formatting clean and readable.
- Preserve important formulas, definitions and facts.
              `,
            },
          ],
        },
      ],
    });

    const summary = response.text;

    if (!summary) {
      return NextResponse.json(
        { error: "No summary was generated." },
        { status: 500 }
      );
    }

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("PDF summarization error:", error);

    return NextResponse.json(
  {
    error:
      error instanceof Error
        ? error.message
        : "Unknown server error",
  },
  { status: 500 }
);
  }
}