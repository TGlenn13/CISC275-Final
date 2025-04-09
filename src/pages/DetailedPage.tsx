import React, { useState } from 'react';


export function DetailedPage(): React.JSX.Element {
  const [formData, setFormData] = useState({
    strengths: '',
    interests: '',
    workEnvironment: '',
  });
  const [submitted, setSubmitted] = useState(false);

    

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
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Detailed Career Assessment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What are your strengths?</label><br />
          <input
            type="text"
            name="strengths"
            style={{ width: '400px', height: '40px' }}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>What kind of careers interest you?</label><br />
          <input
            type="text"
            name="interests"
            style={{ width: '400px', height: '40px' }}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>What is your preferred work environment?</label><br />
          <input
            type="text"
            name="workEnvironment"
            style={{ width: '400px', height: '40px' }}
            onChange={handleChange}
          />
        </div>

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
