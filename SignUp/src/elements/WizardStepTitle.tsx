import React, {FC} from 'react'

interface Props{
    Title: string;
}
export const WizardStepTitle : FC<Props> = (props) => {
    return(
        <h2 className = "element wizard_step_title">
            {props.Title}
        </h2>
    )
}

export default WizardStepTitle