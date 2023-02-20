const {Router} = require(`express`);
const router = Router();
const controller = require('./controller');

    router.get(`/`, controller.getDepartment);

//to add department into the database
    router.post('/', controller.addDepartment);

//to extract department using dept_id.
    router.get('/:dept_id', controller.getDepartmentByDepId);

//to delete department.
    router.delete('/:dept_id', controller.removeDepartment);

//to update department.
    router.put('/:dept_id', controller.updateDepartmentDetail);



module.exports = router;