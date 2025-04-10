import React, { useState} from "react";
import { ShortAnswerQuestion } from "../quiz-components/ShortAnswerQuestion";

export function DetailedPage(): React.JSX.Element {
  const [formData, setFormData] = useState({
    strengths: '',
    interests: '',
    workEnvironment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <div>
      <h1>Detailed Career Assessment</h1>
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

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          Responses submitted!
        </div>
      )}
    </div>
  );
}
