CREATE DATABASE project;
use project;
CREATE TABLE iitpatna(
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  category VARCHAR(50) NOT NULL,
  pass_word VARCHAR(255) NOT NULL,
  created DATETIME DEFAULT CURRENT_TIMESTAMP
);
create table page1data(
	jwt_token varchar(255) primary key,
    data text
);
create table page2data(
	jwt_token varchar(255) primary key,
    data text
);
create table page3data(
	jwt_token varchar(255) primary key,
    data text
);
create table page4data(
	jwt_token varchar(255) primary key,
    data text
);
create table page5data(
	jwt_token varchar(255) primary key,
    data text
);
create table page6data(
	jwt_token varchar(255) primary key,
    data text
);
create table page7data(
	jwt_token varchar(255) primary key,
    data text
);
create table page8data(
	jwt_token varchar(255) primary key,
    data text
);
create table page8file(
	jwt_token varchar(255) primary key,
    data text
);