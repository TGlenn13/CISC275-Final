import React from "react";
import { Form } from "react-bootstrap";

interface Props {
    question: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }

  export function ShortAnswerQuestion({ question, name, value, onChange }: Props): React.JSX.Element {
    return (
      <Form.Group controlId={name} style={{ marginBottom: '1rem' }}>
        <Form.Label>{question}</Form.Label>
        <Form.Control
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          style={{ width: '400px', height: '40px' }}
        />
      </Form.Group>
    );
  }