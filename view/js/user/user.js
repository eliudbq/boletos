$(document).ready(function(){
    $("#login").on({
        "click":function(){
            let datos=formulario.get_data(["campo1"],this);
            formulario.public_empty(datos.err);
            formulario.sent_data(datos);
        }
    });
})
