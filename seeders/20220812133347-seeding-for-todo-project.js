'use strict';
const fs = require('fs')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
   data = data.map(data => {
    return {
      content: data.content,
      status: data.status,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   })
   return queryInterface.bulkInsert('Tasks', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   return queryInterface.bulkDelete('Tasks', null, {})
  }
};
