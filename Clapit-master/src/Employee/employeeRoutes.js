const {Router} = require(`express`);
const router = Router();
const controller = require('./controller');



router.get(`/`,controller.getEmployee);

//to add employee into the database
router.post('/',controller.addEmployee);

//to extract employees using emp_id.
router.get('/:emp_id', controller.getEmployeeByEmpId);

//to delete employee.
router.delete('/:emp_id',controller.removeEmployee);

//to update employee.
router.put('/:emp_id',controller.updateEmployee);

//to update employee doj.
router.put('/doj/:emp_id',controller.updateEmployeedoj);



module.exports = router;