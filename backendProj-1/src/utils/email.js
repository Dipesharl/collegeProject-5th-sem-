// import { Resend } from "resend";
// import config from "../config/config.js";

// const resend = new Resend(config.resendEmailApiKey);

// const sendEmail = ({ recipient, subject, html }) => {
//   resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: recipient,
//     subject,
//     html,
//   });
// };

// export default sendEmail;

import { Resend } from "resend";
import config from "../config/config.js";

const resend = new Resend(config.resendEmailApiKey);

const sendEmail = async ({ recipient, subject, html }) => {
  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipient,
      subject,
      html,
    });

    console.log("Email sent:", result);
    return result;
  } catch (err) {
    console.error("sendEmail FAILED:", err);
    throw err;
  }
};

export default sendEmail;