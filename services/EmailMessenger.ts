import nodemailer from 'nodemailer';

export default class EmailMessenger {

    public static async sendMessage({to,subject,text}
        :{to:string,subject:string,text:string}): Promise<any> {

        console.log(process.env.EMAIL_ACCOUNT);
        console.log(process.env.EMAIL_PASSWORD);

        const smtpclient:nodemailer.Transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_ACCOUNT,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        return new Promise((resolve, reject) => 
            smtpclient.sendMail(
                { to: to, from: process.env.EMAIL_DAEMON, subject: subject, text: text }
                , (error, info) => {
                    console.log(error);
                    if(error) resolve(false);
                    else resolve(true);
                }));
    };
}