import React, { useState } from "react";
import { Form } from "react-bootstrap"

export function MultipleChoiceQuestion({question, options, addProgress}: {question: string, options: string[], addProgress: () => void}): React.JSX.Element {
    const [chosenOption, setChosenOption] = useState<string>("");
    
    function updateProgress() {
        // Check if no radio button is selected and add 1 to progress if true
        if (!options.some((option: string): boolean => option===chosenOption)) {
            addProgress();
        }
    }
    return (
        <div>
            {question}
            {options.map((option: string): React.JSX.Element => {
                return <Form.Check
                    type="radio"
                    name={question}
                    onChange={() => {
                        setChosenOption(option);
                        updateProgress();
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
