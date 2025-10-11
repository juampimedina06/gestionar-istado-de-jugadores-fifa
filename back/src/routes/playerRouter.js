const express = require('express')

const router = express.Router();

const playerController = require('../controllers/playerController')
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', playerController.getPlayers);
router.get('/:playerId', playerController.getPlayer)
router.put('/:playerId', verifyToken ,playerController.updatePlayer)
router.post('/', verifyToken, playerController.createPlayer)

module.exports = router;
