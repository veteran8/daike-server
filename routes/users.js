/*
 * @Author: veteran
 * @Date: 2020-03-19 22:39:08
 * @LastEditTime: 2020-03-20 12:24:39
 * @Description: 用户有关路由
 */
const Router = require("koa-router");
const router = new Router();
const userController = require("../app/controllers/userController");

router.get("/get", userController.get);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
