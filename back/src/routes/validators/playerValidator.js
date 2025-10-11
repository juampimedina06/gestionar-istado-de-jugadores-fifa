const { check, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const createPlayerRules = [
  check('fifa_version', 'La versión de FIFA es obligatoria').not().isEmpty().trim().escape(),
  check('fifa_update', 'La fecha de actualización de FIFA es obligatoria').not().isEmpty().trim().escape(),
  check('long_name', 'El nombre completo del jugador es obligatorio').not().isEmpty().trim().escape(),
  check('player_positions', 'La posición del jugador es obligatoria').not().isEmpty().trim().escape(),
  check('player_face_url', 'Debe ser una URL de imagen válida').isURL(),
  check('club_name').optional().not().isEmpty().withMessage('El nombre del club no puede ser una cadena vacía.').trim().escape(),
  check('nationality_name').optional().not().isEmpty().withMessage('La nacionalidad no puede ser una cadena vacía.').trim().escape(),
];

const updatePlayerRules = [
  check('fifa_version').optional().not().isEmpty().trim().escape(),
  check('fifa_update').optional().not().isEmpty().trim().escape(),
  check('long_name').optional().not().isEmpty().trim().escape(),
  check('player_positions').optional().not().isEmpty().trim().escape(),
  check('player_face_url', 'Debe ser una URL de imagen válida').optional().isURL(),
  check('club_name').optional().not().isEmpty().withMessage('El nombre del club no puede ser una cadena vacía.').trim().escape(),
  check('nationality_name').optional().not().isEmpty().withMessage('La nacionalidad no puede ser una cadena vacía.').trim().escape(),
];

module.exports = {
  createPlayerRules,
  updatePlayerRules,
  handleValidationErrors,
};