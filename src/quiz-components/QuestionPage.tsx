import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap"

export function QuestionPage({pages}: {pages:React.JSX.Element[][]}): React.JSX.Element {
    /* pages is a 2d array of React.JSX.Elements, each of which is a question. The inner array
    formats questions into groups, each of which is a page. The outer array represents the set of
    all pages in the quiz*/
    const [pageNum, setPageNum] = useState<number>(0);


    // Formats sets of 4 questions from into rows and columns, creating a page element
    const formatted: React.JSX.Element[] = pages.map((page: React.JSX.Element[]) => {
        return(
            <Row>
                <Col>{page[0]}{page[2]}</Col>
                <Col>{page[1]}{page[3]}</Col>
            </Row>
        )
    })

    return (
        <div>
            {formatted[pageNum]}
            <Button disabled={pageNum <= 0} onClick={() => setPageNum(pageNum-1)}>Prev</Button>
            <Button disabled={pageNum >= formatted.length-1} onClick={() => setPageNum(pageNum+1)}>Next</Button>
        </div>
    );
}