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

  check('attacking_finishing', 'El atributo de definición es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 }),
  check('skill_dribbling', 'El atributo de regate es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 }),
  check('attacking_short_passing', 'El atributo de pase corto es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 }),
  check('power_shot_power', 'El atributo de potencia de disparo es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 }),
  check('movement_acceleration', 'El atributo de aceleración es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 }),

  check('defending_standing_tackle', 'El atributo de entrada de pie es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 }),
  check('mentality_interceptions', 'El atributo de intercepciones es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 }),
  check('power_strength', 'El atributo de fuerza es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 }),
  check('defending_marking', 'El atributo de marcaje es obligatorio').not().isEmpty().isInt({ min: 0, max: 99 })

];

const updatePlayerRules = [
  check('fifa_version').optional().not().isEmpty().trim().escape(),
  check('fifa_update').optional().not().isEmpty().trim().escape(),
  check('long_name').optional().not().isEmpty().trim().escape(),
  check('player_positions').optional().not().isEmpty().trim().escape(),
  check('player_face_url', 'Debe ser una URL de imagen válida').optional().isURL(),
  check('club_name').optional().not().isEmpty().withMessage('El nombre del club no puede ser una cadena vacía.').trim().escape(),
  check('nationality_name').optional().not().isEmpty().withMessage('La nacionalidad no puede ser una cadena vacía.').trim().escape(),

  check('attacking_finishing').optional().isInt({ min: 0, max: 99 }),
  check('skill_dribbling').optional().isInt({ min: 0, max: 99 }),
  check('attacking_short_passing').optional().isInt({ min: 0, max: 99 }),
  check('power_shot_power').optional().isInt({ min: 0, max: 99 }),
  check('movement_acceleration').optional().isInt({ min: 0, max: 99 }),

  check('defending_standing_tackle').optional().isInt({ min: 0, max: 99 }),
  check('mentality_interceptions').optional().isInt({ min: 0, max: 99 }),
  check('power_strength').optional().isInt({ min: 0, max: 99 }),
  check('defending_marking').optional().isInt({ min: 0, max: 99 })
];

module.exports = {
  createPlayerRules,
  updatePlayerRules,
  handleValidationErrors,
};