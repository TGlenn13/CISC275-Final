import React, { useState} from "react";
import { Modal, Button } from "react-bootstrap";
import { QuizProgressBar } from "../quiz-components/ProgressBar";
import {unformattedDetailedQuestions } from '../quiz-components/DetailedQuestions';
import { Question } from "../quiz-components/QuestionPage";
import { QuestionPage } from "../quiz-components/QuestionPage"
import { QuestionResponse } from "./BasicPage";

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
    <div key={question.name}>
      <label>{question.question}</label>
      <br></br>

      <textarea
      name={question.name}
      value={formData[question.name as keyof typeof formData]}
      onChange={(e) => handleChange(question.name, e.target.value)}
      style={{ width: '500px', height: '75px' }}
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
    <div>
      <h1>Detailed Career Assessment</h1>
      <QuizProgressBar questions={8} progress={progress}></QuizProgressBar>
      <form onSubmit={handleSubmit}>
        <QuestionPage questionGroups={detailedQuestions} renderQuestion={renderQuestion}></QuestionPage>
        {}
        <Button disabled={progress < 8} type="submit">Submit</Button>
      </form>
      <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Submission Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your responses have been submitted!</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => changePage("results")}>
          Show Results
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}