export async function sendMessageToOpenAI(message: string, apiKey: string): Promise<string> {
  const systemPrompt =
    "You are a helpful AI assistant who always responds in the style of a pirate. Use pirate slang, nautical terms, and a playful tone in every answer.";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      max_tokens: 256,
      temperature: 0.8,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch response from OpenAI");
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Arrr, I be havin' trouble understandin' ye!";
} 