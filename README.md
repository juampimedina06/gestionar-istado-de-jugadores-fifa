# ⚽ LISTADO FIFA - Proyecto Full Stack

Aplicación desarrollada con **Node.js**, **Express**, **MySQL** y **Angular**, que permite gestionar un listado de jugadores, filtrarlos y descargar la información en formato **.xlsx**.  
Incluye autenticación de usuario y manejo de datos dinámico desde una API REST.

---

## 🚀 Cómo ejecutar el proyecto

### 1️⃣ Backend
1. Abrí una terminal y posicionate en la carpeta del **backend**:
   ```bash
   cd back

2.
### Ejecutá el servidor con:
   ```bash
   node app.js

3.
### El backend se ejecutará en:
   ```bash
   http://localhost:8080/


### 2️⃣ Frontend

#En otra terminal, posicionate en la carpeta del frontend:
   ```bash
   cd front


#Iniciá el servidor de Angular con:
   ```bash
   ng serve


Accedé a la aplicación desde tu navegador: http://localhost:4200/


⚠️ Importante: la app debe ejecutarse exactamente en http://localhost:4200/ para que funcione correctamente la conexión con el backend.

🔐 Login

#Para acceder a la aplicación, utilizá las siguientes credenciales:

   ```bash
   Usuario: juampi
   Contraseña: medina123


| Método   | Endpoint                           | Descripción                               |
| :------- | :--------------------------------- | :---------------------------------------- |
| `GET`    | `http://localhost:8080/player`     | Obtiene todos los jugadores               |
| `GET`    | `http://localhost:8080/player/:id` | Obtiene un jugador específico             |
| `POST`   | `http://localhost:8080/player`     | Crea un nuevo jugador                     |
| `PUT`    | `http://localhost:8080/player/:id` | Actualiza los datos de un jugador         |
| `POST`   | `http://localhost:8080/login`      | Inicia sesión                             |

📦 Funcionalidades principales

✅ Login de usuario
El sistema requiere autenticarse antes de acceder al listado de jugadores.

✅ Listado de jugadores
Muestra todos los jugadores registrados en la base de datos.

✅ Filtrado de jugadores
Podés filtrar los jugadores por diferentes criterios (por ejemplo: posición, nacionalidad, overall, etc).

✅ Descarga en Excel (.xlsx)
Cuenta con un botón que permite descargar únicamente los jugadores filtrados en un archivo Excel.

✅ Interfaz moderna y responsive
Desarrollada con Angular 20 y estilos adaptativos.

⚙️ Tecnologías utilizadas

Frontend:

Angular 20

TypeScript

HTML5 / SCSS

Chart.js (para gráficos)

Backend:

Node.js

Express.js

MySQL

Extras:

FileSaver.js (para descarga de archivos Excel)

XLSX.js

💡 Ejemplo de uso

Iniciá el backend (node app.js)

Iniciá el frontend (ng serve)

Accedé a http://localhost:4200/

Iniciá sesión con el usuario juampi

Filtrá los jugadores

Descargá el listado filtrado en formato .xlsx

🧑‍💻 Autor

Juan Pablo Medina
Desarrollador Front-End | Córdoba, Argentina 🇦🇷
📎 GitHub: juampimedina06