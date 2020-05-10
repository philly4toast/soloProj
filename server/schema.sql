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
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `model_name` VARCHAR(20) NULL DEFAULT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'pictures'
-- 
-- ---

DROP TABLE IF EXISTS `pictures`;
		
CREATE TABLE `pictures` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `imgURL` VARCHAR(300) NULL DEFAULT NULL,
  `model_id` INTEGER NULL DEFAULT NULL,
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

-- INSERT INTO `models` (`id`,`model_name`,`description`) VALUES
-- ('','','');
-- INSERT INTO `pictures` (`id`,`imgURL`,`model_id`) VALUES
-- ('','','');