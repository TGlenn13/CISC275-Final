import { Form } from "react-bootstrap"
import "./MultipleChoiceQuestion.css"

export function MultipleChoiceQuestion({question, options, selectedAnswer, onAnswerChange}: 
    {
        question: string, options: string[], selectedAnswer: string, onAnswerChange: (answer: string) => void
    }):React.JSX.Element {


    return (
        <div id="mcqbox">
            {question}
            {options.map((option: string): React.JSX.Element => {
                return <Form.Check
                    type="radio"
                    name={question}
                    onChange={() => {
                        onAnswerChange(option);
                    }}
                    id={"option-" + option}
                    value={option}
                    checked={selectedAnswer === option}
                    label={option}
                />
            })}
        </div>
    );
}
