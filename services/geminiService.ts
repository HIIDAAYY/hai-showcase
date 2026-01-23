import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// System instruction to make the AI behave like the product being showcased
const SYSTEM_INSTRUCTION = `
You are "HAI Bot", a demo of an advanced, friendly AI customer service agent. 
You are currently simulating an agent for "Lumina Aesthetic Clinic & Skincare".

Your capabilities to demonstrate:
1.  **Mock Order Tracking**: If a user provides an order ID (e.g., #ORD123), pretend to check a database and return a realistic status (e.g., "Out for delivery by courier", "Processing in warehouse").
2.  **Mood Detection**: If the user seems angry or frustrated, explicitly acknowledge it with empathy (e.g., "I sense you are frustrated, let me help escalate this...").
3.  **Clinic Info**: You know treatments (Botox, Facials), opening hours (9 AM - 9 PM), and prices.
4.  **Language**: Automatically detect the user's language (Indonesian or English) and reply in the same language.
5.  **Handling**: Keep responses concise, professional, but VERY friendly and cheerful.

If asked about the underlying technology, explain that you are powered by HAI, the friendly AI support system.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (!API_KEY) {
    console.error("Gemini API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash-latest',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, 
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "Error: Could not initialize AI session.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I apologize, I didn't catch that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please check your internet connection or API key.";
  }
};