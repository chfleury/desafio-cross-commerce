const etl = require('../services/etl');

class RouteController {
  constructor() {
    etl.extract();
  }

  async controllerFunction(req, res) {
    res.json(etl.state);
  }
}

module.exports = new RouteController();
