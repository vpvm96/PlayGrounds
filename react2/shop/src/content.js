import React, { useState } from 'react';
import Data from './data.js';
import axios from 'axios';

function Content () {

  let [shoes, shoes변경] = useState(Data);

  return (
  <div className ='container'>
      <div className ='row'>
          {shoes.map((sho, i) => {
            return(
              <div className ='col-md-4' key={i}>
                <img src= { sho.url } width ='100%'></img>
                <h4> { sho.title }</h4>
                <p>{ sho.content } & { sho.price }</p>
              </div>
            );
          })} 
      </div>
      
      <button className ='btn btn-primary' onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{ 
          console.log(result.data[0].url)
          shoes변경( [...shoes, ...result.data ] );
        })
        .catch(()=>{        
          console.log('실패했어요')
        })      
        }}>더보기</button>

  </div>
  );
};

export default Content;