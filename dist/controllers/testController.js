"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const testService_1 = require("../services/testService");
class HelloController {
    static sayHello(req, res) {
        return res.send(new testService_1.TestService().helloFunction());
    }
}
exports.HelloController = HelloController;
