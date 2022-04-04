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
    $("time").html(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${dn}<br>`);
    setInterval("reloj()", 1000);
}
$(document).ready(function(){
  reloj();
   
});