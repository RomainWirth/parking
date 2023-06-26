-- SQLite
DROP TABLE IF EXISTS `place`;
DROP TABLE IF EXISTS `ticket`;

-- Table 'Place'
CREATE TABLE Place (
    place_id INT PRIMARY KEY AUTOINCREMENT,
    place_number INT NOT NULL,
);

-- Table 'Ticket'
CREATE TABLE Ticket (
    ticket_id INT PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    placeId INT NOT NULL,
    FOREIGN KEY (placeId) REFERENCES Place(id)
);