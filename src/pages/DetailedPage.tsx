import React, { useState} from "react";
import { Modal, Button } from "react-bootstrap";
import { QuizProgressBar } from "../quiz-components/ProgressBar";
import {unformattedDetailedQuestions } from '../quiz-components/DetailedQuestions';
import { Question } from "../quiz-components/QuestionPage";
import { QuestionPage } from "../quiz-components/QuestionPage"
import { QuestionResponse } from "./BasicPage";
import "./DetailedPage.css"
import { SubmissionPopup } from "../quiz-components/SubmissionPopup";

interface FormData {
  strengths: string;
  interests: string;
  workEnvironment: string;
  preferredTasks: string;
  idealWork: string;
  role: string;
  skills: string;
  values: string;
}

export interface InitialShortAnswer {
  name: keyof FormData,
  question: string
}

interface ShortAnswerQuestion extends Question {
  name: keyof FormData
}

export function DetailedPage({changePage, setQuizResponses}:
  {changePage: (pageName:"results") => void, setQuizResponses: (responses: string) => void}): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    strengths: '',
    interests: '',
    workEnvironment: '',
    preferredTasks: '',
    idealWork: '',
    role: '',
    skills: '',
    values: ''
  });
  const [progress, setProgress] = useState<number>(0);
  const [show, setShow] = useState(false);

  // function written with assistance of chatGPT
  const handleChange = (name: keyof FormData, answer: string) => {
    setFormData(prev => {
      const currentAnswer = prev[name];
      if (currentAnswer === "") {
        setProgress(progress+1);
      } else {
        if (answer === "") {
          setProgress(progress-1);
        }
      }
      return {...prev, [name]: answer}
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShow(true);
    // Merge questions and user responses into array of QuestionResponses
    const responseArray: QuestionResponse[] = unformattedDetailedQuestions.map(
        (question: InitialShortAnswer) => ({
        question: question.question,
        response: formData[question.name],
    }))
    // Map QuestionResponses to strings, then join those strings with newlines
    const responseString: string = responseArray.map((response: QuestionResponse) => (
        response.question + "\nAnswer: " + response.response 
    )).join("\n\n")
    setQuizResponses(responseString);
  };

  const renderQuestion = (question: ShortAnswerQuestion) => 
    <div id="detailedbox" key={question.name}>
      <label>{question.question}</label>
      <br></br>
      <textarea id="text"
      rows={3}
      cols={20}
      name={question.name}
      value={formData[question.name as keyof typeof formData]}
      onChange={(e) => handleChange(question.name, e.target.value)}
      />
    </div>

  const detailedQuestions = [
    unformattedDetailedQuestions.slice(0, 4).map((question) => ({
        ...question,
        selectedAnswer: "",
        onAnswerChange: (answer: string) => handleChange(question.name, answer)
    })),
    unformattedDetailedQuestions.slice(4, 8).map((question) => ({
        ...question,
        selectedAnswer: "",
        onAnswerChange: (answer: string) => handleChange(question.name, answer)
    }))
];


  return (
    <div className="DetailedPage">
      <h1 className="hdr">Detailed Career Assessment</h1>
      <QuizProgressBar questions={8} progress={progress}></QuizProgressBar>
      <br></br>
      <form onSubmit={handleSubmit}>
        <QuestionPage questionGroups={detailedQuestions} renderQuestion={renderQuestion}></QuestionPage>
        {}
        <Button className="submit" disabled={progress < 8} type="submit">Submit</Button>
      </form>
      <SubmissionPopup show={show} setShow={setShow} changePage={changePage}></SubmissionPopup>
    </div>
  );
}