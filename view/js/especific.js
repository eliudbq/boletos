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
    setInterval("reloj()", 1000);
}
$(document).ready(function(){
  reloj();
  formulario=new Formulario
  formulario.required_marker();
});

