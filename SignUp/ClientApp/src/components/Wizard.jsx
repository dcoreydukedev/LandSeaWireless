// @ts-nocheck
import React from 'react';


export const Wizard = (props) => {
    return(
        <div className="wrapper wizard_wrapper text-light bg-dark">
            <div className="container wizard_container">
                {props.children}
                </div>            
        </div>
    )
    
}

export const WizardStep = (props) => {
    return(
        <div className="wrapper wizard_step_wrapper bg-darker text-light">
            <div className="container wizard_step_container">
               <WizardStepTitle Title={props.Title} />
               <WizardStepInfo Header = {props.Header} Text = {props.Text}/>
               <WizardStepContent>
                   {props.children}
               </WizardStepContent>             
            </div>
        </div>
    )
    
}

export const WizardStepTitle = (props) => {
    return(
        <div className="wrapper wizard_step_title_wrapper">
            <div className="container wizard_step_title_container">
            <h2 className="element wizard_step_title">
                {[props.Title]}
            </h2>
            </div>
        </div>
    )
    
}

export const WizardStepInfo = (props) => {
    return(
        <div className="wrapper wizard_step_info_wrapper">
            <div className="container wizard_step_info_container">
                <h2  className="element wizard_step_info_header">
                    {props.Header}
                </h2>
                <p id="wizard_step_info_p" className="element wizard_step_info_p">
                    {props.Text}
                </p>
            </div>
        </div>
    )
    
}

export const WizardStepContent = (props) => {
    return(
        <div className="wrapper wizard_step_content_wrapper">
            <div className="container wizard_step_content_container">
                {props.children}
            </div>
        </div>
    )
    
}

export const WizardStepNav = (props) => {
    return(
        <div className="wrapper wizard_step_navigation_wrapper row">
            <div className="container wizard_step_navigation_container">
                {props.children}
            </div>
        </div>
    )
    
}
