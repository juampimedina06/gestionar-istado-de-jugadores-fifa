const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/dbConfig')

const Player = sequelize.define('Player', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fifa_version: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fifa_update: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  player_face_url: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  long_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  player_positions: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  club_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  nationality_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'player', 
  timestamps: false 
});

module.exports = Player;