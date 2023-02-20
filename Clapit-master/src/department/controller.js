const pool = require('../../db');
const queries = require('./queries');

const getDepartment = async (req, res)=>{


        pool.query(queries.getDepartment, (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        });


};

const getDepartmentByDepId = async (req, res)=> {

        const dept_id = (req.params.dept_id);
        pool.query(queries.getDepartmentByDeptId, [dept_id], (error, results) => {
            console.log(dept_id);
            if (error) throw error;
            res.status(202).json(results.rows);
        });

};

const addDepartment = async (req, res)=> {

        const {dept_id, department_name, emp_id,manager_name} = req.body;
        //check if email exists
        pool.query(queries.checkDepartmentExists, [dept_id], (error, results) => {
            if (results.rows.length) {
                res.send("Department already exists");
            }
            else if(!req.body.dept_id)
            {
                res.status(400).json('you have not passes all the required fields');
            }
            else {
                //add employee to db
                pool.query(queries.addDepartment, [dept_id, department_name, emp_id,manager_name], (error, results) => {
                    if (error) throw error;
                    res.status(201).send("Department inserted successfully!");
                    console.log("Department created");
                });
            }
        });

};

const removeDepartment = async (req, res)=> {

        const dept_id = (req.params.dept_id);
        pool.query(queries.getDepartmentByDeptId, [dept_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Department does not exists in the database");
            } else {
                pool.query(queries.removeDepartmentByDeptId, [dept_id], (error, results) => {
                    if (error) throw error;
                    res.status(203).send("Department removed successfully");
                });
            }
        });

};

const updateDepartmentDetail = async (req, res)=> {

        const dept_id = (req.params.dept_id);
        const {emp_id} = req.body;
        pool.query(queries.getDepartmentByDeptId, [dept_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Department does not exists in the database");
            } else {
                pool.query(queries.updateDepartment, [emp_id,dept_id], (error, results) => {
                    if (error) throw error;
                    res.status(203).send("Department updated successfully");
                });
            }
        });

};
   module.exports = {
     getDepartment,
     getDepartmentByDepId,
     addDepartment,
     removeDepartment,
     updateDepartmentDetail
};