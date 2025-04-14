import React, { useState} from "react";
import { Button } from "react-bootstrap";
import { QuizProgressBar } from "../quiz-components/ProgressBar";
import {detailedQuestions} from '../quiz-components/DetailedQuestions';

export function DetailedPage(): React.JSX.Element {
  const [formData, setFormData] = useState({
    strengths: '',
    interests: '',
    workEnvironment: '',
  });
  const [progress, setProgress] = useState<number>(0);
  //const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let answer=e.target.value
    let question=e.target.name
    if(answer.toString().length===10){
      setProgress(progress + 1);
    }
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Responses:', formData);
  };

  return (
    <div>
      <h1>Detailed Career Assessment</h1>
      <QuizProgressBar questions={3} progress={progress}></QuizProgressBar>
      <form onSubmit={handleSubmit}>
      {detailedQuestions.map((question) => (
  <div key={question.name}>
    <label>{question.label}</label><br />
    <input
      type="text"
      name={question.name}
      onChange={handleChange}
    />
  </div>
))}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
