import FormData from "form-data";
import Mailgun from "mailgun.js";
import emailConfig from "../config/email.config";

const mailgun = new Mailgun(FormData);
// console.log(emailConfig);
const mg = mailgun.client({
  username: "api",
  // url: emailConfig.domain,
  key: emailConfig.apikey || "key",
  // public_key: emailConfig.validationKey,
});

// mg.domains
//   .list()
//   .then((domains) => console.log(domains)) // logs array of domains
//   .catch((err) => console.error(err));
export default mg;
