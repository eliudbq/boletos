$(document).ready(function(){
    $("#login").on({
        "click":function(){
            let datos=get_data(["campo1","campo2"]);
            console.log(datos);
        }
    });
})
