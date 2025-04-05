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
            <p>The basic career assessment contains simple multiple choice questions and takes just
              a few minutes to complete. Great for people looking for a quick push in the right direction
              to finding their future careers!
            </p>
            <Button className="button" onClick={() => changePage("basic")}>Basic Career Assessment</Button>
          </div>
        </Col>
        <Col>
          <div className="button-container">
            <p>The detailed career assessment contains more in-depth short answer questions that
              may require some serious thinking. This quiz can take around 15 minutes to properly complete,
              but will give far more detailed results about what career is right for you!
            </p>
            <Button className="button" onClick={() => changePage("detailed")}>Detailed Career Assessment</Button>
          </div>
        </Col>
      </Row>
      </div>
      <Form className="api-input">
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" value={keyValue} onChange={changeKey} />
        <br />
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}