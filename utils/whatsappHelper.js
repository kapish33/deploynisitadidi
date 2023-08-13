export const number = '472802851';
const message = `I would like to know more about the *Thought Leadership*`;
const encodedMessage = encodeURIComponent(message);
export const whatsAppURL = (enc = encodedMessage) => {
  return `https://wa.me/+32${number}?text=${enc}`;
};
