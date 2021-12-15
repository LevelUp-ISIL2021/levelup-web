export function isTextEmpty(text) {
    return text.trim() === '';
}

export function isTextLongEnough(text, length) {
    return text.trim().length >= length;
}

export function isEmailFormatValid(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'gi')
    return emailRegex.test(email.trim());
}

export function isPasswordFormatValid(password) {
    return password.length >= 8;
}

export function isReviewFormatValid(review) {
    const regex = new RegExp(/[\s\S]*[A-za-zÁÉÍÓÚáéíóú]{3,}[\s\S]*/);
    return regex.test(review);
}