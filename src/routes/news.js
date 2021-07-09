var express = require('express')
var app = express()
var router = express.Router()

const newsController = require('../resources/app/controllers/NewsController');

router.use('/:slug', newsController.detail);
router.use('/', newsController.index);

module.exports = router;