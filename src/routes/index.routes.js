const express = require('express');
const router = express.Router();

const indexCtrl = require('../controllers/index.controller');
// Middleware verify
const verify = require('../middlewares/verify.token');

/**
 * WELCOME
 */
router.get('/', indexCtrl.welcome);

/**
 * * LOGIN
 * * * type POST to https://dare-nodejs-assessment.herokuapp.com/api/login
 * * * * req body {"client_id": "dare", "client_secret": "s3cr3t"}
 * * * * * res {"token": "string","type": "Bearer"}
 */
router.post('/login', indexCtrl.login);

/**
 * * CLIENTS
 * * * type GET to https://dare-nodejs-assessment.herokuapp.com/api/clients
 * * * * req headers Authorization Bearer <token>
 * * * * * * res [{clients}]
 */
router.get('/clients', verify, indexCtrl.getAllClients);

/**
 * * POLICIES
 * * * type GET to https://dare-nodejs-assessment.herokuapp.com/api/policies
 * * * * req headers Authorization Bearer <token>
 * * * * * * res [{policies}]
 */
router.get('/policies', verify, indexCtrl.getAllPolicies);

module.exports = router;