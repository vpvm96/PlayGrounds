import React, { useState } from 'react';
import Data from './data.js';

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
  </div>
  );
};

export default Content;