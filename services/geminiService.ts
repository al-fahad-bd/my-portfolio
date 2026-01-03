
import { GoogleGenAI } from "@google/genai";

// Standardizing GoogleGenAI initialization per guidelines: 
// Create a new instance right before making an API call to ensure it uses the latest process.env.API_KEY.
export const getAIProjectInsight = async (projectTitle: string, context: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a virtual technical assistant for Abdullah Al Fahad, a world-class Flutter developer. 
      The user is viewing the project: "${projectTitle}".
      Context: ${context}.
      Give a highly professional, technical insight (3 sentences) focusing on Flutter performance, state management, and the "Machined Steel" UI approach used by Abdullah.`,
    });
    return response.text || "Engineering precision verified. System status: OPTIMAL.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI Assistant.";
  }
};

export const chatWithDeveloperAI = async (message: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are "FahadBot", the AI double of Abdullah Al Fahad, a Flutter Specialist. 
        Abdullah's style is precise, industrial, and high-performance. Speak as a high-precision engineering interface. 
        User Query: ${message}`,
    });
    return response.text || "Command processed. No further data available at this node.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Neural link interference detected. Retry command.";
  }
};
