import React from 'react';
import MainForm from './components/MainForm';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from './logo.svg';
import './App.css';


function App() {
  return <Container fluid = {true} className="wrapper app-wrapper">
    <Container className="header">
      <Image src={logo} className="logo" alt="logo" />
      <a
        className="link"
        href="https://landseawireless.com"
        target="_self"
        rel="noopener noreferrer"
      >
         Go Back
      </a>
    </Container>
    <MainForm />
  </Container>;
}

export default App;
