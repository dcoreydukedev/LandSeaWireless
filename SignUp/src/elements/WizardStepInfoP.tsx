import React, {FC} from 'react'

interface Props{
    Text: string;
}

export const WizardStepInfoP : FC<Props> = (props) => {
    return(
        <p className="element wizard_step_info_p">
            {props.Text}
         </p>
    )
}

export default WizardStepInfoP