export const regex_phone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
export const regex_email = /\S+@\S+\.\S+/;
export const regex_zip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export function validatePhone($phone) {
    return regex_phone.test($phone);
}
export function validateEmail($email) {
    return regex_email.test($email);
}
export function validateZip($zip) {
    return regex_zip.test($zip);
}