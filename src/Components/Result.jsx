import './Result.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ result }) => {
    const navigate = useNavigate();
    function reStart(){
        navigate('/');
    }
  return (
    <div className="box">
      <p>Your Score: {result}/17</p>
      <button style={{backgroundColor:'green',}} onClick={reStart}>Restart</button>
    </div>
  );
};

export default Result;
