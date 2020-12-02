import React, { Component } from "react";
import { SelectClient } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../wizard.css';

export class ClientType extends Component {
  // Save and Continue
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  style = {
    border:'none',
    width:'75%',
    textAlign:'left',
    paddingLeft:'15rem'
  }

  render() {
    return (
      <Wizard>
        <WizardStep
          Title={SelectClient.Title}
          Header={SelectClient.Header}
          Text={SelectClient.Text}
        >
          <Form.Group controlId="wizard.clientType">
            <Form.Check 
              style={this.style}
              className="form-control mb3"
              type="radio"
              value="person"
              name="rbSelectClient"
              label="Residential User"
              onClick={this.props.handleChange("clientType")}
            />

            <Form.Check 
              style={this.style}
              className="form-control mb3"
              type="radio"
              value="company"
              name="rbSelectClient"
              label="Company"
              onClick={this.props.handleChange("clientType")}
            />
          </Form.Group>

          <WizardStepNav>
            <Button
              onClick={this.saveAndContinue}
              className="btn btn-info wizard-step-nav"
            >
              Next
            </Button>
          </WizardStepNav>
        </WizardStep>
      </Wizard>
    );
  }
}

export default ClientType;
