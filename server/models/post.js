const Sequelize = require('sequelize')
const db = require('../database/db.js')
const customer = require('../models/customer')

    const post = db.sequelize.define('post', {
        id_post: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          title : {
            type: Sequelize.STRING,
            allowNull: false,
            
          },
          description : {
            type: Sequelize.STRING,
            allowNull: false,
            
          },
      
          publish_date : {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        
          },
         
          image : {
            type: Sequelize.BLOB,
            allowNull: false,
            
        
          },
          
          resolved : {
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
          }
          


    },
    
    {
      timestamps: false
    }
    );
    
  
  module.exports = post;