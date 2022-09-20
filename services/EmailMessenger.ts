import nodemailer from 'nodemailer';

export default class EmailMessenger {

    public static async sendMessage({to,subject,text}
        :{to:string,subject:string,text:string}): Promise<any> {

        const smtpclient:nodemailer.Transporter = nodemailer.createTransport({
            service: 'gmail',
            port: parseInt(process.env.SMTP_PORT as string),
            secure: true,
            auth: {
                user: process.env.EMAIL_ACCOUNT,
                pass: process.env.EMAIL_PASSWORD,
            }
        });

        smtpclient.verify((error, success) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        return new Promise((resolve, reject) =>
            smtpclient.sendMail(
                { to: to, from: process.env.EMAIL_DAEMON, subject: subject, text: text }
                , (error, info) => {
                    console.log("err: " + error);
                    console.log("info: " + info);
                    if(error) resolve(false);
                    else resolve(true);
                }));
    };
}