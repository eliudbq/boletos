<?php
    include_once("con_bd.php");
    class ProgramModel
    {
        public $cone;
        public $gsent;
        public $database = "boleteria";
        public $tb_users = "users";
        public $tb_session = "sessions";
        public function __construct($params=null)
        {
            if ($params!=null)
            {
                $propiedades = json_decode($params['claves']);
                $valor = json_decode($params['valores']);    
                foreach ($propiedades as $clave => $cont)
                {
                    $this->$cont=$valor[$clave];
                }
            }
        }
        public function contar($sql)
        {
            try{
                $this->cone= new Pdo_Conect_Info;
                $this->gsent=$this->cone->prepare($sql);
                $this->gsent->execute();
                return $this->gsent->rowCount();
            }
            catch(PDOException $e){echo 'error: '.$e->getMessage();}
        }
        public function capturar($sql)
        {
            try{
                $this->cone= new Pdo_Conect_Info;
                $this->gsent=$this->cone->prepare($sql);
                $this->gsent->execute();
                return $this->gsent->fetchAll(PDO::FETCH_ASSOC);
            }
            catch(PDOException $e){echo 'error: '.$e->getMessage();}
        }
    }