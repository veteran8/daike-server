/*
 * @Author: veteran
 * @Date: 2020-03-20 13:20:01
 * @LastEditTime: 2020-03-20 15:37:51
 * @Description:
 */
const courseModel = require("../model/courseModel");

const getCourse = async (ctx, next) => {
  let body = ctx.request.body;
  let { status } = body;

  let courses = await courseModel.find({
    status
  });

  if (courses) {
    ctx.status = 200;
    ctx.body = {
      code: 1,
      data: courses
    };
  } else {
    ctx.status = 200;
    ctx.body = {
      code: 0,
      msg: "参数错误！"
    };
  }
};

module.exports = {
  getCourse,
  substituteCourse
};
