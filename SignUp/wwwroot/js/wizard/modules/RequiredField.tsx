///<reference path = "../wizard.tsx" />
import * as React from "react";

    export interface RequiredFieldProps {
        name: string
        controlId: string
        controlType: string
        value: string
        valMsg: string
        isVal: boolean
    }

   
    export const RequiredField: React.FC<RequiredFieldProps> = ([name, controlId, controlType, value, valMsg, isVal]) => {

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { };

        <div className="form-group row">
            <label className="col-sm-2 col-form-label">{name}</label>
            {controlType === 'text' && isVal === true &&
                <div className="col-sm-10">
                <input
                    type="text"
                    className="formControl highlight-yellow"
                    id={controlId}
                    onChange={ handleInputChange}
                    value={value} />
                    <span className='info'>{valMsg}</span>
                </div>
            }
            {controlType === 'text' && isVal === false &&
                <div className="col-sm-10">
                    <input type={controlType} className="formControl highlight-red" id={controlId} value={value} />
                    <span className='val'>* {name} required; {valMsg}</span>
                </div>
            }
        </div>

    };

