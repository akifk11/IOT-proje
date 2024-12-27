const express = require('express');
const router = express.Router();


const {postDht,getDht} = require('../controllers/dht');


router.route('/').post(postDht).get(getDht);

module.exports = router;