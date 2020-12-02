import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import MainForm from './components/MainForm';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from './logo.svg';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft)

function App() {
  return <Container fluid = {true} className="wrapper app-wrapper">
    <Container className="header">
      <Image src={logo} className="logo" alt="logo" />
      <a
        className="link"
        href="https://landseawireless.com"
        target="_self"
        rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fas', 'arrow-left']} /> {' '}
          Go Back
      </a>
    </Container>
    <MainForm />
  </Container>;
}

export default App;
