const {Router} = require(`express`);
const router = Router();
const controller = require('./controller');

router.get(`/`,controller.getTechEmp);

//to add empInTech into the database
router.post('/',controller.addEmpInTech);

//to extract emp in tech  using emp_id.
router.get('/:emp_id', controller.getTechEmpByEmpId);

//to delete emp in tech.
router.delete('/:emp_id',controller.removeEmployeeInTech);

//to update project.
router.put('/:emp_id',controller.updateProjectDetailInTech);

 module.exports = router;