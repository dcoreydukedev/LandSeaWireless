import React, { Component } from "react";
import { ServicePlanStep } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../wizard.css";

export class ServicePlan extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  style = {
    textAlign: "left",
    width:'98%',
    border:'none'
  };

  render() {
    const {
      values: { servicePlans },
    } = this.props;
    const sp = servicePlans;
    return (
      <Wizard>
        <WizardStep
          Title={ServicePlanStep.Title}
          Header={ServicePlanStep.Header}
          Text={ServicePlanStep.Text}
        >
          
            {sp.map((p, i) => (
              <Form.Group controlId={("wizard.servicePlan") + i} style={this.style}>
                <Form.Check
                 style={this.style}
                  key={p.Id}               
                  className="form-control mb3 cdl font-smaller"
                  type="checkbox"
                  value={p.name}
                  name={p.name}    
                  label= {p.name + " | " + p.periods[0].price + "/mo."}          
                  onChange={this.props.handleChange("servicePlan")}
                />
              </Form.Group>
            ))}
         

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
