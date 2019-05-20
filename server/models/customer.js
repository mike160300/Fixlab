const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'customer',
  {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          email : {
            type: Sequelize.STRING,
            allowNull: false,
            unique:true
          },
          username : {
            type: Sequelize.STRING,
            allowNull: false,
            unique:true
          },
          password : {
            type: Sequelize.STRING,
            allowNull: false,
        
          },
          creation_date : {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        
          },
         description : {
            type: Sequelize.STRING,
            allowNull: true,
        
          },
          image : {
            type: Sequelize.BLOB,
            allowNull: true,
        
          },
          
          rating : {
            type: Sequelize.INTEGER,
            allowNull: true,
        
          }

    },
    
    {
      timestamps: false
    }
    );
    
  
 