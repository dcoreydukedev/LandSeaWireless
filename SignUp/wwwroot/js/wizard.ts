import * as requiredFields from './modules/requiredFields';
import * as templateText from './modules/templateText';
import * as steps from './modules/steps';
import * as regexVal from './modules/regexValidation';
import * as viewModels from './modules/viewModels';

 
// #region Data Binding

export function MyCtor(element, data) {
    this.data = data;
    this.element = element;
    element.value = data;
    element.addEventListener("change", this, false);
}

 MyCtor.prototype.handleEvent = function (event) {
    switch (event.type) {
        case "change": this.change(this.element.value);
    }
};

MyCtor.prototype.change = function (value) {
    this.data = value;
    this.element.value = value;
};

// #endregion

