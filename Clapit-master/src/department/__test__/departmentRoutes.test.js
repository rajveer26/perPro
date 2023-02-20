const app = require('../../../app');
const request = require('supertest');
const db = require('../../../db');

describe('department',()=> {


    it('returns status code 201 if all the field is passed', async () => {
        const res = await request(app).post('/api/v1/department/').send({

            dept_id: "TANW",
            department_name: "Analyst",
            emp_id: "1125",
            manager_name: "Akshat"
        });
        expect(res.statusCode).toEqual(201);
    })

    it('returns status code 400 if dept_id is not passed', async () => {
        const res = await request(app).post('/api/v1/department/').send({

            dept_id: '',
            department_name: "Analyst",
            emp_id: "1125",
            manager_name: "Akshat"
        });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual('you have not passes all the required fields');
    })

    it('returns status code 200 if we get all list of department', async () => {
        const res = await request(app).get('/api/v1/department/');
        expect(res.statusCode).toEqual(200);
    })


    it('returns status code 202 if we get list of department using dept_id', async () => {
        const dept_id = "TAWN";
        const res = await request(app).get(`/api/v1/department/${dept_id}`);

        expect(res.statusCode).toEqual(202);
    })

    it('returns status code 203 if we update emp_id of department using dept_id',async ()=> {
        const dept_id = "TANW";
        const res = await request(app).put(`/api/v1/department/${dept_id}`).send({
            emp_id: "1124"
        });

        expect(res.statusCode).toEqual(203);
    })


    it('returns status code 203 if department gets removed  using dept_id',async ()=> {
        const dept_id = "TANW";
        const res = await request(app).delete(`/api/v1/department/${dept_id}`);

        expect(res.statusCode).toEqual(203);
    })

});

afterAll(async ()=>{
    await db.end();
});