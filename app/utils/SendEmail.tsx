import FormData from "form-data";
import Mailgun, {
  MailgunClientOptions,
  MessagesSendResult,
  Interfaces,
} from "mailgun.js";
import emailConfig from "../config/email.config";

const mailgun = new Mailgun(FormData);

const mg = mailgun.client({
  username: emailConfig.domain || "api",
  key: emailConfig.apikey || "key",
  timeout: 1000,
});

export default mg;
