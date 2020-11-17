import * as regexVal from './regexValidation';


export interface Address {
    address: string;
    city: string;
    state: string;
    zip: string;
};

export let vm_address = class {
    address: Address;
    constructor(address) {
        this.address = address;
    }

    isValidZip(): boolean {
        return regexVal.validateZip(this.address.zip);
    }
};

export type ClientType = 'person' | 'company';

export let vm_clientType = class {
    clientType: ClientType;
    constructor(clientType) {
        this.clientType = clientType;
    }
};

export interface ContactInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

export let vm_contactInfo = class {
    contactInfo: ContactInfo;
    constructor(contactInfo) {
        this.contactInfo = contactInfo;
    }

    isValidEmail(): boolean {
        return regexVal.validateEmail(this.contactInfo.email);
    }
    isValidPhone(): boolean {
        return regexVal.validatePhone(this.contactInfo.phone);
    }
};

export let vm_companyContactInfo = class {
    companyName: string;
    companyContact: ContactInfo;
    constructor(companyName, companyContact) {
        this.companyName = companyName;
        this.companyContact = companyContact;
    }

    isValidEmail(): boolean {
        return regexVal.validateEmail(this.companyContact.email);
    }
    isValidPhone(): boolean {
        return regexVal.validatePhone(this.companyContact.phone);
    }
};

export interface ServicePlan {
    servicePlanType: string;
    name: string;
    dwnspd: number;
    uplspd: number;
    price: number;
    details: string;
};

export interface ServicePlans extends Array<ServicePlan> { }

export let vm_servicePlan = class {
    servicePlans: ServicePlans;
    constructor() {

    }
};

export interface BillingInfo {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    ccn: string;
    ccv: string;
    cce: string;
};

export let vm_billingInfo = class {
    billingInfo: BillingInfo;
    constructor() {

    }
};

