/*
 * @Author: veteran
 * @Date: 2020-03-20 13:19:15
 * @LastEditTime: 2020-03-20 15:34:38
 * @Description: course routes
 */
const Router = require("koa-router");
const router = new Router();
const courseController = require("../app/controllers/courseController");

router.post("/course", courseController.getCourse);

module.exports = router;
