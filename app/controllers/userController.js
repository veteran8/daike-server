/*
 * @Author: veteran
 * @Date: 2020-03-19 22:47:18
 * @LastEditTime: 2020-03-20 12:31:51
 * @Description: user api
 */
const uuidv1 = require("uuid/v1");
const passport = require("../../utils/passport");

const passwordModel = require("../model/passwordModel");
const userModel = require("../model/userModel");

const get = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    msg: "get request!!",
    data: {
      data: ctx.request.query
    }
  };
};
const register = async (ctx, next) => {
  let body = ctx.request.body;
  let account = body.account;
  let user = await userModel.findOne({ account });
  if (user) {
    ctx.body = {
      code: 0,
      msg: "用户名重复！"
    };
    return;
  }
  let userId = uuidv1();
  let newUser = await userModel.create({ userId, account });
  if (newUser) {
    let hash = await passport.encrypt(body.password, 3);
    const result = await passwordModel.create({
      userId,
      hash
    });
    if (result) {
      ctx.body = {
        code: 1,
        msg: "注册成功！",
        data: {
          userId: newUser.userId,
          account: newUser.account
        }
      };
    }
  } else {
    ctx.body = {
      code: 0,
      msg: "注册失败！"
    };
  }
};
const login = async (ctx, next) => {
  let body = ctx.request.body;
  let { account, password } = body;
  let user = await userModel.findOne({
    account
  });
  if (!user) {
    ctx.body = {
      code: 0,
      msg: "account or password error!"
    };
    return;
  }
  let {userId} =  user;
  let userPassword =await passwordModel.findOne({
    userId
  },{hash:1});
  console.log("userPassword: ", userPassword);

  const isMatch = await passport.validate(password, userPassword.hash);
  if (isMatch) {
    ctx.body = {
      code: 1,
      msg: "login success",
      data: user
    };
    return;
  }
  ctx.body = {
    code: 0,
    msg: "account or password error!"
  };
};

module.exports = {
  get,
  register,
  login
};
