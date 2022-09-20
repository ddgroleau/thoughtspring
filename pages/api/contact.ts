import type { NextApiRequest, NextApiResponse } from 'next';
import ResponseMessages from '../../models/ResponseMessages';
import EmailMessenger from '../../services/EmailMessenger';
import FormValidator from '../../services/FormValidator';
import MemoryCache from '../../services/MemoryCache';
import SiteVerifier from '../../services/SiteVerifier';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        if(req.method === "POST") {
            if(MemoryCache.isCachedData("contactForm",{email:req.body.email,message:req.body.message},1000*60*5))
                return res.status(429).json({message:ResponseMessages.DUPLICATE_REQUEST});
            if(FormValidator.isInvalidEmail(req.body.email)) 
                return res.status(400).json({message:ResponseMessages.INVALID_EMAIL});
            if(FormValidator.isInvalidMessage(req.body.message)) 
                return res.status(400).json({message:ResponseMessages.INVALID_MSG});

            const sanitizedMessage = FormValidator.sanitizeMessage(req.body.message);

            console.log("starting site verification");
            const siteVerification = await SiteVerifier.verifySite(req.body.reCaptchaToken);
            console.log("end site verification");
      
            if(siteVerification) {
                const autoReply = {
                    to:req.body.email,
                    subject:"Thanks for your message to ThoughtSpring Creative!",
                    text:`Your message has been received. 
                      \nWe're so happy you've reached out to us! Expect a response within 1-2 business days.
                      \nIf you have an urgent request or don't hear from us, please call (978) 999 - 2047.
                      \n\nLooking forward to connecting with you,
                      \nThe ThoughtSpring Creative Team`
                };
                const notification = {
                    to: process.env.EMAIL_DAEMON as string,
                    subject: "Contact Form Submission Recieved",
                    text: `Recieved at ${new Date()}.
                    \n - Contact Email: ${req.body.email}
                    \n - Contact Message: "${sanitizedMessage}"`
                };
              
                const autoReplyStatus = await EmailMessenger.sendMessage(autoReply);
                const notificationStatus = await EmailMessenger.sendMessage(notification);
                
                console.log(autoReply);
                console.log(notificationStatus);

                if(!autoReplyStatus || !notificationStatus) 
                    throw new Error(ResponseMessages.EMAIL_ERR);
                return res.status(200).json({message:ResponseMessages.SUCCESS});
            }
            return res.status(401).json({message:ResponseMessages.RECAPTCHA_ERR});
        } 
        return res.status(405).json({message:ResponseMessages.INVALID_METHOD});
    } catch (err) {
        console.error(err);
        return res.status(400).json({message:ResponseMessages.INTERNAL_ERR});
    }
}
      