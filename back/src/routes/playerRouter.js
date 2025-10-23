const express = require('express')

const router = express.Router();

const playerController = require('../controllers/playerController')
const { verifyToken } = require('../middleware/authMiddleware');

const {
  createPlayerRules,
  updatePlayerRules,
  handleValidationErrors,
} = require('../routes/validators/playerValidator'); 

router.get('/',verifyToken ,playerController.getPlayers);
router.get('/:playerId', verifyToken,playerController.getPlayer)
router.post(
  '/',
  verifyToken,
  createPlayerRules,
  handleValidationErrors,
  playerController.createPlayer
);

router.put(
  '/:playerId',
  verifyToken,
  updatePlayerRules,
  handleValidationErrors,
  playerController.updatePlayer
);


module.exports = router;
