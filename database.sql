-- Test
create database if not exists 123tesst;

show databases;

drop database immobilienverwaltung

-- Erstellen der Datenbank Immobilienverwaltung
create database if not exists immobilienverwaltung;

use immobilienverwaltung;

-- Tabelle Benutzer
CREATE TABLE Benutzer (
    BenutzerID INT AUTO_INCREMENT PRIMARY KEY,
    Benutzername VARCHAR(50) NOT NULL,
    Passwort VARCHAR(255) NOT NULL
);

-- Tabelle Ressourcentyp
CREATE TABLE Ressourcentyp (
    TypID INT AUTO_INCREMENT PRIMARY KEY,
    TypName VARCHAR(50) NOT NULL
);

-- Tabelle Standort
CREATE TABLE Standort (
    StandortID INT AUTO_INCREMENT PRIMARY KEY,
    StandortName VARCHAR(50) NOT NULL
);

-- Tabelle Räume
CREATE TABLE Raeume (
    RaumID INT AUTO_INCREMENT PRIMARY KEY,
     Raumnummer VARCHAR(20) NOT NULL,
    TypID INT,
    StandortID INT,
    Kapazitaet INT,
    FOREIGN KEY (TypID) REFERENCES Ressourcentyp(TypID),
    FOREIGN KEY (StandortID) REFERENCES Standort(StandortID)
);

-- Tabelle Reservationen
CREATE TABLE Reservationen (
    ReservierungsID INT AUTO_INCREMENT PRIMARY KEY,
    BenutzerID INT,
    RaumID INT,
    Zeit DATETIME,
    Begrundung TEXT,
    Kommentar TEXT,
    FOREIGN KEY (BenutzerID) REFERENCES Benutzer(BenutzerID),
    FOREIGN KEY (RaumID) REFERENCES Raeume(RaumID)
);


-- Inserts sind von CHATGPT
-- INSERT für Benutzer
INSERT INTO Benutzer (Benutzername, Passwort) VALUES
    ('MaxMustermann', 'passwort123'),
    ('AnnaMiller', 'geheim123'),
    ('AliceJohnson', 'Passwort123!'),
    ('BobMiller', 'SecurePwd456'),
    ('CarolSmith', 'SecretPass789'),
    ('DavidJones', 'StrongPwd!'),
    ('EmilyDavis', 'Pwd123ABC'),
    ('FrankWilson', 'SecurePassword789'),
    ('GraceTaylor', 'Pass123word'),
    ('HenryClark', 'StrongPwd!567'),
    ('IreneBrown', 'SecurePasswordABC'),
    ('JackMartin', 'Pass123!word'),
    ('KarenWhite', 'StrongPwd456!'),
    ('LiamAnderson', 'Secure789Pwd'),
    ('NatalieMoore', 'Pass123wordABC'),
    ('OliverHill', 'StrongPwd!789'),
    ('PatriciaTurner', 'SecurePassword123'),
    ('TomJones', 'test456');

-- INSERT für Ressourcentyp
INSERT INTO Ressourcentyp (TypName) VALUES
    ('IT'),
    ('Standard'),
    ('Besprechungsraum'),
    ('Gruppenraum'),
    ('Lehrerzimmer');

-- INSERT für Standort
INSERT INTO Standort (StandortName) VALUES
    ('Horgen'),
    ('Staefa'),
    ('Horgen Oberdorf');

-- INSERT für Raeume
INSERT INTO Raeume (Raumnummer, TypID, StandortID, Kapazitaet) VALUES
    ('H101', 4, 1, 20),
    ('H102', 2, 1, 20),
    ('H103', 5, 1, 20),
    ('H201', 2, 1, 20),
    ('H202', 1, 1, 15),
    ('H203', 3, 1, 10),
    ('H301', 2, 1, 20),
    ('H401', 4, 1, 20),
    ('S101', 2, 2, 20),
    ('s201', 3, 2, 15),
    ('S301', 1, 2, 20),
    ('S401', 2, 2, 25),
    ('O101', 5, 3, 25),
    ('0102', 1, 3, 20);

drop table benutzer;
select * from benutzer;

show tables from immobilienverwaltung;
