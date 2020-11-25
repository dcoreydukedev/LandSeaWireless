// PersonalDetails.jsx
import React, { Component } from "react";
import { Form, Button} from "semantic-ui-react";
import { ContactInfoPerson, ContactInfoCompany } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";

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
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='John'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='City'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={lastName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='you@domain.com'
                    onChange={this.props.handleChange('email')}
                    defaultValue={email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input placeholder='(123)456-7890'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={phone}
                    />
                </Form.Field>
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
            <Form.Field>
                    <label>Company Name</label>
                    <input placeholder='Your Company'
                    onChange={this.props.handleChange('companyName')}
                    defaultValue={firstName}
                    />
                </Form.Field>           
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='John'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='City'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={lastName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='you@domain.com'
                    onChange={this.props.handleChange('email')}
                    defaultValue={email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input placeholder='(123)456-7890'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={phone}
                    />
                </Form.Field>
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
