const { Router } = require('express');
const RouteController = require('./controllers/routeController');

const router = Router();

router.get('/numbers', RouteController.showNumbers);

module.exports = router;
