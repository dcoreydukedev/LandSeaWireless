import React from "react";
import WizardStepTitleContainer from "../containers/WizardStepTitleContainer";

export default class WizardStepTitleWrapper extends React.Component{
    render() {
        return (
         <div className="wrapper wizard_step_title_wrapper">
            <WizardStepTitleContainer />
         </div>
        );
      }
}