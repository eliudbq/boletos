<?php
    include(__DIR__."\..\model\user_model.php");
    include(__DIR__."\program_controller.php");
    class UserController extends GrantController
    {
        function index()
        {
           $ruta=new Rutas;
           $ruta->iniciar();
        }
        function DataWork()
        {
            $page=rut_worker_data;
            include_once("view\html\head.php");
            include_once("view\html\body.php");
        }
    }        
    if($_POST)
    {
        switch (json_decode($_POST['action'])[0])
        {
            case "login":  
                $modelo=new UserModel($_POST);          
                $modelo->login();
                break;
        }
    }