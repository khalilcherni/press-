-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema press
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema press
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `press` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `press` ;

-- -----------------------------------------------------
-- Table `press`.`home`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `press`.`home` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `press`.`music`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `press`.`music` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(1000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `press`.`politics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `press`.`politics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `press`.`sports`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `press`.`sports` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `press`.`tech`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `press`.`tech` (
  `id` INT UNSIGNED NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
