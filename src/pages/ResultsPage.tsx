import  React, {useState, useEffect} from "react";
import OpenAI from "openai";
import type { ChatCompletion } from "openai/resources/chat/completions";

export function ResultsPage({quizResponses}: {quizResponses: string}): React.JSX.Element {
    const [client, setClient] = useState<OpenAI | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<{
        summary?: string;
        recommendedCareers?: string[];
        strengths?: string[];
        areasForImprovement?: string[];
      }>({});
      

    // Run once on mount
    useEffect(() => {updateKey();}, []);

    function updateKey() {
        const key = JSON.parse(localStorage.getItem("MYKEY") || "");
        if (key) setClient(new OpenAI({apiKey: key ?? undefined, dangerouslyAllowBrowser: true}));
    }

    async function prompt(quizResults: string) {
        if (!client) throw new Error("API key invalid");
        console.log(client.apiKey);
        
        setLoading(true);
        const completion: ChatCompletion =
            await client.chat.completions.create({
                model: "gpt-4.1-nano",
                messages: [
                    {
                        role: "user",
                        content: `Generate a concise, structured report of recommended careers based on the following questionnaire responses. For each section, list no less than 3 items and no more than 5 items.
                    Provide output in this exact JSON format:
                    {
                        "summary": "Brief overview of user's career profile.",
                        "recommendedCareers": ["Career 1", "Career 2", "Career 3"],
                        "strengths": ["Strength 1", "Strength 2"],
                        "areasForImprovement": ["Improvement 1", "Improvement 2"]
                    }
                    Responses:\n${quizResults}`,
                    },
                ],
            });
            const response = completion.choices[0].message.content;
            setLoading(false);
            setResult(response ? JSON.parse(response) : {});
    }
    return (
    <div>
        <h1 className="text-2xl font-semibold mb-4">Career Assessment Results</h1>
        <button onClick={async () => await prompt(quizResponses)}>prompt</button>

        {loading ? (
            <p className="text-gray-500">Loading...</p>
        ) : (
            result.summary && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Summary</h2>
                    <p className="mb-4">{result.summary}</p>

                    <h3 className="text-lg font-semibold">Recommended Careers</h3>
                    <ul className="list-disc ml-5 mb-4">
                        {result.recommendedCareers?.map((career, idx) => (
                            <li key={idx}>{career}</li>
                        ))}
                    </ul>

                    <h3 className="text-lg font-semibold">Strengths</h3>
                    <ul className="list-disc ml-5 mb-4">
                        {result.strengths?.map((strength, idx) => (
                            <li key={idx}>{strength}</li>
                        ))}
                    </ul>

                    <h3 className="text-lg font-semibold">Areas for Improvement</h3>
                    <ul className="list-disc ml-5">
                        {result.areasForImprovement?.map((area, idx) => (
                            <li key={idx}>{area}</li>
                        ))}
                    </ul>
                </div>
            )
        )}
    </div>
    )
}