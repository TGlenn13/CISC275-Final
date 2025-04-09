import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap"

export function QuizProgressBar({progress}: {progress:number}): React.JSX.Element {
    return (
        <ProgressBar now={progress} max={8} min={0}></ProgressBar>
    );
}
