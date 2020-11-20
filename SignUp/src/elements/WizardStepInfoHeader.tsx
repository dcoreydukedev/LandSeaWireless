import React, {FC} from 'react'

interface Props{
    Text: string;
}
export const WizardStepInfoHeader: FC<Props> = (props) => {
    return(
        <h2 className="element wizard_step_info_header">
            {props.Text}
        </h2>
    )
}

export default WizardStepInfoHeader


