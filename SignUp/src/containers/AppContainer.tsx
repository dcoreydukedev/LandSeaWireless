import React from "react";
import WizardWrapper from "../wrappers/WizardWrapper";
import HeaderWrapper from "../wrappers/HeaderWrapper";

export const AppContainer = () => {
    return(
      <div className="container app_container">
          <HeaderWrapper />
          <WizardWrapper />
      </div>
    )
  }

  export default AppContainer