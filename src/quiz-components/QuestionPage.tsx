import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap"
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";

interface Question {
    question: string;
    options: string[];
    selectedAnswer: string;
    onAnswerChange: (answer: string) => void;
}

export function QuestionPage({questionGroups}: {questionGroups: Question[][]}): React.JSX.Element {
    // questionGroups is a 2d array of questions, grouped into 4 for each page
    const [pageNum, setPageNum] = useState<number>(0);

    const currentPage=questionGroups[pageNum];

    return (
        <div>
            <Row>
                <Col><MultipleChoiceQuestion {...currentPage[0]}></MultipleChoiceQuestion></Col>
                <Col><MultipleChoiceQuestion {...currentPage[1]}></MultipleChoiceQuestion></Col>
            </Row>
            <Row>
                <Col><MultipleChoiceQuestion {...currentPage[2]}></MultipleChoiceQuestion></Col>
                <Col><MultipleChoiceQuestion {...currentPage[3]}></MultipleChoiceQuestion></Col>
            </Row>
            <Button disabled={pageNum <= 0} onClick={() => setPageNum(pageNum-1)}>Prev</Button>
            <Button disabled={pageNum >= questionGroups.length-1} onClick={() => setPageNum(pageNum+1)}>Next</Button>
        </div>
    );
}