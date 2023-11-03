const request = require('supertest');
const app = require('../app');

describe('POST /login', () => {
    test('should return a 200 status code and a success message when valid email and password are provided', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                email: 'testuser@example.com',
                password: 'testpassword'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Login successful');
    });

    test('should return a 401 status code and an error message when invalid email is provided', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                email: 'invalidemail',
                password: 'testpassword'
            });
        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toEqual('Invalid email or password');
    });

    test('should return a 401 status code and an error message when invalid password is provided', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                email: 'testuser@example.com',
                password: 'invalidpassword'
            });
        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toEqual('Invalid email or password');
    });
});
