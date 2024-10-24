import React, { useState } from 'react';
import './Page.css';
import { useNavigate } from 'react-router-dom';

import { data } from '../Data/Data.js';

const Page = ({ setResult }) => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [checkedOption, setCheckedOption] = useState('');

  function handleCheckboxChange(option) {
    setCheckedOption(option);
    
    if (data[index].correct === option) {
      setScore(score + 1);
    }
  }

  function nextCall() {
    if (index + 1 === data.length) {
      setResult(score);
      navigate('/result');
    } else {

      setIndex(index + 1);
      setCheckedOption('');  
    }
  }

  function prevCall() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="Page">
      <div className="ques">
        {data[index].question}
      </div>
      <div className="ans">
        <div>
          <input
            type="checkbox"
            checked={checkedOption === 'a'}
            onChange={() => handleCheckboxChange('a')}
          />
          <span>{data[index].a}</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={checkedOption === 'b'}
            onChange={() => handleCheckboxChange('b')}
          />
          <span>{data[index].b}</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={checkedOption === 'c'}
            onChange={() => handleCheckboxChange('c')}
          />
          <span>{data[index].c}</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={checkedOption === 'd'}
            onChange={() => handleCheckboxChange('d')}
          />
          <span>{data[index].d}</span>
        </div>
      </div>
      <div className="toggle">
        <button  onClick={prevCall}>Prev</button>
        <button onClick={nextCall}>Next</button>
      </div>
    </div>
  );
};

export default Page;
