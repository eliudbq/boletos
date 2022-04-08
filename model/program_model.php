<?php
    include_once("con_bd.php");
    class ProgramModel
    {
        public $cone;
        public $gsent;
        public $database = "boleteria";
        public $tb_users = "users";
        public function contar($sql)
        {
            $this->cone= new Pdo_Conect_Info;
            $this->gsent=$this->cone->prepare($sql);
            $this->gsent->execute();
            return $this->gsent->rowCount();
        }
        public function capturar($sql)
        {
            $this->cone= new Pdo_Conect_Info;
            $this->gsent=$this->cone->prepare($sql);
            $this->gsent->execute();
            return $this->gsent->fetchAll(PDO::FETCH_ASSOC);
        }
    }