'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('usuario',{
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrrement: true,
          allowNull: false
        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false
        },
        senha:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
    }) 
  },

  async down (queryInterface, Sequelize) {
    
  }
};
