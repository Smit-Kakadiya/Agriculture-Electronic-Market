-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 13, 2019 at 08:45 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agriemart`
--

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `f` varchar(100) NOT NULL,
  `to` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`f`, `to`) VALUES
('jemis68', 'adit66'),
('jemis67', 'adit66');

-- --------------------------------------------------------

--
-- Table structure for table `knowledge`
--

CREATE TABLE `knowledge` (
  `cid` int(30) NOT NULL,
  `ctitle` varchar(200) NOT NULL,
  `ctype` varchar(20) NOT NULL,
  `info` varchar(300) NOT NULL,
  `src` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `knowledge`
--

INSERT INTO `knowledge` (`cid`, `ctitle`, `ctype`, `info`, `src`) VALUES
(0, 'Bear', 'Apple', 'apply bt bababa', 'video.mp4'),
(1, 'apple', 'Apple', 'apple by banana', 'video.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `postid` int(30) NOT NULL,
  `desci` varchar(200) NOT NULL,
  `crop` varchar(30) NOT NULL,
  `price` int(20) NOT NULL,
  `owner` varchar(30) NOT NULL,
  `lon` varchar(10) NOT NULL,
  `lat` varchar(10) NOT NULL,
  `img` varchar(25) NOT NULL DEFAULT '1.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`postid`, `desci`, `crop`, `price`, `owner`, `lon`, `lat`, `img`) VALUES
(1, '200 quintal of wheet i want to sell right now', 'wheet', 450, 'jemis68', '89.9222188', '23.9222188', 'wheet.jpg'),
(2, 'i have 100 quintal cotton and i wish to sell my cotton', 'cotton', 1200, 'jemis68', '72.9222188', '22.5576208', 'cotton.jpg'),
(5, 'jhgjgh', 'rice', 700, 'yash', '72.9222188', '22.5576208', 'kyc.jpg'),
(6, 'qwerty', 'rice', 700, 'yash', '72.9222188', '22.5576208', 'akyc.jpg'),
(11, 'hit', 'Ricey', 701, 'adit66', '71.1923805', '22.2586519', 'Sketchpad.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(30) NOT NULL,
  `userid` varchar(30) NOT NULL,
  `type` varchar(20) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `pass` varchar(1024) NOT NULL,
  `adrs` varchar(256) NOT NULL,
  `status` int(5) NOT NULL DEFAULT '0',
  `kyc` varchar(25) NOT NULL DEFAULT '',
  `profile` varchar(25) NOT NULL DEFAULT '1.png'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userid`, `type`, `fname`, `lname`, `email`, `mobile`, `pass`, `adrs`, `status`, `kyc`, `profile`) VALUES
(1, 'jemis67', 'admin', 'jemis', 'patel', 'jemis.goti9381@gmail', '9537405066', '255c7eb0b00ddf18e07a85c34b3af5d24a6f9df4', '13,sanskar\r\nnear amabamata mandir', 3, 'img-1-1200x1000.jpg', 'jemis.jpg'),
(4, 'user420', 'Vendor', 'Lucas', 'CaaaÃ±o Viam', '255abcde@rupyamail.c', '9678755231', '04aaf260d8393fc1c8740498a6c45d82917aab55', 'uan Maria Gutierrez 27153 2 piso', 0, '', '3.jpg'),
(7, 'jemis68', 'farmer', 'jems ', 'roy', '', '9537405066', '04aaf260d8393fc1c8740498a6c45d82917aab55', '', 2, '12.jpg', 'jemis.jpg'),
(12, 'yash', 'farmer', 'jemis', 'patel', 'jemis.goti9381@gmail', '9537405066', '04aaf260d8393fc1c8740498a6c45d82917aab55', '13,sanskar\r\nnear amabamata mandir', 3, 'akyc.jpg', '1.png'),
(19, 'smit74', 'Vendor', 'Smit', 'Kakadiya', 'smit@hotmail.com', '9898242240', '255c7eb0b00ddf18e07a85c34b3af5d24a6f9df4', 'Surat', 0, 'kyc.jpg', '2.jpg'),
(20, 'adit66', 'farmer', 'Adit', 'Patel', 'adit@flipkart.com', '9601550947', 'ca19ce45046afb62a037f6576ded99ed4b53bfa2', 'Surat', 3, 'akyc.jpg', '3.jpeg'),
(24, 'yash2282', 'farmer', 'Yash', 'Sohagia', '', '8153832282', '2f26286530e7d436b66ef07574f15b48bf76358d', 'Surat', 2, 'kyc.jpg', '43.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `knowledge`
--
ALTER TABLE `knowledge`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `postid` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
