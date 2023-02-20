const app = require('../../../app');
const request = require('supertest');
const db = require('../../../db');

describe('project',()=>{
it('returns status code 201 if all the field is passed',async ()=>{
    const res = await request(app).post('/api/v1/project/').send({


        project_id: "P7",
        project_name: "Analize Indian Market",
        project_manager: "Kiara",
        emp_id: "1130",
        dept_id: "TAN"
    });
    expect(res.statusCode).toEqual(201);
});

    it('returns status code 400 if dept_id is not passed',async ()=>{
        const res = await request(app).post('/api/v1/project/').send({

            project_id: "",
            project_name: "Analize Market",
            project_manager: "Kiara",
            emp_id: "1130",
            dept_id: "TAN"


        });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual('you have not passes all the required fields');
    })

    it('returns status code 200 if we get all list of project', async () => {
        const res = await request(app).get('/api/v1/project/');
        expect(res.statusCode).toEqual(200);
    })


    it('returns status code 202 if we get list of employee using project_id', async () => {
        const project_id = "113090";
        const res = await request(app).get(`/api/v1/project/${project_id}`);

        expect(res.statusCode).toEqual(202);
    })

    it('returns status code 203 if we update emp_id of department using project_id',async ()=> {
        const project_id = "P7";
        const res = await request(app).put(`/api/v1/project/${project_id}`).send({
            emp_id: "1124"
        });

        expect(res.statusCode).toEqual(203);
    })


    it('returns status code 203 if department gets removed  using project_id',async ()=> {
        const project_id = "P7";
        const res = await request(app).delete(`/api/v1/project/${project_id}`);

        expect(res.statusCode).toEqual(203);
    })


});

afterAll(async ()=>{
    await db.end();
});