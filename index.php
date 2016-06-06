<?php

//versione provvisoria per test metodi
session_start();
include 'UseDb.php';
$db = new UseDb();
if (isset($_POST['nome']) && isset($_POST['password'])) {
    //memorizzo nelle variabili i dati inseriti dall'utente
    $user = $_POST['nome'];
    $password = $_POST['password'];
    //Controllo se le credenziali inserite sono corrette. In caso affermativo 
    //sar� caricata la pagina home altrimenti si dovr� rieffettuare nuovamente 
    //il login.
    if ($db->getCredential($user, $password)) {
        include 'home.html';
    } else {
        include 'index_error.html';
    }
}
if (isset($_POST['operation'])) {
    $request = json_decode($_POST['operation'], true);
    $db->newClient($request);
    $nome = $request['nome'];
    $cognome = $request['cognome'];
}
