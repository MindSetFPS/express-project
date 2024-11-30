-- Ensure the table exists before inserting data
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NULL
);

-- Insert dummy data into the users table
INSERT INTO users (name, email, password) VALUES
('John Doe', 'john.doe@example.com', 'password123'),
('Jane Smith', 'jane.smith@example.com', 'securepassword'),
('Alex Brown', 'alex.brown@example.com', 'mypassword'),
(NULL, 'no.name@example.com', 'blanknamepass'),
('Emily White', 'emily.white@example.com', 'emily2024'),
('Michael Johnson', 'michael.johnson@example.com', 'password456'),
('Sara Connor', 'sara.connor@example.com', 'terminator'),
('Chris Blue', 'chris.blue@example.com', 'blue12345'),
(NULL, 'another.user@example.com', 'anotherpass'),
('Diana Prince', 'diana.prince@example.com', 'wonderwoman');

-- Insert 25 more dummy rows with Asian user data into the users table
INSERT INTO users (name, email, password) VALUES
('Hiroshi Tanaka', 'hiroshi.tanaka@example.com', 'tanaka123'),
('Mei Wang', 'mei.wang@example.com', 'wangmei456'),
('Arjun Kumar', 'arjun.kumar@example.com', 'kumar789'),
('Aiko Yamamoto', 'aiko.yamamoto@example.com', 'aikoyama'),
('Sanjay Patel', 'sanjay.patel@example.com', 'patel2024'),
('Jia Chen', 'jia.chen@example.com', 'chenjia321'),
('Ravi Sharma', 'ravi.sharma@example.com', 'sharmaravi'),
('Yumi Lee', 'yumi.lee@example.com', 'leeyumi456'),
('Min Ho Kim', 'minho.kim@example.com', 'kimminho'),
('Li Wei', 'li.wei@example.com', 'weili123'),
('Anika Gupta', 'anika.gupta@example.com', 'gupta2023'),
('Takeshi Nakamura', 'takeshi.nakamura@example.com', 'nakamura321'),
('Nari Park', 'nari.park@example.com', 'parknari'),
('Kenta Suzuki', 'kenta.suzuki@example.com', 'suzukikenta'),
('Cheng Lin', 'cheng.lin@example.com', 'lincheng456'),
('Dinesh Bhatia', 'dinesh.bhatia@example.com', 'bhatia123'),
(NULL, 'no.name.asian@example.com', 'noname789'),
('Rina Sato', 'rina.sato@example.com', 'satorina'),
('Aarav Mishra', 'aarav.mishra@example.com', 'mishra2024'),
('Sakura Takahashi', 'sakura.takahashi@example.com', 'takahashisakura'),
('Muhammad Ali', 'muhammad.ali@example.com', 'alimuhammad'),
('Hana Nguyen', 'hana.nguyen@example.com', 'nguyenhana'),
('Pranav Das', 'pranav.das@example.com', 'daspranav'),
('Lila Huang', 'lila.huang@example.com', 'huanglila'),
('Kazuki Ito', 'kazuki.ito@example.com', 'itokazuki');

-- Insert 25 more dummy rows with European user data into the users table
INSERT INTO users (name, email, password) VALUES
('Luca Rossi', 'luca.rossi@example.com', 'rossi123'),
('Sophie Dubois', 'sophie.dubois@example.com', 'dubois456'),
('Jan Novak', 'jan.novak@example.com', 'novak789'),
('Elena Petrova', 'elena.petrova@example.com', 'petrova321'),
('Oskar Müller', 'oskar.mueller@example.com', 'muelleroskar'),
('Anna Kowalska', 'anna.kowalska@example.com', 'kowalska123'),
('Johan Svensson', 'johan.svensson@example.com', 'svensson789'),
('Katarina Novakova', 'katarina.novakova@example.com', 'novakova456'),
('Tomáš Horák', 'tomas.horak@example.com', 'horaktomas'),
(NULL, 'anonymous.european@example.com', 'anonymous123'),
('Maria Silva', 'maria.silva@example.com', 'silva2024'),
('Dimitrios Papadopoulos', 'dimitrios.papadopoulos@example.com', 'papadopoulos123'),
('Emma Hansen', 'emma.hansen@example.com', 'hansenemma'),
('Aleksandar Ivanov', 'aleksandar.ivanov@example.com', 'ivanov2023'),
('Chloé Lefevre', 'chloe.lefevre@example.com', 'lefevre789'),
('Pavel Morozov', 'pavel.morozov@example.com', 'morozov456'),
('Lisbeth Sørensen', 'lisbeth.sorensen@example.com', 'sorensen321'),
('Mateusz Nowak', 'mateusz.nowak@example.com', 'nowak2024'),
('Nina Berger', 'nina.berger@example.com', 'bergernina'),
('Miguel Oliveira', 'miguel.oliveira@example.com', 'oliveira789'),
('Ewa Jankowska', 'ewa.jankowska@example.com', 'jankowska456'),
('Stefan Fischer', 'stefan.fischer@example.com', 'fischer123'),
('Isabella Conti', 'isabella.conti@example.com', 'conti2023'),
('Bastian Schmidt', 'bastian.schmidt@example.com', 'schmidt456'),
('Elisabetta Ricci', 'elisabetta.ricci@example.com', 'ricci789');

-- Insert 25 more dummy rows with Hispanic user data into the users table
INSERT INTO users (name, email, password) VALUES
('Alejandro López', 'alejandro.lopez@example.com', 'alejandro123'),
('María González', 'maria.gonzalez@example.com', 'gonzalezpass'),
('Luis Fernández', 'luis.fernandez@example.com', 'fernandez456'),
('Ana Martínez', 'ana.martinez@example.com', 'martinez123'),
('Carlos Herrera', 'carlos.herrera@example.com', 'herreracarlos'),
('Sofía García', 'sofia.garcia@example.com', 'garciapass'),
('Miguel Torres', 'miguel.torres@example.com', 'torresmiguel'),
('Isabel Cruz', 'isabel.cruz@example.com', 'cruz789'),
(NULL, 'no.name.hispanic@example.com', 'noname456'),
('Jorge Morales', 'jorge.morales@example.com', 'morales123'),
('Lucía Pérez', 'lucia.perez@example.com', 'luciaperez'),
('Pedro Sánchez', 'pedro.sanchez@example.com', 'sanchez789'),
('Carmen Ramírez', 'carmen.ramirez@example.com', 'ramirez123'),
('Diego Castillo', 'diego.castillo@example.com', 'castillo321'),
('Elena Mendoza', 'elena.mendoza@example.com', 'mendozaelena'),
('Ricardo Rojas', 'ricardo.rojas@example.com', 'rojaspass'),
('Gabriela Navarro', 'gabriela.navarro@example.com', 'navarro123'),
('Hugo Ortega', 'hugo.ortega@example.com', 'ortegahugo'),
('Valeria Vargas', 'valeria.vargas@example.com', 'vargasval'),
('Tomás Medina', 'tomas.medina@example.com', 'medinatomas'),
('Paola Alvarado', 'paola.alvarado@example.com', 'alvarado2024'),
('Ramón Delgado', 'ramon.delgado@example.com', 'delgadoramon'),
('Patricia Aguilar', 'patricia.aguilar@example.com', 'aguilar456'),
('Felipe Reyes', 'felipe.reyes@example.com', 'reyespass'),
('Laura Domínguez', 'laura.dominguez@example.com', 'dominguez321');

-- Insert 25 more dummy data rows into the users table
INSERT INTO users (name, email, password) VALUES
('Alice Green', 'alice.green@example.com', 'green123'),
('Bob Gray', 'bob.gray@example.com', 'graypass'),
('Cathy Black', 'cathy.black@example.com', 'blackcat'),
('David White', 'david.white@example.com', 'whitehorse'),
('Eve Adams', 'eve.adams@example.com', 'adams456'),
('Frank Lee', 'frank.lee@example.com', 'lee4me'),
(NULL, 'mystery.person@example.com', 'mysterypass'),
('Grace Kelly', 'grace.kelly@example.com', 'kellygrace'),
('Henry Ford', 'henry.ford@example.com', 'carsrule'),
('Ivy Turner', 'ivy.turner@example.com', 'turneriv'),
('Jack Sparrow', 'jack.sparrow@example.com', 'pirateslife'),
('Kelly Clarkson', 'kelly.clarkson@example.com', 'singit123'),
('Liam Neeson', 'liam.neeson@example.com', 'taken456'),
('Mona Lisa', 'mona.lisa@example.com', 'davinci123'),
(NULL, 'ghost.user@example.com', 'ghost123'),
('Natalie Portman', 'natalie.portman@example.com', 'queenamidala'),
('Oscar Wilde', 'oscar.wilde@example.com', 'witislife'),
('Paula Abdul', 'paula.abdul@example.com', 'dance123'),
('Quincy Adams', 'quincy.adams@example.com', 'president'),
('Rachel Green', 'rachel.green@example.com', 'friends123'),
('Steve Rogers', 'steve.rogers@example.com', 'captainamerica'),
('Tony Stark', 'tony.stark@example.com', 'iamironman'),
('Uma Thurman', 'uma.thurman@example.com', 'killbill'),
('Victor Hugo', 'victor.hugo@example.com', 'lesmis123'),
('Wanda Maximoff', 'wanda.maximoff@example.com', 'scarletwitch');

-- Insert 25 entries into the piece_of_clothings table
INSERT INTO piece_of_clothings (name, type_of_clothing, brand, size, color, original_price, season, image_url, user_id) VALUES
('Basic White T-Shirt', 'T-Shirt', 'H&M', 'M', 'White', 19.99, 'Summer', 'https://example.com/image1.jpg', 1),
('Blue Denim Jeans', 'Jeans', 'Wrangler', '32', 'Blue', 59.99, 'All Year', 'https://example.com/image2.jpg', 2),
('Black Hoodie', 'Hoodie', 'Nike', 'L', 'Black', 69.99, 'Winter', 'https://example.com/image3.jpg', 3),
('Red Dress', 'Dress', 'Zara', 'S', 'Red', 49.99, 'Spring', 'https://example.com/image4.jpg', 4),
('Leather Jacket', 'Jacket', 'Mango', 'M', 'Brown', 129.99, 'Fall', 'https://example.com/image5.jpg', 5),
('Running Shoes', 'Shoes', 'Adidas', '10', 'Gray', 89.99, 'All Year', 'https://example.com/image6.jpg', 6),
('Black Leather Boots', 'Boots', 'Timberland', '9', 'Black', 139.99, 'Winter', 'https://example.com/image7.jpg', 7),
('Striped Polo Shirt', 'Shirt', 'Puma', 'L', 'White/Blue', 39.99, 'Spring', 'https://example.com/image8.jpg', 8),
('Grey Sweatpants', 'Pants', 'Uniqlo', 'M', 'Gray', 29.99, 'Fall', 'https://example.com/image9.jpg', 9),
('Blue Shorts', 'Shorts', 'Nike', 'L', 'Blue', 24.99, 'Summer', 'https://example.com/image10.jpg', 10),
('V-neck T-Shirt', 'T-Shirt', 'Gap', 'M', 'Green', 21.99, 'All Year', 'https://example.com/image11.jpg', 11),
('White Blouse', 'Blouse', 'H&M', 'S', 'White', 34.99, 'Spring', 'https://example.com/image12.jpg', 12),
('Black Tank Top', 'Tank Top', 'Zara', 'M', 'Black', 19.99, 'Summer', 'https://example.com/image13.jpg', 13),
('Chino Pants', 'Pants', 'Dockers', '34', 'Beige', 49.99, 'Fall', 'https://example.com/image14.jpg', 14),
('Bomber Jacket', 'Jacket', 'Adidas', 'L', 'Green', 99.99, 'Winter', 'https://example.com/image15.jpg', 15),
('Purple Sweater', 'Sweater', 'H&M', 'L', 'Purple', 39.99, 'Winter', 'https://example.com/image16.jpg', 16),
('Track Pants', 'Pants', 'Reebok', 'L', 'Black', 45.99, 'All Year', 'https://example.com/image17.jpg', 17),
('Floral Skirt', 'Skirt', 'Mango', 'S', 'Floral', 39.99, 'Spring', 'https://example.com/image18.jpg', 18),
('Leather Sandals', 'Shoes', 'Bershka', '7', 'Brown', 39.99, 'Summer', 'https://example.com/image19.jpg', 19),
('Plaid Shirt', 'Shirt', 'Benetton', 'M', 'Red/Black', 29.99, 'Fall', 'https://example.com/image20.jpg', 20),
('Denim Jacket', 'Jacket', 'Puma', 'M', 'Blue', 89.99, 'Spring', 'https://example.com/image21.jpg', 21),
('Sports Jacket', 'Jacket', 'Nike', 'L', 'Red', 79.99, 'All Year', 'https://example.com/image22.jpg', 22),
('Cargo Pants', 'Pants', 'Uniqlo', 'M', 'Olive', 49.99, 'Fall', 'https://example.com/image23.jpg', 23),
('Cotton Blouse', 'Blouse', 'Mango', 'S', 'Pink', 29.99, 'Spring', 'https://example.com/image24.jpg', 24),
('Black Jeans', 'Jeans', 'Bershka', '30', 'Black', 59.99, 'All Year', 'https://example.com/image25.jpg', 25);

-- Insert 25 entries into the piece_of_clothings table
INSERT INTO piece_of_clothings (name, type_of_clothing, brand, size, color, original_price, season, image_url, user_id) VALUES
('Basic White T-Shirt', 'T-Shirt', 'H&M', 'M', 'White', 19.99, 'Summer', 'https://example.com/image1.jpg', 1),
('Blue Denim Jeans', 'Jeans', 'Wrangler', '32', 'Blue', 59.99, 'All Year', 'https://example.com/image2.jpg', 2),
('Black Hoodie', 'Hoodie', 'Nike', 'L', 'Black', 69.99, 'Winter', 'https://example.com/image3.jpg', 3),
('Red Dress', 'Dress', 'Zara', 'S', 'Red', 49.99, 'Spring', 'https://example.com/image4.jpg', 4),
('Leather Jacket', 'Jacket', 'Mango', 'M', 'Brown', 129.99, 'Fall', 'https://example.com/image5.jpg', 5),
('Running Shoes', 'Shoes', 'Adidas', '10', 'Gray', 89.99, 'All Year', 'https://example.com/image6.jpg', 6),
('Black Leather Boots', 'Boots', 'Timberland', '9', 'Black', 139.99, 'Winter', 'https://example.com/image7.jpg', 7),
('Striped Polo Shirt', 'Shirt', 'Puma', 'L', 'White/Blue', 39.99, 'Spring', 'https://example.com/image8.jpg', 8),
('Grey Sweatpants', 'Pants', 'Uniqlo', 'M', 'Gray', 29.99, 'Fall', 'https://example.com/image9.jpg', 9),
('Blue Shorts', 'Shorts', 'Nike', 'L', 'Blue', 24.99, 'Summer', 'https://example.com/image10.jpg', 10),
('V-neck T-Shirt', 'T-Shirt', 'Gap', 'M', 'Green', 21.99, 'All Year', 'https://example.com/image11.jpg', 11),
('White Blouse', 'Blouse', 'H&M', 'S', 'White', 34.99, 'Spring', 'https://example.com/image12.jpg', 12),
('Black Tank Top', 'Tank Top', 'Zara', 'M', 'Black', 19.99, 'Summer', 'https://example.com/image13.jpg', 13),
('Chino Pants', 'Pants', 'Dockers', '34', 'Beige', 49.99, 'Fall', 'https://example.com/image14.jpg', 14),
('Bomber Jacket', 'Jacket', 'Adidas', 'L', 'Green', 99.99, 'Winter', 'https://example.com/image15.jpg', 15),
('Purple Sweater', 'Sweater', 'H&M', 'L', 'Purple', 39.99, 'Winter', 'https://example.com/image16.jpg', 16),
('Track Pants', 'Pants', 'Reebok', 'L', 'Black', 45.99, 'All Year', 'https://example.com/image17.jpg', 17),
('Floral Skirt', 'Skirt', 'Mango', 'S', 'Floral', 39.99, 'Spring', 'https://example.com/image18.jpg', 18),
('Leather Sandals', 'Shoes', 'Bershka', '7', 'Brown', 39.99, 'Summer', 'https://example.com/image19.jpg', 19),
('Plaid Shirt', 'Shirt', 'Benetton', 'M', 'Red/Black', 29.99, 'Fall', 'https://example.com/image20.jpg', 20),
('Denim Jacket', 'Jacket', 'Wrangler', 'M', 'Blue', 89.99, 'Spring', 'https://example.com/image21.jpg', 21),
('Sports Jacket', 'Jacket', 'Nike', 'L', 'Red', 79.99, 'All Year', 'https://example.com/image22.jpg', 22),
('Cargo Pants', 'Pants', 'Uniqlo', 'M', 'Olive', 49.99, 'Fall', 'https://example.com/image23.jpg', 23),
('Cotton Blouse', 'Blouse', 'Mango', 'S', 'Pink', 29.99, 'Spring', 'https://example.com/image24.jpg', 24),
('Black Jeans', 'Jeans', 'Bershka', '30', 'Black', 59.99, 'All Year', 'https://example.com/image25.jpg', 25);

-- Insert 25 entries into the piece_of_clothings table with Hispanic brands
INSERT INTO piece_of_clothings (name, type_of_clothing, brand, size, color, original_price, season, image_url, user_id) VALUES
('Camiseta Blanca Básica', 'Camiseta', 'Ben & Frank', 'M', 'Blanco', 19.99, 'Verano', 'https://example.com/image1.jpg', 1),
('Jeans Azules', 'Pantalones', 'Pull&Bear', '32', 'Azul', 59.99, 'Todo el Año', 'https://example.com/image2.jpg', 2),
('Sudadera Negra', 'Sudadera', 'Nike', 'L', 'Negro', 69.99, 'Invierno', 'https://example.com/image3.jpg', 3),
('Vestido Rojo', 'Vestido', 'Sinaí', 'S', 'Rojo', 49.99, 'Primavera', 'https://example.com/image4.jpg', 4),
('Chaqueta de Cuero', 'Chaqueta', 'Bershka', 'M', 'Marrón', 129.99, 'Otoño', 'https://example.com/image5.jpg', 5),
('Zapatillas Deportivas', 'Zapatos', 'Adidas', '10', 'Gris', 89.99, 'Todo el Año', 'https://example.com/image6.jpg', 6),
('Botines de Cuero Negros', 'Botines', 'Rokit', '9', 'Negro', 139.99, 'Invierno', 'https://example.com/image7.jpg', 7),
('Polo a Rayas', 'Camiseta', 'C&A', 'L', 'Blanco/Azul', 39.99, 'Primavera', 'https://example.com/image8.jpg', 8),
('Pantalones de Sudadera Grises', 'Pantalones', 'Desigual', 'M', 'Gris', 29.99, 'Otoño', 'https://example.com/image9.jpg', 9),
('Pantalones Cortos Azules', 'Pantalones Cortos', 'Stradivarius', 'L', 'Azul', 24.99, 'Verano', 'https://example.com/image10.jpg', 10),
('Camiseta de V', 'Camiseta', 'Mercado Libre', 'M', 'Verde', 21.99, 'Todo el Año', 'https://example.com/image11.jpg', 11),
('Blusa Blanca', 'Blusa', 'Zara', 'S', 'Blanco', 34.99, 'Primavera', 'https://example.com/image12.jpg', 12),
('Top Negro', 'Top', 'Bershka', 'M', 'Negro', 19.99, 'Verano', 'https://example.com/image13.jpg', 13),
('Falda Floral', 'Falda', 'Mango', 'S', 'Floral', 39.99, 'Primavera', 'https://example.com/image14.jpg', 14),
('Chaqueta Bomber', 'Chaqueta', 'Ralph Lauren', 'L', 'Verde', 99.99, 'Invierno', 'https://example.com/image15.jpg', 15),
('Suéter Morado', 'Suéter', 'C&A', 'L', 'Morado', 39.99, 'Invierno', 'https://example.com/image16.jpg', 16),
('Pantalones Deportivos', 'Pantalones', 'Adidas', 'L', 'Negro', 45.99, 'Todo el Año', 'https://example.com/image17.jpg', 17),
('Pantalón Cargo', 'Pantalones', 'C&A', 'M', 'Oliva', 49.99, 'Otoño', 'https://example.com/image18.jpg', 18),
('Sandalias de Cuero', 'Zapatos', 'Bershka', '7', 'Marrón', 39.99, 'Verano', 'https://example.com/image19.jpg', 19),
('Camisa a Cuadros', 'Camisa', 'Desigual', 'M', 'Rojo/Negro', 29.99, 'Otoño', 'https://example.com/image20.jpg', 20),
('Chaqueta de Mezclilla', 'Chaqueta', 'Pull&Bear', 'M', 'Azul', 89.99, 'Primavera', 'https://example.com/image21.jpg', 21),
('Chaqueta Deportiva', 'Chaqueta', 'Adidas', 'L', 'Rojo', 79.99, 'Todo el Año', 'https://example.com/image22.jpg', 22),
('Pantalones Cargo', 'Pantalones', 'Mango', 'M', 'Oliva', 49.99, 'Otoño', 'https://example.com/image23.jpg', 23),
('Blusa de Algodón', 'Blusa', 'Sinaí', 'S', 'Rosa', 29.99, 'Primavera', 'https://example.com/image24.jpg', 24),
('Jeans Negros', 'Jeans', 'Bershka', '30', 'Negro', 59.99, 'Todo el Año', 'https://example.com/image25.jpg', 25);

-- Insert 25 entries into the profiles table
INSERT INTO profiles (user_id, image_url, following, followers) VALUES
(1, 'https://example.com/profile1.jpg', 150, 200),
(2, 'https://example.com/profile2.jpg', 180, 220),
(3, 'https://example.com/profile3.jpg', 120, 180),
(4, 'https://example.com/profile4.jpg', 250, 300),
(5, 'https://example.com/profile5.jpg', 300, 400),
(6, 'https://example.com/profile6.jpg', 50, 100),
(7, 'https://example.com/profile7.jpg', 75, 120),
(8, 'https://example.com/profile8.jpg', 200, 250),
(9, 'https://example.com/profile9.jpg', 60, 90),
(10, 'https://example.com/profile10.jpg', 110, 150),
(11, 'https://example.com/profile11.jpg', 130, 160),
(12, 'https://example.com/profile12.jpg', 80, 130),
(13, 'https://example.com/profile13.jpg', 40, 70),
(14, 'https://example.com/profile14.jpg', 100, 180),
(15, 'https://example.com/profile15.jpg', 180, 220),
(16, 'https://example.com/profile16.jpg', 60, 110),
(17, 'https://example.com/profile17.jpg', 90, 150),
(18, 'https://example.com/profile18.jpg', 220, 260),
(19, 'https://example.com/profile19.jpg', 140, 180),
(20, 'https://example.com/profile20.jpg', 160, 200),
(21, 'https://example.com/profile21.jpg', 130, 170),
(22, 'https://example.com/profile22.jpg', 210, 250),
(23, 'https://example.com/profile23.jpg', 70, 110),
(24, 'https://example.com/profile24.jpg', 95, 140),
(25, 'https://example.com/profile25.jpg', 50, 90);

-- Insert 25 more entries into the profiles table
INSERT INTO profiles (user_id, image_url, following, followers) VALUES
(26, 'https://example.com/profile26.jpg', 170, 210),
(27, 'https://example.com/profile27.jpg', 140, 190),
(28, 'https://example.com/profile28.jpg', 250, 300),
(29, 'https://example.com/profile29.jpg', 300, 350),
(30, 'https://example.com/profile30.jpg', 80, 130),
(31, 'https://example.com/profile31.jpg', 60, 110),
(32, 'https://example.com/profile32.jpg', 120, 160),
(33, 'https://example.com/profile33.jpg', 200, 240),
(34, 'https://example.com/profile34.jpg', 90, 140),
(35, 'https://example.com/profile35.jpg', 180, 220),
(36, 'https://example.com/profile36.jpg', 110, 160),
(37, 'https://example.com/profile37.jpg', 75, 100),
(38, 'https://example.com/profile38.jpg', 50, 80),
(39, 'https://example.com/profile39.jpg', 130, 170),
(40, 'https://example.com/profile40.jpg', 100, 140),
(41, 'https://example.com/profile41.jpg', 160, 200),
(42, 'https://example.com/profile42.jpg', 140, 180),
(43, 'https://example.com/profile43.jpg', 90, 130),
(44, 'https://example.com/profile44.jpg', 220, 270),
(45, 'https://example.com/profile45.jpg', 170, 210),
(46, 'https://example.com/profile46.jpg', 50, 70),
(47, 'https://example.com/profile47.jpg', 60, 90),
(48, 'https://example.com/profile48.jpg', 110, 150),
(49, 'https://example.com/profile49.jpg', 80, 120),
(50, 'https://example.com/profile50.jpg', 200, 250);

-- Insert 25 more entries into the profiles table
INSERT INTO profiles (user_id, image_url, following, followers) VALUES
(51, 'https://example.com/profile51.jpg', 160, 210),
(52, 'https://example.com/profile52.jpg', 180, 240),
(53, 'https://example.com/profile53.jpg', 110, 150),
(54, 'https://example.com/profile54.jpg', 200, 250),
(55, 'https://example.com/profile55.jpg', 250, 300),
(56, 'https://example.com/profile56.jpg', 130, 180),
(57, 'https://example.com/profile57.jpg', 90, 120),
(58, 'https://example.com/profile58.jpg', 70, 100),
(59, 'https://example.com/profile59.jpg', 150, 190),
(60, 'https://example.com/profile60.jpg', 120, 160),
(61, 'https://example.com/profile61.jpg', 130, 170),
(62, 'https://example.com/profile62.jpg', 140, 180),
(63, 'https://example.com/profile63.jpg', 200, 240),
(64, 'https://example.com/profile64.jpg', 100, 130),
(65, 'https://example.com/profile65.jpg', 250, 300),
(66, 'https://example.com/profile66.jpg', 80, 110),
(67, 'https://example.com/profile67.jpg', 190, 240),
(68, 'https://example.com/profile68.jpg', 110, 140),
(69, 'https://example.com/profile69.jpg', 60, 90),
(70, 'https://example.com/profile70.jpg', 100, 140),
(71, 'https://example.com/profile71.jpg', 180, 220),
(72, 'https://example.com/profile72.jpg', 50, 70),
(73, 'https://example.com/profile73.jpg', 150, 200),
(74, 'https://example.com/profile74.jpg', 90, 130),
(75, 'https://example.com/profile75.jpg', 170, 210);

-- Insert 25 more entries into the profiles table
INSERT INTO profiles (user_id, image_url, following, followers) VALUES
(76, 'https://example.com/profile76.jpg', 210, 260),
(77, 'https://example.com/profile77.jpg', 130, 170),
(78, 'https://example.com/profile78.jpg', 100, 140),
(79, 'https://example.com/profile79.jpg', 180, 220),
(80, 'https://example.com/profile80.jpg', 150, 190),
(81, 'https://example.com/profile81.jpg', 200, 240),
(82, 'https://example.com/profile82.jpg', 70, 110),
(83, 'https://example.com/profile83.jpg', 220, 260),
(84, 'https://example.com/profile84.jpg', 110, 140),
(85, 'https://example.com/profile85.jpg', 130, 180),
(86, 'https://example.com/profile86.jpg', 90, 120),
(87, 'https://example.com/profile87.jpg', 180, 210),
(88, 'https://example.com/profile88.jpg', 160, 200),
(89, 'https://example.com/profile89.jpg', 50, 80),
(90, 'https://example.com/profile90.jpg', 200, 240),
(91, 'https://example.com/profile91.jpg', 120, 160),
(92, 'https://example.com/profile92.jpg', 160, 190),
(93, 'https://example.com/profile93.jpg', 180, 220),
(94, 'https://example.com/profile94.jpg', 110, 150),
(95, 'https://example.com/profile95.jpg', 250, 300),
(96, 'https://example.com/profile96.jpg', 130, 170),
(97, 'https://example.com/profile97.jpg', 140, 180),
(98, 'https://example.com/profile98.jpg', 90, 120),
(99, 'https://example.com/profile99.jpg', 160, 210),
(100, 'https://example.com/profile100.jpg', 120, 160);

-- Insert 25 entries into the orders table
INSERT INTO orders (user_id, subtotal, total) VALUES
(1, 59.99, 69.99),
(2, 120.50, 135.00),
(3, 45.99, 50.99),
(4, 89.90, 99.90),
(5, 150.00, 160.00),
(6, 200.75, 220.00),
(7, 33.99, 40.00),
(8, 75.50, 85.00),
(9, 40.00, 45.00),
(10, 60.00, 70.00),
(11, 120.30, 130.00),
(12, 99.95, 110.00),
(13, 50.00, 55.00),
(14, 175.20, 190.00),
(15, 80.00, 90.00),
(16, 190.50, 210.00),
(17, 65.50, 75.00),
(18, 110.00, 120.00),
(19, 40.25, 45.50),
(20, 130.50, 145.00),
(21, 99.99, 110.99),
(22, 250.00, 270.00),
(23, 150.00, 160.00),
(24, 80.00, 95.00),
(25, 45.99, 55.00);

-- Insert 25 more entries into the orders table
INSERT INTO orders (user_id, subtotal, total) VALUES
(26, 75.50, 85.00),
(27, 110.00, 120.00),
(28, 90.25, 100.00),
(29, 180.00, 200.00),
(30, 250.00, 270.00),
(31, 65.99, 75.00),
(32, 120.50, 130.00),
(33, 45.99, 55.00),
(34, 200.75, 220.00),
(35, 170.99, 180.00),
(36, 40.99, 50.00),
(37, 130.75, 145.00),
(38, 100.00, 110.00),
(39, 210.00, 230.00),
(40, 160.00, 175.00),
(41, 250.00, 270.00),
(42, 80.00, 95.00),
(43, 55.00, 65.00),
(44, 99.99, 110.00),
(45, 120.99, 135.00),
(46, 140.00, 155.00),
(47, 60.00, 70.00),
(48, 95.00, 105.00),
(49, 180.00, 200.00),
(50, 200.00, 215.00);

-- Insert 50 entries into the products table
INSERT INTO products (name, price, stock, url, description) VALUES
('T-shirt', 19.99, 150, 'https://example.com/tshirt.jpg', 'A comfortable cotton T-shirt, perfect for casual wear.'),
('Jeans', 39.99, 100, 'https://example.com/jeans.jpg', 'Classic denim jeans with a modern fit.'),
('Sneakers', 59.99, 80, 'https://example.com/sneakers.jpg', 'Stylish sneakers designed for comfort and durability.'),
('Sweater', 29.99, 120, 'https://example.com/sweater.jpg', 'Warm wool sweater, ideal for cold weather.'),
('Jacket', 89.99, 60, 'https://example.com/jacket.jpg', 'A stylish jacket for layering during winter or fall.'),
('Hat', 14.99, 200, 'https://example.com/hat.jpg', 'A trendy cap that adds flair to any casual outfit.'),
('Scarf', 19.99, 180, 'https://example.com/scarf.jpg', 'Soft and cozy scarf, perfect for chilly days.'),
('Shorts', 24.99, 140, 'https://example.com/shorts.jpg', 'Casual shorts for warm weather.'),
('Boots', 79.99, 70, 'https://example.com/boots.jpg', 'Durable boots for outdoor activities or casual wear.'),
('Dress', 49.99, 90, 'https://example.com/dress.jpg', 'Elegant dress for formal events or a night out.'),
('Sweatpants', 34.99, 110, 'https://example.com/sweatpants.jpg', 'Comfortable sweatpants for lounging or casual outings.'),
('Blouse', 39.99, 130, 'https://example.com/blouse.jpg', 'A stylish blouse for both work and casual settings.'),
('Cardigan', 44.99, 60, 'https://example.com/cardigan.jpg', 'A cozy cardigan that is perfect for layering.'),
('Leggings', 29.99, 150, 'https://example.com/leggings.jpg', 'Stretchy leggings for comfort and flexibility.'),
('Denim Jacket', 69.99, 80, 'https://example.com/denim-jacket.jpg', 'A timeless denim jacket, versatile for all seasons.'),
('Pajamas', 24.99, 200, 'https://example.com/pajamas.jpg', 'Comfortable and soft pajamas for a good nights sleep.'),
('Socks', 9.99, 300, 'https://example.com/socks.jpg', 'Pack of soft cotton socks for everyday wear.'),
('Coat', 129.99, 50, 'https://example.com/coat.jpg', 'Heavy winter coat designed for warmth and style.'),
('Camisole', 19.99, 160, 'https://example.com/camisole.jpg', 'Soft camisole for layering or as sleepwear.'),
('Skirt', 39.99, 140, 'https://example.com/skirt.jpg', 'A chic skirt for everyday wear or casual outings.'),
('Blazer', 89.99, 100, 'https://example.com/blazer.jpg', 'A sophisticated blazer for formal or professional settings.'),
('Flip Flops', 14.99, 250, 'https://example.com/flipflops.jpg', 'Casual flip flops for the beach or summer wear.'),
('Raincoat', 79.99, 70, 'https://example.com/raincoat.jpg', 'Lightweight raincoat to keep you dry during showers.'),
('V-neck T-shirt', 18.99, 160, 'https://example.com/vneck-tshirt.jpg', 'Casual V-neck T-shirt made from breathable cotton.'),
('Overalls', 49.99, 80, 'https://example.com/overalls.jpg', 'Denim overalls, both practical and stylish for casual wear.'),
('Sweatshirt', 39.99, 110, 'https://example.com/sweatshirt.jpg', 'Warm sweatshirt, perfect for cold weather or layering.'),
('Tank Top', 15.99, 170, 'https://example.com/tanktop.jpg', 'Cotton tank top for hot days or layering.'),
('Chinos', 49.99, 130, 'https://example.com/chinos.jpg', 'Comfortable chinos for work or casual events.'),
('Tote Bag', 19.99, 200, 'https://example.com/totebag.jpg', 'Durable tote bag for carrying all your essentials.'),
('Suit', 149.99, 60, 'https://example.com/suit.jpg', 'A stylish men suit for formal or business occasions.'),
('Joggers', 34.99, 140, 'https://example.com/joggers.jpg', 'Soft joggers for a comfortable, athletic look.'),
('Kimono', 59.99, 90, 'https://example.com/kimono.jpg', 'A beautiful kimono for casual or cultural occasions.'),
('Mittens', 14.99, 220, 'https://example.com/mittens.jpg', 'Cozy mittens to keep your hands warm in the winter.'),
('Wool Hat', 19.99, 150, 'https://example.com/woolhat.jpg', 'A wool hat to protect you from the cold weather.'),
('Belt', 29.99, 200, 'https://example.com/belt.jpg', 'Leather belt, ideal for casual or semi-formal outfits.'),
('Rain Boots', 59.99, 80, 'https://example.com/rainboots.jpg', 'Waterproof rain boots for wet weather.'),
('Turtleneck', 39.99, 130, 'https://example.com/turtleneck.jpg', 'A warm turtleneck for cold weather layering.'),
('Flip Flops', 14.99, 150, 'https://example.com/flipflops.jpg', 'Casual flip flops for the beach or summer wear.'),
('Poncho', 39.99, 100, 'https://example.com/poncho.jpg', 'A cozy poncho to keep you warm and stylish in any season.'),
('Shirt Dress', 49.99, 80, 'https://example.com/shirtdress.jpg', 'A fashionable shirt dress for casual outings.'),
('Windbreaker', 79.99, 60, 'https://example.com/windbreaker.jpg', 'Lightweight windbreaker jacket for outdoor activities.'),
('Crewneck Sweater', 34.99, 130, 'https://example.com/crewneck-sweater.jpg', 'Casual crewneck sweater for everyday wear.'),
('Puffer Jacket', 99.99, 50, 'https://example.com/puffer-jacket.jpg', 'A warm and puffy jacket perfect for cold weather.');


-- Insert 50 entries into the order_products table
INSERT INTO order_products (order_id, product_id, amount) VALUES
(1, 1, 2),
(1, 3, 1),
(2, 2, 3),
(2, 4, 1),
(3, 5, 2),
(3, 6, 1),
(4, 7, 2),
(4, 8, 1),
(5, 9, 1),
(5, 10, 3),
(6, 11, 2),
(6, 12, 1),
(7, 13, 4),
(7, 14, 1),
(8, 15, 3),
(8, 16, 1),
(9, 17, 2),
(9, 18, 2),
(10, 19, 1),
(10, 20, 2),
(11, 21, 3),
(11, 22, 1),
(12, 23, 4),
(12, 24, 1),
(13, 25, 2),
(13, 26, 1),
(14, 27, 3),
(14, 28, 2),
(15, 29, 1),
(15, 30, 3),
(16, 31, 1),
(16, 32, 2),
(17, 33, 3),
(17, 34, 2),
(18, 35, 1),
(18, 36, 4),
(19, 37, 2),
(19, 38, 3),
(20, 39, 1),
(20, 40, 2),
(21, 41, 3),
(21, 42, 2),
(22, 43, 1);


-- Insert 50 entries into the brands table with Hispanic brands
INSERT INTO brands (name, image_url) VALUES
('Bershka', 'https://example.com/bershka.jpg'),
('Zara', 'https://example.com/zara.jpg'),
('Mango', 'https://example.com/mango.jpg'),
('Desigual', 'https://example.com/desigual.jpg'),
('Pull&Bear', 'https://example.com/pullandbear.jpg'),
('Stradivarius', 'https://example.com/stradivarius.jpg'),
('Massimo Dutti', 'https://example.com/massimodutti.jpg'),
('C&A', 'https://example.com/cea.jpg'),
('Adolfo Dominguez', 'https://example.com/adolfodominguez.jpg'),
('El Corte Inglés', 'https://example.com/elcorteingles.jpg'),
('Loewe', 'https://example.com/loewe.jpg'),
('Pepe Jeans', 'https://example.com/pepejeans.jpg'),
('Bimba y Lola', 'https://example.com/bimbaylola.jpg'),
('Sfera', 'https://example.com/sfera.jpg'),
('Custo Barcelona', 'https://example.com/custobarcelona.jpg'),
('TiendaMIA', 'https://example.com/tiendamia.jpg'),
('Bershka Kids', 'https://example.com/bershkakids.jpg'),
('Paco Rabanne', 'https://example.com/pacorabanne.jpg'),
('Carolina Herrera', 'https://example.com/carolinaherrera.jpg'),
('Oscar de la Renta', 'https://example.com/oscardelarenta.jpg'),
('Antonio Banderas', 'https://example.com/antoniobanderas.jpg'),
('Camila Coelho', 'https://example.com/camilacoelho.jpg'),
('MEXX', 'https://example.com/mexx.jpg'),
('Giorgio Armani Jeans', 'https://example.com/armani.jpg'),
('Daniel Hechter', 'https://example.com/danielhechter.jpg'),
('Calvin Klein Jeans', 'https://example.com/calvinklein.jpg'),
('La Martina', 'https://example.com/lamartina.jpg'),
('Koxis', 'https://example.com/koxis.jpg'),
('Swarovski', 'https://example.com/swarovski.jpg'),
('Bertoni', 'https://example.com/bertoni.jpg'),
('Tissot', 'https://example.com/tissot.jpg'),
('H&M Mexico', 'https://example.com/hmmexico.jpg'),
('Levis México', 'https://example.com/levismexico.jpg'),
('Reebok Mexico', 'https://example.com/reebokmexico.jpg'),
('Adidas México', 'https://example.com/adidasmexico.jpg'),
('Fila Mexico', 'https://example.com/filamexico.jpg'),
('Converse México', 'https://example.com/conversemexico.jpg'),
('Bamboo Clothing', 'https://example.com/bambooclothing.jpg'),
('Charly', 'https://example.com/charly.jpg'),
('Nautica', 'https://example.com/nautica.jpg'),
('Nike México', 'https://example.com/nikemexico.jpg'),
('Puma México', 'https://example.com/pumamexico.jpg'),
('Columbia Sportswear', 'https://example.com/columbia.jpg'),
('Wrangler México', 'https://example.com/wranglermexico.jpg'),
('Tommy Jeans', 'https://example.com/tommyjeans.jpg'),
('Mavi', 'https://example.com/mavi.jpg'),
('Benetton', 'https://example.com/benetton.jpg'),
('Lacoste', 'https://example.com/lacoste.jpg'),
('Diesel México', 'https://example.com/dieselmexico.jpg'),
('Le Coq Sportif', 'https://example.com/lecoqsportif.jpg'),
('Esprit', 'https://example.com/esprit.jpg'),
('Hugo Boss México', 'https://example.com/hugobossmexico.jpg'),
('Superdry', 'https://example.com/superdry.jpg'),
('American Eagle México', 'https://example.com/americaneaglemexico.jpg');


-- Insert 50 entries into the outfits table
INSERT INTO outfits (user_id) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(30),
(31),
(32),
(33),
(34),
(35),
(36),
(37),
(38),
(39),
(40),
(41),
(42),
(43),
(44),
(45),
(46),
(47),
(48),
(49),
(50),
(51),
(52),
(53),
(54),
(55);

-- Insert 50 entries into the outfit_piece_of_clothing table
INSERT INTO outfit_piece_of_clothing (outfit_id, piece_of_clothing_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 6),
(4, 7),
(4, 8),
(5, 9),
(5, 10),
(6, 11),
(6, 12),
(7, 13),
(7, 14),
(8, 15),
(8, 16),
(9, 17),
(9, 18),
(10, 19),
(10, 20),
(11, 21),
(11, 22),
(12, 23),
(12, 24),
(13, 25),
(13, 26),
(14, 27),
(14, 28),
(15, 29),
(15, 30),
(16, 31),
(16, 32),
(17, 33),
(17, 34),
(18, 35),
(18, 36),
(19, 37),
(19, 38),
(20, 39),
(20, 40),
(21, 41),
(21, 42),
(22, 43),
(22, 44),
(23, 45),
(23, 46),
(24, 47),
(24, 48),
(25, 49),
(25, 50),
(26, 1),
(26, 5),
(27, 8),
(27, 11),
(28, 14);
