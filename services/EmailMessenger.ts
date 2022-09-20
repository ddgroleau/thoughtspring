import nodemailer from 'nodemailer';

export default class EmailMessenger {

    public static async sendMessage({to,subject,text}
        :{to:string,subject:string,text:string}): Promise<any> {
        return new Promise((resolve, reject) => {
            const smtpclient:nodemailer.Transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                port: parseInt(process.env.SMTP_PORT as string),
                auth: {
                    user: process.env.EMAIL_ACCOUNT,
                    pass: process.env.EMAIL_PASSWORD,
                }
            });

            smtpclient.sendMail(
                { to: to, from: process.env.EMAIL_DAEMON, subject: subject, text: text }
                , (error, info) => {
                    if(error) resolve(false);
                    else resolve(true);
                });
        });
    };
}