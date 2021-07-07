create database concesionario_examTest;
use concesionario_examTest;

CREATE TABLE TCMarcas(
id int NOT NULL auto_increment PRIMARY KEY,
Nombre VARCHAR(200) NOT NULL, 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo',
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE TCDepartamentos(
id int NOT NULL auto_increment PRIMARY KEY,
Nombre VARCHAR(200) NOT NULL, 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo',
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE TCMunicipios(
id int NOT NULL auto_increment PRIMARY KEY,
Nombre VARCHAR(200) NOT NULL, 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo',
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE TCMunicipios
    ADD COLUMN TCDepartamentoId int,
    ADD CONSTRAINT `id` FOREIGN KEY (TCDepartamentoId)
        REFERENCES TCDepartamentos(id);



CREATE TABLE TCConcesionarios(
id int NOT NULL auto_increment PRIMARY KEY,
Nombre VARCHAR(200) DEFAULT NULL,
Razon VARCHAR(200) DEFAULT NULL, 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo', 
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE TCConcesionarios
    ADD COLUMN TCMunicipioId int,
    ADD CONSTRAINT `TCMunicipioId` FOREIGN KEY (TCMunicipioId)
        REFERENCES TCMunicipios(id);

CREATE TABLE TCVehiculos(
id int NOT NULL auto_increment PRIMARY KEY,
Modelo VARCHAR(200) DEFAULT NULL, 
Precio int DEFAULT NULL, 
Color VARCHAR(200) DEFAULT NULL, 
Tipo VARCHAR(200) DEFAULT NULL, 
Traccion VARCHAR(200) DEFAULT NULL, 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo',
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE TCVehiculos
    ADD COLUMN TCMarcaId int,
    ADD CONSTRAINT `TCMarcaId` FOREIGN KEY (TCMarcaId)
        REFERENCES TCMarcas(id);
        
        ALTER TABLE TCVehiculos
    ADD COLUMN TCConcesionarioId int,
    ADD CONSTRAINT `TCConcesionarioId` FOREIGN KEY (TCConcesionarioId)
        REFERENCES TCConcesionarios(id);
        
        
        
CREATE TABLE TCClientes(
id int NOT NULL auto_increment PRIMARY KEY,
Telefono int DEFAULT NULL, 
Nombres VARCHAR(200) NOT NULL, 
Apellidos VARCHAR(200) NOT NULL, 
Nacimiento TIMESTAMP DEFAULT NULL, 
EstadoCivil VARCHAR(200) DEFAULT NULL, 
Escolaridad VARCHAR(200) DEFAULT NULL, 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo',
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 ALTER TABLE TCClientes
    ADD COLUMN TCMunicipioId int,
    ADD CONSTRAINT `TCMunicipioIdCliente` FOREIGN KEY (TCMunicipioId)
        REFERENCES TCMunicipios(id);
        
        
CREATE TABLE TCAgentes(
id int NOT NULL auto_increment PRIMARY KEY,
Telefono int DEFAULT NULL, 
Nombres VARCHAR(200) NOT NULL, 
Apellidos VARCHAR(200) NOT NULL, 
Nacimiento TIMESTAMP DEFAULT NULL, 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo',
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 ALTER TABLE TCAgentes
    ADD COLUMN TCConcesionarioId int,
    ADD CONSTRAINT `TCConcesionarioIdAgentes` FOREIGN KEY (TCConcesionarioId)
        REFERENCES TCConcesionarios(id);
        
        
        
    CREATE TABLE TCCotizaciones(
id int NOT NULL auto_increment PRIMARY KEY,
Vencimiento TIMESTAMP NOT NULL, 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo',
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);    


 ALTER TABLE TCCotizaciones
    ADD COLUMN TCAgenteId int,
    ADD CONSTRAINT `TCAgenteIdCotizaciones` FOREIGN KEY (TCAgenteId)
        REFERENCES TCAgentes(id);
        
        
         ALTER TABLE TCCotizaciones
    ADD COLUMN TCClienteId int,
    ADD CONSTRAINT `TCClienteIdCotizacion` FOREIGN KEY (TCClienteId)
        REFERENCES TCClientes(id);
        
        
                
CREATE TABLE TCDetalleCotizaciones(
id int NOT NULL auto_increment PRIMARY KEY,
Descripcion VARCHAR(255), 
Estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo',
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);    

   ALTER TABLE TCDetalleCotizaciones
    ADD COLUMN TCCotizacionId int,
    ADD CONSTRAINT `TCCotizacionIdDetalle` FOREIGN KEY (TCCotizacionId)
        REFERENCES TCCotizaciones(id);
        
           ALTER TABLE TCDetalleCotizaciones
    ADD COLUMN TCVehiculoId int,
    ADD CONSTRAINT `TCVehiculoIdDetalle` FOREIGN KEY (TCVehiculoId)
        REFERENCES TCVehiculos(id);
        

