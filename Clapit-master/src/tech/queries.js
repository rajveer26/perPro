const getEmpInTech = "SELECT * FROM tech";
const getEmpInTechByEmpId = "SELECT * FROM tech WHERE tech.emp_id like $1";
const checkEmpIdInTechExists = "SELECT * FROM tech WHERE tech.emp_id like $1";
const addEmpInTech = "INSERT INTO tech (emp_id,role_id,role,project_id,reports_to) values ($1,$2,$3,$4,$5)";
const removeEmpInTechByEmpId = "DELETE FROM tech WHERE tech.emp_id like $1";
const updateProjectInTech = "UPDATE tech SET project_id = $1 WHERE tech.emp_id= $2";
 module.exports = {
     getEmpInTech,
     getEmpInTechByEmpId,
     checkEmpIdInTechExists,
     addEmpInTech,
     removeEmpInTechByEmpId,
     updateProjectInTech,
};