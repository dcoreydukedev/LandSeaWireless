// @ts-nocheck
import React from 'react';
import {Container} from 'reactstrap';


export const Wizard = (props) => {
    return(
        <Container className="wrapper wizard_wrapper">
            <Container className="container wizard_container">
                {props.children}
                </Container>            
        </Container>
    )
    
}

export const WizardStep = (props) => {
    return(
        <Container className="wrapper wizard_step_wrapper">
            <Container className="container wizard_step_container">
               <WizardStepTitle Title={props.Title} />
               <WizardStepInfo Header = {props.Header} Text = {props.Text}/>
               <WizardStepContent>
                   {props.children}
               </WizardStepContent>             
            </Container>
        </Container>
    )
    
}

export const WizardStepTitle = (props) => {
    return(
        <Container className="wrapper wizard_step_title_wrapper">
            <Container row className="container wizard_step_title_container">
            <h2 className="element wizard_step_title">
                {[props.Title]}
            </h2>
            </Container>
        </Container>
    )
    
}

export const WizardStepInfo = (props) => {
    return(
        <Container className="wrapper wizard_step_info_wrapper">
            <Container className="container wizard_step_info_container">
                <h2  className="element wizard_step_info_header">
                    {props.Header}
                </h2>
                <p id="wizard_step_info_p" className="element wizard_step_info_p">
                    {props.Text}
                </p>
            </Container>
        </Container>
    )
    
}

export const WizardStepContent = (props) => {
    return(
        <Container className="wrapper wizard_step_content_wrapper">
            <Container className="container wizard_step_content_container">
                {props.children}
            </Container>
        </Container>
    )
    
}

export const WizardStepNav = (props) => {
    return(
        <Container className="wrapper wizard_step_navigation_wrapper">
            <Container className="container wizard_step_navigation_container">
                {props.children}
            </Container>
        </Container>
    )
    
}
