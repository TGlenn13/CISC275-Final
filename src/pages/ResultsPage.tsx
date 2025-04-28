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
                    Provide output in this exact JSON format and breifly explain why the user has choose these careers:
                    {
                        "summary": "Brief overview of user's career profile.",
                        "recommendedCareers": ["Career 1 - and a paragraph describing the job and why the user would fit into it", 
                        "Career 2 - and a paragraph describing the job and why the user would fit into it", 
                        "Career 3 - and a paragraph describing the job and why the user would fit into it"],
                        "strengths": ["Strength 1 - and how you decided this", "Strength 2 - and how you decided this"],
                        "areasForImprovement": ["Improvement 1 - and how you decided this", "Improvement 2 - and how you decided this"]
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
        <h1 className="text-4xl font-semibold mb-4">Career Assessment Results</h1>
        <button onClick={async () => await prompt(quizResponses)}>prompt</button>

        {loading ? (
            <p style={{ color: "#6B7280", fontSize: "18px" }}>
            Loading...
        </p>
    ) : (
        result.summary && (
            <div style={{ fontSize: "18px" }}>
                <h2 style={{ fontSize: "30px", fontWeight: "600", marginBottom: "1rem" }}>
                    Summary
                </h2>
                <p style={{ fontSize: "20px", marginBottom: "1.5rem" }}>
                    {result.summary}
                </p>

                <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "0.5rem" }}>
                    Recommended Careers
                </h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                    {result.recommendedCareers?.map((career, idx) => (
                        <li key={idx}>{career}</li>
                    ))}
                </ul>

                <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "0.5rem" }}>
                    Strengths
                </h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                    {result.strengths?.map((strength, idx) => (
                        <li key={idx}>{strength}</li>
                    ))}
                </ul>

                <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "0.5rem" }}>
                    Areas for Improvement
                </h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
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