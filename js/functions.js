$("a.menuor").focus(function () {
    $("#post").text("");
    $(this).css("background-color", "#4CAF50");
});
$("a.menuor").blur(function () {
    $(this).css("background-color", "#5f5f5f");
});
function addOperation() {
    s = "<center><form name='add_operation_form'><table border=0><tr>";
    s += "<td align=left>*Scegli Cliente</td><td><input type=text name=cf size=30></td></tr>";
    s += "<td align=left>*Scegli Articolo</td><td><input type=text name=cf size=30></td></tr>";
    s += "<td align=left>*Scegli Quantita</td><td><input type=text name=cf size=30></td></tr>";
    s += "<td align=left>*Tipo Prestazione</td><td><input type=text name=cf size=30></td></tr>";
    s += "<tr><td colspan=2  style=text-align:center><br><input type=button onclick=() value='Salva'></td></tr>";
    s += "</form></table></center>";
    $("#post").html(s);
}
function showOperation() {
    $("#show_operation").html("<li><a href=# onclick=modOperation()>Modifica Operazione</a></li><li><a href=# onclick=delOperation()>Elimina Operazioni</a></li>");
}
function addOperation() {
    s = "<center><form name='add_operation_form'><table border=0><tr>";
    s += "<td align=left>*Scegli Cliente</td><td><input type=text name=cf size=30></td></tr>";
    s += "<td align=left>*Scegli Articolo</td><td><input type=text name=cf size=30></td></tr>";
    s += "<td align=left>*Scegli Quantita</td><td><input type=text name=cf size=30></td></tr>";
    s += "<td align=left>*Tipo Prestazione</td><td><input type=text name=cf size=30></td></tr>";
    s += "<tr><td colspan=2  style=text-align:center><br><input type=button onclick=() value='Salva'></td></tr>";
    s += "</form></table></center>";
    $("#post").html(s);
}
function showOperation() {
    $("#show_operation").html("<li><a href=# onclick=modOperation()>Modifica Operazione</a></li><li><a href=# onclick=delOperation()>Elimina Operazioni</a></li>");
}
function addClient() {
    s = "<center><form name='addClient'><table border=0><tr>";
    s += "<td align=left>*Codice Fiscale</td><td><input type=text name=cf size=30></td></tr>";
    s += "<tr><td align=left>*Nome</td><td><input type=text name=username size=30></td></tr>";
    s += "<tr><td align=left>*Cognome</td><td><input type=text name=surname size=30></td></tr>";
    s += "<tr><td align=left>*Indirizzo compreso di numero civico</td><td><input type=text name=address size=30></td></tr>";
    s += "<tr><td align=left>Cellulare</td><td><input type=text name=cellulare size=30></td></tr>";
    s += "<tr><td align=left>*Citta</td><td><input type=text name=city size=30></td></tr>";
    s += "<tr><td align=left>*Provincia</td><td><select name=provincie><option value=null>---</option>";
    s += "<option value=AG>AGRIGENTO</option><option value=AL>ALESSANDRIA</option><option value=AN>ANCONA</option><option value=AO>AOSTA</option><option value=AR>AREZZO</option><option value=AP>ASCOLI PICENO</option><option value=AT>ASTI</option><option value=AV>AVELLINO</option><option value=BA>BARI</option><option value=BL>BELLUNO</option><option value=BN>BENEVENTO</option><option value=BG>BERGAMO</option><option value=BI>BIELLA</option><option value=BO>BOLOGNA</option><option value=BZ>BOLZANO</option><option value=BS>BRESCIA</option><option value=BR>BRINDISI</option><option value=CA>CAGLIARI</option><option value=CL>CALTANISSETTA</option><option value=CB>CAMPOBASSO</option><option value=CE>CASERTA</option><option value=CT>CATANIA</option><option value=CZ>CATANZARO</option><option value=CH>CHIETI</option><option value=CO>COMO</option><option value=CS>COSENZA</option><option value=CR>CREMONA</option><option value=KR>CROTONE</option><option value=CN>CUNEO</option><option value=EN>ENNA</option><option value=FE>FERRARA</option><option value=FI>FIRENZE</option><option value=FG>FOGGIA</option><option value=FC>FORLI-CESENA</option><option value=FR>FROSINONE</option><option value=GE>GENOVA</option><option value=GO>GORIZIA</option><option value=GR>GROSSETO</option><option value=IM>IMPERIA</option><option value=IS>ISERNIA</option><option value=SP>LA SPEZIA</option><option value=AQ>AQUILA</option><option value=LT>LATINA</option><option value=LE>LECCE</option><option value=LC>LECCO</option><option value=LI>LIVORNO</option><option value=LO>LODI</option><option value=LU>LUCCA</option><option value=MC>MACERATA</option><option value=MN>MANTOVA</option><option value=MS>MASSA-CARRARA</option><option value=MT>MATERA</option><option value=ME>MESSINA</option><option value=MI>MILANO</option><option value=MO>MODENA</option><option value=NA>NAPOLI</option><option value=NO>NOVARA</option><option value=NU>NUORO</option><option value=OR>ORISTANO</option><option value=PD>PADOVA</option><option value=PA>PALERMO</option><option value=PR>PARMA</option><option value=PV>PAVIA</option><option value=PG>PERUGIA</option><option value=PU>PESARO E URBINO</option><option value=PE>PESCARA</option><option value=PC>PIACENZA</option><option value=PI>PISA</option><option value=PT>PISTOIA</option><option value=PN>PORDENONE</option><option value=PZ>POTENZA</option><option value=PO>PRATO</option><option value=RG>RAGUSA</option><option value=RA>RAVENNA</option><option value=RC>REGGIO DI CALABRIA</option><option value=RE>REGGIO NELL EMILIA</option><option value=RI>RIETI</option><option value=RN>RIMINI</option><option value=RM>ROMA</option><option value=RO>ROVIGO</option><option value=SA>SALERNO</option><option value=SS>SASSARI</option><option value=SV>SAVONA</option><option value=SI>SIENA</option><option value=SR>SIRACUSA</option><option value=SO>SONDRIO</option><option value=TA>TARANTO</option><option value=TE>TERAMO</option><option value=TR>TERNI</option><option value=TO>TORINO</option><option value=TP>TRAPANI</option><option value=TN>TRENTO</option><option value=TV>TREVISO</option><option value=TS>TRIESTE</option><option value=UD>UDINE</option><option value=VA>VARESE</option><option value=VE>VENEZIA</option><option value=VB>VERBANO-CUSIO-OSSOLA</option><option value=VC>VERCELLI</option><option value=VR>VERONA</option><option value=VV>VIBO VALENTIA</option><option value=VI>VICENZA</option><option value=VT>VITERBO</option></select>";
    s += "<tr><td colspan=2  style=text-align:center><br><input type=button onclick=() value=Registra></td></tr>";
    s += "</form></table><p>* Campi Obbligatori</p></center>";
    $("#post").html(s);
}
function showClient() {
    $("#show_client").html("<br><li><a href=# onclick=modClient()>Modifica Cliente</a></li><li><a href=# onclick=delClient()>Elimina Cliente</a></li>");
}
function addArticle() {
    s = "<center><form name='add_article_form'><table border=0px>";
    s += "<tr><td>Codice</td><td><input type='text' name='CodArticolo'></td></tr>";
    s += "<tr><td>Categoria</td><td><input type='text' name='Categoria'></td></tr>";
    s += "<tr><td>Descrizione</td><td><input type='text' name='Descrizione'></td></tr>";
    s += "<tr><td>Quantita</td><td><input type='text' name='Quantit?'></td></tr>";
    s += "<tr><td>Prezzo Acquisto</td><td><input type='text' name='PrezAcquisto'></td></tr>";
    s += "<tr><td>Prezzo Vendita</td><td><input type='text' name='PrezVendita'></td></tr>";
    s += "<tr><td>Cod. Fornitore</td><td><input type='text' name='CodFornitore'></td></tr>";
    s += "<tr><td colspan=2 style=text-align:center><br><input type='button' onclick=() value='Salva'></td></tr></table></form></center>";
    $("#post").html(s);
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
function addSupplier() {
    s = "<center><form name='addSupplier'><table border=0><tr>";
    s += "<td align=left>*Codice Fornitore</td><td><input type=text name=cf size=30></td></tr>";
    s += "<tr><td align=left>*Nome</td><td><input type=text name=username size=30></td></tr>";
    s += "<tr><td align=left>*Cognome</td><td><input type=text name=surname size=30></td></tr>";
    s += "<tr><td align=left>*Sede Legale</td><td><input type=text name=address size=30></td></tr>";
    s += "<tr><td align=left>Cellulare</td><td><input type=text name=cellulare size=30></td></tr>";
    s += "<tr><td align=left>*Citta</td><td><input type=text name=city size=30></td></tr>";
    s += "<tr><td align=left>*Provincia</td><td><select name=provincie><option value=null>---</option>";
    s += "<option value=AG>AGRIGENTO</option><option value=AL>ALESSANDRIA</option><option value=AN>ANCONA</option><option value=AO>AOSTA</option><option value=AR>AREZZO</option><option value=AP>ASCOLI PICENO</option><option value=AT>ASTI</option><option value=AV>AVELLINO</option><option value=BA>BARI</option><option value=BL>BELLUNO</option><option value=BN>BENEVENTO</option><option value=BG>BERGAMO</option><option value=BI>BIELLA</option><option value=BO>BOLOGNA</option><option value=BZ>BOLZANO</option><option value=BS>BRESCIA</option><option value=BR>BRINDISI</option><option value=CA>CAGLIARI</option><option value=CL>CALTANISSETTA</option><option value=CB>CAMPOBASSO</option><option value=CE>CASERTA</option><option value=CT>CATANIA</option><option value=CZ>CATANZARO</option><option value=CH>CHIETI</option><option value=CO>COMO</option><option value=CS>COSENZA</option><option value=CR>CREMONA</option><option value=KR>CROTONE</option><option value=CN>CUNEO</option><option value=EN>ENNA</option><option value=FE>FERRARA</option><option value=FI>FIRENZE</option><option value=FG>FOGGIA</option><option value=FC>FORLI-CESENA</option><option value=FR>FROSINONE</option><option value=GE>GENOVA</option><option value=GO>GORIZIA</option><option value=GR>GROSSETO</option><option value=IM>IMPERIA</option><option value=IS>ISERNIA</option><option value=SP>LA SPEZIA</option><option value=AQ>AQUILA</option><option value=LT>LATINA</option><option value=LE>LECCE</option><option value=LC>LECCO</option><option value=LI>LIVORNO</option><option value=LO>LODI</option><option value=LU>LUCCA</option><option value=MC>MACERATA</option><option value=MN>MANTOVA</option><option value=MS>MASSA-CARRARA</option><option value=MT>MATERA</option><option value=ME>MESSINA</option><option value=MI>MILANO</option><option value=MO>MODENA</option><option value=NA>NAPOLI</option><option value=NO>NOVARA</option><option value=NU>NUORO</option><option value=OR>ORISTANO</option><option value=PD>PADOVA</option><option value=PA>PALERMO</option><option value=PR>PARMA</option><option value=PV>PAVIA</option><option value=PG>PERUGIA</option><option value=PU>PESARO E URBINO</option><option value=PE>PESCARA</option><option value=PC>PIACENZA</option><option value=PI>PISA</option><option value=PT>PISTOIA</option><option value=PN>PORDENONE</option><option value=PZ>POTENZA</option><option value=PO>PRATO</option><option value=RG>RAGUSA</option><option value=RA>RAVENNA</option><option value=RC>REGGIO DI CALABRIA</option><option value=RE>REGGIO NELL EMILIA</option><option value=RI>RIETI</option><option value=RN>RIMINI</option><option value=RM>ROMA</option><option value=RO>ROVIGO</option><option value=SA>SALERNO</option><option value=SS>SASSARI</option><option value=SV>SAVONA</option><option value=SI>SIENA</option><option value=SR>SIRACUSA</option><option value=SO>SONDRIO</option><option value=TA>TARANTO</option><option value=TE>TERAMO</option><option value=TR>TERNI</option><option value=TO>TORINO</option><option value=TP>TRAPANI</option><option value=TN>TRENTO</option><option value=TV>TREVISO</option><option value=TS>TRIESTE</option><option value=UD>UDINE</option><option value=VA>VARESE</option><option value=VE>VENEZIA</option><option value=VB>VERBANO-CUSIO-OSSOLA</option><option value=VC>VERCELLI</option><option value=VR>VERONA</option><option value=VV>VIBO VALENTIA</option><option value=VI>VICENZA</option><option value=VT>VITERBO</option></select>";
    s += "<tr><td colspan=2  style=text-align:center><br><input type=button onclick=() value=Salva></td></tr>";
    s += "</form></table></center>";
    $("#post").html(s);
}
function showSupplier() {
    $("#show_supplier").html("<li><a href=# onclick=modSupplier()>Modifica Fornitore</a></li><li><a href=# onclick=delSupplier()>Elimina Fornitore</a></li>");
}

