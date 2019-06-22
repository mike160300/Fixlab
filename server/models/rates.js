const Sequelize = require('sequelize')
const db = require('../database/db.js')
const customer = require('../models/customer')


    const rate = db.sequelize.define('rate', {
        id_user1: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: false,
            references:{
                model:customer,
                key:'id_user',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
              }
          },

          id_user2: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: false,
            references:{
                model:customer,
                key:'id_user',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
              }
          },

          value :{
            type: Sequelize.INTEGER,
            allowNull: false
          }
          


    },
    
    {
      timestamps: false
    }
    );
    
  
  module.exports = rate;