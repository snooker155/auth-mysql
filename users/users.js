const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
const usersController = require('./users.controller');

// routes
router.post('/authenticate', usersController.authenticateSchema, usersController.authenticate);
router.post('/register', usersController.registerSchema, usersController.register);
router.get('/', authorize(), usersController.getAll);
router.get('/current', authorize(), usersController.getCurrent);
router.get('/:id', authorize(), usersController.getById);
router.put('/:id', authorize(), usersController.updateSchema, usersController.update);
router.delete('/:id', authorize(), usersController.delete);

module.exports = router;
