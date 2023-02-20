const getEmployees = "SELECT * FROM employee";
const getEmployeeByEmpId = "SELECT * FROM employee WHERE employee.emp_id like $1";
const checkEmailExists = "SELECT * FROM employee WHERE employee.email like $1";
const addEmployee = "INSERT INTO employee (emp_id, name, email, phone_number,doj) values ($1,$2,$3,$4,$5)";
const removeEmployeeByEmpId = "DELETE FROM employee WHERE employee.emp_id like $1";
const updateEmployee = "UPDATE employee SET name = $1 WHERE employee.emp_id = $2";
const updateDOJ = "UPDATE employee SET doj = $(YYYY-MM-DD:HH:MM:SS)"
 module.exports = {
    getEmployees,
    getEmployeeByEmpId,
    checkEmailExists,
    addEmployee,
    removeEmployeeByEmpId,
    updateEmployee,
    updateDOJ
};