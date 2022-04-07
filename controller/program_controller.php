<?php
    include_once("routes.php");
    class GrantController{
        function igualar($param,$modelo){
            $propiedades = json_decode($param['claves']);
            $valor = json_decode($param['valores']);    
            foreach ($propiedades as $clave => $cont){
                $modelo->$cont=$valor[$clave];
            }
            print("desde el controlador grande");
        }
    }