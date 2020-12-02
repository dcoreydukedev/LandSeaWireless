// @ts-nocheck
import React, { Component } from "react";
import { ClientType } from "./ClientType";
import { ContactInfo } from "./ContactInfo";
import { InstallAddress } from "./InstallAddress";
import { PreviousIsp } from "./PreviousIsp";
import { ServicePlan } from "./ServicePlan";
import { Finish } from "./Finish";
import axios from "axios";

export default class MainForm extends Component {
  state = {
    step: 1,
    clientType: "person",
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    servicePlan: "",
    previousIsp: "",
    servicePlans: [],
    userMessage: ''
  };

  componentDidMount() {
    // Get Service Plans
    const headers = {
      "Content-Type": "application/json",
      "X-Auth-Token":
        "UZxARMrUaIZebtYe2UvBXpgdDVI316+xLDAqE1V1yW4cDC/2zLOjnk8nwZHf0TIE",
    };
    axios
      .get("https://landsea.unmsapp.com/api/v1.0/service-plans", { headers })
      .then((res) => {
        this.setState({ servicePlans: res.data });
      });
  }

  submit = () => {
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.email !== "" &&
      this.state.phone !== "" &&
      this.state.address !== "" &&
      this.state.city !== "" &&
      this.state.zip !== "" &&
      this.state.servicePlan !== "" &&
      this.state.previousIsp !== ""
    ) {
      if (this.state.clientType === "person") {
        this.postLead();
      } 
      else if (this.state.clientType === "company") {
        if(this.state.companyName !== ''){
          this.postLead()
        }
        else{
          alert('Please fix form errors!');
        }
      }
    }
    else{
      alert('Please fix form errors!');
    }
  };

  postLead(){
    let client_type = (this.state.clientType === 'person') ? 1 : 2;

    var body = {
      'userIdent': this.state.firstName + this.state.lastName + Date.now(),
      'previousIsp': this.state.previousIsp.trim(),
      'isLead': true,
      'clientType': client_type,
      'companyName': (this.state.clientType === 'person') ? '' : this.state.companyName,
      'companyContactFirstName': (this.state.clientType === 'person') ? '' : this.state.firstName,
      'companyContactLastName': (this.state.clientType === 'person') ? '' : this.state.lastName,
      'firstName': this.state.firstName,
      'lastName': this.state.lastName,
      'street1': this.state.address,
      'city': this.state.city,
      'countryId': 249,
      'stateId': Number(this.state.state),
      'zipCode': this.state.zip,
      'invoiceStreet1': this.state.address,   
      'invoiceCity': this.state.city,
      'invoiceStateId': Number(this.state.state),
      'invoiceCountryId': 249,
      'invoiceZipCode': this.state.zip,
      'invoiceAddressSameAsContact': true,
      'note': 'Service Plan: ' + this.state.servicePlan,
      'sendInvoiceByPost': false,
      'organizationId': 1,
      'contacts': [
        {
          'email': this.state.email,
          'phone': this.state.phone,
          'name': this.state.firstName + ' ' + this.state.lastName,
          'isBilling': true,
          'isContact': true,
          'types': [
            {
              'name': 'Home contact'
            }
          ]
        }
      ]
    };
    // Post Data
    const headers = {
      "Content-Type": "application/json",
      "X-Auth-Token":
        "x2bhjw7IuHJqo+Z1wbcjGUacK9rFbpHEdmrlxC0ju3pj6a4rKPQEsFJQslz+3fFG",
    };
    axios
      .post("https://landsea.unmsapp.com/api/v1.0/clients", body, { headers })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    let user_message = 'Congrats! You Have Successfully Created a New Lead! Someone will contact you very soon! This page will redirect in 5 seconds.';
    this.setState({userMessage: user_message});
    setTimeout(function(){window.location.href = 'http://www.landseawireless.com'}, 5000);
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { step } = this.state;
    const {
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
      servicePlans,
      userMessage,
    } = this.state;
    const values = {
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
      servicePlans,
      userMessage
    };
    switch (step) {
      case 1:
        return (
          <ClientType
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ContactInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <InstallAddress
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <ServicePlan
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 5:
        return (
          <PreviousIsp
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Finish
            submit={this.submit}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        break;
    }
  }
}
