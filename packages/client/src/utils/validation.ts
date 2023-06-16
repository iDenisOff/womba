// Строка должна содержать только буквы латинского алфавита (в любом регистре),
// цифры, дефисы "-" и знаки подчёркивания "_".
// Длина строки должна быть от 3 до 20 символов.
// Строка не должна заканчиваться на цифру.
export function loginValidation(value: string): boolean | string {
    const rule = /^[a-zA-Z0-9_-]{3,20}(?<!\d)$/;
    const isMatched = rule.test(value);

    return isMatched || 'Неверный логин';
}
const passwordRule = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,40})$/;

// Строка должна содержать как минимум одну цифру
// Строка должна содержать как минимум одну заглавную букву
// Строка не должна содержать символы, отличные от букв латинского алфавита,
// цифр и символов
// Длина строки должна быть от 8 до 40 символов
export function passValidation(value: string): boolean | string {
    const isMatched = passwordRule.test(value);

    return isMatched || 'Неверный пароль';
}

export function phoneValidation(value: string): boolean | string {
    const rule = /^\+?\d{10,15}$/;
    const isMatched = rule.test(value);

    return isMatched || 'Неверный телефон';
}
export function nameValidation(value: string): boolean | string {
    const rule = /^[А-ЯЁA-Z][а-яёa-z\-]*$/;
    const isMatched = rule.test(value);

    return isMatched || 'Неверное имя';
}

export function emailValidation(value: string): boolean | string {
    const rule = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
    const isMatched = rule.test(value);

    return isMatched || 'Неверный email';
}

export enum ValidationMessage {
    Required = 'Обязательно'
}
