const express = require('express');
const {
    getUpdatedList
} = require('../controllers/controller')

const router = express.Router();

router.route('/')
.get(getUpdatedList)


module.exports = router;