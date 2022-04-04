<?php
    include_once("program_controller.php");
    class UserController{
        function index(){
            $page=rut_index;
            include_once("view\html\head.php");
            include_once("view\html\body.php");
        }
    }