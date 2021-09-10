import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './App.css';
import Content from './content.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Edit Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
          <Nav.Link> <Link to='/detail'>Detail</Link></Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Switch>

      <Route exact path='/'>
      <div className ="background">
        <h1>20% Season Off</h1>
        <p>This is a have a All type design greate Edit Shop! </p>
        <p>
        <button type="button" class="btn btn-primary">Primary</button>
        </p>
      </div>

      <div>      
      <Content/>
      </div>
      
      </Route>
      
      
      
      <Route path='/detail'>
        <Detail/>
      </Route>

      <Route path='/:id'>
        <div>아무거나적었을때 이거 보여주셈</div>
      </Route>

    </Switch>
      
    </div>    
  );
}

export default App;
