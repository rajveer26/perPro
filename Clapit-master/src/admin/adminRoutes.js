const {Router} = require(`express`);
const router = Router();
const controller = require('./controller');
const jwt = require("jsonwebtoken");

//route to generate token
router.post('/',controller.admin);

//route to verify token and grant access
router.get('/profile',controller.verifyToken,controller.grantAccess);

module.exports = router;