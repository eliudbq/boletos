<?php
    $sql="CREATE TABLE `sessions` (
        `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
        `id_user` INT(10) UNSIGNED NULL DEFAULT NULL,
        `menu` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        PRIMARY KEY (`id`) USING BTREE,
        INDEX `FK_users` (`id_user`) USING BTREE,
        CONSTRAINT `FK_users` FOREIGN KEY (`id_user`) REFERENCES `boleteria`.`users` (`id_user`) ON UPDATE CASCADE ON DELETE CASCADE
    )
    COLLATE='utf8_spanish_ci'
    ENGINE=InnoDB
    AUTO_INCREMENT=2
    ;";
