import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const mailchimpUrl = process.env.REACT_APP_MAILCHIMP_URL;
  const mailchimpUser = process.env.REACT_APP_MAILCHIMP_U;
  const mailchimpListId = process.env.REACT_APP_MAILCHIMP_ID;
  const hasMailchimpConfig = mailchimpUrl && mailchimpUser && mailchimpListId;

  // Prevent runtime crashes when Mailchimp env vars are not configured.
  if (!hasMailchimpConfig) {
    return null;
  }

  const postUrl = `${mailchimpUrl}?u=${mailchimpUser}&id=${mailchimpListId}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
