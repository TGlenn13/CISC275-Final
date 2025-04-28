import  React, {useState, useEffect} from "react";
import OpenAI from "openai";
import type { ChatCompletion } from "openai/resources/chat/completions";

export function ResultsPage({quizResponses}: {quizResponses: string}): React.JSX.Element {
    //const [client, setClient] = useState<OpenAI | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<string>("");

    // Run once on mount
    useEffect(() => {
        const key = JSON.parse(localStorage.getItem("MYKEY") || "");
        if (key) {
            const client = new OpenAI({apiKey: key ?? undefined, dangerouslyAllowBrowser: true});
            prompt(client, quizResponses);
        }
    }, []);

    async function prompt(client: OpenAI, quizResults: string) {
        if (!client) throw new Error("API key invalid");
        console.log("prompting");
        
        setLoading(true);
        const completion: ChatCompletion =
            await client.chat.completions.create({
                model: "gpt-4.1-nano",
                messages: [
                    {
                        role: "user",
                        content: "Generate a report of recommended careers based on my answers to the following questiomnaire:\n" + quizResults,
                    },
                ],
            });
        const response: string | null = completion.choices[0].message.content;
        setLoading(false);
        setResult(response ? response : "");
    }

    return (
    <div>
        <h1>Results</h1>
        {loading ? "loading" : result}
    </div>
    )
}