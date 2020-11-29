/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { Component } from "react";
import { InstallationAddress } from "../modules/Steps.js";
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
    const {values: { address, city, state, zip },} = this.props;
    return (
      <Wizard>
        <WizardStep
          Title={InstallationAddress.Title}
          Header={InstallationAddress.Header}
          Text={InstallationAddress.Text}
        >
          <Form className="form">
            <FormGroup row>
              <Label sm={2}>Address</Label>
              <Col sm={10}>
                <input
                  placeholder="123 Any City"
                  onChange={this.props.handleChange("address")}
                  defaultValue={address}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>City</Label>
              <Col sm={10}>
                <input
                  placeholder="Any City"
                  onChange={this.props.handleChange("city")}
                  defaultValue={city}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <label sm={2}>State</label>
              <Col sm={10}>
                <Input
                  type="select"
                  onChange={this.props.handleChange("email")}
                  defaultValue={state}
                >
                  <option value="1">Alabama (AL)</option>
                  <option value="2">Alaska (AK)</option>
                  <option value="3">Arizona (AZ)</option>
                  <option value="4">Arkansas (AR)</option>
                  <option value="5">California (CA)</option>
                  <option value="6">Colorado (CO)</option>
                  <option value="7">Connecticut (CT)</option>
                  <option value="8">Delaware (DE)</option>
                  <option value="64">District Of Columbia (DC)</option>
                  <option value="9">Florida (FL)</option>
                  <option value="10">Georgia (GA)</option>
                  <option value="11">Hawaii (HI)</option>
                  <option value="12">Idaho (ID)</option>
                  <option value="13">Illinois (IL)</option>
                  <option value="14">Indiana (IN)</option>
                  <option value="15">Iowa (IA)</option>
                  <option value="16">Kansas (KS)</option>
                  <option value="17">Kentucky (KY)</option>
                  <option value="18">Louisiana (LA)</option>
                  <option value="19">Maine (ME)</option>
                  <option value="20">Maryland (MD)</option>
                  <option value="21">Massachusetts (MA)</option>
                  <option value="22">Michigan (MI)</option>
                  <option value="23">Minnesota (MN)</option>
                  <option value="24">Mississippi (MS)</option>
                  <option value="25">Missouri (MO)</option>
                  <option value="26">Montana (MT)</option>
                  <option value="27">Nebraska (NE)</option>
                  <option value="28">Nevada (NV)</option>
                  <option value="29">New Hampshire (NH)</option>
                  <option value="30">New Jersey (NJ)</option>
                  <option value="31">New Mexico (NM)</option>
                  <option value="32">New York (NY)</option>
                  <option value="33">North Carolina (NC)</option>
                  <option value="34">North Dakota (ND)</option>
                  <option value="35">Ohio (OH)</option>
                  <option value="36">Oklahoma (OK)</option>
                  <option value="37">Oregon (OR)</option>
                  <option value="38">Pennsylvania (PA)</option>
                  <option value="39">Rhode Island (RI)</option>
                  <option value="40">South Carolina (SC)</option>
                  <option value="41">South Dakota (SD)</option>
                  <option value="42">Tennessee (TN)</option>
                  <option value="43">Texas (TX)</option>
                  <option value="44">Utah (UT)</option>
                  <option value="45">Vermont</option>
                  <option value="46">Virginia</option>
                  <option value="47">Washington</option>
                  <option value="48">West Virginia</option>
                  <option value="49">Wisconsin</option>
                  <option value="50">Wyoming</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Zip</Label>
              <Col sm={10}>
                <input
                  placeholder="12345"
                  onChange={this.props.handleChange("zip")}
                  defaultValue={zip}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <label sm={2}>Phone</label>
              <Col sm={10}>
                <input
                  placeholder="(123)456-7890"
                  onChange={this.props.handleChange("phone")}
                  defaultValue={phone}
                />
              </Col>
            </FormGroup>
            <WizardStepNav>
              <Container row>
                <Button onClick={this.back}>
                  <icon fitted name="arrow left" />
                  Back
                </Button>
                <Button
                  className="wizard_step_nav"
                  onClick={this.saveAndContinue}
                >
                  Next
                  <icon fitted name="arrow right" />
                </Button>
              </Container>
            </WizardStepNav>
          </Form>
        </WizardStep>
      </Wizard>
    );
  }
}
