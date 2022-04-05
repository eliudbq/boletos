<?php
  /*$servidor = "localhost";
  $usuario = "structure_manager";
  $password = "El1&Luc1";
  try{
    $conexion = new PDO("mysql:host=$servidor;dbname=boleteria", $usuario, $password);      
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexión realizada Satisfactoriamente";
  }
  catch(PDOException $e){
    echo "La conexión ha fallado: " . $e->getMessage();
  }
  $conexion = null;*/


class PDOCONNECT{ 
    private $host;
    private $usuario;
    private $pass;
    private $db;
    private $connection;
    function __construct(){
        $this->host = "localhost";
        $this->usuario = "structure_manager";
        $this->pass = "El1&Luc1";
        $this->db = "boleteria";
    }
    function connect(){
      try{
        $opciones = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
            PDO::MYSQL_ATTR_FOUND_ROWS => true
        );
        $this->connection = new PDO(
            'mysql:host=' . $this->host . ';dbname=' . $this->db,
            $this->usuario,
            $this->pass,
            $opciones
        );
      }
      catch(PDOException $e){
        echo "La conexión ha fallado: " . $e->getMessage();
      }
    die();
    }

}