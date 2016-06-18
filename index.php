<?php

//versione provvisoria per test metodi
session_start();
include 'FrameWork.php';
$fw = new FrameWork();
if (isset($_POST['nome']) && isset($_POST['password'])) {
    //memorizzo nelle variabili i dati inseriti dall'utente
    $user = $_POST['nome'];
    $password = $_POST['password'];
    //Controllo se le credenziali inserite sono corrette. In caso affermativo 
    //sarà caricata la pagina home altrimenti si dovrà rieffettuare nuovamente 
    //il login.
    if ($fw->getCredential($user, $password)) {
        include 'home.html';
    } else {
        include 'index_error.html';
    }
} else if (isset($_POST['operation'])) {
    $fw->fromAjax($_POST);
}
unset($_POST);
?>