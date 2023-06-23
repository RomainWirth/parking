-- SQLite
DROP TABLE IF EXISTS `parking`;
DROP TABLE IF EXISTS `place`;
DROP TABLE IF EXISTS `ticket`;

-- Table 'Parking'
CREATE TABLE IF NOT EXISTS parking(
    id INT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    capacite INT NOT NULL
);

-- Table 'Place'
CREATE TABLE Place (
    id INT PRIMARY KEY,
    numero INT NOT NULL,
    parkingId INT,
    FOREIGN KEY (parkingId) REFERENCES Parking(id)
);

-- Table 'Ticket'
CREATE TABLE Ticket (
    id INT PRIMARY KEY,
    dateEntree DATETIME NOT NULL,
    dateSortie DATETIME,
    parkingId INT,
    FOREIGN KEY (parkingId) REFERENCES Parking(id)
    FOREIGN KEY (numeroPlace) REFERENCES Place(id)
);