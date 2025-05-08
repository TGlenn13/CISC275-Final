import  React, {useState, useEffect} from "react";
import OpenAI from "openai";
import "./ResultsPage.css";
import type { ChatCompletion } from "openai/resources/chat/completions";
import throbber from "../assets/Eclipse@1x-1.0s-200px-200px.svg";

interface Result {
    summary?: string;
    recommendedCareers?: string[];
    strengths?: string[];
    areasForImprovement?: string[];
}

export function ResultsPage({quizResponses}: {quizResponses: string}): React.JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<Result | null>({});
    const [error, setError] = useState<string>("");
      

    // Run once on mount
    useEffect(() => {
        const key = JSON.parse(localStorage.getItem("MYKEY") || "");
        if (key) {
            const client = new OpenAI({apiKey: key ?? undefined, dangerouslyAllowBrowser: true});
            prompt(client, quizResponses);
        }
    }, [quizResponses]);

    async function prompt(client: OpenAI, quizResults: string) {
        console.log("prompting");
        
        setLoading(true);
        try {
            const completion: ChatCompletion =
                await client.chat.completions.create({
                    model: "gpt-4.1-nano",
                    messages: [
                        {
                            role: "user",
                            content: `Generate a concise, structured report of recommended careers based on the following questionnaire responses. For each section, list no less than 3 items and no more than 5 items.
                        For each career, write a paragraph detailing what the user can excpect if they were to choose this job, the average salary, and how the user would fit well into the job.    
                        Provide output in this exact JSON format and breifly explain with atleast 3 sentences why the user should choose these careers:
                        {
                            "summary": "Brief overview of user's career profile.",
                            "recommendedCareers": ["Career 1 + paragraph", Career 2 + paragraph", "Career 3 + paragraph],
                            "strengths": ["Strength 1 - and how you decided this", "Strength 2 - and how you decided this", "more strengths if applicable"],
                            "areasForImprovement": ["Improvement 1 - and how this would benefit the user in their specified career", "Improvement 2 - and how this would benefit the user in their specified career", "more improvements if applicable"]
                        }
                        Responses:\n${quizResults}`,
                        },
                    ],
                });
            const response: string | null = completion.choices[0].message.content;
            setResult(response ? JSON.parse(response) : {});
        }
        catch (error) {
            console.error(error);
            if (error instanceof OpenAI.APIError && error.status === 401) {
                setResult(null);
                setError("Invalid API key. Please enter a valid key and try again.");
            } else {
                setResult(null);
                setError("Report generation failed. Please try again.");
            }
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className='ResultsPage'>
            <div className='TextBox'>
                <h1 className="text-4xl font-semibold mb-4">Career Assessment Results</h1>


                {/* check if loading */
                loading ? (
                    <div>
                        <p style={{fontSize: "18px"}}>Generating your report...</p>
                        <img src={throbber} alt="Loading animation"/>
                    </div>
                /* check if result is valid */
                ) : result !== null ? (
                    result.summary && (
                        <div className="Text">
                            <h2 className="Header">
                                Summary
                            </h2>
                            <p>
                                {result.summary}
                            </p>

                            <h3 className="Header">
                                Recommended Careers
                            </h3>
                            <ul className="List">
                                {result.recommendedCareers?.map((career, idx) => (
                                    <li key={idx}>{career}</li>
                                ))}
                            </ul>

                            <h3 className="Header">
                                Strengths
                            </h3>
                            <ul className="List">
                                {result.strengths?.map((strength, idx) => (
                                    <li key={idx}>{strength}</li>
                                ))}
                            </ul>

                            <h3 className="Header">
                                Areas for Improvement
                            </h3>
                            <ul className="List" style={{marginBottom: "0rem"}}>
                                {result.areasForImprovement?.map((area, idx) => (
                                    <li key={idx}>{area}</li>
                                ))}
                            </ul>
                        </div>
                    )
                    /* display error for invalid result */
                ) : 
                <p>{error}</p>
                }
            </div>
        </div>
    )
}