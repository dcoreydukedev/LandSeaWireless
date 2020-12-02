
const regex_letters = /^[A-Za-z]+$/;
const regex_numbers = /^[0-9]+$/;
const regex_letters_and_numbers = /^[A-Za-z0-9]+$/;
const regex_phone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
const regex_email = /\S+@\S+\.\S+/;
const regex_zip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;


export const ValidateLettersOnly = (s) => regex_letters.test(s);


export const ValidateNumbersOnly = (s) => regex_numbers.test(s);

export const ValidateLettersAndNumbers = (s) => regex_letters_and_numbers.test(s);

export const ValidatePhone = (s) => regex_phone.test(s);

export const ValidateEmail = (s) => regex_email.test(s);

export const ValidateZip = (s) => regex_zip.test(s);
