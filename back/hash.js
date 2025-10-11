const bcrypt = require('bcrypt');

const password = 'medina123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error al generar el hash:', err);
    return;
  }
  console.log('Tu contraseña hasheada es:');
  console.log(hash);
});