import React, { useState, useEffect} from "react";
import { ShortAnswerQuestion } from "../quiz-components/ShortAnswerQuestion";
import { Button } from "react-bootstrap";
import { QuizProgressBar } from "../quiz-components/ProgressBar";

export function DetailedPage(): React.JSX.Element {
  const [formData, setFormData] = useState({
    strengths: '',
    interests: '',
    workEnvironment: '',
  });
  const [progress, setProgress] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProgress(progress + 1);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Responses:', formData);
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);


  return (
    <div>
      <h1>Detailed Career Assessment</h1>
      <QuizProgressBar progress={progress}></QuizProgressBar>
      <form onSubmit={handleSubmit}>
        <ShortAnswerQuestion
          question="What are your strengths?"
          name="strengths"
          value={formData.strengths}
          onChange={handleChange}
        />
        <ShortAnswerQuestion
          question="What kind of careers interest you?"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
        <ShortAnswerQuestion
          question="What is your preferred work environment?"
          name="workEnvironment"
          value={formData.workEnvironment}
          onChange={handleChange}
        />

        <Button type="submit"onClick={() => console.log("submitted")}>Submit</Button>
      </form>
      {submitted && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          Responses submitted!
        </div>
      )}
    </div>
  );
}
