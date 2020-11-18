///<reference path = "../wizard.tsx" />
 namespace Wizard {

    interface Address {
        address: string;
        city: string;
        state: string;
        zip: string;
    }

    type ClientType = 'person' | 'company';

    interface ContactInfo {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }

    interface ServicePlan {
        servicePlanType: string;
        name: string;
        dwnspd: number;
        uplspd: number;
        price: number;
        details: string;
    }

    interface ServicePlans extends Array<ServicePlan> { }

    interface BillingInfo {
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
}

