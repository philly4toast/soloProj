-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'models'
-- 
-- ---

DROP TABLE IF EXISTS `models`;
		
CREATE TABLE `models` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `model_name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(50) NOT NULL,
  `completed` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'pictures'
-- 
-- ---

DROP TABLE IF EXISTS `pictures`;
		
CREATE TABLE `pictures` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `image_url` VARCHAR(200) NOT NULL,
  `model_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `pictures` ADD FOREIGN KEY (model_id) REFERENCES `models` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `models` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `pictures` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `models` (`id`,`model_name`,`description`,`completed`) VALUES
-- ('','','','');
-- INSERT INTO `pictures` (`id`,`image_url`,`model_id`) VALUES
-- ('','','');



