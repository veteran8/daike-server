/*
 * @Author: veteran
 * @Date: 2020-03-19 22:53:58
 * @LastEditTime: 2020-03-19 22:57:13
 * @Description: user collection
 */
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    require: true
  },
  account: {
    type: String
  },
  userName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  headerImg: {
    type: String
  },
  studentId: {
    type: String
  },
  school: {
    type: String
  },
  schoolId: {
    type: String
  },
  provinceId: {
    type: Number
  },
  major: {
    type: String
  },
  college: {
    type: String
  },
  wechat: {
    type: String
  },
  qq: {
    type: String
  },
  collections: {
    type: Array
  }
});

module.exports = mongoose.model("UserSchema", UserSchema, "user");
