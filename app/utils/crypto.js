//Function responsible for decryption and encryption using aes256.
// Requires a randomly generated key
var crypto = require('crypto')

export const encryptData = (plaintext, key) => {
    var mykey = crypto.createCipher('aes-256-cbc', key);
    var mystr = mykey.update(plaintext, 'utf8', 'hex')
    mystr += mykey.final('hex');
  return mystr
};

export const decryptData = (ciphertext, key) => {
  var mykey = crypto.createDecipher('aes-256-cbc', key);
  var mystr = mykey.update(ciphertext, 'hex', 'utf8')
  mystr += mykey.final('utf8');
  return mystr;
};

