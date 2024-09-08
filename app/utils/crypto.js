// utils/crypto.js
//
import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Hex.parse('1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');
const iv = CryptoJS.enc.Hex.parse('fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321');

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key,{iv:iv}).toString();
};

export const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key,{iv:iv});
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};