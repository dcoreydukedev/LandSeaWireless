import { RequiredField, RequiredFieldProps } from './modules/RequiredField';
import *  as RegexValidation from './modules/RegexValidation';
import * as templateText from './modules/TemplateText';
import * as steps from './modules/Steps';

namespace Wizard {

    // #region Data Binding
    export function DataBind(element: { value: any; addEventListener: (arg0: string, arg1: any, arg2: boolean) => void; }, data: any) {
        this.data = data;
        this.element = element;
        element.value = data;
        element.addEventListener("change", this, false);
    }

    DataBind.prototype.handleEvent = function (event: { type: any; }) {
        switch (event.type) {
            case "change": this.change(this.element.value);
        }
    };

    DataBind.prototype.change = function (value: any) {
        this.data = value;
        this.element.value = value;
    };

    // #endregion

    

}
