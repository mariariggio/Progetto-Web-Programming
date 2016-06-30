<?php

/*
 * Classe i cui metodi effettuano le query al database e restituiscono i dati 
 * cercati.
 */

class UseDb {
  
    public function __construct() {
        require('connect.php');
    }

//metodo che effettua una query sul database per verificare le credenziali
//inserite, ritorna true oppure un messaggio di errore se la query non produce
//nessun risultato
    public function getCredential($user, $password) {
        global $connection;
        $query = mysqli_query($connection,("SELECT * FROM utenti WHERE nome='$user' AND password='$password'"));
        if (!$query) {
            die("Errore nella query getCredential: " . mysqli_connect_error());
        }
        if (mysqli_num_rows($query) > 0) {
            return true;
        }
    }

    //metodo che esegue la query per l'inserimento di una nuova operazione,
    //Se l'inserimento va a buon fine ritorna true.
    public function newOperation($value) {
        $cliente = $value['cod_cliente'];
        $articolo = $value['cod_articolo'];
        $num = $value['num_art'];
        $manodopera = $value['cod_man'];
        global $connection;
        $qntCorrente = mysqli_fetch_array(mysqli_query($connection, "SELECT quantita FROM articoli WHERE codice='$articolo'"));
        $ret = "Quantità non valida";
        if ($articolo != "null" && $num <= $qntCorrente['quantita']) {
            if ($manodopera=="null") {
                $prezzo = mysqli_fetch_array(mysqli_query($connection, "SELECT prezzo_vendita FROM articoli WHERE codice='$articolo'"));
                $costo = $prezzo['prezzo_vendita'] * $num;
                $query = mysqli_query($connection, "INSERT INTO operazioni (id_cliente, id_articolo, costo, quantita)
                         values('$cliente', '$articolo', '$costo', '$num')");
                //aggiono la quantità in magazzino
                $newQnt = $qntCorrente['quantita'] - $num;
                mysqli_query($connection, "UPDATE articoli SET quantita='$newQnt' WHERE codice='$articolo'");
                $ret = $query;
            }  else if ($manodopera != "null") {
                $prezzoArt = mysqli_fetch_array(mysqli_query($connection, "SELECT prezzo_vendita FROM articoli WHERE codice='$articolo'"));
                $costoArt = $prezzoArt['prezzo_vendita'] * $num;
                $prezzoMan = mysqli_fetch_array(mysqli_query($connection, "SELECT costo FROM manodopera WHERE id_manodopera='$manodopera'"));
                $costoMan = $prezzoMan["costo"];
                $costoTot = $costoArt + $costoMan;
                $query = mysqli_query($connection, "INSERT INTO operazioni (id_cliente, id_articolo, costo, quantita, id_manodopera)
                         values('$cliente', '$articolo', '$costoTot', '$num', '$manodopera')");
                //aggiono la quantità in magazzino
                $newQnt = $qntCorrente['quantita'] - $num;
                mysqli_query($connection, "UPDATE articoli SET quantita='$newQnt' WHERE codice='$articolo'");
                $ret = $query;
            }
        }else if ($articolo=="null" && $manodopera!="null") {
                $prezzo = mysqli_fetch_array(mysqli_query($connection, "SELECT costo FROM manodopera WHERE id_manodopera='$manodopera'"));
                $costo = $prezzo["costo"];
                $query = mysqli_query($connection, "INSERT INTO operazioni (id_cliente, id_manodopera, costo, quantita)
                   values('$cliente', '$manodopera', '$costo', '$num')");
                $ret = $query;
            }
        return $ret;
    }
    //metodo che esegue la query che restituisce le operazioni. 
      public function getOperation() {
        $ret = "...NON CI SONO OPERAZIONI IN CORSO...";
        global $connection;
        $query = mysqli_query($connection, ("SELECT * FROM operazioni"));
        if (!$query) {
            die("Errore nella query getOperation: " . mysqli_error($connection));
        } else if (mysqli_num_rows($query) > 0) {
            $ret = mysqli_fetch_all($query, MYSQLI_ASSOC);
        }
        return $ret;
    }
    //metodo che esegue la query per l'inserimento di un nuovo cliente nella
    //tabella clienti del database. Se l'inserimento va a buon fine ritorna
    //true altrimenti un messaggio di errore
    public function newClient($value) {
        $cf = $value['cf'];
        $nome = $value['nome'];
        $cognome = $value['cognome'];
        $ind = $value['indirizzo'];
        $tel = $value['cellulare'];
        $citta = $value['citta'];
        $prov = $value['provincia'];
        global $connection;
        $query = mysqli_query($connection,("INSERT INTO clienti(cf,nome,cognome,indirizzo, cellulare, citta, provincia) 
            values('$cf', '$nome', '$cognome', '$ind', '$tel', '$citta', '$prov')"));
        if (!$query) {
            die("Errore di inserimento: " . mysqli_error($connection));
        } else {
            return true;
        }
    }
    
    //metodo che esegue la query che ritorna i clienti del database oppure un 
    //messaggio se la query non produce nessun risultato
    public function getClient() {
        $ret = "NON CI SONO CLIENTI";
        global $connection;
        $query = mysqli_query($connection,("SELECT * FROM clienti"));
        if (!$query) {
            die("Errore nella query getClient: " . mysqli_error($connection));
        } else if (mysqli_num_rows($query) > 0) {
            $ret = mysqli_fetch_all($query,MYSQLI_ASSOC);  
        }
        return $ret;
    }
    //metodo che esegue la query per l'inserimento di un nuovo articolo nella
    //tabella articoli del database. Se l'inserimento va a buon fine ritorna
    //true altrimenti un messaggio di errore
     public function newArticle($value) {
        $cod = $value['codArticolo'];
        $cat = $value['categoria'];
        $descr = $value['descrizione'];
        $quant = $value['quantita'];
        $prAcq = $value['prezAcquisto'];
        $prVend = $value['prezVendita'];
        $codForn = $value['codFornitore'];
        global $connection;
        $query = mysqli_query($connection,"INSERT INTO articoli(codice, categoria, descr, quantita, prezzo_acquisto, prezzo_vendita, cod_fornitore) 
                              values('$cod', '$cat', '$descr', '$quant', '$prAcq', '$prVend', '$codForn')");
        if(!$query) {
            die("Errore di inserimento: " . mysqli_error($connection));
        } else {
            return true;
        }
    }
    //metodo che esegue la query che ritorna gli articoli del database oppure un 
    //messaggio se la query non produce nessun risultato
    public function getArticle() {
        $ret = "NON CI SONO ARTICOLI";
        global $connection;
        $query = mysqli_query($connection,("SELECT * FROM articoli"));
        if (!$query) {
            die("Errore nella query getArticle: " . mysqli_error($connection));
        } else if (mysqli_num_rows($query) > 0) {
            $ret = mysqli_fetch_all($query,MYSQLI_ASSOC);
        }
        return $ret;
    }
    //metodo che esegue la query per l'inserimento di un nuovo fornitore nella
    //tabella fornitori del database. Se l'inserimento va a buon fine ritorna
    //true altrimenti un messaggio di errore
    public function newSupplier($value) {
        $pIva = $value['pIva'];
        $ragSociale = $value['ragSociale'];
        $cell = $value['cellulare'];
        $ind = $value['indirizzo'];
        $citta = $value['citta'];
        $prov = $value['provincia'];
        global $connection;
        $query = mysqli_query($connection,("INSERT INTO fornitori(piva, ragione_sociale,cellulare, indirizzo, citta, provincia) 
            values('$pIva', '$ragSociale', '$cell', '$ind', '$citta', '$prov')"));
        if (!$query) {
            die("Errore di inserimento: " . mysqli_error($connection));
        } else {
            return true;
        }
    }
     //metodo che esegue la query che ritorna i fornitori del database oppure un 
    //messaggio se la query non produce nessun risultato
    public function getSupplier() {
        $ret = "NON CI SONO FORNITORI";
        global $connection;
        $query = mysqli_query($connection, ("SELECT * FROM fornitori"));
        if (!$query) {
            die("Errore nella query getSupplier: " . mysqli_error($connection));
        } else if (mysqli_num_rows($query) > 0) {
             $ret = mysqli_fetch_all($query,MYSQLI_ASSOC);
        }
        return $ret;
    }
    //metodo che esegue la query che ritorna il tipo di prestazioni offerte
    public function getManodopera(){
        $ret= "...Database vuoto... ";
        global $connection;
        $query = mysqli_query($connection, ("SELECT * FROM manodopera"));
          if (!$query) {
            die("Errore nella query getManodopera: " . mysqli_error($connection));
        } else if (mysqli_num_rows($query) > 0) {
             $ret = mysqli_fetch_all($query,MYSQLI_ASSOC);
        }
        return $ret;
    }
}
