import React, { Component } from 'react';
import MainForm from './components/MainForm';
import { Container, Row } from 'reactstrap';

export default class App extends Component {

    render() {
        return (
            <Container fluid={true}>
                <Container row>
                    <MainForm />
                </Container>                
            </Container>
        )
    }
}

