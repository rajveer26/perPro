const app = require('../../../app');
const request = require('supertest');
const db = require('../../../db');
const e = require("express");

describe('project',()=>{
it('returns status code 201 if all the field is passed',async ()=>{
    const res = await request(app).post('/api/v1/empintech/').send({



        emp_id: "1130",
        role_id: "MOB",
        role: "Mobile bac",
        project_id: "P5",
        reports_to: "Rakesh"

    });
    expect(res.statusCode).toEqual(201);
});

    it('returns status code 400 if emp_id is not passed',async ()=>{
        const res = await request(app).post('/api/v1/empintech/').send({


            emp_id: "",
            role_id: "MOB",
            role: "Mobile bac",
            project_id: "P1",
            reports_to: "Rakesh"



        });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual('you have not passes all the required fields');
    })

    it('returns status code 200 if we get all list of employee in tech deptt', async () => {
        const res = await request(app).get('/api/v1/empintech/');
        expect(res.statusCode).toEqual(200);
    })


    it('returns status code 203 if we update project of tech department using emp_id',async ()=> {
        const emp_id = "1130";
        const res = await request(app).put(`/api/v1/empintech/${emp_id}`).send({
            project_id: "P3"
        });

        expect(res.statusCode).toEqual(203);
    })


});

afterAll(async ()=>{
    await db.end();
});