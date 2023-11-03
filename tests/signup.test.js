require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

describe('POST /registerUser', () => {
    beforeAll(async () => {
        await User.deleteMany({});
    });

    afterEach(async () => {
        await User.deleteMany({});
    }); 

    test('should register a new user', async () => {
        const newUser = {
            nid: '1234567890123',
            password: 'password123',
            full_name: 'John Doe',
            age: 30,
            gender: 'male',
            city_corporation: 'Dhaka'
        };

        const response = await request(app)
            .post('/registerUser')
            .send(newUser)
            .expect(200);

        expect(response.body.message).toBe('User created successfully');

        const user = await User.findOne({ nid: newUser.nid });
        expect(user).not.toBeNull();

        const isPasswordMatch = await bcrypt.compare(newUser.password, user.password);
        expect(isPasswordMatch).toBe(true);
    }); 

    test('should not register a new user with invalid data', async () => {
        const newUser = {
            nid: '1234567890123',
            password: 'password123',
            full_name: 'John Doe',
            age: 'invalid', // age should be a number
            gender: 'male',
            city_corporation: 'Dhaka'
        };

        const response = await request(app)
            .post('/registerUser')
            .send(newUser)
            .expect(400);

        expect(response.body.message).toBe('User validation failed: age: Cast to Number failed for value "invalid" at path "age"');
    }); 

    test('should not register a new user with existing NID', async () => {
        const existingUser = {
            nid: '1234567890123',
            password: 'password123',
            full_name: 'John Doe',
            age: 30,
            gender: 'male',
            city_corporation: 'Dhaka'
        };
        await User.create(existingUser);

        const newUser = {
            nid: '1234567890123', // same NID as existing user
            password: 'password456',
            full_name: 'Jane Doe',
            age: 25,
            gender: 'female',
            city_corporation: 'Chittagong'
        };

        const response = await request(app)
            .post('/registerUser')
            .send(newUser)
            .expect(400);

        expect(response.body.message).toBe('NID already exists');
    }); 
});
