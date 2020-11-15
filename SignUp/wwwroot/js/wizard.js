


var requiredField = {
    name: '',
    controlId: '',
    valmsg: '',
    infomsg: ''
};

var requiredFields = [{
    requiredField: {
        name: 'Username',
        controlId: 'txtUsername',
        valmsg: '* Username Required. Must be between 6 and 128 chars long characters long.',
        infomsg: 'Must be between 6 and 128 chars long characters long.'
    }
},
{
    requiredField: {
        name: 'Password',
        controlId: 'txtPassword',
        valmsg: '* Password Required. At least 8 Chars. Must contain at least 1 Capital Letter, 1 Lower Case Letter, 1 Number, and 1 Special Character (&#33;&#35;&#36;&#64;)',
        infomsg: 'At least 8 Chars. Must contain at least 1 Capital Letter, 1 Lower Case Letter, 1 Number, and 1 Special Character (&#33;&#35;&#36;&#64;)'
    }
},
{
    requiredField: {
        name: 'FirstName',
        controlId: 'txtFirstName',
        valmsg: '* First Name Required. Should be same as appears on valid state issued ID.',
        infomsg: 'Should be same as appears on valid state issued ID'
    }
},
{
    requiredField: {
        name: 'LastName',
        controlId: 'txtLastName',
        valmsg: '* Last Name Required. Should be same as appears on valid state issued ID.',
        infomsg: 'Should be same as appears on valid state issued ID'
    }
},
{
    requiredField: {
        name: 'Email',
        controlId: 'txtEmail',
        valmsg: '* Valid Email Required. Should be in format: yourname@domain.com',
        infomsg: 'Should be in format: yourname@domain.com'
    }
},
{
    requiredField: {
        name: 'Phone',
        controlId: 'txtPhone',
        valmsg: '* Valid Phone Number Required. Should be in format: (123) 456-7890',
        infomsg: 'Should be in format: (123) 456-7890'
    }
},
{
    requiredField: {
        name: 'InstallAddress',
        controlId: 'txtInstallAddress',
        valmsg: '* Address Required. Physical Address of the service installation.',
        infomsg: 'Physical Address of the service installation.'
    }
},
{
    requiredField: {
        name: 'InstallCity',
        controlId: 'txtInstallCity',
        valmsg: '* City Required. City of the service installation.',
        infomsg: 'City of the service installation.'
    }
},
{
    requiredField: {
        name: 'InstallZip',
        controlId: 'txtInstallZip',
        valmsg: '* Zip Code Required. Zip Code of the service installation.',
        infomsg: 'Zip Code of the service installation.'
    }
},
{
    requiredField: {
        name: 'BillingAddress',
        controlId: 'txtBillingAddress',
        valmsg: '* Address Required. Billing Address on your Credit Card.',
        infomsg: 'Billing Address on your Credit Card.'
    }
},
{
    requiredField: {
        name: 'BillingCity',
        controlId: 'txtBillingCity',
        valmsg: '* City Required. City on your Credit Card.',
        infomsg: 'City on your Credit Card.'
    }
},
{
    requiredField: {
        name: 'BillingZip',
        controlId: 'txtBillingZip',
        valmsg: '* Zip Code Required. Zip Code on your Credit Card',
        infomsg: 'Zip Code on your Credit Card'
    }
}
];

var step = {
    name: '',
    number: '',
    title: '',
    view: ''
};

var steps = [{
    step: {
        name: 'Create User Account',
        number: '1',
        title: 'Step 1: Create Your User Account',
        view: '/SignUp/UserAccount'
    }
},
{
    step: {
        name: 'Select Client Type',
        number: '2',
        title: 'Step 2: I Am...',
        view: '/SignUp/ClientType'
    }
},
{
    step: {
        name: 'Person Contact Info',
        number: '3.1',
        title: 'Step 3: Provide Contact Info',
        view: '/SignUp/ContactInfo'
    }
},
{
    step: {
        name: 'Company Contact Info',
        number: '3.2',
        title: 'Step 3: Provide Company Contact Info',
        view: '/SignUp/CompanyContactInfo'
    }
},
{
    step: {
        name: 'Installation Address',
        number: '4',
        title: 'Step 4: Where Do We Install the Service?',
        view: '/SignUp/InstallationAddress'
    }
},
{
    step: {
        name: 'Customer Has Router',
        number: '5',
        title: 'Step 5: Do You Have A Router?',
        view: '/SignUp/CustomerHasRouter'
    }
},
{
    step: {
        name: 'Router Option',
        number: '5.1',
        title: 'Step 5.1: Router Options',
        view: '/SignUp/RouterOption'
    }
},
{
    step: {
        name: 'Antenna Options',
        number: '6',
        title: 'Step 6: Antenna Options',
        view: '/SignUp/AntennaOption'
    }
},
{
    step: {
        name: 'Professional Installation',
        number: '7',
        title: 'Step 7: Would You Like Professional Installation?',
        view: '/SignUp/ProfessionalInstallation'
    }
},
{
    step: {
        name: 'Billing Info',
        number: '8',
        title: 'Step 8: Provide Your Billing Info',
        view: '/SignUp/BillingInfo'
    }
}
];

var regex_phone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
var regex_email = /\S+@\S+\.\S+/;
var regex_zip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
//Password must - Have at least 8 characters - Contain characters from at least 3 of the following categories: - English uppercase letters (A-Z) - English lowercase letters (a-z) - numbers (0-9) - Non-alphanumeric symbols (e.g.: !, #, $, %, Space) - Unicode characters
var regex_password = /^(((?=.*\d)(?=.*[a-z])(?=.*[A-Z])){3}|((?=.*\d)(?=.*[a-z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])){3}|((?=.*\d)(?=.*[a-z])(?=.*[\u0080-\uffff])){3}|((?=.*\d)(?=.*[A-Z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])){3}|((?=.*\d)(?=.*[A-Z])(?=.*[\u0080-\uffff])){3}|((?=.*\d)(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}|((?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])){3}|((?=.*[a-z])(?=.*[A-Z])(?=.*[\u0080-\uffff])){3}|((?=.*[a-z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}|((?=.*[A-Z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}).{8,}$/;

function validatePhone($phone) {
    return regex_phone.test($phone);
}
function validateEmail($email) {
    return regex_email.test($email);
}
function validateZip($zip) {
    return regex_zip.test($zip);
}
function validatePassword($password) {
    return regex_password.test($password);
}