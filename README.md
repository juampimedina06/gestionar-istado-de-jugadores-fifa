# ⚽ FutManager

**FutManager** es una aplicación completa (Full Stack) para la gestión de jugadores de fútbol, desarrollada con **Node.js**, **Express**, **MySQL** y **Angular 20**.  
Permite **crear**, **editar**, **eliminar** y **listar** jugadores con todos sus atributos tipo FIFA.

---

## 🧱 Estructura del Proyecto

FutManager/
│
├── back/ # Backend (Node.js + Express)
│ ├── app.js # Punto de entrada del servidor
│ ├── routes/ # Rutas de la API
│ ├── controllers/ # Controladores
│ ├── models/ # Modelos de base de datos
│ ├── middlewares/ # Validaciones, auth, etc.
│ ├── config/ # Configuraciones (DB, entorno)
│ └── package.json
│
└── front/ # Frontend (Angular 20)
├── src/app/components/
├── src/app/pages/
├── src/app/services/
├── src/app/models/
├── main.ts
└── package.json

yaml
Copiar código

---

## ⚙️ Configuración del Backend

### 🔸 Instalación

```bash
cd back
npm install
🔸 Base de datos MySQL
Ejecutá en tu gestor de MySQL:

sql
Copiar código
CREATE DATABASE futmanager;
🔸 Archivo .env
Creá un archivo .env dentro de la carpeta back/ con los siguientes valores:

env
Copiar código
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=futmanager
PORT=8080
JWT_SECRET=clave_re_picante
🔸 Levantar el servidor
bash
Copiar código
node app.js
o en modo desarrollo:

bash
Copiar código
npm run dev
🟢 Servidor corriendo en: http://localhost:8080

💻 Configuración del Frontend
🔸 Instalación
bash
Copiar código
cd front
npm install
🔸 Correr el servidor de Angular
bash
Copiar código
ng serve
🟡 Frontend disponible en: http://localhost:4200

🚀 Endpoints de la API
🔐 Autenticación
Método	Endpoint	Descripción
POST	/auth/register	Registra un nuevo usuario
POST	/auth/login	Inicia sesión y devuelve token

🧍 Jugadores
Método	Endpoint	Descripción
GET	/player	Obtiene todos los jugadores
GET	/player/:id	Obtiene un jugador por ID
POST	/player	Crea un nuevo jugador
PUT	/player/:id	Edita un jugador existente
DELETE	/player/:id	Elimina un jugador

🧠 Tecnologías Utilizadas
Backend

Node.js

Express

MySQL

JWT (autenticación)

Express Validator

Frontend

Angular 20

TypeScript

SCSS / HTML

Servicios HTTP

🧩 Ejemplo de ejecución
Abrí dos terminales:

Terminal 1:

bash
Copiar código
cd back
npm run dev
Terminal 2:

bash
Copiar código
cd front
ng serve
Ingresá a:
👉 http://localhost:4200

🧾 Autor
Juan Pablo Medina
Desarrollador Front-End
📍 Córdoba, Argentina
🔗 GitHub

yaml
Copiar código

