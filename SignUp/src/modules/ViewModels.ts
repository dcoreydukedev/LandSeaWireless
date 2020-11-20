

    export interface Address {
        address: string;
        city: string;
        state: string;
        zip: string;
    }

    export type ClientType = 'person' | 'company';

    export interface ContactInfo {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }

    export interface ServicePlan {
        servicePlanType: string;
        name: string;
        dwnspd: number;
        uplspd: number;
        price: number;
        details: string;
    }

    export interface ServicePlans extends Array<ServicePlan> { }

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
    }


