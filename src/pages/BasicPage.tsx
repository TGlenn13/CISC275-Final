import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { MultipleChoiceQuestion } from "../basic-quiz-components/MultipleChoiceQuestion";

interface BasicPageProps{
    changePage: (pageName: "home" | "basic") => void;
}

export function BasicPage({changePage}:BasicPageProps): React.JSX.Element{
    return(
    <div>
        <div>
            <Row>
                <Col>
                    <MultipleChoiceQuestion question={"Question 1"} options={["Answer 1","Answer 2","Answer 3","Answer 4"]}></MultipleChoiceQuestion>
                    <MultipleChoiceQuestion question={"Question 3"} options={["Answer 1","Answer 2","Answer 3"]}></MultipleChoiceQuestion>
                </Col>
                <Col>
                    <MultipleChoiceQuestion question={"Question 2"} options={["Answer 1","Answer 2","Answer 3","Answer 4"]}></MultipleChoiceQuestion>
                    <MultipleChoiceQuestion question={"Question 4"} options={["Answer 1","Answer 2","Answer 3","Answer 4"]}></MultipleChoiceQuestion>
                </Col>
            </Row>
        </div>
        <Button onClick={() => changePage("home")}>go back</Button>
    </div>
    )
}