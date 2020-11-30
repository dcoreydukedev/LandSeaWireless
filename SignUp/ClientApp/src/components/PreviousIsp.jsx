/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { Component } from "react";
import { IspInfo } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
} from "reactstrap";

export class PreviousIsp extends Component {
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
      values: { previousIsp },
    } = this.props;
    return (
      <Wizard>
        <WizardStep
          Title={IspInfo.Title}
          Header={IspInfo.Header}
          Text={IspInfo.Text}
        >
          <Form className="form container">
            <FormGroup row>
              <Label sm={2}>&nbsp;</Label>
              <Input
                sm={10}
                className="form-Control"
                type="select"
                onChange={this.props.handleChange("previousIsp")}
                defaultValue={previousIsp}
              >
                <option value="">-- Please Select --</option>
                <option value="Dial-Up">Dial-Up</option>
                <option value="Cable">Cable</option>
                <option value="DSL">DSL</option>
                <option value="Cellular">Cellular</option>
                <option value="Fiber">Fiber</option>
                <option value="Satellite">Satellite</option>
              </Input>
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
      </Wizard>
    );
  }
}
