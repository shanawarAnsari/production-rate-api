const appService = require("../../doamin");

const rate_of_opeartions_controller = {
  getCategories: async (req, res, next) => {
    try {
      let responseDto = await appService.getCategories(
        req,
        res,
        next
      );
      res.status(200).json(responseDto);
    } catch (err) {
      next(err);
    }
  },
}
module.exports = rate_of_opeartions_controller;
