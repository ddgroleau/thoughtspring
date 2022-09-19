import validator from 'validator';

export default class FormValidator {
    public static isInvalidEmail(email:string) {
        return !validator.isEmail(email);
    }

    public static isInvalidMessage(message:string) {
        return !message || message.trim().length < 1;
    }

    public static sanitizeMessage(message:string):string {
        let sanitizedMessage = message;
        const disallowedStrings = ['>','<','&','|','!','=','~','*','()','--',';'];
        disallowedStrings.forEach(string => sanitizedMessage = sanitizedMessage.replaceAll(string,"."));
        return sanitizedMessage;
    }
}