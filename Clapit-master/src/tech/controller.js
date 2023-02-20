const pool = require('../../db');
const queries = require('./queries');
const getTechEmp = async(req, res)=> {

    pool.query(queries.getEmpInTech, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

    const getTechEmpByEmpId = async (req, res) => {
        const emp_id = req.params.emp_id;
        pool.query(queries.getEmpInTechByEmpId, [emp_id], (error, results) => {
            console.log(emp_id);
            if (error) throw error;
            res.status(202).json(results.rows);
        });

    };

    const addEmpInTech = async (req, res) => {

        const {emp_id, role_id, role, project_id, reports_to} = req.body;
        //check if email exists
        pool.query(queries.checkEmpIdInTechExists, [emp_id], (error, results) => {
            if (results.rows.length) {
                res.send("employee already exists");
            } else if (!req.body.emp_id) {
                res.status(400).json('you have not passes all the required fields');
            } else {
                //add employee to db
                pool.query(queries.addEmpInTech, [emp_id, role_id, role, project_id, reports_to], (error, results) => {
                    if (error) throw error;
                    res.status(201).send("Employee in tech inserted successfully!");
                    console.log("Employee in tech created");
                });
            }
        });


    };

    const removeEmployeeInTech = async (req, res) => {

        const emp_id = (req.params.project_id);
        pool.query(queries.removeEmpInTechByEmpId, [emp_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Employee in tech does not exists in the database");
            } else {
                pool.query(queries.removeEmpInTechByEmpId, [emp_id], (error, results) => {
                    if (error) throw error;
                    res.status(203).send("Employee in tech removed successfully");
                });
            }
        });

    };

    const updateProjectDetailInTech = async (req, res) => {

        const emp_id = (req.params.emp_id);
        const {project_id} = req.body;
        pool.query(queries.getEmpInTechByEmpId, [emp_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Employee does not exists in the database");
            } else {
                pool.query(queries.updateProjectInTech, [project_id, emp_id], (error, results) => {
                    if (error) throw error;
                    res.status(203).send("Project in tech updated successfully");
                });
            }
        });
    };


   module.exports = {
     getTechEmp,
     getTechEmpByEmpId,
     addEmpInTech,
     removeEmployeeInTech,
     updateProjectDetailInTech
}