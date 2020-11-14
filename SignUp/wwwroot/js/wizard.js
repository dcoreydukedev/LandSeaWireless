let $currentStep = 0;
let $lastStep = 8;
let $wizard = $('.wizard');
let $nextButton = $('.wizard_step_nav_next');
let $backButton = $('.wizard_step_nav_prev');
let $doneButton = $('.wizard_step_nav_done');

let requiredFields = {
    Username: {
        control: $('#txtUsername'),
        valmsg: '* Username Required. Must be between 6 and 128 chars long characters long.',
        infomsg: 'Must be between 6 and 128 chars long characters long.'
    },
    Password: {
        control: $('#txtPassword'),
        valmsg: '* Password Required. At least 8 Chars. Must contain at least 1 Capital Letter, 1 Lower Case Letter, 1 Number, and 1 Special Character (&#33;&#35;&#36;&#64;)',
        infomsg: 'At least 8 Chars. Must contain at least 1 Capital Letter, 1 Lower Case Letter, 1 Number, and 1 Special Character (&#33;&#35;&#36;&#64;)'
    },
    FirstName: {
        control: $('#txtFirstName'),
        valmsg: '* First Name Required. Should be same as appears on valid state issued ID.',
        infomsg: 'Should be same as appears on valid state issued ID'
    },
    LastName: {
        control: $('#txtLastName'),
        valmsg: '* Last Name Required. Should be same as appears on valid state issued ID.',
        infomsg: 'Should be same as appears on valid state issued ID'
    },
    Email: {
        control: $('#txtEmail'),
        valmsg: '* Valid Email Required. Should be in format: yourname@domain.com',
        infomsg: 'Should be in format: yourname@domain.com'
    },
    Phone: {
        control: $('#txtPhone'),
        valmsg: '* Valid Phone Number Required. Should be in format: (123) 456-7890',
        infomsg: 'Should be in format: (123) 456-7890'
    },
    InstallAddress: {
        control: $('#txtInstallAddress'),
        valmsg: '* Address Required. Physical Address of the service installation.',
        infomsg: 'Physical Address of the service installation.'
    },
    InstallCity: {
        control: $('#txtInstallCity'),
        valmsg: '* City Required. City of the service installation.',
        infomsg: 'City of the service installation.'
    },
    InstallZip: {
        control: $('#txtInstallZip'),
        valmsg: '* Zip Code Required. Zip Code of the service installation.',
        infomsg: 'Zip Code of the service installation.'
    },
    BillingAddress: {
        control: $('#txtBillingAddress'),
        valmsg: '* Address Required. Billing Address on your Credit Card.',
        infomsg: 'Billing Address on your Credit Card.'
    },
    BillingCity: {
        control: $('#txtBillingCity'),
        valmsg: '* City Required. City on your Credit Card.',
        infomsg: 'City on your Credit Card.'
    },
    BillingZip: {
        control: $('#txtBillingZip'),
        valmsg: '* Zip Code Required. Zip Code on your Credit Card',
        infomsg: 'Zip Code on your Credit Card'
    }
};

$(function () {

    $currentStep = 1;

    setWizardStep($currentStep);

    // Client Type Defaults to Person
    $('input:radio[name="rbClientType"]').filter('[value="person"]').attr('checked', true);
    $('input[id=hfClientType]').val($('input:radio[name="rbClientType"]').val());

});

function setWizardStep($step) {
    // Hide All Steps
    $('.wizard_step').hide();
    $('#wizard_step_' + $step.toString()).show();
    console.log("Showing Step: " + $step);
}

// Next Button Click
$nextButton.on('click', function (e) {
    e.preventDefault();

    if ($(this).attr('id') === 'wizard_step_1_nav_next') {
        // Validate Username and Password

    }

    $currentStep++;

    setWizardStep($currentStep);
});

$backButton.on('click', function (e) {
    e.preventDefault();
    $currentStep--;
    setWizardStep($currentStep);
});

$doneButton.on('click', function (e) {
    e.preventDefault();
    $currentStep = $lastStep;
    //TODO: Validate and Process Data
});

// Set hfClientType to value of rbClientType
$('input:radio[name="rbClientType"]').on('click', function () {
    var $clientType = $(this).val();
    $('input[id=hfClientType]').val($clientType);
});


let regex_phone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
let regex_email = /\S+@\S+\.\S+/;
let regex_zip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
//Password must - Have at least 8 characters - Contain characters from at least 3 of the following categories: - English uppercase letters (A-Z) - English lowercase letters (a-z) - numbers (0-9) - Non-alphanumeric symbols (e.g.: !, #, $, %, Space) - Unicode characters
let regex_password = /^(((?=.*\d)(?=.*[a-z])(?=.*[A-Z])){3}|((?=.*\d)(?=.*[a-z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])){3}|((?=.*\d)(?=.*[a-z])(?=.*[\u0080-\uffff])){3}|((?=.*\d)(?=.*[A-Z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])){3}|((?=.*\d)(?=.*[A-Z])(?=.*[\u0080-\uffff])){3}|((?=.*\d)(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}|((?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])){3}|((?=.*[a-z])(?=.*[A-Z])(?=.*[\u0080-\uffff])){3}|((?=.*[a-z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}|((?=.*[A-Z])(?=.*[!"#$%&'()*+, \-./:;<=>?@ [\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}).{8,}$/;

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