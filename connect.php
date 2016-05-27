<?php
$host='localhost';
$user='maria';
$password='progettoweb';
$database='pw';
//Connessione al database
$connection = mysql_connect($host, $user, $password);
if (!$connection) {
    die('Connessione fallita: ' . mysql_error());
}
//Selezione del database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
    die("Errore nella selezione del database: " . mysql_error());
}
?> 
