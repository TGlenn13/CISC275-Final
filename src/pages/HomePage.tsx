import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../logo.svg";

interface HomePageProps {
  changePage: (pageName: "home" | "basic") => void;
  changeKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  keyValue: string;
}

const HomePage: React.FC<HomePageProps> = ({ changePage, changeKey, handleSubmit, keyValue }) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Thomas Glenn, Magnus Culley, Benjamin Wootten</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" value={keyValue} onChange={changeKey} />
        <br />
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <Button onClick={() => changePage("basic")}>Basic Career Assessment</Button>
    </div>
  );
};

export default HomePage;