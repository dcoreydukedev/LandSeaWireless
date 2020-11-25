import React, { Component } from "react";
import { Form, Button, Radio } from "semantic-ui-react";
import { SelectClient } from "../modules/Steps.js";
import { Wizard, WizardStep, WizardStepNav } from "./Wizard";

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
    const { values:{clientType} } = this.props;
    return (
      <Wizard>
        <WizardStep Title = {SelectClient.Title} Header = {SelectClient.Header} Text = {SelectClient.Text}>
            <Form>                
                    <Form.Group grouped>
                        <Form.Field
                            label='Person'
                            control='input'
                            type='radio'
                            name='htmlRadios'
                            value='person'
                            onClick={ this.props.handleChange('clientType') }
                        />
                        <Form.Field
                            label='Company'
                            control='input'
                            type='radio'
                            name='htmlRadios'
                            value='company'
                            onClick={this.props.handleChange('clientType')}
                        />
                    </Form.Group>
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