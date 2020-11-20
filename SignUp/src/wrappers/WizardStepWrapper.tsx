import React from "react";
import WizardStepTitleWrapper from "../wrappers/WizardStepTitleWrapper";
import WizardStepInfoWrapper from "../wrappers/WizardStepInfoWrapper";
import WizardStepContentWrapper from "../wrappers/WizardStepContentWrapper";
import WizardStepNavigationWrapper from "../wrappers/WizardStepNavigationWrapper";

export const WizardStepWrapper = () => {
    return(
      <div className="wrapper wizard_step_wrapper">
          <WizardStepTitleWrapper />
          <WizardStepInfoWrapper />
          <WizardStepContentWrapper />
          <WizardStepNavigationWrapper />
      </div>
    )
  }

  export default WizardStepWrapper