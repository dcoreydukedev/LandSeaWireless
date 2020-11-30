import React, { Component } from "react";
import { FinishStep } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import { Button, Container, Row, Col } from "reactstrap";

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
        values: {  clientType,
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
            previousIsp, userMessage, },
      } = this.props;
    return (
        <Wizard>
        <WizardStep
          Title={FinishStep.Title}
          Header={FinishStep.Header}
          Text={FinishStep.Text}
        >
         
           <Container>

            <Row id='customer_type_row'>
                <Col>
                    <span className="finish-label">Customer Type:</span>
                </Col>
                <Col>
                    {clientType !== '' &&
                        <span className="finish-info">{clientType}</span>
                    }
                     {clientType === '' &&
                        <span className="finish-req">*(required)</span>
                    }
                </Col>
            </Row>
            
            {clientType === 'company' &&
            
            <Row id='company_name_row'>
            <Col>
                <span className="finish-label">Company NAme:</span>
            </Col>
            <Col>
                {companyName !== '' &&
                    <span className="finish-info">{companyName}</span>
                }
                 {companyName === '' &&
                    <span className="finish-req">*(required)</span>
                }
            </Col>
        </Row>
            }
            
            <Row id='name_row'>
                <Col>
                    <span className="finish-label">Customer Name:</span>
                </Col>
                <Col>
                    {firstName !== '' && lastName !== '' &&
                        <span className="finish-info">{firstName} {lastName}</span>
                    }
                    {(firstName === '' || lastName === '') &&
                        <span className="finish-req">*(required)</span> 
                    }
                </Col>
            </Row>
           
            <Row id='email_row'>
                <Col>
                    <span className="finish-label">Email:</span>
                </Col>
                <Col>
                    {email !== '' &&
                        <span className="finish-info">{email}</span>
                    }
                     {email === '' &&
                        <span className="finish-req">*(required)</span>
                    }
                </Col>
            </Row>
           
            <Row id='phone_row'>
                <Col>
                    <span className="finish-label">Phone:</span>
                </Col>
                <Col>
                    {phone !== '' &&
                        <span className="finish-info">{phone}</span>
                    }
                     {phone === '' &&
                        <span className="finish-req">*(required)</span>
                    }
                </Col>
            </Row>

            <Row id='address_row'>
                <Col>
                    <span className="finish-label">Address:</span>
                </Col>
                <Col>
                    {address !== '' && city !=='' && state !== '0' && zip !== '' &&
                        <span className="finish-info">
                            `${address}
                             ${city}, ${state} ${zip}`
                        </span>
                    }
                     {(address === '' || city ===''  || state === '0'  || zip === '') &&
                        <span className="finish-req">*(required)</span>
                    }
                </Col>
            </Row>

            <Row id='service_plan_row'>
                <Col>
                    <span className="finish-label">Service Plan:</span>
                </Col>
                <Col>
                    {servicePlan !== '' &&
                        <span className="finish-info">{servicePlan}</span>
                    }
                     {servicePlan === '' &&
                        <span className="finish-req">*(required)</span>
                    }
                </Col>
            </Row>
        
            <Row id='previous_isp_row'>
                <Col>
                    <span className="finish-label">Previous ISP:</span>
                </Col>
                <Col>
                    {previousIsp !== '' &&
                        <span className="finish-info">{previousIsp}</span>
                    }
                     {previousIsp === '' &&
                        <span className="finish-req">*(required)</span>
                    }
                </Col>
            </Row>

           </Container>

            {userMessage !== '' && 
                <Container>
                    <span className="finish-info">{userMessage}</span>
                </Container>
            }

            <WizardStepNav>
                <Container row>
                  <Button onClick={this.back} className="btn btn-default">
                    Back
                  </Button>
                  <Button
                    onClick={this.submit}
                    className="btn btn-primary"
                  >
                    Submit
                  </Button>
                </Container>
              </WizardStepNav>
          
        </WizardStep>
      </Wizard>
    )
  }
}

export default Finish;
