-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2020 a las 04:17:05
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdfinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestros`
--

CREATE TABLE `maestros` (
  `maestroid` int(5) NOT NULL,
  `dpi` int(14) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `apellido` varchar(50) COLLATE utf8_bin NOT NULL,
  `telefono` int(8) NOT NULL,
  `correo` varchar(50) COLLATE utf8_bin NOT NULL,
  `fechanac` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `maestros`
--

INSERT INTO `maestros` (`maestroid`, `dpi`, `nombre`, `apellido`, `telefono`, `correo`, `fechanac`) VALUES
(1, 2147483647, 'Victor', 'Hernandez', 78451203, 'victor@gmail.com', '25/10/1950'),
(2, 2147483647, 'Andrea', 'Arriola', 45123698, 'andrea@gmail.com', '25/12/1998'),
(3, 2147483647, 'Karina', 'lopez', 78451203, 'karina@gmail.com', '25/02/2000'),
(4, 2147483647, 'Anthony ', 'García', 78451236, 'thony@gmail.com', '07/06/1998');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
