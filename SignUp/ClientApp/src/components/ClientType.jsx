import React, { Component } from "react";
import { SelectClient } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        const { values: { clientType } } = this.props;
        return (
            <Wizard>
                <WizardStep Title={SelectClient.Title} Header={SelectClient.Header} Text={SelectClient.Text}>
                    <Form>
                        <FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" value="person" name="rbSelectClient" onClick={this.props.handleChange('clientType')} />{' '}
                                        Person
                                    </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" value="company" name="rbSelectClient" onClick={this.props.handleChange('clientType')} />{' '}
                                        Company
                                    </Label>
                            </FormGroup>
                    </FormGroup>
                        <WizardStepNav>
                            <Button className="wizard_step_nav" onClick={this.saveAndContinue}>
                                Next
                    </Button>
                        </WizardStepNav>
                    </Form>
                </WizardStep>
            </Wizard>
        );
    }
}

export default ClientType;