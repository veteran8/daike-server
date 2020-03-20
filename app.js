/*
 * @Author: veteran
 * @Date: 2020-03-19 22:34:39
 * @LastEditTime: 2020-03-20 12:39:48
 * @Description: 服务端入口
 */
const Koa = require("koa");
const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const app = new Koa();
app.use(cors());
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
const courseRouter = require("./routes/course");

app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(courseRouter.routes()).use(courseRouter.allowedMethods());

app.listen(8080);
