'use strict';

const mockDBCalls = require('../database/index');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  try {
    const hobbyToLookup = request.query.item;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(hobbyToLookup);
    return response.status(200).send(JSON.stringify(data));
  } catch (err) {
    return response.status(500).send("Server Error");
  }

};

module.exports = app => {
  app.get('/users/age', getListOfAgesOfUsersWithHandler);
};