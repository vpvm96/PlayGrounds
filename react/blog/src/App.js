import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    // state 는 직접 건들지 말것
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>;
      <div className='list'>
        <h3>
          {' '}
          {글제목[0]}{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{' '}
          {따봉}{' '}
        </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <div className='list'>
        <h3> {글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <div className='list'>
        <h3> {글제목[2]} </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
