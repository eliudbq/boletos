<?php
    include("program_controller.php");
    class UserController extends GrantController{
        function index(){
            $page=rut_index;
            include_once("view\html\head.php");
            include_once("view\html\body.php");
        }
    }        
    if($_POST){
        switch (json_decode($_POST['action'])[0]) {
            case "login":
                include("..\model\user_model.php");  
                $modelo=new UserModel;          
                $control=new UserController;
                $control->igualar($_POST,$modelo);
                $modelo->accession();
                break;
        }
    }