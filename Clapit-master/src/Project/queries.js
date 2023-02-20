const getProject = "SELECT * FROM project";
const getProjectByProjId = "SELECT * FROM project WHERE project.project_id like $1";
const checkProjectExists = "SELECT * FROM project WHERE project.project_id like $1";
const addProject = "INSERT INTO project (project_id,project_name,project_manager,emp_id,dept_id) values ($1,$2,$3,$4,$5)";
const removeProjectByProjId = "DELETE FROM project WHERE project.project_id like $1";
const updateProject = "UPDATE project SET emp_id = $1 WHERE project.project_id = $2";
 module.exports = {
     getProject,
     getProjectByProjId,
     checkProjectExists,
     addProject,
     removeProjectByProjId,
     updateProject,
};