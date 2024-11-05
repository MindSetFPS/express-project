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

-- Create profile table
CREATE TABLE IF NOT EXISTS profile (
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
CREATE TABLE IF NOT EXISTS orderProduct (
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

-- Create table to store products in outfits
CREATE TABLE IF NOT EXISTS outfitProduct (
  outfit_id INT NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY (outfit_id, product_id),
  FOREIGN KEY (outfit_id) REFERENCES outfits(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
