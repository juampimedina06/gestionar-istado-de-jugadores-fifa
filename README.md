# ⚽ FutManager

Gestor de jugadores de fútbol hecho con **Node.js**, **Express**, **MySQL** y **Angular 20**.  
Permite crear, editar, eliminar y ver jugadores con sus atributos FIFA completos.  
Backend con API REST y frontend moderno para la gestión.

---

## 📁 Estructura del proyecto

FutManager/
│
├── back/ # Backend (Node.js + Express)
│ ├── app.js # Punto de entrada
│ ├── routes/ # Rutas de la API
│ ├── controllers/ # Controladores
│ ├── models/ # Modelos MySQL
│ ├── middlewares/ # Middleware (auth, validaciones, etc.)
│ ├── config/ # Configuración DB y entorno
│ └── package.json
│
├── front/ # Frontend (Angular 20)
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/
│ │ │ ├── pages/
│ │ │ ├── services/
│ │ │ └── models/
│ │ └── main.ts
│ └── package.json
│
└── README.md

yaml
Copiar código

---

## 🚀 Cómo correr el proyecto

### 🛠 Backend

1. Entrá al directorio del backend  
   ```bash
   cd back
Instalá las dependencias

bash
Copiar código
npm install
Creá la base de datos en MySQL

sql
Copiar código
CREATE DATABASE futmanager;
Configurá el archivo .env con tus credenciales

env
Copiar código
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=futmanager
PORT=8080
JWT_SECRET=clave_re_picante
Corré el servidor

bash
Copiar código
node app.js
o, si usás nodemon,

bash
Copiar código
npm run dev
El backend arranca en 👉 http://localhost:8080

💻 Frontend
Entrá al directorio del front

bash
Copiar código
cd front
Instalá las dependencias

bash
Copiar código
npm install
Corré Angular

bash
Copiar código
ng serve
El frontend arranca en 👉 http://localhost:4200

🧩 Endpoints de la API
🔐 Autenticación
Método	Ruta	Descripción
POST	/auth/register	Registra un nuevo usuario
POST	/auth/login	Inicia sesión y devuelve el token

Ejemplo login:

json
Copiar código
{
  "email": "admin@example.com",
  "password": "123456"
}
⚽ Jugadores
Método	Ruta	Descripción
GET	/player	Lista todos los jugadores
GET	/player/:id	Obtiene un jugador por ID
POST	/player	Crea un nuevo jugador
PUT	/player/:id	Edita un jugador existente
DELETE	/player/:id	Elimina un jugador

Ejemplo creación (POST /player):

json
Copiar código
{
  "name": "Lionel Messi",
  "club_name": "Inter Miami",
  "position": "RW",
  "overall": 91,
  "attacking_finishing": 94,
  "attacking_short_passing": 89,
  "defending_marking": 21,
  "defending_standing_tackle": 20,
  "fifa_version": "25",
  "fifa_update": "2"
}
Respuesta esperada:

json
Copiar código
{
  "message": "Jugador creado exitosamente",
  "player_id": 27
}
🔑 Token (JWT)
Para las rutas protegidas (crear, editar o eliminar jugadores), se debe enviar el token en los headers:

makefile
Copiar código
Authorization: Bearer <token>
🧠 Notas útiles
El campo overall no puede ser NULL, así que siempre hay que enviarlo al crear el jugador.

Si te tira el error Field 'overall' doesn't have a default value, revisá que el campo no sea NOT NULL en la DB.

Para probar la API podés usar Postman o Insomnia.

El proyecto está pensado para correr backend en el puerto 8080 y frontend en el 4200.

💬 Scripts disponibles
Backend

bash
Copiar código
npm start        # corre con node
npm run dev      # corre con nodemon
Frontend

bash
Copiar código
ng serve         # levanta el proyecto Angular
ng build         # genera la build de producción
📦 Dependencias principales
Backend

express

mysql2

cors

express-validator

jsonwebtoken

dotenv

nodemon (dev)

Frontend

@angular/core

@angular/router

rxjs

typescript

scss

👨‍💻 Autor
Juan Pablo Medina
Desarrollador Front-End 💻
📍 Córdoba, Argentina
