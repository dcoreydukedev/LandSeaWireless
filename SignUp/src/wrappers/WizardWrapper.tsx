import React from "react";
import WizardContainer from "../containers/WizardContainer";

export default class WizardWrapper extends React.Component{
    render() {
        return (
         <div className="wrapper wizard_wrapper">
            <WizardContainer />
         </div>
        );
      }
}