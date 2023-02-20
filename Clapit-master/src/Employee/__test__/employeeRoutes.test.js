const app = require('../../../app');
const request = require('supertest');
const db = require('../../../db');

describe('employee',()=> {


    it('returns status code 201 if all the field is passed', async () => {
        const res = await request(app).post('/api/v1/employee/').send({

            emp_id: "113090",
            name: "Kiara l",
            email: "kiaral@clapit",
            phone_number: "12345896789",
            doj: "2023-01-17"
        });
        expect(res.statusCode).toEqual(201);
    })

    it('returns status code 400 if emp_id is not passed', async () => {
        const res = await request(app).post('/api/v1/employee/').send({

            emp_id: "",
            name: "Kiara l",
            email: "kiarail@clapit",
            phone_number: "123458967879",
            doj: "2023-01-17"
        });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual('you have not passes all the required fields');
    })

    it('returns status code 200 if we get all list of employee', async () => {
        const res = await request(app).get('/api/v1/employee/');
        expect(res.statusCode).toEqual(200);
    })


    it('returns status code 202 if we get list of employee using emp_id', async () => {
        const emp_id = "113090";
        const res = await request(app).get(`/api/v1/employee/${emp_id}`);

        expect(res.statusCode).toEqual(202);
    })

    it('returns status code 203 if we update emp_id of department using emp_id',async ()=> {
        const emp_id = "113090";
        const res = await request(app).put(`/api/v1/employee/${emp_id}`).send({
            name: "testing_By_Jest"
        });

        expect(res.statusCode).toEqual(203);
    })


    it('returns status code 203 if department gets removed  using emp_id',async ()=> {
        const emp_id = "113090";
        const res = await request(app).delete(`/api/v1/employee/${emp_id}`);

        expect(res.statusCode).toEqual(203);
    })

});

afterAll(async ()=>{
    await db.end();
});