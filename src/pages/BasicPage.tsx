import  React, { useState } from "react";
import { Row, Col, Button} from "react-bootstrap";
import { MultipleChoiceQuestion } from "../quiz-components/MultipleChoiceQuestion";
import {QuizProgressBar} from "../quiz-components/ProgressBar";

export function BasicPage(): React.JSX.Element{
    const [progress, setProgress] = useState<number>(0);

    const addProgress = () => {setProgress(progress+1)}

    return(
    <div>
        <h1>Basic Career Assessment</h1>
        <QuizProgressBar progress={progress}></QuizProgressBar>
        <br></br>
        <div>
            <Row>
                <Col>
                    <MultipleChoiceQuestion
                        question={"1. Which activity sounds the most enjoyable to you?"}
                        options={[
                            "Solving puzzles or analyzing data",
                            "Creating art, music, or writing stories",
                            "Helping people solve personal or emotional problems",
                            "Building or repairing things with your hands",
                            "Leading a team or organizing an event"
                            ]}
                        addProgress={addProgress}></MultipleChoiceQuestion>
                    <br></br>
                    <MultipleChoiceQuestion 
                        question={"3. What type of environment do you prefer to work in?"}
                        options={[
                            "Quiet, focused, and independent",
                            "Dynamic, expressive, and collaborative",
                            "Supportive and empathetic",
                            "Hands-on, physical, and practical",
                            "Fast-paced, strategic, and goal-oriented"
                            ]}
                        addProgress={addProgress}></MultipleChoiceQuestion>
                    <br></br>
                    <MultipleChoiceQuestion 
                        question={"5. Which school subject did you (or do you) enjoy the most?"}
                        options={[
                            "Math or Science",
                            "Art, Literature, or Music",
                            "Psychology or Social Studies",
                            "Woodshop, Engineering, or Home Economics",
                            "Business or Economics"
                            ]}
                        addProgress={addProgress}></MultipleChoiceQuestion>
                    <br></br>
                    <MultipleChoiceQuestion
                        question={"7. What motivates you most in a career?"}
                        options={[
                            "Solving complex problems and discovering new things",
                            "Expressing myself and inspiring others",
                            "Making a positive difference in people’s lives",
                            "Creating tangible results with my work",
                            "Achieving success and recognition"
                            ]}
                        addProgress={addProgress}></MultipleChoiceQuestion>
                    <br></br>
                </Col>


                <Col>
                <MultipleChoiceQuestion 
                        question={"2. How do you typically make decisions?"}
                        options={[
                            "Based on logic, facts, and data",
                            "Through creativity and intuition",
                            "By considering others' feelings and needs",
                            "From experience and practicality",
                            "Strategically and with long-term goals in mind"
                            ]}
                        addProgress={addProgress}></MultipleChoiceQuestion>
                    <br></br>
                    <MultipleChoiceQuestion 
                        question={"4. What kind of tasks do you find most satisfying?"}
                        options={[
                            "Researching, investigating, or experimenting",
                            "Designing, writing, or performing",
                            "Listening, counseling, or caring for others",
                            "Assembling, fixing, or operating tools or machinery",
                            "Planning, negotiating, or managing"
                            ]}
                        addProgress={addProgress}></MultipleChoiceQuestion>
                    <br></br>
                    <MultipleChoiceQuestion 
                        question={"6. How would your friends describe you?"}
                        options={[
                            "Analytical and thoughtful",
                            "Imaginative and expressive",
                            "Empathetic and supportive",
                            "Resourceful and hands-on",
                            "Ambitious and persuasive"
                            ]}
                        addProgress={addProgress}></MultipleChoiceQuestion>
                    <br></br>
                    <MultipleChoiceQuestion 
                        question={"8. What do you value most in a job?"}
                        options={[
                            "Intellectual challenge",
                            "Creative freedom",
                            "Human connection",
                            "Practical skills and independence",
                            "Financial success and leadership opportunities"
                            ]}
                        addProgress={addProgress}></MultipleChoiceQuestion>
                    <br></br>
                    <Button disabled={progress!==8} onClick={() => console.log("submitted")}>Submit</Button>
                </Col>
            </Row>
        </div>
    </div>
    )
}