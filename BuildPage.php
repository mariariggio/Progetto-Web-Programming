<?php

/* Classe istanziata da FrameWork.php, ogni metodo prende dei dati e li elabora
 * in formato html per inviarli al server
 */

class BuildPage {

    public function __construct() {
        
    }
    //metodo responsabile della generazione della tabella dei clienti, i dati 
    //provengono da una query fatta al database, se questa non produce nessun 
    //risultato ciò verrà notificato come risultato.
    function makeClientsTable($result) {
        $ret = $result;
        if (!is_string($ret)) {
            $ret = "<table>
            <tr>
            <th></th>
            <th>Codice Fiscale</th> 
            <th>Nome</th>
            <th>Cognome</th>
            <th>Indirizzo</th>
            <th>Cellulare</th>
            <th>Città</th>
            <th>Provincia</th>
            </tr>";
            for ($i = 0; $i < sizeof($result); $i++) {
                $ret=$ret."<tr><td id=".$result[$i]['cf']."><input type='checkbox'>
                </td><td>".$result[$i]['cf'].
                "</td><td>".$result[$i]['nome'].
                "</td><td>".$result[$i]['cognome'].
                "</td><td>".$result[$i]['indirizzo'].
                "</td><td>".$result[$i]['cellulare'].
                "</td><td>".$result[$i]['citta'].
                "</td><td>".$result[$i]['provincia'].
                "</td></tr>";
            }
            $ret = $ret . "</tbody></table>";
        }
        return $ret;
    }
    //metodo responsabile della generazione della tabella dei clienti, i dati 
    //provengono da una query fatta al database, se questa non produce nessun 
    //risultato ciò verrà notificato come risultato.
    function makeArticlesTable($result) {
        $ret = $result;
        if (!is_string($ret)) {
            $ret = "<table>
            <tr>
            <th></th>
            <th>Codice Articolo</th> 
            <th>Categoria</th>
            <th>Descrizione</th>
            <th>Quantita</th>
            <th>Prezzo Acquisto</th>
            <th>Prezzo Vendita</th>
            <th>Codice Fornitore</th>
            </tr>";
            for ($i = 0; $i < sizeof($result); $i++) {
                $ret=$ret."<tr><td id=".$result[$i]['codice']."><input type='checkbox'>
                </td><td>".$result[$i]['codice'].
                "</td><td>".$result[$i]['categoria'].
                "</td><td>".$result[$i]['descr'].
                "</td><td>".$result[$i]['quantita'].
                "</td><td>".$result[$i]['prezzo_acquisto'].
                "</td><td>".$result[$i]['prezzo_vendita'].
                "</td><td>".$result[$i]['cod_fornitore'].
                "</td></tr>";
            }
            $ret = $ret . "</tbody></table>";
        }
        return $ret;
    }
    //metodo responsabile della generazione della tabella dei fornitori, i dati 
    //provengono da una query fatta al database, se questa non produce nessun 
    //risultato ciò verrà notificato come risultato.
    public function makeSupplierTable($result) {
        $ret = $result;
        if (!is_string($ret)) {
            $ret = "<table>
            <tr>
            <th></th>
            <th>P. Iva</th> 
            <th>Ragione Sociale</th>
            <th>Cellulare</th>
            <th>Indirizzo</th>
            <th>Città</th>
            <th>Provincia</th>
            </tr>";
            for ($i = 0; $i < sizeof($result); $i++) {
                $ret=$ret."<tr><td id=".$result[$i]['piva']."><input type='checkbox'>
                </td><td>".$result[$i]['piva'].
                "</td><td>".$result[$i]['ragione_sociale'].
                "</td><td>".$result[$i]['cellulare'].
                "</td><td>".$result[$i]['indirizzo'].
                "</td><td>".$result[$i]['citta'].
                "</td><td>".$result[$i]['provincia'].
                "</td></tr>";
            }
            $ret = $ret . "</tbody></table>";
        }
        return $ret;
    }

}
