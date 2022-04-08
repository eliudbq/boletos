<?php
    include_once("program_model.php");
    class UserModel extends ProgramModel{
        public $user;
        public $password;
        public function accession(){
            $sql="SELECT * FROM $this->tb_users WHERE user='$this->user' and password='$this->password'";
            $conteo=$this->contar($sql);
            print_r($conteo);
        }
    }