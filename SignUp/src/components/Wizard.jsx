// @ts-nocheck
import React from 'react';
import '../wizard.css';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";

export const Wizard = (props) => {
    return(
        <Container className="wrapper wizard_wrapper">
            
                {props.children}
                
        </Container>
    )
    
}

export const WizardStep = (props) => {
    return(
        <Container className="wrapper wizard_step_wrapper">
            
               <WizardStepTitle Title={props.Title} />
               <WizardStepInfo Header = {props.Header} Text = {props.Text}/>
               <WizardStepContent>
                    <Form className="pl5">
                        {props.children}
                    </Form>
               </WizardStepContent>             
        </Container>
    )
    
}

export const WizardStepTitle = (props) => {
    return(
        <Container className="wrapper wizard_step_title_wrapper">
           
            <h2 className="element wizard_step_title">
                {[props.Title]}
            </h2>
            </Container>
        
    )
    
}

export const WizardStepInfo = (props) => {
    return(
        <Container className="wrapper wizard_step_info_wrapper">
           
                <h2  className="element wizard_step_info_header">
                    {props.Header}
                </h2>
                <p id="wizard_step_info_p" className="element wizard_step_info_p">
                    {props.Text}
                </p>
        
        </Container>
    )
    
}

export const WizardStepContent = (props) => {
    return(
        <Container className="wrapper wizard_step_content_wrapper">
           
                {props.children}
         
        </Container>
    )
    
}

export const WizardStepNav = (props) => {
    return(
        <Container className="wrapper wizard_step_navigation_wrapper">
          
                {props.children}
          
        </Container>
    )
    
}
