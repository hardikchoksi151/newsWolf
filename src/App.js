import './App.css';
import Navbar from './Components/Navbar';
import React from 'react'
import News from './Components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App = () => {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress}/>
          <Switch><Route exact path="/"><News apiKey={apiKey}setProgress={setProgress} pageSize={10} county="in" category="general" /></Route></Switch>
          <Switch><Route exact path="/science"><News apiKey={apiKey}setProgress={setProgress} pageSize={10} county="in" category="science" /></Route></Switch>
          <Switch><Route exact path="/business"><News apiKey={apiKey}setProgress={setProgress} pageSize={10} county="in" category="business" /></Route></Switch>
          <Switch><Route exact path="/entertainment"><News apiKey={apiKey}setProgress={setProgress} headin pageSize={10} county="in" category="entertainment" /></Route></Switch>
          <Switch><Route exact path="/health"><News apiKey={apiKey}setProgress={setProgress} pageSize={10} county="in" category="health" /></Route></Switch>
          <Switch><Route exact path="/sports"><News apiKey={apiKey}setProgress={setProgress} pageSize={10} county="in" category="sports" /></Route></Switch>
          <Switch><Route exact path="/technology"><News apiKey={apiKey}setProgress={setProgress} pageSize={10} county="in" category="technology" /></Route></Switch>
        </Router>
      </div>
    );
}

export default App;