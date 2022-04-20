$(document).ready(function(){
    $("#login").on({
        "click":function(){
            let datos=formulario.get_data(["campo1"],this);
            formulario.public_empty(datos.err);
            formulario.sent_data(datos);
            if (RESPUESTA[0]["user"]==RESPUESTA[0]["user_cedula"])
            {
                navegacion.propio(RESPUESTA[0]["user_cedula"]);
            };
        }
    });
    $("#btncancel_info_worker").on({
        "click":function(){
            navegacion.inicio();
        }
    });
})
