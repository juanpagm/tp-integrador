empresa CREATE TABLE `oferta_laboral`
(
 `id`              integer NOT NULL ,
 `cargo_ofrecido`  varchar(100) NOT NULL ,
 `id_empresa`      integer NOT NULL ,
 `cantidad_de_hs`  varchar(45) NOT NULL ,
 `sueldo_estimado` varchar(45) NOT NULL ,

PRIMARY KEY (`id`),
KEY `FK_2` (`id_empresa`),
CONSTRAINT `FK_2` FOREIGN KEY `FK_2` (`id_empresa`) REFERENCES `empresa` (`id`)
);






