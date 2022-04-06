$(document).ready(function(){
    $("#login").on({
        "click":function(){
            let datos=formulario.get_data(["campo1"]);
            console.log(datos);
            anunciar_faltantes(datos.err);
        }
    });
})
