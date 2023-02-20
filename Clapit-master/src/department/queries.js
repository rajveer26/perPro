const getDepartment = "SELECT * FROM department";
const getDepartmentByDeptId = "SELECT * FROM department WHERE department.dept_id like $1";
const checkDepartmentExists = "SELECT * FROM department WHERE department.dept_id like $1";
const addDepartment = "INSERT INTO department (dept_id, department_name, emp_id,manager_name) values ($1,$2,$3,$4)";
const removeDepartmentByDeptId = "DELETE FROM department WHERE department.dept_id like $1";
const updateDepartment = "UPDATE department SET emp_id = $1 WHERE department.dept_id = $2";


    module.exports = {
        getDepartment,
        getDepartmentByDeptId,
        checkDepartmentExists,
        addDepartment,
        removeDepartmentByDeptId,
        updateDepartment,
    }
