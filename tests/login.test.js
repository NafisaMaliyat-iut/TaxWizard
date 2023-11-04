require('dotenv').config();
const request = require('supertest');
const mongoose=require('mongoose');
const app = require('../app');
const server = require('../server');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const connectToDatabase = require('../config/db_connection');

describe('POST /loginUser', () => {
    beforeAll(async () => {
        await mongoose.connection.close();
        await connectToDatabase(process.env._MONGO_URI, "test");
      },25000)

      afterAll(async () => {
        await server.close();
        await mongoose.connection.collections.users.drop();
        await Promise.all(mongoose.connections.map(con => con.close()));
      }, 25000);


    test('should login a user', async () => {
        const user = {
            nid: '1234567890123',
            password: 'password123'
        };
         const newUser = {
                nid: '1234567890123',
                password: 'password123',
                full_name: 'John Doe',
                age: 30,
                gender: 'male',
                city_corporation: 'dhaka'
            };
            await request(app)
                .post('/registerUser')
                .send(newUser)
        await request(app)
            .post('/loginUser')
            .send(user)
            .expect(200);
    });
    test('should not log in with wrong password', async () => {
        const user = {
            nid: '22222222222222',
            password: 'password1234'
        };
        await request(app)
            .post('/loginUser')
            .send(user)
            .expect(404);
    });
    //jwt token generation test
    test('should generate jwt token', async () => {
        const user = {
            nid: '1234567890123',
            password: 'password123'
        };
         const newUser = {
                nid: '1234567890123',
                password: 'password123',
                full_name: 'John Doe',
                age: 30,
                gender: 'male',
                city_corporation: 'dhaka'
            };
            await request(app)
                .post('/registerUser')
                .send(newUser)
        const response = await request(app)
            .post('/loginUser')
            .send(user);
        expect(response.body).toHaveProperty('token');
        
    });
});
