import React, { useState } from "react";
import { Form } from "react-bootstrap"

export function MultipleChoiceQuestion({question, options}: {question: string, options: string[]}): React.JSX.Element {
    const [chosenOption, setChosenOption] = useState<string>("");
    return (
        <div>
            {question}
            {options.map((option: string): React.JSX.Element => {
                return <Form.Check
                    type="radio"
                    name={question}
                    onChange={() => {
                        setChosenOption(option);
                    }}
                    id={"option-" + option}
                    value={option}
                    checked={chosenOption === option}
                    label={option}
                />
            })}
        </div>
    );
}
