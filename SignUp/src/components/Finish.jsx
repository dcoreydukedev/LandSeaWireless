import React, { Component } from "react";
import { FinishStep } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../wizard.css";

export class Finish extends Component {
  // Back
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  // Submit
  submit = (e) => {
    e.preventDefault();
    this.props.submit();
  };

  render() {
    const {
      values: {
        clientType,
        firstName,
        lastName,
        companyName,
        email,
        phone,
        address,
        city,
        state,
        zip,
        servicePlan,
        previousIsp,
        userMessage,
      },
    } = this.props;
    return (
      <Wizard>
        <WizardStep
          Title={FinishStep.Title}
          Header={FinishStep.Header}
          Text={FinishStep.Text}
        >
          <Container className="text=left">
            <Row id="customer_type_row" className="text-left">
            <Col xs={12} md={8}>
                <span className="finish-label">Customer Type:</span>
              </Col>
              <Col xs={6} md={4}>
                {clientType !== "" && (
                  <span className="finish-info">{clientType}</span>
                )}
                {clientType === "" && (
                  <span className="finish-req">*(required)</span>
                )}
              </Col>
            </Row>

            {clientType === "company" && (
              <Row id="company_name_row" className="text-left">
                <Col xs={12} md={8}>
                  <span className="finish-label">Company Name:</span>
                </Col>
                <Col xs={6} md={4}>
                  {companyName !== "" && (
                    <span className="finish-info">{companyName}</span>
                  )}
                  {companyName === "" && (
                    <span className="finish-req">*(required)</span>
                  )}
                </Col>
              </Row>
            )}

            <Row id="name_row" className="text-left">
            <Col xs={12} md={8}>
                <span className="finish-label">Customer Name:</span>
              </Col>
              <Col xs={6} md={4}>
                {firstName !== "" && lastName !== "" && (
                  <span className="finish-info">
                    {firstName} {lastName}
                  </span>
                )}
                {(firstName === "" || lastName === "") && (
                  <span className="finish-req">*(required)</span>
                )}
              </Col>
            </Row>

            <Row id="email_row" className="text-left">
            <Col xs={12} md={8}>
                <span className="finish-label">Email:</span>
              </Col>
              <Col xs={6} md={4}>
                {email !== "" && <span className="finish-info">{email}</span>}
                {email === "" && (
                  <span className="finish-req">*(required)</span>
                )}
              </Col>
            </Row>

            <Row id="phone_row" className="text-left">
            <Col xs={12} md={8}>
                <span className="finish-label">Phone:</span>
              </Col>
              <Col xs={6} md={4}>
                {phone !== "" && <span className="finish-info">{phone}</span>}
                {phone === "" && (
                  <span className="finish-req">*(required)</span>
                )}
              </Col>
            </Row>

            <Row id="address_row" className="text-left">
            <Col xs={12} md={8}>
                <span className="finish-label">Address:</span>
              </Col>
              <Col xs={6} md={4}>
                {address !== "" && city !== "" && state !== "0" && zip !== "" && (
                  <span className="finish-info">
                    `{address}
                    {city}, {state} {zip}`
                  </span>
                )}
                {(address === "" ||
                  city === "" ||
                  state === "0" ||
                  zip === "") && (
                  <span className="finish-req">*(required)</span>
                )}
              </Col>
            </Row>

            <Row id="service_plan_row" className="text-left">
              <Col xs={12} md={8}>
                <span className="finish-label">Service Plan:</span>
              </Col>
              <Col xs={6} md={4}>
                {servicePlan !== "" && (
                  <span className="finish-info">{servicePlan}</span>
                )}
                {servicePlan === "" && (
                  <span className="finish-req">*(required)</span>
                )}
              </Col>
            </Row>

            <Row id="previous_isp_row" className="text-left">
            <Col xs={12} md={8}>
                <span className="finish-label">Previous ISP:</span>
              </Col>
              <Col xs={6} md={4}>
                {previousIsp !== "" && (
                  <span className="finish-info">{previousIsp}</span>
                )}
                {previousIsp === "" && (
                  <span className="finish-req">*(required)</span>
                )}
              </Col>
            </Row>
          </Container>

          {userMessage !== "" && (
            <Container>
              <span className="finish-info">{userMessage}</span>
            </Container>
          )}

          <WizardStepNav>
            <Button
              onClick={this.back}
              className="btn btn-default wizard-step-nav mx-1"
            >
              Back
            </Button>

            <Button
              onClick={this.submit}
              className="btn btn-info wizard-step-nav mx-1"
            >
              Submit
            </Button>
          </WizardStepNav>
        </WizardStep>
      </Wizard>
    );
  }
}

export default Finish;
