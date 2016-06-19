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
        if($request['operation']== "addClient"){
            echo $this->addClient($request);
        } elseif ($request['operation']== "addArticle") {
            echo $this->addArticle($request);
        } else if ($request['operation']== "addSupplier"){
            echo $this->addSupplier($request);
        }
    }
    //Metodo che si occupa dell'inserimento di un nuovo cliente. Chiama un 
    //metodo della classe UdeDb e se il risultato è positivo ritorna la pagina 
    //dei clienti.
    private function addClient($request){
        $messagge = $this->db->newClient($request);
        if(is_bool($messagge)){}
            return $this->getClients();
    }
    //Ritorna la pagina con i clienti
    private function getClients(){
        $res = $this->db->getClient();
        return ($this->bp->makeClientsTable($res));
    }
    //Metodo che si occupa dell'inserimento di un nuovo articolo. Chiama un 
    //metodo della classe UdeDb e se il risultato è positivo ritorna la pagina 
    //dei clienti.
    private function addArticle($request){
        $messagge = $this->db->newArticle($request);
        if(is_bool($messagge))
            return $this->getArticles();
    }
    //Ritorna la pagina con gli articoli
    private function getArticles(){
        $res = $this->db->getArticle();
        return ($this->bp->makeArticlesTable($res));
    }
    //Metodo che si occupa dell'inserimento di un nuovo fornitore. Chiama un 
    //metodo della classe UdeDb e se il risultato è positivo ritorna la pagina 
    //dei clienti.
    private function addSupplier($request){
        $messagge = $this->db->newSupplier($request);
        if(is_bool($messagge)){}
            return $this->getSupplier();
    }
    //Ritorna la pagina con i clienti
    private function getSupplier(){
        $res = $this->db->getSupplier();
        return ($this->bp->makeSupplierTable($res));
    }
}

?>
