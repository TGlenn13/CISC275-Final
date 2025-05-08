import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap"
import "./QuestionPage.css"

export interface Question {
    question: string;
    selectedAnswer: string;
    onAnswerChange: (answer: string) => void;
}

export function QuestionPage<Question>(
        {questionGroups, renderQuestion}:
        {
            questionGroups: Question[][],
            renderQuestion: (question: Question, index: number) => React.JSX.Element
        }
    ): React.JSX.Element {
    /* questionGroups is a 2d array of questions, grouped into 4 for each page
    renderQuestion is a function that knows how to render a particular question type, allowing this
    component to be used for multiple question types*/
    const [pageNum, setPageNum] = useState<number>(0);

    const currentPage=questionGroups[pageNum];

    return (
        <div>
            <Row className="qrow">
                <Col >{renderQuestion(currentPage[0], 0)}</Col>
                <Col>{renderQuestion(currentPage[1], 1)}</Col>
            </Row>
            <Row className="qrow">
                <Col>{renderQuestion(currentPage[2], 2)}</Col>
                <Col >{renderQuestion(currentPage[3], 3)}</Col>
            </Row>
            <Row>
            <Col id="backcol">
            <Button  className="quizbutton" id="back" disabled={pageNum <= 0} onClick={() => setPageNum(pageNum-1)}>Back</Button>
            </Col>
            <Col id ="nextcol">
            <Button className="quizbutton" id="next" disabled={pageNum >= questionGroups.length-1} onClick={() => setPageNum(pageNum+1)}>Next</Button>
            </Col>
            </Row>
        </div>
    );
} 