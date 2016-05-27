<?php
/*
 * Classe i cui metodi effettuano le query al database e restituiscono i dati 
 * cercati.
 */
class UseDb {

    public function __construct() {
       require('connect.php'); 
    }
    public function getCredential($user, $password) {
        if (!$query = mysql_query("SELECT * FROM utenti WHERE nome='$user'AND password='$password'")) {
            die("Errore nella query getcredential: " . mysql_error());
        }
        if (mysql_fetch_row($query) > 0) {
            return true;
        }
    }
}
?>
