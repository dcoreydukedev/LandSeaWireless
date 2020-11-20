import React from "react";

export const AppWrapper = () => {    
        return (
         <div className="wrapper app_wrapper">
            
         </div>
        );      
}
export const HeaderWrapper = () => {
    return (
     <div className="wrapper header_wrapper">
        
     </div>
    );
}

export const WizardStepContentWrapper = () => {
    return (
     <div className="wrapper wizard_step_content_wrapper">
        
     </div>
    );
}

export const WizardStepInfoWrapper = () => {    
    return (
     <div className="wrapper wizard_step_info_wrapper">
        
     </div>
    );      
}

export const WizardStepNavigationWrapper = () => {
    return (
     <div className="wrapper wizard_step_navigation_wrapper">

     </div>
    );
}
export const WizardStepTitleWrapper = () =>{
        return (
         <div className="wrapper wizard_step_title_wrapper">
         </div>
        );
}

export const WizardStepWrapper = () => {
    return(
      <div className="wrapper wizard_step_wrapper">
          <WizardStepTitleWrapper />
          <WizardStepInfoWrapper />
          <WizardStepContentWrapper />
          <WizardStepNavigationWrapper />
      </div>
    );
  }

  export const WizardWrapper = () => {
        return (
         <div className="wrapper wizard_wrapper">
            
         </div>
        );
}