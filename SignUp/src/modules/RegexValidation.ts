
export interface RegexValidation {
    isValid(s: string): boolean;
}

const regex_letters = /^[A-Za-z]+$/;
const regex_numbers = /^[0-9]+$/;
const regex_letters_and_numbers = /^[A-Za-z0-9]+$/;
const regex_phone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
const regex_email = /\S+@\S+\.\S+/;
const regex_zip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export class ValidateLettersOnly implements RegexValidation {
    isValid(s: string) {
        return regex_letters.test(s);
    }
};

export class ValidateNumbersOnly implements RegexValidation {
    isValid(s: string) {
        return regex_numbers.test(s);
    }
};

export class ValidateLettersAndNumbersOnly implements RegexValidation {
    isValid(s: string) {
        return regex_letters_and_numbers.test(s);
    }
};

export class ValidatePhoneNumber implements RegexValidation {
    isValid(s: string) {
        return regex_phone.test(s);
    }
};

export class ValidateEmailAddress implements RegexValidation {
    isValid(s: string) {
        return regex_email.test(s);
    }
};

export class ValidateZipCode implements RegexValidation {
    isValid(s: string) {
        return regex_zip.test(s);
    }
};

