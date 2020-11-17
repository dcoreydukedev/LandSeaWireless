import * as templateText from './templateText';

export let navPrev = `<a id="wizard_step_nav_prev" class="wizard_step_nav wizard_step_nav_prev" onclick="prev();" href="#">
                    <i class="fas fa-arrow-left"></i>&nbsp;Prev
               </a>`;
export let navSp = `&nbsp;&nbsp;<i class="fas fa-grip-lines-vertical"></i>&nbsp;&nbsp;`;
export let navNext = `<a id="wizard_step_nav_next" class="wizard_step_nav wizard_step_nav_next" onclick="next();" href="#">
                    Next&nbsp;<i class="fas fa-arrow-right"></i>
                </a>`;
export let navDone = `<a id="wizard_step_nav_done" class="wizard_step_nav wizard_step_nav_done" onclick="done();" href="#">
                   <i class="fas fa-check-circle"></i>&nbsp;Done
               </a>`;

export let step = class {
    name: string;
    number: number;
    title: string;
    view: URL;
    nav: string;
    infoText: string;
    constructor(name, number, title, view, nav, infoText) {
        this.name = name;
        this.number = number;
        this.title = title;
        this.view = view;
        this.nav = nav;
        this.infoText = infoText;
    }
};

export let step_ClientType = new step(
    'Select Client Type',
    '1',
    'Step 1: I Am...',
    '/SignUp/ClientType',
    navNext,
    templateText.tempInfoText
);

export let step_PersonContactInfo = new step(
    'Person Contact Info',
    '2',
    'Step 2: Provide Contact Info',
    '/SignUp/ContactInfo',
    navPrev + navSp + navNext,
    templateText.tempInfoText
);

export let step_CompanyContactInfo = new step(
    'Company Contact Info',
    '2',
    'Step 2: Provide Company Contact Info',
    '/SignUp/CompanyContactInfo',
    navPrev + navSp + navNext,
    templateText.tempInfoText
);

export let step_InstallAddress = new step(
    'Installation Address',
    '3',
    'Step 3: Where Do We Install the Service?',
    '/SignUp/InstallAddress',
    navPrev + navSp + navNext,
    templateText.tempInfoText
);

export let step_CustomerHasRouter = new step(
    'Customer Has Router',
    '4',
    'Step 4: Do You Have A Router?',
    '/SignUp/CustomerHasRouter',
    navPrev + navSp + navNext,
    templateText.tempInfoText
);

export let step_RouterOption = new step(
    'Router Options',
    '5',
    'Step 5: Router Options',
    '/SignUp/RouterOption',
    navPrev + navSp + navNext,
    templateText.tempInfoText
);

export let step_AntennaOptions = new step(
    'Antenna Options',
    '6',
    'Step 6: Antenna Options',
    '/SignUp/AntennaOption',
    navPrev + navSp + navNext,
    templateText.tempInfoText
);

export let step_ProfessionalInstallation = new step(
    'Professional Installation',
    '7',
    'Step 7: Would You Like Professional Installation?',
    '/SignUp/ProfessionalInstallation',
    navPrev + navSp + navNext,
    templateText.tempInfoText
);

export let step_BillingInfo = new step(
    'Billing Info',
    '8',
    'Step 8: Provide Your Billing Info',
    '/SignUp/BillingInfo',
    navPrev + navSp + navDone,
    templateText.tempInfoText
);

export let steps = [
    step_ClientType,
    step_PersonContactInfo,
    step_CompanyContactInfo,
    step_InstallAddress,
    step_CustomerHasRouter,
    step_RouterOption,
    step_AntennaOptions,
    step_ProfessionalInstallation,
    step_BillingInfo
];

