"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testController_1 = require("../controllers/testController");
const router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.send({ message: 'Hello World' });
});
router.get('/test', function (req, res, next) {
    res.send({ message: 'Hello World' });
});
router.get('/authorize', function (req, res, next) {
    const { user, resource, action, hasPermission } = req.body;
    console.log(user, resource, action);
    if (hasPermission) {
        res.status(200).send({ "status": "Authorized" });
    }
    else {
        res.status(401).send({ "status": "Unauthorized" });
    }
});
router.get('/hello', testController_1.HelloController.sayHello);
exports.default = router;
