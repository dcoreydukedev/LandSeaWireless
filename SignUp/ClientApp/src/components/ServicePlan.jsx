/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { Component } from "react";
import { ServicePlanStep } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Container,
  Input,
  Table
} from "reactstrap";

export class ServicePlan extends Component {
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
          <Form className="form">
           
              <>
                {sp.map((p, i) => 
                <FormGroup row>
                <Label check row>
                   <Input type= "checkbox" name = {p.name} value= {p.name} onChange={this.props.handleChange("servicePlan")} />
                   {p.name} | {p.periods[0].price} / mo.
                    </Label>
                    </FormGroup>
                )}
              </>
              

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
