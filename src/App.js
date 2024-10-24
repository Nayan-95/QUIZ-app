import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './Components/Page.jsx';
import Result from './Components/Result.jsx';

function App() {
  const[result,setResult]=useState(0);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Page setResult={setResult}/>
            }
          />
          <Route
            path="/result"
            element={
              <Result result={result}/>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
