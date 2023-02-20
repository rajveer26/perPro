// const request = require("supertest");
// const app = require('../../app');
// const db = require('../../db');
//
// describe("Test application",()=>{
//     test("not found for site 404", async ()=>{
//         const res = await request(app).get("/wrong-endpoint");
//         expect(res.statusCode).toEqual(404);
//     });
// });
//
// afterAll(async ()=>{
//     await db.end();
// });