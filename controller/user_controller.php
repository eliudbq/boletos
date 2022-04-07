<?php
    include("program_controller.php");
    include("..\model\user_model.php");
    class UserController extends GrantController{
        function index(){
            $page=rut_index;
            include_once("view\html\head.php");
            include_once("view\html\body.php");
        }
    }        
    if($_POST){
        $modelo=new UserModel;
        switch (json_decode($_POST['action'])[0]) {
            case "login":
                $ct=new UserController;
                $ct->igualar($_POST,$modelo);
                print($modelo->user." ".$modelo->password."\n");
                $modelo->prueba();
                break;
        }
    }