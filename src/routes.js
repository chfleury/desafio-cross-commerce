const { Router } = require('express');
const RouteController = require('./controllers/routeController');

const router = Router();

router.get('/', RouteController.controllerFunction);

module.exports = router;
