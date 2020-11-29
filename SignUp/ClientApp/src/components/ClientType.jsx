import React, { Component } from "react";
import { SelectClient } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
export class ClientType extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Wizard>
        <WizardStep
          Title={SelectClient.Title}
          Header={SelectClient.Header}
          Text={SelectClient.Text}
        >
          <Form className="form container">
            <FormGroup className="row">
              <Label check sm={12}>
                <Input
                  className="form-control"
                  type="radio"
                  value="person"
                  name="rbSelectClient"
                  onClick={this.props.handleChange("clientType")}
                />{" "}
                Person
              </Label>
            </FormGroup>

            <FormGroup className="row">
              <Label check sm={12}>
                <Input
                  className="form-control"
                  type="radio"
                  value="company"
                  name="rbSelectClient"
                  onClick={this.props.handleChange("clientType")}
                />{" "}
                Company
              </Label>
            </FormGroup>

            <WizardStepNav>
              <Container row>
                <Button
                  onClick={this.saveAndContinue}
                  className="btn btn-primary"
                >
                  Next
                </Button>
              </Container>
            </WizardStepNav>
          </Form>
        </WizardStep>
      </Wizard>
    );
  }
}

export default ClientType;
