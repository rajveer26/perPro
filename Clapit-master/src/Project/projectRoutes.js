const {Router} = require(`express`);
const router = Router();
const controller = require('./controller');

router.get(`/`,controller.getProject);

//to add project into the database
router.post('/',controller.addProject);

//to extract project using project_id.
router.get('/:project_id', controller.getProjectByProjId);

//to delete project.
router.delete('/:project_id',controller.removeProject);

//to update project.
router.put('/:project_id',controller.updateProjectDetail);

module.exports = router;