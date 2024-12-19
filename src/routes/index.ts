import { Router, Request, Response } from 'express';
import { HelloController } from '../controllers/testController';

const router = Router();

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
    res.status(200).send({"status": "Authorized"});
  } else {
    res.status(401).send({"status": "Unauthorized"});
  }
});

router.get('/hello', HelloController.sayHello);

export default router;
