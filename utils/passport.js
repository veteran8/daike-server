/*
 * @Author: veteran
 * @Date: 2020-03-19 23:39:08
 * @LastEditTime: 2020-03-19 23:57:07
 * @Description:
 */
const bcrypt = require("bcrypt");

const encrypt = async (password, saltTimes) => {

  const hash = await bcrypt.hash(password, saltTimes);
  return hash;
};

const validate = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

module.exports = {
  encrypt,
  validate
};
