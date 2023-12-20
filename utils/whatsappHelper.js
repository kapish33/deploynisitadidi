export const number = '472802851';
const message = `I want to know more about programs during Gurudev's europe visit`;
const encodedMessage = encodeURIComponent(message);
export const whatsAppURL = (enc = encodedMessage) => {
  return `https://wa.me/+32${number}?text=${enc}`;
};
