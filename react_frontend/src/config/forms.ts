const contactFormId = import.meta.env.VITE_FORMSPREE_CONTACT_FORM_ID ?? "YOUR_CONTACT_FORM_ID";
const feedbackFormId = import.meta.env.VITE_FORMSPREE_FEEDBACK_FORM_ID ?? "YOUR_FEEDBACK_FORM_ID";

export const contactFormAction = `https://formspree.io/f/${contactFormId}`;
export const feedbackFormAction = `https://formspree.io/f/${feedbackFormId}`;

export const formsConfigured = ![contactFormId, feedbackFormId].some((id) => id.startsWith("YOUR_"));
