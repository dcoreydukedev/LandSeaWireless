import React from "react";
import WizardStepInfoHeader from "../elements/WizardStepInfoHeader";
import WizardStepInfoP from "../elements/WizardStepInfoP";

export const WizardStepInfoContainer = () => {
        return(
            <div className ="container wizard_step_info_container">
                <WizardStepInfoHeader Text =  "Wizard Step Info Header" />
                <WizardStepInfoP Text = "Wizard Step Info Paragraph" />
            </div>
        )
}

export default WizardStepInfoContainer