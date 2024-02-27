drop database if exists form_insert_node_express;
create database form_insert_node_express;
use form_insert_node_express;

create table usuarios(
	id int primary key auto_increment,
	email varchar(255)
   ); 
