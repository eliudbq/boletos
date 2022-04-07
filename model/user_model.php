<?php
    include_once("program_model.php");
    class UserModel extends ProgramModel{
        public $user;
        public $password;
        public function login(){
            print_r($action."\n");
        }
    }