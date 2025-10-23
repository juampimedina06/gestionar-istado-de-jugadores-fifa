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
  },
  player_traits: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  attacking_finishing: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  skill_dribbling: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  attacking_short_passing: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  power_shot_power: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  movement_acceleration: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  defending_standing_tackle: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  mentality_interceptions: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  power_strength: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'players', 
  timestamps: false 
});

module.exports = Player;