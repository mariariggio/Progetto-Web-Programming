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
            <th>Citt&#224</th>
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
            <th>Quantit&#224</th>
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
            <th>Citt&#224</th>
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

    //Metodo che crea il form per aggiungere un nuovo Articolo. Ogni articolo è
    //legato ad un fornitore quindi il metodo prende in input la lista dei
    //fornitori, e nel form generato sarà possibile schegliere il fornitore 
    //del nuovo articolo
    public function addArticleForm($supplier) {
        if (is_string($supplier)) {
            $ret = "<p>...Non ci sono fornitori, non è possibile aggiungere alcun Articolo! <br>"
                    . "<input type='button' onclick= addSupplier() value='Aggiungi Fornitore'>";
        } else {
            $str = "<center><form name='addArticle'><table border=0px>";
            $str = $str . "<tr><td>*Codice</td><td><input type='text' name='codArticolo'></td></tr>
            <tr><td>*Categoria</td><td><input type='text' name='categoria'></td></tr>
            <tr><td>*Descrizione</td><td><input type='text' name='descrizione'></td></tr>
            <tr><td>*Quantit&#224</td><td><input type='text' name='quantita'></td></tr>
            <tr><td>*Prezzo Acquisto</td><td><input type='text' name='prezAcquisto'></td></tr>
            <tr><td>*Prezzo Vendita</td><td><input type='text' name='prezVendita'></td></tr>";
            $cod = "<select name=codForn><option value=null> --- </option>";
            foreach ($supplier as $value) {
                $cod = $cod . "<option value=" . $value['piva'] . ">" . $value['piva'] . "</option>";
            }
            $cod = $cod . "</select>";
            $str = $str . "<tr><td>Cod. Fornitore</td><td>" . $cod .
                    "<tr><td colspan=2 style=text-align:center><br><input type='button' onclick=makeAddArticleJson() value='Salva'></td>
            </tr></table></form><p>* Campi Obbligatori</p></center>";
            $ret = $str;
        }
        return $ret;
    }

    //metodo che genera il form per aggiungere una nuova operazione. Nel form 
    //sono disponibili dati riguardo i clienti, gli articoli, il tipo di
    // manodopera. Tali dati vengono passati al metodo per mezzo di un'opportuna 
    //query fatta al database.
    public function addOperationForm($data) {
        $tmp = $data['clienti'];
        //controllo se sono stati registrati clienti
        if (is_string($tmp)) {
            $ret = "<p>Non ci sono clienti, non è possibile aggiungere alcuna Operazione! <br>"
                    . "<input type='button' onclick= addClient() value='Aggiungi Cliente'>";
        } else {
            //genero il menu per i clienti
            $clienti = "<select id=select name=codCliente><option value=null>---</option>";
            foreach ($tmp as $value) {
                $clienti = $clienti . "<option value=" . $value['cf'] . ">" . $value['cf'] . "</option>";
            }
            $clienti = $clienti . "</select>";
            //genero il menu per gli articoli
            $tmp = $data['articoli'];
            $articoli = "<select id=select name=codArticolo><option value=null>---</option>";
            foreach ($tmp as $value) {
                $articoli = $articoli . "<option value=" . $value['codice'] . ">" . $value['codice'] . "</option>";
            }
            $articoli = $articoli . "</select>";
            //creo il menu per la quantita
            $quantita = "<select id=select name=numArt><option value=1>1</option>";
            for ($i = 2; $i < 10; $i++) {
                $quantita = $quantita . "<option value=" . $i . ">" . $i . "</option>";
            }
            $quantita = $quantita . "</select>";
            //creo il menu per la manodopera
            $tmp = $data['manodopera'];
            $manodopera = "<select id=select name=codMan><option value=null>---</option>";
            foreach ($tmp as $value) {
                $manodopera = $manodopera . "<option value=" . $value['id_manodopera'] . ">" . $value['id_manodopera'] . "</option>";
            }
            $manodopera = $manodopera . "</select>";
            //collego i campi del form con i menu creati
            $str = "<center><form name='addOperation'><table border=0><tr>";
            $str = $str . "<td align=left>*Scegli Cliente</td><td>$clienti</td></tr>
            <td align=left>*Scegli Articolo</td><td>$articoli</td></tr>
            <td align=left>*Scegli Quantit&#224</td><td>$quantita</td></tr>
            <td align=left>*Tipo Prestazione</td><td>$manodopera</td></tr>
            <tr><td colspan=2  style=text-align:center><br><input type=button onclick=makeAddOperationJson() value='Salva'></td></tr>
            </form></table><p>* Campi Obbligatori</p></center>";
            $ret = $str;
        }
        return $ret;    
    }
    //metodo responsabile della generazione della tabella delle operazioni,i dati 
    //passati in input provengono da una query fatta al database, se questa non
    // produce nessun risultato ciò verrà notificato come risultato.
    function makeOperationTable($result) {
        $ret = $result;
        if (!is_string($ret)) {
            $ret = "<table>
            <tr>
            <th></th>
            <th>Id Operazione</th> 
            <th>Id Cliente</th>
            <th>Id Articolo</th>
            <th>Prestazione</th>
            <th>Quantit&#224</th>
            <th>Prezzo</th>           
            </tr>";
            for ($i = 0; $i < sizeof($result); $i++) {
                $ret = $ret . "<tr><td id=" . $result[$i]['id_operazione'] . "><input type='checkbox'>
                </td><td>" . $result[$i]['id_operazione'] .
                        "</td><td>" . $result[$i]['id_cliente'] .
                        "</td><td>" . $result[$i]['id_articolo'] .
                        "</td><td>" . $result[$i]['id_manodopera'] .
                        "</td><td>" . $result[$i]['quantita'] .
                        "</td><td>" . $result[$i]['costo'] .
                        "</td></tr>";
            }
            $ret = $ret . "</tbody></table>";
        }
        return $ret;
    }
}
