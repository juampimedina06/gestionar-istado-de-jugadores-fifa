# ⚽ FIFA List - Sistema de Gestión Full Stack

[![Angular](https://img.shields.io/badge/Angular-20.3-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-5.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.37-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)

Una robusta aplicación Full Stack de nivel empresarial diseñada para la gestión de datos de jugadores de fútbol profesionales. Construida con una arquitectura moderna, enfocada en la escalabilidad, el código limpio y la experiencia del usuario.

---

## 📸 Vista General

![Placeholder del Dashboard del Proyecto](https://via.placeholder.com/800x400?text=Vista+Previa+de+FIFA+List)
*Gestión integral de jugadores con filtrado en tiempo real y exportación de datos.*

---

## ✨ Características Principales

- 🔐 **Autenticación Segura**: Sistema de login basado en JWT con hashing de contraseñas mediante bcrypt.
- 📊 **Visualización Dinámica de Datos**: Integración de Chart.js para estadísticas de jugadores y métricas de rendimiento.
- ⚡ **Filtrado Avanzado**: Filtrado del lado del cliente por posición, nacionalidad y valoraciones generales (overall).
- 📂 **Exportación a Excel**: Extracción de datos de alto rendimiento a formato `.xlsx` utilizando `XLSX.js`.
- 📱 **Diseño Responsive**: Enfoque mobile-first utilizando Angular Material y SCSS personalizado.
- 🛡️ **Validación Robusta**: Validación de peticiones del lado del servidor mediante `express-validator`.

---

## 🏗️ Arquitectura y Stack Técnico

El proyecto sigue una arquitectura desacoplada **Cliente-Servidor** para garantizar la mantenibilidad y la separación de responsabilidades.

### Backend (Node.js/Express)
- **Patrón**: Controller-Service-Model (CSM).
- **ORM**: Sequelize para la abstracción de MySQL.
- **Seguridad**: CORS habilitado, JWT para el manejo de sesiones y Variables de Entorno para la configuración.

### Frontend (Angular 20)
- **Paradigma**: Arquitectura basada en componentes.
- **Estilos**: SCSS con estructura modular.
- **Gestión de Estado**: Programación reactiva con RxJS.

---

## 🚀 Comenzando

### Requisitos Previos
- **Node.js**: v22.x o superior.
- **MySQL**: v8.0 o superior.
- **Angular CLI**: `npm install -g @angular/cli`.

### 1️⃣ Configuración de la Base de Datos
Crea una base de datos llamada `fifa_local` en tu servidor MySQL.
```sql
CREATE DATABASE fifa_local;
```

### 2️⃣ Instalación del Backend
```bash
cd back
npm install
```
Configura tu archivo `.env` (si no está presente, la configuración estándar utiliza `localhost:3306`).
```bash
npm run dev
```
*El servidor se inicia en `http://localhost:8080`.*

### 3️⃣ Instalación del Frontend
```bash
cd front
npm install
npm start
```
*Aplicación disponible en `http://localhost:4200`.*

---

## 🔌 Referencia de la API

### Autenticación
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/login` | Autentica al usuario y devuelve un JWT. |

### Gestión de Jugadores
| Método | Endpoint | Descripción | Requiere Auth |
| :--- | :--- | :--- | :--- |
| `GET` | `/player` | Obtiene todos los jugadores. | ✅ |
| `GET` | `/player/:id` | Obtiene detalles de un jugador específico. | ✅ |
| `POST` | `/player` | Crea un nuevo registro de jugador. | ✅ |
| `PUT` | `/player/:id` | Actualiza los datos de un jugador existente. | ✅ |

---

## 🛠️ Herramientas de Desarrollo
- **Linter**: Prettier para un formateo de código consistente.
- **Testing**: Jasmine & Karma para pruebas unitarias en el Frontend.
- **Diseño**: Angular Material para componentes de UI premium.

---

## 🧑‍💻 Autor

**Juan Pablo Medina**
*Estudiante de Desarrollo de Software @ ITSC | Córdoba, Argentina*

- 📱 [Viaje en TikTok](https://www.tiktok.com/@juampi.medina7)
- 💼 [LinkedIn](https://www.linkedin.com/in/juampimedina7/)

---

## 📄 Licencia
Este proyecto es para fines educativos. Todos los derechos reservados.
