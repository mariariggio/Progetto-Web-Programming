<?php
include 'UseDb.php';
include 'BuildPage.php';
class FrameWork {
    private $db;
    private $bp;
    //Costruttore instanzia le classi UseDB, BuildPage
    public function __construct() {
        $this->db=new UseDb();
        $this->bp=new BuildPage();
    }
    //richiama un metodo sul database che ritorna true o false a seconda che 
    //i dati inseriti siano delle credenziali valide o meno.
    public function getCredential($name, $password){
        return $this->db->getCredential($name, $password);
    }
    //metodo chiamato da index.php. In base all'operazione richiesta questa 
    //funzione chiama il metodo corrispondente di questa classe per soddisfare
    //la richiesta inviata dal client.
    public function fromAjax($post){
        $request = json_decode($_POST['operation'], true);
        if($request['operation']== "showAddOperationForm"){
            return $this->getAddOperationForm();
        }else if($request['operation']== "addOperation"){
            return $this->addOperation($request);
        }else if($request['operation']== "addClient"){
            return $this->addClient($request);
        }else if ($request['operation']== "showAddArticleForm"){
            return $this->addArticleForm();
        }elseif ($request['operation']== "addArticle") {
            return $this->addArticle($request);
        } else if ($request['operation']== "addSupplier"){
            return $this->addSupplier($request);
        } else if ($request['operation']== "closeOperationForm"){
            return $this->closeOperationForm();
        }else if ($request['operation']=="newFattura"){
            return $this->newFattura($request);
        } else if($request['operation'] == "show" && $request['menu'] == "Client"){
            return $this->getClients();
        } else if ($request['operation'] == "show" && $request['menu'] == "Operation"){
            return $this->getOperations();
        } else if ($request['operation'] == "show" && $request['menu'] == "Supplier"){
            return $this->getSupplier();
        } else if ($request['operation'] == "show" && $request['menu'] == "inM"){
            return $this->Magazzino("F");
        } else if ($request['operation'] == "show" && $request['menu'] == "nInM"){
            return $this->Magazzino("E");
        } else if ($request['operation'] == "show" && $request['menu'] == "inEs"){
            return $this->Magazzino("EF");
        } else if ($request['operation'] == "show" && $request['menu'] == "Invoice"){
            return $this->getInvoice();
        }else if ($request['operation'] == "del" && $request['menu'] == "client"){
            return $this->delClient($request);
        } else if ($request['operation'] == "del" && $request['menu'] == "article"){
            return $this->delArticle($request);
        } else if ($request['operation'] == "del" && $request['menu'] == "supplier"){
            return $this->delSupplier($request);
        } else if ($request['operation'] == "modClient"){
            return $this->modClient($request);
        } else if ($request['operation'] == "modArticle"){
            return $this->modArticle($request);
        } else if ($request['operation'] == "modSupplier"){
            return $this->modSupplier($request);
        } else if ($request['operation'] == "search"){
            return $this->search($request);
        }
    }
    
    //Metodo che si occupa dell'inserimento di una nuova operazione. Chiama un 
    //metodo della classe UdeDb 
    private function getAddOperationForm(){
        $result['operation'] = "addOperationForm";
        //Raccolgo i dati necessari
        $result['clienti'] =  $this->db->getClient();
        $result['manodopera'] = $this->db->getManodopera();
        $result['articoli'] = $this->db->getArticle();
        $ret = json_encode($result);
        return $ret;
    }
    //Metodo che si occupa dell'inserimento di una nuova operazione. Chiama un 
    //metodo della classe UdeDb e se il risultato è positivo ritorna la tabella 
    //con i clienti.
    private function addOperation($request){
        $messagge = $this->db->newOperation($request);
        if(!is_string($messagge)){
            $result['operation'] = "addOperation";
            $result['value'] = $this->db->getOperation();
            $ret = json_encode($result);
            return $ret;
        }
    }
    //Ritorna la tabella con i clienti
    private function getOperations(){
        $result['operation'] = "showOperation";
        $result['value'] = $this->db->getOperation();
        $ret = json_encode($result);
        return $ret;
    }
    //metodo responsabile della creazione del form per la conclusione di una 
    //operazione. Chiama un metodo della classe UseDb che restituisce i clienti
    //che hanno richiesto prestazioni.
    private function closeOperationForm(){
       $result['operation'] = "closeOperationForm";
        $result['value'] = $this->db->getForFattura();
        $ret = json_encode($result);
        return $ret; 
    }
    //metodo responsabile della creazione della fattura.Chiama un 
    //metodo della classe UdeDb e se il risultato è positivo ritorna la pagina 
    //delle fatture.
    private function newFattura($request){
        $messagge = $this->db->newInvoice($request);
        if(is_bool($messagge)){
            $result['operation'] = "newFattura";
            $result['value'] = true;
            $ret = json_encode($result);
            return $ret;
        } 
    }
    //Ritorna la pagina con le fatture
    private function getInvoice(){
        $result['operation'] = "showInvoice";
        $result['value'] = $this->db->getInvoice();
        $ret = json_encode($result);
        return $ret;
    }
    //Metodo che si occupa dell'inserimento di un nuovo cliente. Chiama un 
    //metodo della classe UdeDb e se il risultato è positivo ritorna la pagina 
    //dei clienti.
    private function addClient($request){
        $messagge = $this->db->newClient($request);
        if(is_bool($messagge)){
            $result['operation'] = "addClient";
            $result['value'] = $this->db->getClient();
            $ret = json_encode($result);
            return $ret;
        }
    }
    //Ritorna la pagina con i clienti
    private function getClients(){
        $result['operation'] = "showClient";
        $result['value'] = $this->db->getClient();
        $ret = json_encode($result);
        return $ret;
    }
    //Metodo che si occupa della modifica di un cliente. Chiama un metodo della
    //classe UseDb e se il risultato è positivo ritorna la pagina con i clienti 
    //aggiornata
    private function modClient($request){
        $messagge = $this->db->modClient($request);
        if (is_bool($messagge)){
            $result['operation'] = "modClient";
            $result['value'] = $this->db->getClient();
            $ret = json_encode($result);
        return $ret;
        }
    }
    //metodo responsabile dell'eliminazione di un cliente. Chiama un metodo della
    //classe UseDB per effettuare l'eliminazione e successivamente restituisce 
    //l'elenco dei clienti aggiornato.
    private function delClient($request){
        $messagge = $this->db->delClient($request);
         if(is_bool($messagge)){
            return $this->getClients();
        }
    }
    //metodo responsabile della creazione del form per l'inserimento di un 
    //nuovo articolo. Chiama un metodo della classe UseDb che restituisce la 
    //lista dei fornitori.
    private function addArticleForm(){
        $result['operation'] = "addArticleForm";
        $result['value'] = $this->db->getSupplier();
        $ret = json_encode($result);
        return $ret;
    }
    //Metodo che si occupa dell'inserimento di un nuovo articolo. Chiama un 
    //metodo della classe UdeDb e se il risultato è positivo ritorna la pagina 
    //dei clienti.
    private function addArticle($request){
        $messagge = $this->db->newArticle($request);
        if(is_bool($messagge)){
            $result['operation'] = "addArticle";
            $result['value'] = $this->db->getArticle();
            $ret = json_encode($result);
            return $ret;
        }
    }
    //Ritorna gli articoli
    private function getArticles(){
        $result['operation'] = "showArticle";
        $result['value'] = $this->db->getArticle();
        $ret = json_encode($result);
        return $ret;
    }
    //Metodo che si occupa della modifica di un articolo. Chiama un metodo della
    //classe UseDb e se il risultato è positivo ritorna la pagina con gli articoli 
    //aggiornata
    private function modArticle($request){
        $messagge = $this->db->modArticle($request);
        if (is_bool($messagge)){
            $result['operation'] = "modArticle";
            $result['value'] = $this->db->getArticle();
            $ret = json_encode($result);
        return $ret;
        }
    }
    //metodo responsabile dell'eliminazione di un articolo. Chiama un metodo della
    //classe UseDB per effettuare l'eliminazione e successivamente restituisce 
    //l'elenco degli articoli aggiornato.
    private function delArticle($request){
        $messagge = $this->db->delArticle($request);
        if(is_bool($messagge)){
           return $this->getArticles();
        }
    }
    //richiama un metodo della classe UseDb che restituisce gli articoli in base
    //alla quantita.
    private function Magazzino($count){
        $result['operation'] = "showArticle";
        $result['value'] = $this->db->getMagazzino($count);
        $ret = json_encode($result);
        return $ret;
    }
    //Metodo che si occupa dell'inserimento di un nuovo fornitore. Chiama un 
    //metodo della classe UdeDb e se il risultato è positivo ritorna la pagina 
    //dei clienti.
    private function addSupplier($request){
        $messagge = $this->db->newSupplier($request);
        if(is_bool($messagge)){
            $result['operation'] = "addSupplier";
            $result['value'] = $this->db->getSupplier();
            $ret = json_encode($result);
            return $ret;
        }
    }
    //Ritorna la pagina con i clienti
    private function getSupplier(){
        $result['operation'] = "showSupplier";
        $result['value'] = $this->db->getSupplier();
        $ret = json_encode($result);
        return $ret;
    }
    //Metodo che si occupa della modifica di un fornitore. Chiama un metodo della
    //classe UseDb e se il risultato è positivo ritorna la pagina con i fornitori 
    //aggiornata
    private function modSupplier($request){
        $messagge = $this->db->modSupplier($request);
        if (is_bool($messagge)){
            $result['operation'] = "modSupplier";
            $result['value'] = $this->db->getSupplier();
            $ret = json_encode($result);
            return $ret;
        }
    }
    //metodo responsabile dell'eliminazione di un fornitore. Chiama un metodo della
    //classe UseDB per effettuare l'eliminazione e successivamente restituisce 
    //l'elenco dei fornitori aggiornato.
    private function delSupplier($request){
        $messagge = $this->db->delSupplier($request);
         if(is_bool($messagge)){
            return $this->getSupplier();
        }
    }
    //metodo responsabile della ricerca. Prende in input l'array
    //che contiene la chiave di ricerca e il menu interessato dalla ricerca e
    //restituisce il risultato della ricerca.
    private function search($request){
        if($request['menu'] == "article"){
           $data= $this->db->searchArticle($request['keyword']);
           $result['operation'] = "searchArticle";
           $result['value'] = $data;
        } else if($request['menu'] == "client"){ 
            $data= $this->db->searchClient($request['keyword']);
            $result['operation'] = "searchClient";
            $result['value'] = $data;
        }else if($request['menu'] == "operation"){
            $data= $this->db->searchOperation($request['keyword']);
            $result['operation'] = "searchOperation";
            $result['value'] = $data;
        }else if($request['menu'] == "invoice"){
            $data= $this->db->searchInvoice($request['keyword']);
            $result['operation'] = "searchInvoice";
            $result['value'] = $data;
        }else if ($request['menu'] == "supplier"){
            $data= $this->db->searchSupplier($request['keyword']);
            $result['operation'] = "searchSupplier";
            $result['value'] = $data;
        }
        $ret = json_encode($result);
        return $ret;
    }
}
?>
