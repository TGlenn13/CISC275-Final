import React, { useState } from 'react';
import { Button } from "react-bootstrap";

interface DetailedPageProps{
  changePage: (pageName: "home" | "basic") => void;
}

export function DetailedPage({changePage}: DetailedPageProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    strengths: '',
    interests: '',
    workEnvironment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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

        <button type="submit">Submit</button>
      </form>
        <Button onClick={() => changePage("home")}>go back</Button>
    </div>
  );
}
