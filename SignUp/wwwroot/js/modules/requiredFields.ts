
export let requiredField = class {
    name: string;
    controlId: string;
    valMsg: string;
    infoMsg: string;
    constructor(name, controlId, valMsg, infoMsg) {
        this.name = name;
        this.controlId = controlId;
        this.valMsg = valMsg;
        this.infoMsg = infoMsg;
    }
};

export let rfFirstName = new requiredField(
    'FirstName',
    'txtFirstName',
    '* First Name Required. Should be same as appears on valid credit card.',
    'Should be same as appears on valid credit card.'
);

export let rfLastName = new requiredField(
    'LastName',
    'txtLastName',
    '* Last Name Required. Should be same as appears on valid credit card.',
    'Should be same as appears on valid credit card.'
);

export let rfEmail = new requiredField(
    'Email',
    'txtEmail',
    '* Valid Email Required. Should be in format: yourname@domain.com',
    'Should be in format: yourname@domain.com'
);

export let rfPhone = new requiredField(
    'Phone',
    'txtPhone',
    '* Valid Phone Number Required. Should be in format: (123) 456-7890',
    'Should be in format: (123) 456-7890'
);

export let rfInstallAddress = new requiredField(
    'InstallAddress',
    'txtInstallAddress',
    '* Address Required. Physical Address of the service installation.',
    'Physical Address of the service installation.'
);

export let rfInstallCity = new requiredField(
    'InstallCity',
    'txtInstallCity',
    '* City Required. City of the service installation.',
    'City of the service installation.'
);

export let rfInstallZip = new requiredField(
    'InstallZip',
    'txtInstallZip',
    '* Zip Code Required. Zip Code of the service installation.',
    'Zip Code of the service installation.'
);

export let rfBillingAddress = new requiredField(
    'BillingAddress',
    'txtBillingAddress',
    '* Address Required. Billing Address on your Credit Card.',
    'Billing Address on your Credit Card.'
);

export let rfBillingCity = new requiredField(
    'BillingCity',
    'txtBillingCity',
    '* City Required. City on your Credit Card.',
    'City on your Credit Card.'
);

export let rfBillingZip = new requiredField(
    'BillingZip',
    'txtBillingZip',
    '* Zip Code Required. Zip Code on your Credit Card',
    'Zip Code on your Credit Card'
);

