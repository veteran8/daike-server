/*
 * @Author: veteran
 * @Date: 2020-03-19 22:34:39
 * @LastEditTime: 2020-03-19 23:34:58
 * @Description: 服务端入口
 */
const Koa = require("koa");
const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());
mongoose.connect(
  "mongodb://localhost/daike",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("数据连接成功");
  }
);
const userRouter = require("./routes/users");

app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.listen(8080);
