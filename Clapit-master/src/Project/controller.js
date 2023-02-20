const pool = require('../../db');
const queries = require('./queries');
const getProject = async(req, res)=>{

    pool.query(queries.getProject,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const getProjectByProjId = async(req, res)=> {
        const project_id = req.params.project_id;
        pool.query(queries.getProjectByProjId, [project_id], (error, results) => {
            console.log(project_id);
            if (error) throw error;
            res.status(202).json(results.rows);
        });

};

const addProject =  async(req, res)=> {

        const {project_id, project_name, project_manager,emp_id,dept_id} = req.body;
        //check if email exists
        pool.query(queries.checkProjectExists, [project_id], (error, results) => {
            if (results.rows.length) {
                res.send("Project already exists");
            }
            else if(!req.body.project_id)
            {
                res.status(400).json('you have not passes all the required fields');
            }
            else {
                //add employee to db
                pool.query(queries.addProject, [project_id, project_name, project_manager,emp_id,dept_id], (error, results) => {
                    if (error) throw error;
                    res.status(201).send("Project inserted successfully!");
                    console.log("Project created");
                });
            }
        });


};

const removeProject = async(req, res)=> {

        const project_id = (req.params.project_id);
        pool.query(queries.getProjectByProjId, [project_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Project does not exists in the database");
            } else {
                pool.query(queries.removeProjectByProjId, [project_id], (error, results) => {
                    if (error) throw error;
                    res.status(203).send("Project removed successfully");
                });
            }
        });

};

const updateProjectDetail =  async(req, res)=> {

        const project_id = (req.params.project_id);
        const {emp_id} = req.body;
        pool.query(queries.getProjectByProjId, [project_id], (error, results) => {
            if (!(results.rows.length)) {
                res.send("Project does not exists in the database");
            } else {
                pool.query(queries.updateProject, [emp_id,project_id], (error, results) => {
                    if (error) throw error;
                    res.status(203).send("Project updated successfully");
                });
            }
        });

};
   module.exports = {
     getProject,
     getProjectByProjId,
     addProject,
     removeProject,
     updateProjectDetail
};