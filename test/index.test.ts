import request from 'supertest';
import express, { Express } from 'express';
import router from "../src/routes";

const app: Express = express();
app.use(express.json());
app.use('/', router);

describe('Router Endpoints', () => {
  // Test for root endpoint
  test('GET / should return Hello World message', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ message: 'Hello World' });
  });

  // Test for /test endpoint
  test('GET /test should return Hello World message', async () => {
    const response = await request(app)
      .get('/test')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ message: 'Hello World' });
  });

  // Test for /authorize endpoint - authorized case
  test('GET /authorize should return Authorized for valid request', async () => {
    const testData = {
      user: 'testUser',
      resource: 'testResource',
      action: 'read',
      hasPermission:true
    };

    const response = await request(app)
      .get('/authorize')
      .send(testData)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ status: 'Authorized' });
  });

  // Test for /authorize endpoint - unauthorized case
  test('GET /authorize should return Unauthorized for invalid request', async () => {
    const testData = {
      user: 'invalidUser',
      resource: 'testResource',
      action: 'write'
    };

    const response = await request(app)
      .get('/authorize')
      .send(testData)
      .expect('Content-Type', /json/)
      .expect(401);

    expect(response.body).toEqual({ status: 'Unauthorized' });
  });
});
