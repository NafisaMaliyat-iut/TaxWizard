const request = require("supertest");
require('dotenv').config();
const server = require('../server');
const app = require('../app');
const mongoose = require("mongoose");
const connectToDatabase = require("../config/db_connection");

describe('Test the root path', () => {
    beforeAll(async ()=>{
        await Promise.all(mongoose.connections.map(con => con.close()));
        await connectToDatabase(process.env._MONGO_URI,"test");
    },25000)
    afterAll(async () => {
        await server.close();
        await Promise.all(mongoose.connections.map(con => con.close()));
    },5000);
    test('GET should be successful and should return home page', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
});
}
)