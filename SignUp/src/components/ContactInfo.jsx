import React, { Component } from "react";
import { ContactInfoPerson } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../wizard.css';

export class ContactInfo extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  style = {
    width:'75%',
    textAlign:'left',
    paddingLeft:'15rem'
  }

  render() {
    const {
      values: {
        clientType,
        firstName,
        lastName,
        companyName,
        email,
        phone,
      },
    } = this.props;
    return (
      <Wizard>
        {clientType === "person" && (
          <WizardStep
            Title={ContactInfoPerson.Title}
            Header={ContactInfoPerson.Header}
            Text={ContactInfoPerson.Text}
          >
           
              <Form.Group controlId = "wizard.firstName" style={this.style}>
                <Form.Label>First Name</Form.Label>
                <Form.Control                 
                  className="form-control"                  
                  placeholder="John"
                  onChange={this.props.handleChange("firstName")}
                  defaultValue={firstName}
                />
              </Form.Group>

              <Form.Group controlId = "wizard.lastName" style={this.style}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="form-control"                  
                  placeholder="Smith"
                  onChange={this.props.handleChange("lastName")}
                  defaultValue={lastName}
                />
              </Form.Group>

              <Form.Group controlId = "wizard.email" style={this.style}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form-control"
                  placeholder="you@domain.com"
                  onChange={this.props.handleChange("email")}
                  defaultValue={email}
                  type="email"
                />
              </Form.Group>

              <Form.Group controlId = "wizard.phone" style={this.style}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  className="form-control"                  
                  placeholder="(123) 456-7890"
                  onChange={this.props.handleChange("phone")}
                  defaultValue={phone}
                />
              </Form.Group>

              <WizardStepNav>
               
                  <Button 
                    onClick={this.back} 
                    className="btn btn-default wizard-step-nav mx-1">
                    Back
                  </Button>

                  <Button
                    onClick={this.saveAndContinue}
                    className="btn btn-info wizard-step-nav mx-1">
                    Next
                  </Button>      

              </WizardStepNav>

          </WizardStep>
        )}
        {clientType === "company" && (
          <WizardStep
            Title={ContactInfoPerson.Title}
            Header={ContactInfoPerson.Header}
            Text={ContactInfoPerson.Text}
          >
              <Form.Group controlId = "wizard.companyName" style={this.style}>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  className="form-control"                  
                  placeholder="Your Company Name"
                  onChange={this.props.handleChange("companyName")}
                  defaultValue={companyName}
                />
              </Form.Group>
             
              
              <Form.Group controlId = "wizard.firstName" style={this.style}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="form-control"                  
                  placeholder="John"
                  onChange={this.props.handleChange("firstName")}
                  defaultValue={firstName}
                />
              </Form.Group>

              <Form.Group controlId = "wizard.lastName" style={this.style}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="form-control"                  
                  placeholder="Smith"
                  onChange={this.props.handleChange("lastName")}
                  defaultValue={lastName}
                />
              </Form.Group>

              <Form.Group controlId = "wizard.email" style={this.style}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form-control"
                  placeholder="you@domain.com"
                  onChange={this.props.handleChange("email")}
                  defaultValue={email}
                  type="email"
                />
              </Form.Group>

              <Form.Group controlId = "wizard.phone" style={this.style}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  className="form-control"                  
                  placeholder="(123) 456-7890"
                  onChange={this.props.handleChange("phone")}
                  defaultValue={phone}
                />
              </Form.Group>

              <WizardStepNav>
               
                  <Button 
                    onClick={this.back} 
                    className="btn btn-default wizard-step-nav mx-1">
                    Back
                  </Button>

                  <Button
                    onClick={this.saveAndContinue}
                    className="btn btn-info wizard-step-nav mx-1">
                    Next
                  </Button>      
                            
              </WizardStepNav>



              
          </WizardStep>
        )}
      </Wizard>
    );
  }
}
