const { User } = require('../models')
const { checkPassword, generateJWT } = require('../utils/helpers')

const login = async (username, password) => {
  
  const user = await User.findOne({ where: { username } })
  if (!user) {
    const error = new Error('Usuario no encontrado')
    error.status = 404
    throw error
  }

  const isPasswordCorrect = await checkPassword(password, user.password)
  if (!isPasswordCorrect) {
    const error = new Error('La contraseña es incorrecta')
    error.status = 401
    throw error
  }

  const token = generateJWT(user.id, user.rol)

  const userSafe = user.toJSON()
  delete userSafe.password

  return { token, user: userSafe }
}

module.exports = { login }

