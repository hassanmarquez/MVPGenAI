# MVP GenAI

## Tech Stack
- **Frontend:**
  - React.js
  - React Router DOM
  - Axios
  - CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - bcrypt
  - JWT
  - CORS

## Requisitos Previos
- Node.js (v14 o superior)
- MongoDB instalado localmente o una cuenta en MongoDB Atlas
- npm o yarn

# Instalación

## Backend

bash

### Clonar el repositorio

git clone <url-del-repositorio>

### Navegar al directorio del backend

cd Backend

### Instalar dependencias

npm install

### Crear archivo .env

#### Agregar las siguientes variables en .env

MONGODB_URI=mongodb://localhost:27017/workshop5

PORT=5000


### Iniciar el servidor

npm start

## Frontend

bash

### Navegar al directorio del frontend

cd Frontend

### Instalar dependencias

npm install

### Iniciar la aplicación

npm start

### Estructura del Proyecto

Workshop5_MVPGenAI/

├── Backend/

│   ├── models/

│   ├── routes/

│   ├── server.js

│   └── package.json

├── Frontend/

│   ├── public/

│   ├── src/

│   ├── App.js

│   ├── index.css

│   └── index.js

│   └── package.json


## Testing Manual del Componente Register

### Preparación
1. Asegúrate de que tanto el Backend como el Frontend estén corriendo:
   ```bash
   # Terminal 1 - Backend
   cd Backend
   npm start
   # Deberías ver: "Server running on port 5000" y "Connected to MongoDB"

   # Terminal 2 - Frontend
   cd Frontend
   npm start
   # Se abrirá http://localhost:3000
   ```

### Casos de Prueba para Register.js

1. **Registro Exitoso**
   ```
   URL: http://localhost:3000/register
   Datos de prueba:
   - Username: testuser123
   - Password: Test123!
   Resultado esperado: Mensaje de "Usuario registrado exitosamente"
   ```

2. **Usuario Existente**
   ```
   URL: http://localhost:3000/register
   Datos de prueba:
   - Username: testuser123 (usar el mismo del paso anterior)
   - Password: Test123!
   Resultado esperado: Mensaje de error "El usuario ya existe"
   ```

3. **Campos Vacíos**
   ```
   URL: http://localhost:3000/register
   Datos de prueba:
   - Username: (dejar vacío)
   - Password: (dejar vacío)
   Resultado esperado: Validación del formulario impide envío
   ```

4. **Username Inválido**
   ```
   URL: http://localhost:3000/register
   Datos de prueba:
   - Username: t
   - Password: Test123!
   Resultado esperado: Mensaje de error de validación
   ```

5. **Contraseña Débil**
   ```
   URL: http://localhost:3000/register
   Datos de prueba:
   - Username: newuser123
   - Password: 123
   Resultado esperado: Mensaje de error de validación
   ```

### Verificación de Registro Exitoso

1. Después de un registro exitoso:
   - Navegar a http://localhost:3000/login
   - Intentar iniciar sesión con las credenciales registradas
   - Verificar que el login funciona correctamente

2. Verificar en MongoDB:
   ```bash
   # Acceder a MongoDB
   mongosh
   use workshop5
   db.users.find({})
   # Deberías ver el usuario registrado (con contraseña hasheada)
   ```

## Solución de Problemas Comunes

1. **Error de CORS**
   - Verificar que el Backend tiene cors instalado y configurado
   - Confirmar que los puertos coinciden (5000 para Backend, 3000 para Frontend)

2. **Error de Conexión a MongoDB**
   - Verificar que MongoDB está corriendo
   - Confirmar que la URL de conexión es correcta
   - Verificar las credenciales de MongoDB Atlas si se usa en la nube

3. **Página en Blanco**
   - Verificar la consola del navegador (F12) para errores
   - Confirmar que todas las dependencias están instaladas
   - Verificar que las rutas en React Router están correctamente configuradas

## Contribuir
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.
