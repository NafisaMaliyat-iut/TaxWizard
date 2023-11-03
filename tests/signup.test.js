require('dotenv').config();
const request = require('supertest');
const mongoose=require('mongoose');
const app = require('../app');
const server = require('../server');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const connectToDatabase = require('../config/db_connection');

describe('POST /registerUser', () => {
    beforeAll(async () => {
        await mongoose.connection.close();
        await connectToDatabase(process.env._MONGO_URI, "test");
      },25000)

      afterAll(async () => {
        await server.close();
        await mongoose.connection.collections.users.drop();
        await Promise.all(mongoose.connections.map(con => con.close()));
      }, 25000);

    test('should register a new user', async () => {
        const newUser = {
            nid: '1234567890123',
            password: 'password123',
            full_name: 'John Doe',
            age: 30,
            gender: 'male',
            city_corporation: 'dhaka'
        };
        const response = await request(app)
            .post('/registerUser')
            .send(newUser)
            .expect(200);
    }); 
});
