function required_marked(){
    $(".required-mark").each(function() {
        console.log($(this).html());
    });
}

function clear_data(){
    data_list =[];
    return data_list
}
function get_data(campos){
    o=[];
    $.each(campos, function (i, elem) { 
        let collection=$(`.${elem}`);
        $.each(collection, function (ii, con){
            if ($(con).prop(`name`).substring(0,3)=="val"){
                o[$(con).prop(`name`).substring(3)]=$(con).val();
            }else{
                if ($(con).prop(`name`).substring(0,3)=="chk"){
                    console.log("construya esta opcion");
                }else{
                    if ($(con).prop(`name`).substring(0,3)=="txt"){
                        console.log("construya esta opcion");
                    }
                }
            }
        });
    }); 
    return o;
}