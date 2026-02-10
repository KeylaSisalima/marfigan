require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Configuración SQL Server
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// Ruta para formulario
app.post('/api/contacto', async (req, res) => {
  try {
    const { nombre, email, asunto, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: "Campos incompletos" });
    }

    await sql.connect(dbConfig);
    const request = new sql.Request();

    request.input('nombre', sql.NVarChar, nombre);
    request.input('email', sql.NVarChar, email);
    request.input('asunto', sql.NVarChar, asunto);
    request.input('mensaje', sql.NVarChar, mensaje);

    await request.query(`
      INSERT INTO MensajesContacto (Nombre, Email, Asunto, Mensaje)
      VALUES (@nombre, @email, @asunto, @mensaje)
    `);

    res.json({ success: true, message: "Mensaje guardado correctamente" });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error en servidor" });
  } finally {
    sql.close();
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
