import axios from "axios";

export default class SiteVerifier {
    public static async verifySite(reCaptchaToken:string):Promise<boolean> {
        const SCORE_THRESHOLD = 0.5;
        const siteVerification = await axios({
            method: "POST",
            url: "https://www.google.com/recaptcha/api/siteverify",
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: reCaptchaToken
            },
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            }
        }).catch(error => error);

        return siteVerification && 
          siteVerification.data.success && 
          siteVerification.data.action === "submitContactForm" && 
          siteVerification.data.score > SCORE_THRESHOLD;
    }
}