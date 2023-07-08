export const number = '472802851';
const message = `Hi, can you send me *program details*?`;
const encodedMessage = encodeURIComponent(message);
export const whatsAppURL = (enc = encodedMessage) => {
  return `https://wa.me/+32${number}?text=${enc}`;
};
