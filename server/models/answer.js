const Sequelize = require('sequelize')
const db = require('../database/db.js')
const customer = require('../models/customer')
const post = require('../models/post')

    const answer = db.sequelize.define('answer', {
        id_answer: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          text : {
            type: Sequelize.STRING,
            allowNull: false,
            
          },
          price : {
            type: Sequelize.INTEGER,
            allowNull: false,
            
          },
      
          answer_date : {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        
          },
         
          valorated : {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            
        
          },
          
          unlocked : {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        
          },

          id_owner: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model:customer,
                key:'id_user',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
              }
          },

          id_inpost: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model:post,
                key:'id_post',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
              }
          }
          


    },
    
    {
      timestamps: false
    }
    );
    
  
  module.exports = answer;