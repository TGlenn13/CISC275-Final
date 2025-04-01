import React from "react";
import { Row, Col } from "react-bootstrap";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";

export function BasicQuiz(): React.JSX.Element {
    return (
        <div>
            <Row>
                <Col><MultipleChoiceQuestion question={"q1"} options={["a1","a2"]}></MultipleChoiceQuestion></Col>
                <Col><MultipleChoiceQuestion question={"q2"} options={["a1","a2","a3"]}></MultipleChoiceQuestion></Col>
            </Row>
        </div>
    )
}