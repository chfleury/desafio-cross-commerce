const etl = require('../services/etl');

class RouteController {
  constructor() {
    etl.handleEtl();
  }

  async showNumbers(req, res) {
    let { page = 1 } = req.query;

    const data = etl.state.data.slice((page - 1) * 100, page * 100);

    res.json({
      ...etl.state,
      data,
    });
  }
}

module.exports = new RouteController();
