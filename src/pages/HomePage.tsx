import React from "react";
import '../App.css';
import { Button, Form } from "react-bootstrap";

interface HomePageProps {
  changePage: (pageName: "home" | "basic" | "detailed") => void;
  changeKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  keyValue: string;
}

export function HomePage({ changePage, changeKey, handleSubmit, keyValue }: HomePageProps):React.JSX.Element {
  return (
    <div className="App">
      <h1>Career Helpi</h1>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" value={keyValue} onChange={changeKey} />
        <br />
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <Button onClick={() => changePage("basic")}>Basic Career Assessment</Button>
      <Button onClick={() => changePage("detailed")}>Detailed Career Assessment</Button>
    </div>
  );
}