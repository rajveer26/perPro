// const pool = require('../../../db');
// const queries = require('../../Employee/queries');
// const empl = require('./empl');
// let emp = {
//     emp_id : 1134,
//     name : "Kiara c",
//     email : "1134@1134",
//     phone_number : 112623434,
//     doj: null
// }
//
//
// describe("new Employee",()=>{
//         test("Employee can successfully register with proper credentials", async ()=>{
//             const {emp_id ,name, email, phone_number} = emp;
//         const addemp = await pool.query(queries.addEmployee, [emp_id, name, email, phone_number])
//             //const result = await pool.query(queries.getEmployeeByEmpId, [emp_id]);
//             expect(emp).toEqual({
//
//                 emp_id: emp.emp_id,
//                 name: emp.name,
//                 email: emp.email,
//                 phone_number: emp.phone_number,
//                 doj:null,
//             })
//         });
//
//
// });
// test(`User fetch name should be Rajveer`,async ()=>{
//     expect.assertions(1);
//     const data = await empl.fetchUser();
//     expect(data.name.toEqual(`Rajveer`))
// });