const appService = {
  getCategories: async (req) => {
    let response = ["Family care", "Personal Care", "Others"]
    return response;
  }
}

module.exports = appService;