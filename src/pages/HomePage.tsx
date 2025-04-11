import React from "react";
import '../App.css';
import { Button, Form, Row, Col } from "react-bootstrap";
import "./HomePage.css"

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
      <div className="row-container">
      <Row>
        <Col>
          <div className="button-container">
            <p>The basic career assessment features simple multiple-choice questions and takes just
              a few minutes to complete. It’s perfect for anyone seeking a quick nudge toward
              discovering their career path!
            </p>
            <Button className="button" onClick={() => changePage("basic")}>Basic Career Assessment</Button>
          </div>
        </Col>
        <Col>
          <div className="button-container">
            <p>The detailed career assessment features short answer questions designed
              to dive deeper into your interests and strengths. It takes about 15 minutes to complete and
              provides more personalized insights to help you find the career path that fits you.
            </p>
            <Button className="button" onClick={() => changePage("detailed")}>Detailed Career Assessment</Button>
          </div>
        </Col>
      </Row>
      </div>
      <div className="footer">
      <Form className="api-input">
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" value={keyValue} onChange={changeKey} />
        <br />
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
}