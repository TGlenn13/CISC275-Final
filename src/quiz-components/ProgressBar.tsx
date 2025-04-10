import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap"

export function QuizProgressBar({progress, barMax}: {progress:number, barMax:number}): React.JSX.Element {
    return (
        <ProgressBar now={progress} max={barMax} min={0}></ProgressBar>
    );
}
