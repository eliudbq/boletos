function reloj(){
    let Digital = new Date();
    let day=Digital.getDate();
    let month=Digital.getMonth();
    let year=Digital.getFullYear();
    let hours = Digital.getHours();
    let minutes = Digital.getMinutes();
    let seconds = Digital.getSeconds();
    let dn = "AM"
    if (hours == 0){hours = 12;}
    else{
        if (hours > 12) {dn = "PM";hours = hours - 12;}
    }
    if (hours < 10) {hours = `0${hours}`;}
    if (day <= 9)day = `0${day}`;
    if (month <= 9)month = `0${month}`;
    if (minutes <= 9)minutes = `0${minutes}`;
    if (seconds <= 9)seconds = `0${seconds}`;
    let name_day="";
    if(Digital.getDay() == 0){ name_day = "Domingo";  }
    if(Digital.getDay() == 1){ name_day = "Lunes";    }
    if(Digital.getDay() == 2){ name_day = "Martes";   }
    if(Digital.getDay() == 3){ name_day = "Miercoles";}
    if(Digital.getDay() == 4){ name_day = "Jueves";   }
    if(Digital.getDay() == 5){ name_day = "Viernes";  }
    if(Digital.getDay() == 6){ name_day = "Sabado";   }
    $("time").html(`${name_day} ${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${dn}<br>`);
    setInterval(() => {reloj()},1000);
}
$(function(){
	history.go(1);
	window.location.hash="no-back-button";
	window.location.hash="Again-No-back-button";
	window.onhashchange=window.location.hash="no-back-button";
	if(history.forward(1)){location.replace(history.forward(1))}
	reloj();
	$("input").prop({"autocomplete":"off"});
  formulario 	=new Formulario;
  validate    =new Validate;
  navegacion  =new Navigate;
  navegacion.inicio();
});
class Navigate
{
  inicio()
  {
    $.ajax({
      type: "POST",
      Cache:false,
      async:false,
      url: `controller/routes.php`,
      data:{"action":JSON.stringify(["inicio"])},
      datatype:"html",
    })
    .done(function(resp){
      $("section").html(resp);
      formulario.required_marker();
    })
    .fail(function(jqXHR, textStatus){
			validate.error_ajax(jqXHR, textStatus);
      console.log("inicio");
		});
  }
  propio(cedula)
  {
    $.ajax({
      type: "POST",
      Cache:false,
      async:false,
      url: `controller/routes.php`,
      data:{'cedula':cedula,"action":JSON.stringify(["propio"])},
      datatype:"html",
    })
    .done(function(resp){
      $("section").html(resp);
    })
    .fail(function(jqXHR, textStatus){
      console.log("propio");
			validate.error_ajax(jqXHR, textStatus)
		});
  }
}
