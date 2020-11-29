/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { Component } from "react";
import { ContactInfoPerson } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Container,
  Input,
} from "reactstrap";

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
    const {
      values: { clientType, firstName, lastName, companyName, email, phone },
    } = this.props;
    return (
      <Wizard>
        {clientType === "person" && (
          <WizardStep
            Title={ContactInfoPerson.Title}
            Header={ContactInfoPerson.Header}
            Text={ContactInfoPerson.Text}
          >
            <Form className="form container">
              <FormGroup row>
                <Label sm={4}>First Name</Label>
                <Input
                  className="form-control"
                  sm={8}
                  placeholder="John"
                  onChange={this.props.handleChange("firstName")}
                  defaultValue={firstName}
                />
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Last Name</Label>
                <Input
                  className="form-control"
                  sm={8}
                  placeholder="Smith"
                  onChange={this.props.handleChange("lastName")}
                  defaultValue={lastName}
                />
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Email</Label>
                <Input
                  className="form-control"
                  sm={8}
                  placeholder="you@domain.com"
                  onChange={this.props.handleChange("email")}
                  defaultValue={email}
                />
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Phone</Label>
                <Input
                  className="form-control"
                  sm={8}
                  placeholder="(123)456-7890"
                  onChange={this.props.handleChange("phone")}
                  defaultValue={phone}
                />
              </FormGroup>
              <WizardStepNav>
                <Container row>
                  <Button onClick={this.back} className="btn btn-default">
                    Back
                  </Button>
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
        )}
        {clientType === "company" && (
          <WizardStep
            Title={ContactInfoPerson.Title}
            Header={ContactInfoPerson.Header}
            Text={ContactInfoPerson.Text}
          >
            <Form className="form">
              <FormGroup row>
                <Label sm={4}>Company Name</Label>

                <Input
                  className="form-control"
                  sm={8}
                  placeholder="Your Company Name"
                  onChange={this.props.handleChange("companyName")}
                  defaultValue={companyName}
                />
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>First Name</Label>
                <Input
                  className="form-control"
                  sm={8}
                  placeholder="John"
                  onChange={this.props.handleChange("firstName")}
                  defaultValue={firstName}
                />
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Last Name</Label>
                <Input
                  className="form-control"
                  sm={8}
                  placeholder="Smith"
                  onChange={this.props.handleChange("lastName")}
                  defaultValue={lastName}
                />
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Email</Label>
                <Input
                  className="form-control"
                  sm={8}
                  placeholder="you@domain.com"
                  onChange={this.props.handleChange("email")}
                  defaultValue={email}
                />
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Phone</Label>
                <Input
                  className="form-control"
                  sm={8}
                  placeholder="(123)456-7890"
                  onChange={this.props.handleChange("phone")}
                  defaultValue={phone}
                />
              </FormGroup>
              <WizardStepNav>
                <Container row>
                  <Button onClick={this.back} className="btn btn-default">
                    Back
                  </Button>
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
        )}
      </Wizard>
    );
  }
}
