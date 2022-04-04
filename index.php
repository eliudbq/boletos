<?php
    include_once("controller/user_controller.php");
    $user = new UserController;
    $user->index();