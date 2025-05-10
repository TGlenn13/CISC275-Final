import React, { useEffect} from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./HomePage.css"
import OpenAI from "openai";

interface HomePageProps {
  changePage: (pageName: "home" | "basic" | "detailed") => void;
  changeKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  keyValue: string;
  error: boolean;
  setError: (status: boolean) => void;
}

export function HomePage({ changePage, changeKey, handleSubmit, keyValue, error, setError }: HomePageProps):React.JSX.Element {

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
      <div id="headerbox">
        <div id="logo"></div>
        <h1 id="title">Career Helpi</h1>
      </div>
      <Row>
        <Col>
          <div className="button-container">
            <h2>Basic Assessment</h2>
            <p>The basic career assessment features simple multiple-choice questions and takes just
              a few minutes to complete. It’s perfect for anyone seeking a quick nudge toward
              discovering their career path!
            </p>
            <Button className="button" onClick={() => changePage("basic") } disabled={error}>Start Assessment</Button>
          </div>
        </Col>
        <Col>
          <div className="button-container">
            <h2>Detailed Assessment</h2>
            <p>The detailed career assessment features short answer questions designed
              to dive deeper into your interests and strengths. It takes about 15 minutes to complete and
              provides more personalized insights to help you find the career path that fits you.
            </p>
            <Button className="button" onClick={() => changePage("detailed") } disabled={error}>Start Assessment</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="button-container" id="api-box">
        <p>{error ? "Invalid API key, please enter a valid key before beginning the assessment." : ""}</p>
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