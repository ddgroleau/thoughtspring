/* eslint-disable max-len */
export default class ResponseMessages {
    public static get DUPLICATE_REQUEST() { return "It looks like we've recieved a similar request recently. Please wait before submitting this request again."; }
    public static get INVALID_EMAIL() { return "That doesn't look like a valid email address. Please try again with something else."; }
    public static get INVALID_MSG() { return "Your message appears empty. Please try again with something else."; }
    public static get EMAIL_ERR() { return "Failed to send notification and/or autoreply email(s)."; }
    public static get SUCCESS() { return "Thanks for your submission! Please check your inbox for next steps."; }
    public static get RECAPTCHA_ERR() { return "Your request has been identified as possible illegitimate or malicious activity and has been rejected."; }
    public static get INVALID_METHOD() { return "Invalid method in HTTP header."; }
    public static get INTERNAL_ERR() { return "An unexpected error occurred. Please try again."; }
}

      