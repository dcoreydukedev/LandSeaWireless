import React, { Component } from "react";
import { IspInfo } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../wizard.css";

export class PreviousIsp extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  style = {
    border: "none",
    width: "75%",
    textAlign: "left",
    paddingLeft: "15rem",
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
            <Form.Group controlId = "wizard.previousIsp" style={this.style}>
              <Form.Control as="select"
                className="form-Control"              
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
              </Form.Control>
            </Form.Group>

            <WizardStepNav>
            <Button
              onClick={this.back}
              className="btn btn-default wizard-step-nav mx-1"
            >
              Back
            </Button>

            <Button
              onClick={this.saveAndContinue}
              className="btn btn-info wizard-step-nav mx-1"
            >
              Next
            </Button>
          </WizardStepNav>

        </WizardStep>
      </Wizard>
    );
  }
}
