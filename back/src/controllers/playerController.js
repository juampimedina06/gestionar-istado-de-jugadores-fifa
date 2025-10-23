const playerService = require('../services/playerService')

const getPlayers = async (req, res) => {
  try {
    const players = await playerService.getAllPlayers();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getPlayer = async (req, res) => {
  const playerId = req.params.playerId
  try {
        const player = await playerService.getAllPlayer(playerId)
        res.status(200).json(player)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updatePlayer = async ( req, res) => {
  const playerId = req.params.playerId
  const { fifa_version, fifa_update, player_face_url, long_name, player_positions, club_name,nationality_name,player_traits, attacking_finishing, skill_dribbling, attacking_short_passing, power_shot_power, movement_acceleration, defending_standing_tackle, mentality_interceptions, power_strength, overall, potential, age } = req.body
  try {
    const newPlayer = await playerService.updatePlayer(playerId, { fifa_version, fifa_update, player_face_url, long_name, player_positions, club_name,nationality_name,player_traits, attacking_finishing, skill_dribbling, attacking_short_passing, power_shot_power, movement_acceleration, defending_standing_tackle, mentality_interceptions, power_strength, overall, potential, age})
    res.status(200).json(newPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createPlayer = async (req, res) => {
    const { fifa_version, fifa_update, player_face_url, long_name, player_positions, club_name,nationality_name,player_traits,attacking_finishing, skill_dribbling, attacking_short_passing, power_shot_power, movement_acceleration, defending_standing_tackle, mentality_interceptions, power_strength, overall, potential, age} = req.body
  try {
    const newPlayer = await playerService.createPlayer({
       fifa_version, 
       fifa_update, 
       player_face_url, 
       long_name, 
       player_positions, 
       club_name,
       nationality_name,
       player_traits,
       attacking_finishing, 
       skill_dribbling, 
       attacking_short_passing, 
       power_shot_power, 
       movement_acceleration, 
       defending_standing_tackle, 
       mentality_interceptions, 
       power_strength, overall,
       potential,
       age
    })
    res.status(201).json(newPlayer)
  } catch (error) {
      res.status(500).json({ message: error.message })
  }
}



module.exports = { getPlayers, getPlayer, updatePlayer, createPlayer }