import { ProgressBar } from "react-bootstrap"
import "./ProgressBar.css"

interface ProgressBarProps{
    questions:number;
    progress:number;
}
export function QuizProgressBar({progress,questions}:ProgressBarProps): React.JSX.Element {
    if (progress===questions){
        return(
            <ProgressBar className="progressbar" now={progress} max={questions} min={0} variant="success"></ProgressBar>
        )
    }
    return (
        <ProgressBar className = "progressbar" now={progress} max={questions} min={0}></ProgressBar>
    );
}
