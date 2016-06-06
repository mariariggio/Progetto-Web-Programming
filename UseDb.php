<?php

/*
 * Classe i cui metodi effettuano le query al database e restituiscono i dati 
 * cercati.
 */

class UseDb {

    public function __construct() {
        require('connect.php');
    }

    //metodo che effettua una query sul database per le credenziali inserite
    //ritorna true oppure un messaggio di errore se la query non prodice nessun 
    //risultato
    public function getCredential($user, $password) {
        if (!$query = mysql_query("SELECT * FROM utenti WHERE nome='$user'AND password='$password'")) {
            die("Errore nella query getcredential: " . mysql_error());
        }
        if (mysql_fetch_row($query) > 0) {
            return true;
        }
    }

    //metodo che esegue la query per l'inserimento di un nuovo cliente nella
    //tabella clienti del database. Se l'inserimento va a buon fine ritorna
    //true altrimenti un messaggio di errore
    public function newClient($value) {
        $cf = $value['cf'];
        $nome =$value['nome'];
        $cognome = $value['cognome'];
        $ind = $value['indirizzo'];
        $tel = $value['cellulare'];
        $citta = $value['citta'];
        $prov = $value['provincia'];
        if (!$query = mysql_query("INSERT INTO clienti(cf,nome,cognome,indirizzo, cellulare, citta, provincia) 
            values('$cf', '$nome', '$cognome', '$ind', '$tel', '$citta', '$prov')")) {
            die("Errore di inserimento: " . mysql_error());
        } else {
            return true;
        }
    }
}
?>
