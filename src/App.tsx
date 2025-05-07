import React, { useState } from 'react';
import {HomePage} from './pages/HomePage';
import { BasicPage } from './pages/BasicPage';
import { DetailedPage } from './pages/DetailedPage';
import {Header} from "./elements/Header";
import {Footer} from "./elements/Footer";
import { ResultsPage } from './pages/ResultsPage';
import "./App.css"

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [quizResponses, setQuizResponses] = useState<string>("");
  const [APIError, setAPIError] = useState<boolean>(true);
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<string>("home"); //routes user to the right page, defaulting to home page
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  function changePage(pageName:string){
    setPage(pageName);
  }
  
  function getPage(page: string) {
    if (page === "home") {
      return(<HomePage changePage={changePage} changeKey={changeKey} handleSubmit={handleSubmit} keyValue={key} error={APIError} setError={setAPIError}></HomePage>);
    } else if (page === "basic") {
      return(<BasicPage changePage={changePage} setQuizResponses={setQuizResponses}></BasicPage>);
    } else if (page === "detailed") {
      return(<DetailedPage changePage={changePage} setQuizResponses={setQuizResponses}></DetailedPage>);
    } else if (page === "results") {
      return(<ResultsPage quizResponses={quizResponses}></ResultsPage>);
    } else {
      return(<div>Invalid Page</div>);
    }
  }

  return(
    <div className="App">
        <Header changePage={changePage} error={APIError}></Header>
        {getPage(page)}
    <Footer/>
    </div>
  )
}
export default App;
