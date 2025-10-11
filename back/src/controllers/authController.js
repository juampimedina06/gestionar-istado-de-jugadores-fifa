const userService = require('../services/userService');

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await userService.login(username, password);

    if (!data) {
      return res.status(404).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }

    res.status(200).json({
      mensaje: 'Inicio de sesión exitoso',
      token: data.token,
      user: data.user
    });
  } catch (error) {
    res.status(error.status || 500).json({
      mensaje: error.message || 'Error al iniciar sesión'
    });
  }
};

module.exports = { loginUser };

