import { ProgressBar } from "react-bootstrap"

export function QuizProgressBar({progress}: {progress:number}): React.JSX.Element {
    if (progress===8){ // Need to update if amount of questions change
        return(
            <ProgressBar now={progress} max={8} min={0} variant="success"></ProgressBar>
        )
    }
    return (
        <ProgressBar now={progress} max={8} min={0}></ProgressBar>
    );
}
