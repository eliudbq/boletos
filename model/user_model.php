<?php
    include_once("program_model.php");
    class Sessions extends ProgramModel
    {
        protected $id_user;
        protected $id_sessions;
        protected $menu;
    }
    class UserModel extends ProgramModel
    {
        protected $id_user;
        protected $user;
        protected $password;
        protected $user_name;
        protected $user_cedula;
        protected $user_area;
        protected $estado;
        protected $municipio;
        protected $direccion;
        protected $telefono;
        protected $email;
        protected $talla_camisa;
        protected $talla_pantalon;
        protected $talla_calsado;
        protected $titulo;
        protected $fecha_nacimiento;
        protected $fecha_ingreso;
        protected $tipo_de_sangre;
        protected $licencia_de_conducir;
        public function login()
        {
            $sql="SELECT us.id_user, us.password, us.user, us.user_name, us.user_cedula, us.user_area, acc.menu FROM $this->tb_users as us LEFT JOIN $this->tb_session as acc ON us.id_user = acc.id_user WHERE user='$this->user' and password='$this->password'";
            $captura=$this->capturar($sql);
            print(json_encode($captura));
        }
        function obtener_usuario_base_de_datos(){$this->login();}
    }