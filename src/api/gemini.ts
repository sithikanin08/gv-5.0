const API_KEY = "";

export const callGemini = async (userQuery: string, systemPrompt: string): Promise<string | undefined> => {
  let delay = 1000;
  for (let i = 0; i < 5; i++) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
          }),
        }
      );
      if (!response.ok) throw new Error("API call failed");
      const result = await response.json();
      return result.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (error) {
      if (i === 4) throw error;
      await new Promise((r) => setTimeout(r, delay));
      delay *= 2;
    }
  }
};
