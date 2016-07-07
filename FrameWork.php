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
    //metodo della classe UdeDb e se il risultato � positivo ritorna la tabella 
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
    //Metodo che si occupa dell'inserimento di un nuovo cliente. Chiama un 
    //metodo della classe UdeDb e se il risultato � positivo ritorna la pagina 
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
    //metodo della classe UdeDb e se il risultato � positivo ritorna la pagina 
    //dei clienti.
    private function addArticle($request){
        $messagge = $this->db->newArticle($request);
        if(is_bool($messagge)){
            $result['operation'] = "addArticle";
            $result['value'] = $this->getArticles();
            $ret = json_encode($result);
            return $ret;
        }
    }
    //Ritorna gli articoli
    private function getArticles(){
        $res = $this->db->getArticle();
        return $res;
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
    //metodo della classe UdeDb e se il risultato � positivo ritorna la pagina 
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
}

?>
