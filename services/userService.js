const boom = require("@hapi/boom");
const { models } = require("./../libs/sequelize.js");

const getConnection = require("../libs/postgres");

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
