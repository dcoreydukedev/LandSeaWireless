// @ts-nocheck
import React, { Component } from 'react';
import {ClientType} from './ClientType'
import { ContactInfo } from './ContactInfo'

export default class MainForm extends Component {
    state = {
        step: 1,
        clientType: '',
        firstName: '',
        lastName: '',
        companyName:'',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        servicePlan: '',
        customerHasRouter: false,
        routerOption: '',
        proInstall: true,
        previousIsp: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
        console.log(event.target.value)
    }

    render() {
        const { step } = this.state;
        const { clientType, firstName, lastName, companyName, email, phone, address, city, state, zip, servicePlan, customerHasRouter, routerOption, proInstall, previousIsp} = this.state;
        const values = { clientType, firstName, lastName, companyName, email, phone, address, city, state, zip, servicePlan, customerHasRouter, routerOption, proInstall, previousIsp};
        switch (step) {
            case 1:
                return <ClientType
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 2:
                return <ContactInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            //case 3:
            //    return <InstallAddress
            //        nextStep={this.nextStep}
            //        prevStep={this.prevStep}
            //        values={values}
            //    />
            //case 4:
            //    return <ServicePlan
            //        nextStep={this.nextStep}
            //        prevStep={this.prevStep}
            //        values={values}
            //    />
            //case 5:
            //    return <CustomerHasRouter
            //        nextStep={this.nextStep}
            //        prevStep={this.prevStep}
            //        values={values}
            //    />
            //case 6:
            //    return <RouterOption
            //        nextStep={this.nextStep}
            //        prevStep={this.prevStep}
            //        values={values}
            //    />
            //case 7:
            //    return <AntennaOptions
            //        nextStep={this.nextStep}
            //        prevStep={this.prevStep}
            //        values={values}
            //    />
            //case 8:
            //    return <ProInstall
            //        nextStep={this.nextStep}
            //        prevStep={this.prevStep}
            //        values={values}
            //    />
            //    case 9:
            //    return <PreviousIsp
            //        nextStep={this.nextStep}
            //        prevStep={this.prevStep}
            //        values={values}
            //    />
            //case 10:
            //    return <Success />
            default:
                break;
        }
    }
}
