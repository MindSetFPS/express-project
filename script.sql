-- Create database if it does not exist
CREATE DATABASE IF NOT EXISTS app;

-- Use the database
USE app;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NULL
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  url VARCHAR(2048) NULL,
  description TEXT NULL
);

CREATE TABLE IF NOT EXISTS piece_of_clothings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NULL,
  type_of_clothing VARCHAR(255) NULL,
  brand VARCHAR(255) NULL,
  size VARCHAR(255) NULL,
  color VARCHAR(255) NULL,
  original_price DECIMAL(10,2) NULL,
  season VARCHAR(255) NULL,
  image_url VARCHAR(255) NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create profile table
CREATE TABLE IF NOT EXISTS profiles (
  user_id INT NOT NULL,
  image_url VARCHAR(255) NULL,
  following INT NOT NULL DEFAULT 0,
  followers INT NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL, -- new column to reference a user ID
  subtotal DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create orderItem table
CREATE TABLE IF NOT EXISTS order_products (
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  amount INT NOT NULL DEFAULT 1,
  PRIMARY KEY (order_id, product_id),
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Create brands table
CREATE TABLE IF NOT EXISTS brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NULL
);

-- Create outfits table
CREATE TABLE IF NOT EXISTS outfits(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

 -- Create table to store pieces of clothing in outfits
CREATE TABLE IF NOT EXISTS outfit_piece_of_clothing (
  outfit_id INT NOT NULL,
  piece_of_clothing_id INT NOT NULL,
  PRIMARY KEY (outfit_id, piece_of_clothing_id),
  FOREIGN KEY (outfit_id) REFERENCES outfits(id),
  FOREIGN KEY (piece_of_clothing_id) REFERENCES piece_of_clothings(id)
);