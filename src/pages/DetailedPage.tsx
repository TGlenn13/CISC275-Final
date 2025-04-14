import React, { useState} from "react";
import { Button } from "react-bootstrap";
import { QuizProgressBar } from "../quiz-components/ProgressBar";

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
        <div>
          <label>What are your strengths?</label><br />
          <input
            name="strengths"
            value={formData.strengths}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>What kind of careers interest you?</label><br />
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>What is your preferred work environment?</label><br />
          <input
            type="text"
            name="workEnvironment"
            value={formData.workEnvironment}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
