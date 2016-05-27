<?php

session_start();
include 'UseDb.php';
$db=new UseDb();
//mamorizzo nelle variabili i dati inseriti dall'utente
$user = $_POST['nome'];
$password = $_POST['password'];
//Controllo se le credenziali inserite sono corrette. In caso affermativo sarà 
//caricata la pagina home altrimenti si dovrà rieffettuare nuovamente il login.
if ($db->getCredential($user,$password)) {
    include 'home.html';
} else {
    include 'index_error.html';
}
?>
