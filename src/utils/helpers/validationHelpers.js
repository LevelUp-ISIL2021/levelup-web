export function isTextEmpty(text) {
    return text.trim() === '';
}

export function isEmailFormatValid(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'gi')
    return emailRegex.test(email.trim());
}

export function isPasswordFormatValid(password) {
    return password.length >= 8;
}