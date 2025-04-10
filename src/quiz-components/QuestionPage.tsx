import React, { useState } from "react";
import { Row, Col } from "react-bootstrap"

export function QuestionPage({pages}: {pages:React.JSX.Element[][]}): React.JSX.Element {
    return (
        <div>
            {pages.map((page: React.JSX.Element[]) => {
                return(
                    <Row>
                        <Col>{page[0]}{page[2]}</Col>
                        <Col>{page[1]}{page[3]}</Col>
                    </Row>
                )
            })}
        </div>
    );
}