const pool = require('../../db');
const queries = require('./queries');



const getEmployee = async (req,res)=>{
    pool.query(queries.getEmployees,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const getEmployeeByEmpId = async (req,res)=> {

        const emp_id = parseInt(req.params.emp_id);
        pool.query(queries.getEmployeeByEmpId, [emp_id], (error, results) => {
            console.log(emp_id);
            if (error) throw error;
            res.status(202).json(results.rows);
        });
    };

const addEmployee = async (req,res)=> {
        const {emp_id, name, email, phone_number,doj} = req.body;
        //check if email exists
        pool.query(queries.checkEmailExists, [email], (error, results) => {
            if (results.rows.length) {
                res.send("Email already exists");
            }
            else if(!req.body.emp_id)
            {
                res.status(400).json('you have not passes all the required fields');
            }
            else {
                //add employee to db
                pool.query(queries.addEmployee, [emp_id, name, email, phone_number,doj], (error, results) => {
                    if (error) throw error;
                    //res.sendStatus(201);
                    res.status(201).send("Employee detail inserted successfully!");
                    console.log("Employee created");
                });
            }
        });

};

const removeEmployee = async (req,res)=> {

        const emp_id = parseInt(req.params.emp_id);
        pool.query(queries.getEmployeeByEmpId, [emp_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Employee does not exists in the database");
            }

            else {
                pool.query(queries.removeEmployeeByEmpId, [emp_id], (error, results) => {
                    if (error) throw error;
                    res.status(203).send("Employee removed successfully");
                });
            }
        });
};

const updateEmployee = async (req,res)=> {

        const emp_id = parseInt(req.params.emp_id);
        const {name} = req.body;
        pool.query(queries.getEmployeeByEmpId, [emp_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Employee does not exists in the database");
            } else {
                pool.query(queries.updateEmployee, [name, emp_id], (error, results) => {
                    if (error) throw error;
                    res.status(203).send("Employee updated successfully");
                });
            }
        });
};

const updateEmployeedoj = async (req,res)=> {


        const emp_id = parseInt(req.params.emp_id);
        const {doj} = req.body;
        pool.query(queries.getEmployeeByEmpId, [emp_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Employee does not exists in the database");
            } else {
                pool.query(queries.updateDOJ, [doj, emp_id], (error, results) => {
                    if (error) throw error;
                    res.status(200).send("Employee  DOJ updated successfully");
                });
            }
        });
};
   module.exports = {
    getEmployee,
    getEmployeeByEmpId,
    addEmployee,
    removeEmployee,
    updateEmployee,
   updateEmployeedoj,

};