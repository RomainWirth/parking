-- SQLite
DROP TABLE IF EXISTS `place`;
DROP TABLE IF EXISTS `ticket`;

-- Table 'Place'
CREATE TABLE Place (
    id INT PRIMARY KEY,
    numero INT NOT NULL,
);

-- Table 'Ticket'
CREATE TABLE Ticket (
    id INT PRIMARY KEY,
    created_at DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    placeId INT NOT NULL,
    FOREIGN KEY (placeId) REFERENCES Place(id)
);