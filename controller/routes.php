<?php
    class Rutas
    {
        public const rut_index=__DIR__."/../view/html/workers/index.html";
        const rut_worker_data=__DIR__."/../view/html/workers/worker_data.html";
        public function acceder_propio()
        {
            $html=include($this::rut_worker_data);
            print($html);
        }
        public function iniciar()
        {
            $html=include($this::rut_index);
            print($html);
        }
    }
    $ruta=new Rutas;
    if (json_decode($_POST['action'])[0]=="inicio")
    {
        $ruta->iniciar();
    }
    if (json_decode($_POST['action'])[0]=="propio")
    {
        $ruta->acceder_propio();
    }