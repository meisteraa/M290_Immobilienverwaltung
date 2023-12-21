create database if not exists 123tesst;

show databases;

drop database 123tesst


create database if not exists immobilienverwaltung;

use immobilienverwaltung;

CREATE TABLE Benutzer (
    BenutzerID INT AUTO_INCREMENT PRIMARY KEY,
    Benutzername VARCHAR(50) NOT NULL,
    Passwort VARCHAR(255) NOT NULL
);
