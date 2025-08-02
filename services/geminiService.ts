
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available as an environment variable
if (!process.env.API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Gets an explanation or example from the Gemini model.
 * @param topic The concept or question from the user.
 * @returns A string with the AI-generated explanation.
 */
export async function getAIAssistance(topic: string): Promise<string> {
  if (!process.env.API_KEY) {
    return "Error: La clave de API no está configurada. Por favor, contacta al administrador.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Explica el siguiente concepto de gramática o lenguaje español de una manera simple y clara, como si fueras un tutor amigable. Si se te da una oración para revisar, corrígela y explica el error. Concepto: "${topic}"`,
      config: {
        systemInstruction: "Eres un tutor experto en el idioma español, especializado en preparar a estudiantes para exámenes. Tus explicaciones deben ser claras, concisas y motivadoras.",
        temperature: 0.7,
        topK: 40
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, ha ocurrido un error al intentar obtener ayuda. Por favor, inténtalo de nuevo más tarde.";
  }
}
