-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-08-2018 a las 15:27:35
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `huachera-app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_campeonato`
--

CREATE TABLE IF NOT EXISTS `tb_campeonato` (
  `id_campeonato` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_campeonato` int(11) DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `nombre` varchar(1000) NOT NULL,
  PRIMARY KEY (`id_campeonato`),
  UNIQUE KEY `id_campeonato` (`id_campeonato`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `tb_campeonato`
--

INSERT INTO `tb_campeonato` (`id_campeonato`, `id_tipo_campeonato`, `fecha_inicio`, `nombre`) VALUES
(1, 1, '2017-07-23 00:00:00', 'CAMPEONATO OFICIAL 2017'),
(2, 1, '2016-04-03 00:00:00', 'CAMPEONATO OFICIAL 2016');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_encuentro`
--

CREATE TABLE IF NOT EXISTS `tb_encuentro` (
  `id_encuentro` int(11) NOT NULL AUTO_INCREMENT,
  `id_fecha` int(11) DEFAULT NULL,
  `id_equipo_local` int(11) DEFAULT NULL,
  `id_equipo_visita` int(11) DEFAULT NULL,
  `id_estadio` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_encuentro`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `tb_encuentro`
--

INSERT INTO `tb_encuentro` (`id_encuentro`, `id_fecha`, `id_equipo_local`, `id_equipo_visita`, `id_estadio`) VALUES
(2, 1, 9, 1, 8),
(3, 2, 1, 5, 1),
(4, 3, 10, 1, 10),
(5, 4, 7, 1, 7),
(6, 5, 1, 2, 1),
(7, 6, 3, 1, 3),
(8, 7, 1, 8, 1),
(9, 8, 6, 1, 6),
(10, 9, 4, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_equipo`
--

CREATE TABLE IF NOT EXISTS `tb_equipo` (
  `id_equipo` int(11) NOT NULL,
  `nombre` varchar(500) DEFAULT NULL,
  `escudo` varchar(250) DEFAULT NULL,
  `descripcion` varchar(1000) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_equipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_equipo`
--

INSERT INTO `tb_equipo` (`id_equipo`, `nombre`, `escudo`, `descripcion`) VALUES
(1, 'LA HUACHERA', 'img/no_image_3.png', 'Club de f&uacute;tbol ubicado en la localidad de Pintu&eacute;, fundado el 5 de abril de 1975.'),
(2, 'ACULEO', 'img/no_image_3.png', NULL),
(3, 'REAL MADRID', 'img/no_image_3.png', NULL),
(4, 'TRICOLOR', 'img/no_image_3.png', NULL),
(5, 'SANTA ELENA DE VILUCO', 'img/no_image_3.png', NULL),
(6, 'KENNEDY', 'img/no_image_3.png', NULL),
(7, 'FERROVIARIOS', 'img/no_image_3.png', NULL),
(8, 'CHALLAY BOYS', 'img/no_image_3.png', NULL),
(9, 'UNION NORTE', 'img/no_image_3.png', NULL),
(10, 'PAULA JARAQUEMADA', 'img/no_image_3.png', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_estadio`
--

CREATE TABLE IF NOT EXISTS `tb_estadio` (
  `id_estadio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `id_equipo` int(11) DEFAULT NULL,
  `ubicacion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_estadio`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `tb_estadio`
--

INSERT INTO `tb_estadio` (`id_estadio`, `nombre`, `id_equipo`, `ubicacion`) VALUES
(1, 'ESTADIO LA HUACHERA', 1, 'MIGUEL LETELIER 30 PINTUE'),
(2, 'ESTADIO ACULEO', 2, NULL),
(3, 'ESTADIO REAL MADRID', 3, NULL),
(4, 'ESTADIO TRICOLOR', 4, NULL),
(5, 'ESTADIO SANTA ELENA DE VILUCO', 5, NULL),
(6, 'ESTADIO KENNEDY', 6, NULL),
(7, 'ESTADIO FERROVIARIOS', 7, NULL),
(8, 'ESTADIO CHALLAY BOYS', 8, NULL),
(9, 'ESTADIO UNION NORTE', 9, NULL),
(10, 'ESTADIO PAULA JARAQUEMADA', 10, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_expulsados`
--

CREATE TABLE IF NOT EXISTS `tb_expulsados` (
  `id_expulsion` int(11) NOT NULL AUTO_INCREMENT,
  `jugador` varchar(250) NOT NULL,
  `partidos_asignados` int(11) NOT NULL,
  `partidos_pendientes` int(11) NOT NULL,
  `activo` int(11) NOT NULL,
  PRIMARY KEY (`id_expulsion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `tb_expulsados`
--

INSERT INTO `tb_expulsados` (`id_expulsion`, `jugador`, `partidos_asignados`, `partidos_pendientes`, `activo`) VALUES
(1, 'jugador 1', 5, 3, 1),
(2, 'jugador 2', 4, 4, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_fecha`
--

CREATE TABLE IF NOT EXISTS `tb_fecha` (
  `id_fecha` int(11) NOT NULL AUTO_INCREMENT,
  `id_campeonato` int(11) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `estado` int(11) NOT NULL,
  `hora` time DEFAULT NULL,
  PRIMARY KEY (`id_fecha`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `tb_fecha`
--

INSERT INTO `tb_fecha` (`id_fecha`, `id_campeonato`, `numero`, `fecha`, `estado`, `hora`) VALUES
(1, 1, 1, '2017-06-11 00:00:00', 1, '11:50:00'),
(2, 1, 2, '2017-07-02 00:00:00', 1, '11:50:00'),
(3, 1, 3, '2017-07-09 00:00:00', 1, '11:50:00'),
(4, 1, 4, '2017-07-23 00:00:00', 1, '12:50:00'),
(5, 1, 5, '2017-07-30 00:00:00', 0, '11:50:00'),
(6, 1, 6, '2017-08-06 00:00:00', 0, '11:50:00'),
(7, 1, 7, '2017-08-13 00:00:00', 0, '11:50:00'),
(8, 1, 8, '2017-08-20 00:00:00', 0, '11:50:00'),
(9, 1, 9, '2017-08-27 00:00:00', 0, '11:50:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_partido`
--

CREATE TABLE IF NOT EXISTS `tb_partido` (
  `id_partido` int(11) NOT NULL AUTO_INCREMENT,
  `id_encuentro` int(11) DEFAULT NULL,
  `id_serie` int(11) DEFAULT NULL,
  `goles_local` int(11) DEFAULT NULL,
  `goles_visita` int(11) DEFAULT NULL,
  `amarillas_local` int(11) DEFAULT NULL,
  `amarillas_visita` int(11) DEFAULT NULL,
  `rojas_local` int(11) DEFAULT NULL,
  `rojas_visita` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_partido`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `tb_partido`
--

INSERT INTO `tb_partido` (`id_partido`, `id_encuentro`, `id_serie`, `goles_local`, `goles_visita`, `amarillas_local`, `amarillas_visita`, `rojas_local`, `rojas_visita`) VALUES
(5, 2, 1, 1, 2, NULL, NULL, NULL, NULL),
(6, 2, 2, 3, 1, NULL, NULL, NULL, NULL),
(7, 2, 3, 1, 1, NULL, NULL, NULL, NULL),
(8, 2, 4, 1, 0, NULL, NULL, NULL, NULL),
(9, 3, 1, 3, 1, NULL, NULL, NULL, NULL),
(10, 3, 2, 2, 1, NULL, NULL, NULL, NULL),
(11, 3, 3, 0, 1, NULL, NULL, NULL, NULL),
(12, 3, 4, 1, 0, NULL, NULL, NULL, NULL),
(13, 4, 1, 2, 2, NULL, NULL, NULL, NULL),
(14, 4, 2, 1, 2, NULL, NULL, NULL, NULL),
(15, 4, 3, 1, 0, NULL, NULL, NULL, NULL),
(16, 4, 4, 0, 1, NULL, NULL, NULL, NULL),
(17, 5, 1, 2, 3, NULL, NULL, NULL, NULL),
(18, 5, 2, 1, 4, NULL, NULL, NULL, NULL),
(19, 5, 3, 1, 1, NULL, NULL, NULL, NULL),
(20, 5, 4, 3, 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_serie`
--

CREATE TABLE IF NOT EXISTS `tb_serie` (
  `id_serie` int(11) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_serie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_serie`
--

INSERT INTO `tb_serie` (`id_serie`, `nombre`) VALUES
(1, 'PRIMERA'),
(2, 'SEGUNDA'),
(3, 'TERCERA'),
(4, 'SENIOR');
