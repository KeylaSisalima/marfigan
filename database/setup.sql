CREATE DATABASE ContactosDB;
GO

USE ContactosDB;
GO

CREATE TABLE MensajesContacto (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100),
    Email NVARCHAR(150),
    Asunto NVARCHAR(200),
    Mensaje NVARCHAR(MAX),
    FechaEnvio DATETIME DEFAULT GETDATE()
);
