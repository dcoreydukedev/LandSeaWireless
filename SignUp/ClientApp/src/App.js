import React, { Component } from 'react';
import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react';

export default class App extends Component {

    render() {
        return (
            <Container textAlign='center'>
                <MainForm />
            </Container>)
    }
}

