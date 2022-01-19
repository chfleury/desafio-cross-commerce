const etl = require('../services/etl');

class RouteController {
  constructor() {
    etl.handleEtl();
  }

  async controllerFunction(req, res) {
    let { page } = req.query;
    if (!page) {
      page = 1;
    }

    const data = etl.state.data.slice((page - 1) * 100, page * 100);

    res.json({
      ...etl.state,
      data,
    });
  }
}

module.exports = new RouteController();
