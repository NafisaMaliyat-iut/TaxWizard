require('dotenv').config();
const request = require('supertest');
const mongoose=require('mongoose');
const app = require('../app');
const server = require('../server');
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
        await request(app)
            .post('/registerUser')
            .send(newUser)
            .expect(200);
    }); 

    test('Incorrect gender', async () => {
        const newUser = {
            nid: '1234567890123',
            password: 'password123',
            full_name: 'John Doe',
            age: 30,
            gender: 'other',
            city_corporation: 'dhaka'
        };
        await request(app)
            .post('/registerUser')
            .send(newUser)
            .expect(400);
    }); 

    test('Incorrect city corporation', async () => {
        const newUser = {
            nid: '1234567890123',
            password: 'password123',
            full_name: 'John Doe',
            age: 30,
            gender: 'male',
            city_corporation: 'sylhet'
        };
        await request(app)
            .post('/registerUser')
            .send(newUser)
            .expect(400);
    }); 

});
