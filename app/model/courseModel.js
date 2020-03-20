/*
 * @Author: veteran
 * @Date: 2020-03-20 13:20:12
 * @LastEditTime: 2020-03-20 15:38:56
 * @Description: course model
 */
const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: String
  },
  publisher: {
    type: String,
    required: true
  },
  publisherHeader: {
    type: String
  },
  publisherName: {
    type: String
  },
  studentId: {
    type: String
  },
  schoolId: {
    required: true,
    type: String
  },
  school: {
    type: String
  },
  phone: {
    type: String
  },
  publishTime: {
    type: String
  },
  closeTime: {
    type: String
  },
  remark: {
    type: String
  },
  receiver: {
    type: String
  },
  receiverName: {
    type: String
  },
  province: {
    type: Number
  },
  college: {
    type: String
  },
  major: {
    type: String
  },
  courseName: {
    type: String
  },
  courseTime: {
    required: true,
    type: String
  },
  courseClass: {
    type: String
  },
  coursePlace: {
    required: true,
    type: String
  },
  reward: {
    type: Number
  },
  hasName: {
    type: Boolean
  },
  hasStuId: {
    type: Boolean
  },
  hasPhone: {
    type: Boolean
  },
  hasReward: {
    type: Boolean
  }
});
module.exports = mongoose.model("CourseSchema", courseSchema, "courses");
