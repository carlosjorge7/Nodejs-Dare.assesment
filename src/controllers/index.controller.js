const indexCtrl = {};
const jwt = require('jsonwebtoken');

const user = require('../models/user');
const clients = require('../models/clients.json');
const policies = require('../models/policies.json');

indexCtrl.welcome = (req, res) => {
    res.json({message: 'Welcome to mi API, by Carlos Jorge'});
}

indexCtrl.login = async (req, res) => {
    const { client_id, client_secret } = req.body;

    user.client_id = client_id;
    user.client_secret = client_secret;

    if(user.client_id == '' || user.client_secret == ''){
        await res.status(401).json({message: 'Empty'})
    }
    else if(user.client_id == 'dare' && user.client_secret == 's3cr3t'){
        const token = jwt.sign({id: user.client_id}, 'secret', {
            expiresIn: 60 * 60 * 24 // 1 dia en segundos, expira en 1 dia
        });
        await res.status(200).json({token: token, type: 'x-access-form'});
    }
    else{
        res.status(401).json({message: 'Error'})
    }
}

indexCtrl.getAllClients =  async (req, res) => {
    try {
        if(!clients){
            res.status(304).json({});
        }
        await res.status(200).json(clients);
    }
    catch(error) {
        res.status(401).json({ message: 'Error clients'});
    }
}

indexCtrl.getAllPolicies = async (req, res) => {
    try {
        if(!policies){
            res.status(304).json({});
        }
        await res.status(200).json(policies);
    }
    catch(error) {
        res.status(401).json({ message: 'Error policies'});
    }
}

module.exports = indexCtrl;