import React, { useState } from 'react';

export function DetailedAssessment(): React.JSX.Element {
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
    alert('Responses submitted!');
  };

  return (
    <div>
      <h1>Detailed Career Assessment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What are your strengths?</label><br />
          <textarea
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
    </div>
  );
}
