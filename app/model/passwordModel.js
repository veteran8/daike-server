/*
 * @Author: veteran
 * @Date: 2020-03-19 23:43:44
 * @LastEditTime: 2020-03-19 23:45:40
 * @Description: password model
 */

const mongoose = require("mongoose");
const passwordSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("PasswordSchema", passwordSchema, "password");
