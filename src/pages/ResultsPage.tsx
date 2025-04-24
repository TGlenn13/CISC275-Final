import  React, {useState, useEffect} from "react";
import OpenAI from "openai";
import type { ChatCompletion } from "openai/resources/chat/completions";

export function ResultsPage(): React.JSX.Element {
    const [client, setClient] = useState<OpenAI | null>(null);

    // Run once on mount
    useEffect(() => {updateKey();}, []);

    function updateKey() {
        const key = JSON.parse(localStorage.getItem("MYKEY") || "");
        if (key) setClient(new OpenAI({apiKey: key ?? undefined, dangerouslyAllowBrowser: true}));
    }

    async function prompt(): Promise<string> {
        if (!client) throw new Error("API key invalid");
        console.log(client.apiKey);

        const completion: ChatCompletion =
            await client.chat.completions.create({
                model: "gpt-4.1-nano",
                messages: [
                    {
                        role: "user",
                        content: "Write a one-sentence bedtime story about a unicorn.",
                    },
                ],
            });
        const response: string | null = completion.choices[0].message.content;
        return response ? response : "";
    }

    return (
    <div>
        <h1>Results</h1>
        <button onClick={async () => console.log(await prompt())}>prompt</button>
    </div>
    )
}