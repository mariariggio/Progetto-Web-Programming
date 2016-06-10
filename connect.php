<?php
$host='localhost';
$user='maria';
$password='progettoweb';
$database='pw';
global $connection;
//Connessione al database
$connection= mysqli_connect($host, $user, $password, $database);
//Verifico stato della connessione
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

?> 
