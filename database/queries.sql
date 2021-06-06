CREATE TABLE nodes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nodeId TEXT NOT NULL,
    state TINYINT(1) NOT NULL,
    latitude DECIMAL(8,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL
);

INSERT INTO nodes (nodeId, state, latitude, longitude) VALUES('A1', 0, 41.152830, -8.637318);
INSERT INTO nodes (nodeId, state, latitude, longitude) VALUES('A2', 0, 41.152819, -8.637258);
INSERT INTO nodes (nodeId, state, latitude, longitude) VALUES('A3', 0, 41.152806, -8.637199);
INSERT INTO nodes (nodeId, state, latitude, longitude) VALUES('A4', 0, 41.152792, -8.637131);
INSERT INTO nodes (nodeId, state, latitude, longitude) VALUES('A5', 0, 41.152777, -8.637075);
