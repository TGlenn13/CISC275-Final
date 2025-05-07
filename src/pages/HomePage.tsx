import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./HomePage.css"
import OpenAI from "openai";

interface HomePageProps {
  changePage: (pageName: "home" | "basic" | "detailed") => void;
  changeKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  keyValue: string;
}

export function HomePage({ changePage, changeKey, handleSubmit, keyValue }: HomePageProps):React.JSX.Element {
  const [error, setError] = useState<boolean>(true);

  async function testKey() {
    const key = JSON.parse(localStorage.getItem("MYKEY") || "");
    if (key) {
      const client = new OpenAI({apiKey: key ?? undefined, dangerouslyAllowBrowser: true});
      try {
        await client.models.list();
        setError(false);
      } catch (error) {
        if (error instanceof OpenAI.APIError && error.status === 401) {
          setError(true);
        }
      }
    }
  }

  useEffect(() => {
    testKey();
  })

  return (
    <div className="HomePage">
      <h1 id="header">Career Helpi</h1>
      <Row>
        <Col>
          <div className="button-container">
            <p>The basic career assessment features simple multiple-choice questions and takes just
              a few minutes to complete. It’s perfect for anyone seeking a quick nudge toward
              discovering their career path!
            </p>
            <Button className="button" onClick={() => changePage("basic") } disabled={error}>Basic Career Assessment</Button>
          </div>
        </Col>
        <Col>
          <div className="button-container">
            <p>The detailed career assessment features short answer questions designed
              to dive deeper into your interests and strengths. It takes about 15 minutes to complete and
              provides more personalized insights to help you find the career path that fits you.
            </p>
            <Button className="button" onClick={() => changePage("detailed") } disabled={error}>Detailed Career Assessment</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <p>{error ? "Invalid API key, please try again." : ""}</p>
        <div className="button-container" id="api-box">
          <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control type="password" placeholder="Insert API Key Here" value={keyValue} onChange={changeKey} />
            <br />
            <Button className="button" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </Row>
    </div>
  );
}