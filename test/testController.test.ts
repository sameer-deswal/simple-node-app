import request from 'supertest';
import express, { Express } from 'express';
import router from "../src/routes";


const app: Express = express();
app.use(express.json());
app.use('/', router);

describe('TestController Tests', () => {
    // Test for root endpoint
    test('GET /hello should return Hello World message', async () => {
      const response = await request(app)
        .get('/hello')
        .expect('Content-Type', /json/)
        .expect(200);
  
      expect(response.body).toEqual({ message: 'Hello World' });
    });
})  