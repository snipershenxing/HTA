const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const Cookie = () => {
  let rand32 = '';
  for (let i = 0; i < 32; i++) {
    rand32 += pool[Math.floor(Math.random() * pool.length)]
  }
  return rand32;
};

module.exports = Cookie;