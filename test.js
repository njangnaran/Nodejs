const nodemailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "82e975b2fa894a",
    pass: "ce751d6a98d2e7",
  },
};
const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "njangnaran@naver.com",
  to: "njangnaran@naver.com",
  subject: "테스트 제목 입니다,",
  text: "노드js한시간 만에 공부",
}; 

send(email_data);
