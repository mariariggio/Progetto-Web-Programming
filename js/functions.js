//variabili utilizzate per la cencellazione degli elementi.
var id;
var menuType;

$("a.menuor").focus(function () {
    $("#post").text("");
    $(this).css("background-color", "#4CAF50");
});
$("a.menuor").blur(function () {
    $(this).css("background-color", "#5f5f5f");
});
//Creo il  Json da inviare al server per la creazione del form per l'inserimento
// di un nuova operazione.
function addOperation() {
    request = {
        "operation": "showAddOperationForm"
    };
    //Converto l'oggetto Json in stringa per inviarlo al server.
    req = JSON.stringify(request);
    ajaxEvent(req);
}
function showOperation() {
    $("#show_operation").html("<li><a href=# onclick=modOperation()>Modifica Operazione</a></li><li><a href=# onclick=delOperation()>Elimina Operazioni</a></li>");
}
//funzione che crea il form per l'inserimento di un nuovo cliente
function addClient() {
    s = "<form name='addClient'>";
    s += "<div class='cell'>*Codice Fiscale</div><div class='cell' text-align=left><input type=text name=cf size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Nome </div><div class='cell' text-align=left><input type=text name=nome size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Cognome</div><div class='cell' text-align=left><input type=text name=cognome size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Indirizzo, numero civico</div><div class='cell' text-align=left><input type=text name=indirizzo size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Cellulare</div><div class='cell' text-align=left><input type=text name=telefono size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Citt&#224</div><div class='cell' text-align=left><input type=text name=citta size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Provincia</div><div class='cell' text-align=left><select name=provincia><option value=null>---</option>";
    s += "<option value=AG>AGRIGENTO</option><option value=AL>ALESSANDRIA</option><option value=AN>ANCONA</option><option value=AO>AOSTA</option><option value=AR>AREZZO</option><option value=AP>ASCOLI PICENO</option><option value=AT>ASTI</option><option value=AV>AVELLINO</option><option value=BA>BARI</option><option value=BL>BELLUNO</option><option value=BN>BENEVENTO</option><option value=BG>BERGAMO</option><option value=BI>BIELLA</option><option value=BO>BOLOGNA</option><option value=BZ>BOLZANO</option><option value=BS>BRESCIA</option><option value=BR>BRINDISI</option><option value=CA>CAGLIARI</option><option value=CL>CALTANISSETTA</option><option value=CB>CAMPOBASSO</option><option value=CE>CASERTA</option><option value=CT>CATANIA</option><option value=CZ>CATANZARO</option><option value=CH>CHIETI</option><option value=CO>COMO</option><option value=CS>COSENZA</option><option value=CR>CREMONA</option><option value=KR>CROTONE</option><option value=CN>CUNEO</option><option value=EN>ENNA</option><option value=FE>FERRARA</option><option value=FI>FIRENZE</option><option value=FG>FOGGIA</option><option value=FC>FORLI-CESENA</option><option value=FR>FROSINONE</option><option value=GE>GENOVA</option><option value=GO>GORIZIA</option><option value=GR>GROSSETO</option><option value=IM>IMPERIA</option><option value=IS>ISERNIA</option><option value=SP>LA SPEZIA</option><option value=AQ>AQUILA</option><option value=LT>LATINA</option><option value=LE>LECCE</option><option value=LC>LECCO</option><option value=LI>LIVORNO</option><option value=LO>LODI</option><option value=LU>LUCCA</option><option value=MC>MACERATA</option><option value=MN>MANTOVA</option><option value=MS>MASSA-CARRARA</option><option value=MT>MATERA</option><option value=ME>MESSINA</option><option value=MI>MILANO</option><option value=MO>MODENA</option><option value=NA>NAPOLI</option><option value=NO>NOVARA</option><option value=NU>NUORO</option><option value=OR>ORISTANO</option><option value=PD>PADOVA</option><option value=PA>PALERMO</option><option value=PR>PARMA</option><option value=PV>PAVIA</option><option value=PG>PERUGIA</option><option value=PU>PESARO E URBINO</option><option value=PE>PESCARA</option><option value=PC>PIACENZA</option><option value=PI>PISA</option><option value=PT>PISTOIA</option><option value=PN>PORDENONE</option><option value=PZ>POTENZA</option><option value=PO>PRATO</option><option value=RG>RAGUSA</option><option value=RA>RAVENNA</option><option value=RC>REGGIO DI CALABRIA</option><option value=RE>REGGIO NELL EMILIA</option><option value=RI>RIETI</option><option value=RN>RIMINI</option><option value=RM>ROMA</option><option value=RO>ROVIGO</option><option value=SA>SALERNO</option><option value=SS>SASSARI</option><option value=SV>SAVONA</option><option value=SI>SIENA</option><option value=SR>SIRACUSA</option><option value=SO>SONDRIO</option><option value=TA>TARANTO</option><option value=TE>TERAMO</option><option value=TR>TERNI</option><option value=TO>TORINO</option><option value=TP>TRAPANI</option><option value=TN>TRENTO</option><option value=TV>TREVISO</option><option value=TS>TRIESTE</option><option value=UD>UDINE</option><option value=VA>VARESE</option><option value=VE>VENEZIA</option><option value=VB>VERBANO-CUSIO-OSSOLA</option><option value=VC>VERCELLI</option><option value=VR>VERONA</option><option value=VV>VIBO VALENTIA</option><option value=VI>VICENZA</option><option value=VT>VITERBO</option></select>";
    s += "</div><div class='row'></div>";
    s += "<div class='button'><br><input type=button onclick=makeAddClientJson() value=Registra>";
    s += "<br><p>* Campi Obbligatori</p></div>";
    s += "<div class='row'></div></form>";
    $("#post").html(s);
}
function showClient() {
    $("#show_client").html("<br><li><a href=# onclick=modClient()>Modifica Cliente</a></li><li><a href=# onclick=delClient()>Elimina Cliente</a></li>");
}
//Creo il  Json da inviare al server per la creazione del form per l'inserimento
// di un nuovo articolo.
function addArticle() {
    request = {
        "operation": "showAddArticleForm"
    };
    //Converto l'oggetto Json in stringa per inviarlo al server.
    req = JSON.stringify(request);
    ajaxEvent(req);
}
function inMagazzino() {
    $("#show_op_art1").html("<li><a href=# onclick=modarticle()>Modifica articolo</a></li><li><a href=# onclick=delArticle()>Elimina Articolo</a></li>");
}
function nonMagazzino() {
    $("#show_op_art2").html("<li><a href=# onclick=modarticle()>Modifica articolo</a></li><li><a href=# onclick=delArticle()>Elimina Articolo</a></li>");
}
function inEsaurimento() {
    $("#show_op_art3").html("<li><a href=# onclick=modarticle()>Modifica articolo</a></li><li><a href=# onclick=delarticle()>Elimina Articolo</a></li>");
}
function showInvoice() {
    $("#show_invoice").html("<li><a href=# onclick=printInvoice()>Stampa Fattura</a></li>");
}
//funzione che crea il form per l'insermento di un nuovo fornitore.
function addSupplier() {
    s = "<form name='addSupplier'>";
    s += "<div class='cell'>*P.iva</div><div class='cell'><input type=text name=pIva size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Ragione Sociale</div><div class='cell'><input type=text name=ragSociale size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Cellulare</div><div class='cell'><input type=text name=cellulare size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Indirizzo</div><div class='cell'><input type=text name=indirizzo size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Citt&#224</div><div class='cell'><input type=text name=citta size=30></div>";
    s += "<div class='row'></div>";
    s += "<div class='cell'>*Provincia</div><div class='cell'><select name=provincia><option value=null>---</option>";
    s += "<option value=AG>AGRIGENTO</option><option value=AL>ALESSANDRIA</option><option value=AN>ANCONA</option><option value=AO>AOSTA</option><option value=AR>AREZZO</option><option value=AP>ASCOLI PICENO</option><option value=AT>ASTI</option><option value=AV>AVELLINO</option><option value=BA>BARI</option><option value=BL>BELLUNO</option><option value=BN>BENEVENTO</option><option value=BG>BERGAMO</option><option value=BI>BIELLA</option><option value=BO>BOLOGNA</option><option value=BZ>BOLZANO</option><option value=BS>BRESCIA</option><option value=BR>BRINDISI</option><option value=CA>CAGLIARI</option><option value=CL>CALTANISSETTA</option><option value=CB>CAMPOBASSO</option><option value=CE>CASERTA</option><option value=CT>CATANIA</option><option value=CZ>CATANZARO</option><option value=CH>CHIETI</option><option value=CO>COMO</option><option value=CS>COSENZA</option><option value=CR>CREMONA</option><option value=KR>CROTONE</option><option value=CN>CUNEO</option><option value=EN>ENNA</option><option value=FE>FERRARA</option><option value=FI>FIRENZE</option><option value=FG>FOGGIA</option><option value=FC>FORLI-CESENA</option><option value=FR>FROSINONE</option><option value=GE>GENOVA</option><option value=GO>GORIZIA</option><option value=GR>GROSSETO</option><option value=IM>IMPERIA</option><option value=IS>ISERNIA</option><option value=SP>LA SPEZIA</option><option value=AQ>AQUILA</option><option value=LT>LATINA</option><option value=LE>LECCE</option><option value=LC>LECCO</option><option value=LI>LIVORNO</option><option value=LO>LODI</option><option value=LU>LUCCA</option><option value=MC>MACERATA</option><option value=MN>MANTOVA</option><option value=MS>MASSA-CARRARA</option><option value=MT>MATERA</option><option value=ME>MESSINA</option><option value=MI>MILANO</option><option value=MO>MODENA</option><option value=NA>NAPOLI</option><option value=NO>NOVARA</option><option value=NU>NUORO</option><option value=OR>ORISTANO</option><option value=PD>PADOVA</option><option value=PA>PALERMO</option><option value=PR>PARMA</option><option value=PV>PAVIA</option><option value=PG>PERUGIA</option><option value=PU>PESARO E URBINO</option><option value=PE>PESCARA</option><option value=PC>PIACENZA</option><option value=PI>PISA</option><option value=PT>PISTOIA</option><option value=PN>PORDENONE</option><option value=PZ>POTENZA</option><option value=PO>PRATO</option><option value=RG>RAGUSA</option><option value=RA>RAVENNA</option><option value=RC>REGGIO DI CALABRIA</option><option value=RE>REGGIO NELL EMILIA</option><option value=RI>RIETI</option><option value=RN>RIMINI</option><option value=RM>ROMA</option><option value=RO>ROVIGO</option><option value=SA>SALERNO</option><option value=SS>SASSARI</option><option value=SV>SAVONA</option><option value=SI>SIENA</option><option value=SR>SIRACUSA</option><option value=SO>SONDRIO</option><option value=TA>TARANTO</option><option value=TE>TERAMO</option><option value=TR>TERNI</option><option value=TO>TORINO</option><option value=TP>TRAPANI</option><option value=TN>TRENTO</option><option value=TV>TREVISO</option><option value=TS>TRIESTE</option><option value=UD>UDINE</option><option value=VA>VARESE</option><option value=VE>VENEZIA</option><option value=VB>VERBANO-CUSIO-OSSOLA</option><option value=VC>VERCELLI</option><option value=VR>VERONA</option><option value=VV>VIBO VALENTIA</option><option value=VI>VICENZA</option><option value=VT>VITERBO</option></select>";
    s += "</div><div class='row'></div>";
    s += "<div class='button'><br><input type=button onclick=makeAddSuppJson() value=Salva>";
    s += "<p>* Campi Obbligatori</p></div>";
    s += "<div class='row'></div></form>";
    $("#post").html(s);
}
function showSupplier() {
    $("#show_supplier").html("<li><a href=# onclick=modSupplier()>Modifica Fornitore</a></li><li><a href=# onclick=delSupplier()>Elimina Fornitore</a></li>");
}
function makeAddOperationJson() {
    var request;
    var x = document.forms['addOperation'];
    //Controllo se tutti i campi sono stati compilati
    if (x.codCliente.value === "null") {
        alert("Devi Selezionare un Cliente.");
    } else {
        if (x.codArticolo.value === "null" && x.codMan.value === "null") {
            alert("Seleziona almeno un campo tra Articolo e Manodopera.");
        } else {
            //creo l'oggetto Json
            request = {
                "operation": "addOperation",
                "cod_cliente": x.codCliente.value,
                "cod_articolo": x.codArticolo.value,
                "num_art": x.numArt.value,
                "cod_man": x.codMan.value
            };
            //Converto l'oggetto Json in stringa per inviarlo al server.
            req = JSON.stringify(request);
            ajaxEvent(req);
        }
    }
}
//funzione che legge il form di immissione dei dati di un nuovo cliente e crea
// il Json corrispondente per inviarlo al server. Se non sono stati inseriti 
// tutti i campi, mostra una finestra di alert altrimenti conclude l'operazione.
function makeAddClientJson() {
    var request;
    var x = document.forms['addClient'];
    //Controllo se tutti i campi sono stati compilati
    if (x.cf.value === "" || x.nome.value === "" || x.cognome.value === ""
            || x.indirizzo.value === "" || x.telefono.value === "" || x.citta.value === ""
            || x.provincia.value === "null") {
        alert("Non sono stati riempiti tutti i campi");
    } else {
        //creo l'oggetto Json
        request = {
            "operation": "addClient",
            "cf": x.cf.value,
            "nome": x.nome.value,
            "cognome": x.cognome.value,
            "indirizzo": x.indirizzo.value,
            "cellulare": x.telefono.value,
            "citta": x.citta.value,
            "provincia": x.provincia.value
        };
        //Converto l'oggetto Json in stringa per inviarlo al server.
        req = JSON.stringify(request);
        ajaxEvent(req);
    }
}
//funzione che legge il form di immissione dei dati di un nuovo articolo e crea
// il Json corrispondente per inviarlo al server. Se non sono stati inseriti 
// tutti i campi, mostra una finestra di alert altrimenti conclude l'operazione.
function makeAddArticleJson() {
    var request;
    var x = document.forms['addArticle'];
    //Controllo se tutti i campi sono stati compilati
    if (x.codArticolo.value === "" || x.categoria.value === "" || x.descrizione.value === ""
            || x.quantita.value === "" || x.prezAcquisto.value === "" || x.prezVendita.value === ""
            || x.codForn.value === "null") {
        alert("Non sono stati riempiti tutti i campi");
    } else {
        //Creo l'oggetto Json.
        request = {
            "operation": "addArticle",
            "codArticolo": x.codArticolo.value,
            "categoria": x.categoria.value,
            "descrizione": x.descrizione.value,
            "quantita": x.quantita.value,
            "prezAcquisto": x.prezAcquisto.value,
            "prezVendita": x.prezVendita.value,
            "codFornitore": x.codForn.value
        };
        //Converto l'oggetto Json in stringa per inviarlo al server.
        req = JSON.stringify(request);
        ajaxEvent(req);
    }
}
//funzione che legge il form di immissione dei dati di un nuovo fornitore e crea
// il Json corrispondente per inviarlo al server. Se non sono stati inseriti 
// tutti i campi, mostra una finestra di alert altrimenti conclude l'operazione.
function makeAddSuppJson() {
    var request;
    var x = document.forms['addSupplier'];
    //Controllo se tutti i campi sono stati compilati
    if (x.pIva.value === "" || x.ragSociale.value === "" || x.cellulare.value === ""
            || x.indirizzo.value === "" || x.citta.value === "" || x.provincia.value === "") {
        alert("Non sono stati riempiti tutti i campi");
    } else {
        //Creo l'oggetto Json
        request = {
            "operation": "addSupplier",
            "pIva": x.pIva.value,
            "ragSociale": x.ragSociale.value,
            "cellulare": x.cellulare.value,
            "indirizzo": x.indirizzo.value,
            "citta": x.citta.value,
            "provincia": x.provincia.value
        };
        ////Converto l'oggetto Json in stringa per inviarlo al server.
        req = JSON.stringify(request);
        ajaxEvent(req);
    }
}
//funzione che crea il json relativo al menu selezionato per l'operazione Mostra.
function show(menu) {
    var request = {
        "operation": "show",
        "menu": menu
    };
    req = JSON.stringify(request);
    ajaxEvent(req);
}
//funzione che crea l'oggetto XMLHTTP. Prende in imput dei dati che invia al 
//server tramite ajax.
function ajaxEvent(data) {
    var xhttp = false;
    var self = this;
    //Verifico se il browser supporta l'oggetto XMLHttpRequest oppure no
    if (window.XMLHttpRequest) {
        self.xhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        self.xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Valuto lo stato della richiesta 
    self.xhttp.onreadystatechange = function () {
        if (self.xhttp.readyState === 4 && self.xhttp.status === 200) {
            makeResponse(self.xhttp.responseText);
        }
    };
    //specifico il tipo di richiesta
    self.xhttp.open('POST', 'index.php', true);
    self.xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //invio la richiesta al server
    self.xhttp.send('operation=' + data);
}
//funzione che elabora i dati ricevuti dal server sotto forma di oggetto JSON
function makeResponse(arr) {
    var response = JSON.parse(arr);
    if (response.operation === "addClient") {
        makeClientsTable(response.value);
    } else if (response.operation === "addSupplier") {
        makeSupplierTable(response.value);
    } else if (response.operation === "addArticleForm") {
        addArticleForm(response.value);
    } else if (response.operation === "addArticle") {
        makeArticlesTable(response.value);
    } else if (response.operation === "addOperationForm") {
        addOperationForm(response.clienti, response.manodopera, response.articoli);
    } else if (response.operation === "addOperation") {
        makeOperationTable(response.value);
    } else if (response.operation === "showClient") {
        makeClientsTable(response.value);
    } else if (response.operation === "showOperation") {
        makeOperationTable(response.value);
    } else if (response.operation === "showSupplier") {
        makeSupplierTable(response.value);
    } else if (response.operation === "showArticle") {
        makeArticlesTable(response.value);
    } else if (response.operation === "modClient") {
        makeClientsTable(response.value);
    } else if (response.operation === "modArticle") {
        makeArticlesTable(response.value);
    } else if (response.operation === "modSupplier") {
        makeSupplierTable(response.value);
    }
}
//Gestione della finestra di dialogo per la cancellazione.
$(function () {
    $("#dialogEl").dialog({
        autoOpen: false,
        height: 160,
        width: 300,
        modal: true,
        buttons: {
            "Conferma": deleteElementJson,
            "Annulla": function () {
                $("#dialogEl").dialog("close");
            }
        }
    });
    function deleteElementJson() {
        var request = {
            "operation": "del",
            "menu": menuType,
            "id": id
        };
        req = JSON.stringify(request);
        ajaxEvent(req);
        $("#dialogEl").dialog("close");
    }
    $(document).on('click', '.delete', function () {
        id = $(this).attr("id");
        $("#dialogEl").html("<p> Sei sicuro di voler eliminare l'elemento:<br>"+ id +"?</p>");
        //$("#msg").text(id + "?");
        $("#dialogEl").dialog("open");
    });
});
//Gestione finestra di dialogo per la modifica di un cliente
$(function () {
    function modClientJson() {
        var request;
        var x = document.forms['modClient'];
        //Controllo se tutti i campi sono stati compilati
        if (x.cf.value === "" || x.nome.value === "" || x.cognome.value === ""
                || x.indirizzo.value === "" || x.telefono.value === "" || x.citta.value === ""
                || x.provincia.value === "") {
            alert("Non sono stati riempiti tutti i campi");
        } else {
            //creo l'oggetto Json
            request = {
                "operation": "modClient",
                "vecchio_cf": vecchio_cf,
                "cf": x.cf.value,
                "nome": x.nome.value,
                "cognome": x.cognome.value,
                "indirizzo": x.indirizzo.value,
                "cellulare": x.telefono.value,
                "citta": x.citta.value,
                "provincia": x.provincia.value
            };
            //Converto l'oggetto Json in stringa per inviarlo al server.
            req = JSON.stringify(request);
            ajaxEvent(req);
            $("#dialogModClient").dialog("close");
        }
    }
    $("#dialogModClient").dialog({
        autoOpen: false,
        height: 500,
        width: 320,
        modal: true,
        buttons: {
            "Modifica Cliente": modClientJson,
            "Annulla": function () {
                $("#dialogModClient").dialog("close");
            }
        }
    });
    $(document).on('click', '.modClient', function () {
        indice = $(this).attr("id");
        $("#dialogModClient").html(modClient(indice));
        vecchio_cf = $('#cf' + indice).text();
        $("#dialogModClient").dialog("open");
    });
});
function modClient(i) {
    out = "<form name='modClient'>" +
            "<fieldset>" +
            "<label for='cf'>*Codice Fiscale</label>" +
            "<input type='text' name='cf' value='" + $('#cf' + i).text() + "' class='text'>" +
            "<label for='nome'>*Nome</label>" +
            "<input type='text' name='nome' value='" + $('#nome' + i).text() + "' class='text'>" +
            "<label for='cognome'>*Cognome</label>" +
            "<input type='text' name='cognome'  value='" + $('#cognome' + i).text() + "' class='text'>" +
            "<label for='indirizzo'>*Indirizzo</label>" +
            "<input type='text' name='indirizzo' value='" + $('#indirizzo' + i).text() + "' class='text'>" +
            "<label for='telefono'>*Cellulare</label>" +
            "<input type='text' name='telefono' value='" + $('#cellulare' + i).text() + "' class='text'>" +
            "<label for='citta'>*Citt&#224</label>" +
            "<input type='text' name='citta' value='" + $('#citta' + i).text() + "' class='text'>" +
            "<label for='provincia'>*Provincia</label>" +
            "<input type='text' name='provincia' value='" + $('#provincia' + i).text() + "' class='text'>" +
            //Allow form submission with keyboard without duplicating the dialog button
            "<input type='submit' tabindex='-1' style='position:absolute; top:-1000px'>" +
            "</fieldset></form>";
    return out;
}
//funzione responsabile della generazione della tabella dei clienti, i dati 
//provengono da una query fatta al database, se questa non produce nessun 
//risultato ciò verrà visualizzato come risultato.
function makeClientsTable(response) {
    if (response === "NON CI SONO CLIENTI") {
        out = "Non ci sono Clienti!";
    } else {
        out = "<div class='outText'><h>Codice Fiscale</h></div>";
        out += "<div class='outText'><h>Nome</h></div>";
        out += "<div class='outText'><h>Cognome</h></div>";
        out += "<div class='outText'><h>Indirizzo</h></div>";
        out += "<div class='outText'><h>Cellulare</h></div>";
        out += "<div class='outText'><h>Citt&#224</h></div>";
        out += "<div class='outText'><h>Provincia</h></div>";
        out += "<div class='row'></div>";
        for (i = 0; i < response.length; i++) {
            out += "<div id='cf" + i + "' class='outText'>" + response[i].cf + "</div>" +
                    "<div id='nome" + i + "' class='outText'>" + response[i].nome + "</div>" +
                    "<div id='cognome" + i + "' class='outText'>" + response[i].cognome + "</div>" +
                    "<div id='indirizzo" + i + "'class='outText'>" + response[i].indirizzo + "</div>" +
                    "<div id='cellulare" + i + "' class='outText'>" + response[i].cellulare + "</div>" +
                    "<div id='citta" + i + "' class='outText'>" + response[i].citta + "</div>" +
                    "<div id='provincia" + i + "' class='outText'>" + response[i].provincia + "</div>" +
                    "<div class='out'>" +
                    "<button id='" + i + "' class='modClient'><i class='fa fa-pencil fa-lg' aria-hidden='true'></i></button>" +
                    "<button id='" + response[i].cf + "' class='delete'><i class='fa fa-trash-o fa-lg' aria-hidden='true'></i></button></div>" +
                    "<div class='row'></div>";
        }
    }
    $("#post").html(out);
}
//funzione che crea il form per aggiungere un nuovo Articolo. Ogni articolo è
//legato ad un fornitore quindi il metodo prende in input la lista dei
//fornitori, e nel form generato sarà possibile scegliere il fornitore 
//del nuovo articolo
function addArticleForm(supplier) {
    //Controllo se sono stati registrati fornitori.
    if (supplier === "NON CI SONO FORNITORI") {
        out = "<p>Non ci sono fornitori, non &#232 possibile aggiungere alcun Articolo! <br>" +
                "<br><input type='button' onclick= addSupplier() value='Aggiungi Fornitore'>";
    } else {
        out = "<form name='addArticle'>";
        out += "<div class='cell'>*Codice</div><div class='cell'><input type='text' name='codArticolo' size=30></div>";
        out += "<div class='row'></div>";
        out += "<div class='cell'>*Categoria</div><div class='cell'><input type='text' name='categoria' size=30></div>";
        out += "<div class='row'></div>";
        out += "<div class='cell'>*Descrizione</div><div class='cell'><input type='text' name='descrizione' size=30></div>";
        out += "<div class='row'></div>";
        out += "<div class='cell'>*Quantit&#224</div><div class='cell'><input type='text' name='quantita' size=30></div>";
        out += "<div class='row'></div>";
        out += "<div class='cell'>*Prezzo Acquisto</div><div class='cell'><input type='text' name='prezAcquisto' size=30></div>";
        out += "<div class='row'></div>";
        out += "<div class='cell'>*Prezzo Vendita</div><div class='cell'><input type='text' name='prezVendita' size=30></div>";
        out += "<div class='row'></div>";
        cod = "<select name=codForn><option value=null> --- </option>";
        for (i = 0; i < supplier.length; i++) {
            cod += "<option value=" + supplier[i].piva + ">" + supplier[i].piva + "</option>";
        }
        cod += "</select>";
        out += "<div class='cell'>Cod. Fornitore</div><div class='cell'>" + cod + "</div>";
        out += "<div class='row'></div>";
        out += "<div class='button'><br><input type='button' onclick=makeAddArticleJson() value='Salva'>";
        out += "<p>* Campi Obbligatori</p></div>";
        out += "<div class='row'></div></form>";
    }
    $("#post").html(out);
}
//funzione responsabile della generazione della tabella dei clienti, i dati 
//provengono da una query fatta al database, se questa non produce nessun 
//risultato ciò verrà visualizzato come risultato.
function makeArticlesTable(response) {
    if (response === "NON CI SONO ARTICOLI") {
        out = "Non ci sono Articoli!";
    } else {
        out = "<div class='outText'>Codice Articolo</div>";
        out += "<div class='outText'>Categoria</div>";
        out += "<div class='outText'>Descrizione</div>";
        out += "<div class='outText'>Quantit&#224</div>";
        out += "<div class='outText'>Prezzo Acquisto</div>";
        out += "<div class='outText'>Prezzo Vendita</div>";
        out += "<div class='outText'>Codice Fornitore</div>";
        out += "<div class='row'></div>";
        for (i = 0; i < response.length; i++) {
            out += "<div id='codice" + i + "' class='outText'>" + response[i].codice + "</div>" +
                    "<div id='categoria" + i + "' class='outText'>" + response[i].categoria + "</div>" +
                    "<div id='descr" + i + "' class='outText'>" + response[i].descr + "</div>" +
                    "<div id='quantita" + i + "' class='outText'>" + response[i].quantita + "</div>" +
                    "<div id='prezAcquisto" + i + "' class='outText'>" + response[i].prezzo_acquisto + "</div>" +
                    "<div id='prezVendita" + i + "' class='outText'>" + response[i].prezzo_vendita + "</div>" +
                    "<div id='codForn" + i + "' class='outText'>" + response[i].cod_fornitore + "</div>" +
                    "<div class='out'>" +
                    "<button id='" + i + "' class='modArticle'><i class='fa fa-pencil fa-lg' aria-hidden='true'></i></button>" +
                    "<button id='" + response[i].codice + "' class='delete'><i class='fa fa-trash-o fa-lg' aria-hidden='true'></i></button></div>" +
                    "<div class='row'></div>";
        }
    }
    $("#post").html(out);
}
//Gestione finestra di dialogo per la modifica di un articolo
$(function () {
    function modArticleJson() {
        var request;
        var x = document.forms['modArticle'];
        //Controllo se tutti i campi sono stati compilati
        if (x.codArticolo.value === "" || x.categoria.value === "" || x.descrizione.value === ""
                || x.quantita.value === "" || x.prezAcquisto.value === "" || x.prezVendita.value === ""
                || x.codForn.value === "null") {
            alert("Non sono stati riempiti tutti i campi");
        } else {
            //Creo l'oggetto Json.
            request = {
                "operation": "modArticle",
                "vecchio_codice": vecchio_codice,
                "codArticolo": x.codArticolo.value,
                "categoria": x.categoria.value,
                "descrizione": x.descrizione.value,
                "quantita": x.quantita.value,
                "prezAcquisto": x.prezAcquisto.value,
                "prezVendita": x.prezVendita.value,
                "codForn": x.codForn.value
            };
            //Converto l'oggetto Json in stringa per inviarlo al server.
            req = JSON.stringify(request);
            ajaxEvent(req);
            $("#dialogModArticle").dialog("close");
        }
    }
    $("#dialogModArticle").dialog({
        autoOpen: false,
        height: 500,
        width: 320,
        modal: true,
        buttons: {
            "Modifica Articolo": modArticleJson,
            "Annulla": function () {
                $("#dialogModArticle").dialog("close");
            }
        }
    });
    $(document).on('click', '.modArticle', function () {
        indice = $(this).attr("id");
        $("#dialogModArticle").html(modArticle(indice));
        vecchio_codice = $('#codice' + indice).text();
        $("#dialogModArticle").dialog("open");
    });
});
function modArticle(i) {
    out = "<form name='modArticle'>" +
            "<fieldset>" +
            "<label for='codArticolo'>*Codice</label>" +
            "<input type='text' name='codArticolo'  value='" + $('#codice' + i).text() + "' class='text'>" +
            "<label for='categoria'>*Categoria</label>" +
            "<input type='text' name='categoria' value='" + $('#categoria' + i).text() + "' class='text'>" +
            "<label for='descrizione'>*Descrizione</label>" +
            "<input type='text' name='descrizione' value='" + $('#descr' + i).text() + "' class='text'>" +
            "<label for='quantita'>*Quantit&#224</label>" +
            "<input type='text' name='quantita' value='" + $('#quantita' + i).text() + "' class='text'>" +
            "<label for='prezAcquisto'>*Prezzo Acquisto</label>" +
            "<input type='text' name='prezAcquisto' value='" + $('#prezAcquisto' + i).text() + "' class='text'>" +
            "<label for='prezVendita'>*Prezzo Vendita</label>" +
            "<input type='text' name='prezVendita' value='" + $('#prezVendita' + i).text() + "' class='text'>" +
            "<label for='codForn'>*Codice Fornitore</label>" +
            "<input type='text' name='codForn' value='" + $('#codForn' + i).text() + "' class='text'>" +
            //Allow form submission with keyboard without duplicating the dialog button
            "<input type='submit' tabindex='-1' style='position:absolute; top:-1000px'>" +
            "</fieldset></form>";
    return out;
}
//metodo responsabile della generazione della tabella dei fornitori, i dati 
//provengono da una query fatta al database, se questa non produce nessun 
//risultato ciò verrà notificato come risultato.
function makeSupplierTable(response) {
    if (response === "NON CI SONO FORNITORI") {
        out = "Non ci sono Fornitori!";
    } else {
        out = "<div class='outText'>P. Iva</div>";
        out += "<div class='outText'>Ragione Sociale</div>";
        out += "<div class='outText'>Cellulare</div>";
        out += "<div class='outText'>Indirizzo</div>";
        out += "<div class='outText'>Citt&#224</div>";
        out += "<div class='outText'>Provincia</div>";
        out += "<div class='row'></div>";
        for (i = 0; i < response.length; i++) {
            out += "<div id='pIva" + i + "' class='outText'>" + response[i].piva + "</div>" +
                    "<div id='ragSociale" + i + "' class='outText'>" + response[i].ragione_sociale + "</div>" +
                    "<div id='cellulare" + i + "' class='outText'>" + response[i].cellulare + "</div>" +
                    "<div id='indirizzo" + i + "'class='outText'>" + response[i].indirizzo + "</div>" +
                    "<div id='citta" + i + "'class='outText'>" + response[i].citta + "</div>" +
                    "<div id='provincia" + i + "' class='outText'>" + response[i].provincia + "</div>" +
                    "<div class='out'>" +
                    "<button id='" + i + "' class='modSupplier'><i class='fa fa-pencil fa-lg' aria-hidden='true'></i></button>" +
                    "<button id='" + response[i].piva + "' class='delete'><i class='fa fa-trash-o fa-lg' aria-hidden='true'></i></button></div>" +
                    "<div class='row'></div>";
        }
    }
    $("#post").html(out);
}
//Gestione finestra di dialogo per la modifica di un fornitore
$(function () {
    function modSupplierJson() {
        var request;
        var x = document.forms['modSupplier'];
        //Controllo se tutti i campi sono stati compilati
        if (x.pIva.value === "" || x.ragSociale.value === "" || x.cellulare.value === ""
                || x.indirizzo.value === "" || x.citta.value === "" || x.provincia.value === "") {
            alert("Non sono stati riempiti tutti i campi");
        } else {
            //Creo l'oggetto Json
            request = {
                "operation": "modSupplier",
                "vecchia_pIva": vecchia_pIva,
                "pIva": x.pIva.value,
                "ragSociale": x.ragSociale.value,
                "cellulare": x.cellulare.value,
                "indirizzo": x.indirizzo.value,
                "citta": x.citta.value,
                "provincia": x.provincia.value
            };
            ////Converto l'oggetto Json in stringa per inviarlo al server.
            req = JSON.stringify(request);
            ajaxEvent(req);
            $("#dialogModSupplier").dialog("close");
        }
    }
    $("#dialogModSupplier").dialog({
        autoOpen: false,
        height: 500,
        width: 320,
        modal: true,
        buttons: {
            "Modifica Fornitore": modSupplierJson,
            "Annulla": function () {
                $("#dialogModSupplier").dialog("close");
            }
        }
    });
    $(document).on('click', '.modSupplier', function () {
        indice = $(this).attr("id");
        $("#dialogModSupplier").html(modSupplier(indice));
        vecchia_pIva = $('#pIva' + indice).text();
        $("#dialogModSupplier").dialog("open");
    });
});
function modSupplier(i) {
    out = "<form name='modSupplier'>" +
            "<fieldset>" +
            "<label for='pIva'>*P. Iva</label>" +
            "<input type='text' name='pIva'  value='" + $('#pIva' + i).text() + "' class='text'>" +
            "<label for='ragSociale'>*Ragione Sociale</label>" +
            "<input type='text' name='ragSociale' value='" + $('#ragSociale' + i).text() + "' class='text'>" +
            "<label for='cellulare'>*Cellulare</label>" +
            "<input type='text' name='cellulare' value='" + $('#cellulare' + i).text() + "' class='text'>" +
            "<label for='indirizzo'>*Indirizzo</label>" +
            "<input type='text' name='indirizzo' value='" + $('#indirizzo' + i).text() + "' class='text'>" +
            "<label for='citta'>*Citt&#224</label>" +
            "<input type='text' name='citta' value='" + $('#citta' + i).text() + "' class='text'>" +
            "<label for='provincia'>*Provincia</label>" +
            "<input type='text' name='provincia' value='" + $('#provincia' + i).text() + "' class='text'>" +
            //Allow form submission with keyboard without duplicating the dialog button
            "<input type='submit' tabindex='-1' style='position:absolute; top:-1000px'>" +
            "</fieldset></form>";
    return out;
}
//funzione che genera il form per aggiungere una nuova operazione. Nel form 
//sono disponibili dati riguardo i clienti, gli articoli, il tipo di
// manodopera. Tali dati provanegono da un'opportuna query fatta al database.   
function addOperationForm(clienti, manodopera, articoli) {
    if (clienti === "NON CI SONO CLIENTI") {
        out = "<p>Non ci sono clienti, non &#232 possibile aggiungere alcuna Operazione! <br>" +
                "<br><input type='button' onclick= addClient() value='Aggiungi Cliente'>";
        //genero il menu per i clienti
    } else {
        client = "<select id=select name=codCliente><option value=null>---</option>";
        for (i = 0; i < clienti.length; i++) {
            client += "<option value=" + clienti[i].cf + ">" + clienti[i].cf + "</option>";
        }
        client += "</select>";
        //genero il menu per gli articoli se sono presenti
        art = "<select id=select name=codArticolo><option value=null>---</option>";
        if (articoli !== "NON CI SONO ARTICOLI") {
            for (i = 0; i < articoli.length; i++) {
                art += "<option value=" + articoli[i].codice + ">" + articoli[i].codice + "</option>";
            }
        }
        art += "</select>";
        //creo il menu per la quantita
        quantita = "<select id=select name=numArt><option value=1>1</option>";
        for (i = 2; i <= 10; i++) {
            quantita += "<option value=" + i + ">" + i + "</option>";
        }
        quantita += "</select>";
        //creo il menu per la manodopera        
        man = "<select id=select name=codMan><option value=null>---</option>";
        for (i = 0; i < manodopera.length; i++) {
            man += "<option value=" + manodopera[i].id_manodopera + ">" + manodopera[i].id_manodopera + "</option>";
        }
        man += "</select>";
        //collego i campi del form con i menu creati
        out = "<form name='addOperation'>";
        out += "<div class='cell'>*Scegli Cliente</div><div class='cell'>" + client + "</div>";
        out += "<div class='row'></div>";
        out += "<div class='cell'>*Scegli Articolo</div><div class='cell'>" + art + "</div>";
        out += "<div class='row'></div>";
        out += "<div class='cell'>*Scegli Quantit&#224</div><div class='cell'>" + quantita + "</div>";
        out += "<div class='row'></div>";
        out += "<div class='cell'>*Tipo Prestazione</div><div class='cell'>" + man + "</div>";
        out += "<div class='row'></div>";
        out += "<div class='button'><br><input type=button onclick=makeAddOperationJson() value='Salva'>";
        out += "<p>* Campi Obbligatori</p></div>";
        out += "<div class='row'></div></form>";
    }
    $("#post").html(out);
}
//metodo responsabile della generazione della tabella delle operazioni,i dati 
//passati in input provengono da una query fatta al database, se questa non
// produce nessun risultato ciò verrà notificato come risultato.
function makeOperationTable(response) {
    if (response === "NON CI SONO OPERAZIONI") {
        out = "Non sono ancora state inserite operazioni";
    } else {
        out = "<div class='outText'>Id Operazione</div>";
        out += "<div class='outText'>Id Cliente</div>";
        out += "<div class='outText'>Id Articolo</div>";
        out += "<div class='outText'>Prestazione</div>";
        out += "<div class='outText'>Quantit&#224</div>";
        out += "<div class='outText'>Prezzo</th></div>";
        out += "<div class='row'></div>";
        for (i = 0; i < response.length; i++) {
            out += "<div class='outText'>" + response[i].id_operazione + "</div>" +
                    "<div class='outText'>" + response[i].id_cliente + "</div>" +
                    "<div class='outText'>" + response[i].id_articolo + "</div>" +
                    "<div class='outText'>" + response[i].id_manodopera + "</div>" +
                    "<div class='outText'>" + response[i].quantita + "</div>" +
                    "<div class='outText'>" + response[i].costo + "</div>" +
                    "<div class='out'>" +
                    "<button id='" + response[i].id_operazione + "' class='modify'><i class='fa fa-pencil fa-lg' aria-hidden='true'></i></button>" +
                    "<button id='" + response[i].id_operazione + "' class='delete'><i class='fa fa-trash-o fa-lg' aria-hidden='true'></i></button></div>" +
                    "<div class='row'></div>";
        }
    }
    $("#post").html(out);
}
