<?php
    $sql="CREATE TABLE `users` (
        `id_user` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
        `user` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        `password` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        `user_name` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        `user_cedula` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        `user_area` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        `estado` VARCHAR(12) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        `municipio` VARCHAR(25) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        `direccion` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        `telefono` VARCHAR(20) NULL DEFAULT NULL COLLATE 'utf8_spanish_ci',
        PRIMARY KEY (`id_user`) USING BTREE
    )
    COLLATE='utf8_spanish_ci'
    ENGINE=InnoDB
    AUTO_INCREMENT=2
    ;
    ";