const userService = require('../services/userService');

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await userService.login(username, password);
    if (!token) {
      return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }
    resstatus(200).json(token);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error: error.message });
  }
};

module.exports = { loginUser };
