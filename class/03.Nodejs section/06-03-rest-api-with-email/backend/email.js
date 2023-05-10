import { getToday } from "./utils.js";
import nodemailer from "nodemailer";

export const checkValidationEmail = async (email) => {
  if (email === undefined || !email.includes("@")) {
    console.log("에러발생!!! 이메일을 올바르게 입력해주세요.");
    return false;
  } else {
    return true;
  }
};

export const getWelcomeTemplate = (name, age, school) => {
  const result = `
        <html>
            <body>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 500px;">
                <h1>${name}님 가입을 환영합니다! ! ! </h1>
                <hr/>
                <div style="color: blue;">이름 : ${name}</div>
                <div>나이 : ${age}세</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${getToday()}</div>
            </body>
        </html>
    `;
  return result;
};

export const sendWelcomeTemplateToEmail = async (email, emailTemplate) => {
  const authUser = process.env.GOOGLE_MAIL_AUTH_USER;
  const authPass = process.env.GOOGLE_MAIL_AUTH_PASS;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: authUser,
      pass: authPass,
    },
  });
  const sendMail = await transporter.sendMail({
    from: "zeler1004@gmail.com",
    to: email,
    subject: `[API테스트] 가입을 환영합니다.`,
    html: emailTemplate,
  });

  return console.log(`${email}주소로 ${emailTemplate}을 전송합니다,`);
};
