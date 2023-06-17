const router = require('express').Router();

// Modules
const { signUp, login, logout } = require('../controllers/user.controller');
const validate = require('../middlewares/validate.middlewares');
const { createSchema, loginSchema } = require('../schemas/user.schemas');

//create a user or signup
router.post("/signup", validate(createSchema), signUp);
//login user
router.post("/login", validate(loginSchema), login);
//logout user
router.get("/logout", logout);

module.exports = router;