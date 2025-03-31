import React from "react";

export function MultipleChoiceQuestion({question, options}: {question: string, options: string[]}): React.JSX.Element {
    return (
        <div>
            {question}
            {options.map((option: string): React.JSX.Element => {
                return <div>{option}</div>
            })}
        </div>
    );
}
