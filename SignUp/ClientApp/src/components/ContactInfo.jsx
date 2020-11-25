/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { Component } from "react";
import { ContactInfoPerson, ContactInfoCompany } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';

export class ContactInfo extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values:{clientType, firstName, lastName, companyName, email, phone} } = this.props;
    return (
      <Wizard>
        {clientType === 'person' &&
        <WizardStep Title = {ContactInfoPerson.Title} Header = {ContactInfoPerson.Header} Text = {ContactInfoPerson.Text}>
            <Form>                
                    <FormGroup>
                     <Row>
                    <label>First Name</label>
                    <input placeholder='John'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={firstName}
                        />
                     </Row>
                </FormGroup>
                <FormGroup>
                    <label>Last Name</label>
                    <input placeholder='City'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={lastName}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    <input placeholder='you@domain.com'
                    onChange={this.props.handleChange('email')}
                    defaultValue={email}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Phone</label>
                    <input placeholder='(123)456-7890'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={phone}
                    />
                </FormGroup>
                <WizardStepNav>    
                    <Button onClick={this.back}>
                        <icon fitted name="arrow left" />
                        Back
                    </Button>                
                    <Button className="wizard_step_nav" onClick={this.saveAndContinue}>
                        Next
                        <icon fitted name="arrow right" />
                    </Button>
                </WizardStepNav>                
            </Form>
        </WizardStep>
    } 
    {clientType === 'company' &&
        <WizardStep Title = {ContactInfoCompany.Title} Header = {ContactInfoCompany.Header} Text = {ContactInfoCompany.Text}>
            <Form>     
            <FormGroup>
                    <label>Company Name</label>
                    <input placeholder='Your Company'
                    onChange={this.props.handleChange('companyName')}
                    defaultValue={firstName}
                    />
                </FormGroup>           
                <FormGroup>
                    <label>First Name</label>
                    <input placeholder='John'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={firstName}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Last Name</label>
                    <input placeholder='City'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={lastName}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    <input placeholder='you@domain.com'
                    onChange={this.props.handleChange('email')}
                    defaultValue={email}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Phone</label>
                    <input placeholder='(123)456-7890'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={phone}
                    />
                </FormGroup>
                <WizardStepNav>    
                    <Button onClick={this.back}>
                        <icon fitted name="arrow left" />
                        Back
                    </Button>                
                    <Button className="wizard_step_nav" onClick={this.saveAndContinue}>
                        Next
                        <icon fitted name="arrow right" />
                    </Button>
                </WizardStepNav>                
            </Form>
        </WizardStep>
    } 
      </Wizard>
    );
  }
}
