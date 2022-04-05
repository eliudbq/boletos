class Formulario{
	required_marker(){
		let a=$(`.required-mark`);
		for(let i=0;i<a.length;i++){
			a[i].childNodes[0].nodeValue=`${a[i].childNodes[0].nodeValue}*`;
		}
	}
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
function only_letter(e){
	key = e.keyCode || e.which;
	if((key!=32)&&(key<65 || key>90)&&(key<97 || key>122)&&(key!=209)&&(key!=241)&&(key!=225)&&(key!=223)&&(key!=237)&&(key!=243)&&(key!=250)&&(key!=193)&&(key!=201)&&(key!=205)&&(key!=211)&&(key!=218)&&(key!=46)&&(key!=44))
	{return false;}
}
function only_number(n){
	key = n.keyCode || n.which;
	if(((key<48) || (key>57))&&(key!=44)){return false;}
}
function for_ema(a){//validar el formato para un campo tipo email
	if(a.value.length>0){
		c=0; b=a.value.split("");
		for(i=0;i<b.length;i++){if(b[i]=="@"){c++;}}
		if((b[b.length-3]==".")||(b[b.length-4]==".")){c++;}
		if(c!=2){
			mensaje("debe ingresar un correo électronico valido","observacion");
			a.focus();
		}
	}
}
function minusculas(a){
	a=a.toLowerCase();
	return a;
}
function mayini(e){//mayuscula inicial de cada palabra en un texto
	a=e.split("");
	t="";
	for(i=0;i<a.length;i++){
		if((i==0)||(a[i-1]==" ")){t+=(a[i]).toUpperCase();}
		else{t+=(a[i]).toLowerCase();}
	}
	return t;
}


/*$(function(){
	modal 		=new Modal;
	formulario 	=new Formulario;
	numero 		=new Numero;
	ecepcion	=new Ecepciones;
	letra 		=new Letras;
	validar		=new Validacion;
	temporales  =new Temporales;
	media       =new Media;
	$("body").on("load",function(){history.go(1);});
	window.location.hash="no-back-button";
	window.location.hash="Again-No-back-button";
	window.onhashchange=window.location.hash="no-back-button";
	if(history.forward(1)){location.replace(history.forward(1))}
	setInterval(() => {temporales.relojDigital()},1000);
	$("input").prop({"autocomplete":"off"});
	$("article").on({"click":function(){$(this).css({"display":"none"});}});
});
class Formulario{
	marcarRequerido()
	{
		let i=0;
		while($(`.requerir${i}`).length>0)
		{
			let a=$(`.requerir${i}`);
			for(let ii=0;ii<a.length;ii++)
			{
				if(a[ii].childNodes[0].nodeValue.trim()!="")
				{
					a[ii].childNodes[0].nodeValue=`${a[ii].childNodes[0].nodeValue}*`;
				}
			}
			i++;
		}
	}
	limpiar(camp)//vacia los valores visibles de los campos de texto
	{
		if(camp==undefined)
		{
			$(`input[type=password],input[type=range],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],input[type=color], input[type=date], input[type=datetime-local], input[type=email], input[type=file],input[type=image],input[type=month],input[type=number],select,textarea`).val(``);
			$(`input[type=checkbox],input[type=radio]`).prop(`checked`,``);
		}
		else
		{
			for(let x=0;x<camp.length;x++)
			{
				let lista=document.getElementsByClassName('campo'+camp[x]);
				for(let i=0;i<lista.length;i++)
				{
					let elementos=lista[i].childNodes;
					console.log(elementos);
					for(let ii=0;ii<elementos.length;ii++)
					{
						if(elementos[ii].tagName==`LABEL` || elementos[ii].tagName==`div` || elementos[ii].tagName==`article` || elementos[ii].tagName==`section` || elementos[ii].tagName==`footer` || elementos[ii].tagName==`output` || elementos[ii].tagName==`header` || elementos[ii].tagName==`fieldset`)
						{
							let el=elementos[ii].childNodes;
							for(let iii=0;iii<el.length; iii++)
							{
								if(el[iii].tagName==`INPUT` && ((el[iii].type==`checkbox`) || (el[iii].type==`radio`)))
								{
									$(el[iii]).prop(`checked`,``);
								}
								if(el[iii].tagName==`INPUT` && ((el[iii].type!=`checkbox`) || (el[iii].type!=`radio`)))
								{
									$(el[iii]).val("");
								}
							}
						}
						if(elementos[ii].tagName==`td` || elementos[ii].tagName==`th`)
						{
							$(elementos[ii]).text("");
						}
						if(elementos[ii].tagName==`INPUT` && (elementos[ii].type==`checkbox`) && (elementos[ii].type==`radio`))
						{
							$(elementos[ii]).prop(`checked`,``);
						}
						if((elementos[ii].tagName==`INPUT` && (elementos[ii].type!=`checkbox`) && (elementos[ii].type!=`radio`)) || (elementos[ii].tagName==`TEXTAREA`) || (elementos[ii].tagName==`SELECT`))
						{
							$(elementos[ii]).val("");
						}
					}
				}
			}
		}
	}
	iniciarCaptura()//funcion que declara las varibles de captura para los valores de los campos marcados con valores 
	{
		var data = {};
		var falta = "";
		return [data,falta];
	}
	mensaje(texto,formato)//muestra el mensaje que enviado en el formato especificado en un article
	{
		if(typeof(texto)==`object`)
		{
			texto=texto.join("\r");
		}
		$(`article`).html(``);
		$(`article`).html(texto.toUpperCase()).show().addClass(formato);
		setTimeout(
			function()
			{
				$(`article`).hide();
				$(`article`).removeClass(formato);
			},3000
		);
	}
	capturarFormulario(ncam,valor){
		let numero=new Numero;
		let nf=0;
		var titulo;
		let nueval;
		for (let x=0;x<ncam.length;x++){
			if(ncam[x]=="si_mismo"){
				valor[0]["control_formulario"]=this;
				valor[0]["evento_formulario"]=event;
			}else{
				let lista=document.getElementsByClassName('campo'+ncam[x]);
				for(let i=0;i<lista.length;i++){
					let req="no";
					if($(lista[i]).hasClass('requerir'+ncam[x])){req="si";}
					let elementos=lista[i].childNodes;
					for(let ii=0;ii<elementos.length;ii++){
						if((elementos[ii].tagName=='INPUT')||(elementos[ii].tagName=='TEXTAREA')){
							titulo=elementos[ii].name;
							let tf=titulo.replaceAll("_"," ");
							if(((elementos[ii].tagName=='INPUT') && (elementos[ii].type!='checkbox') && (elementos[ii].type!='radio')) || (elementos[ii].tagName=='TEXTAREA')){
								valor[0][titulo]=elementos[ii].value;
								if($(elementos[ii]).hasClass("numeros") && valor[0][titulo]!=""){
									valor[0][titulo]=numero.formatoBd(valor[0][titulo]);
								}
							}
							if(((elementos[ii].type=='checkbox') ||(elementos[ii].type=='radio'))&&($(elementos[ii]).prop("checked")))
							{
								if(valor[0][titulo]!=undefined)
								{
									valor[0][titulo]=valor[0][titulo]+$(elementos[ii]).val()+":::";
								}
								else
								{
									valor[0][titulo]=$(elementos[ii]).val()+":::";
								}
							}
							if(valor[0][titulo]=='' && req=="si"){valor[1]=valor[1]+`<br/>${++nf})${tf}`;}
						}
						if(elementos[ii].tagName=='SELECT')
						{
							titulo=elementos[ii].name;
							let tf=titulo.replaceAll("_"," ");
							valor[0][titulo]=$(elementos[ii]).val();
						}
						if(elementos[ii].tagName=='img')
						{
							titulo=`imagen_${elementos[ii].id}`;
							valor[0][titulo]=elementos[ii].src;
						}
					}
				}
			}
		}
		return valor;
	}
	mensajeFaltantes(faltantes){
		if (faltantes!=""){
			this.mensaje(`debe completar los siguientes campos: ${faltantes}`, `observacion`);
			throw 'elementos vacios';
		}
	}
	identificar(){
		$.ajax({
			type: `POST`,
			url: `controlador/Usuario_ctr.php`,
			data:{info:data[0]},
			cache: false,
			dataType: `json`,
		})
		.done(function(res){
			$("#iden").html(`${res[1]} ${res[2]}<ul><li onclick='barra=new BarraMenu; barra.volverMenu();'>MENU</li><li onclick='mensajes()'>MENSAJERIA</li><li onclick='datos_personales()'>INFORMACIÓN PERSONAL</li><li onclick='cerrar_cesion()'>CERRAR SESION</li></ul>`);
		})
		.fail(function(){falla_ajax(jqXHR,textStatus,errorThrown);});
	}
	visualizarRegistroCampos(data,campos){
		let lista=document.getElementsByClassName('campo'+campos);
		for(let i=0;i<lista.length;i++){
			let elementos=lista[i].childNodes;
			for(let ii=0;ii<elementos.length;ii++){
				for(let iii=0;iii<data.length;iii++){
					for (let d in data[iii]){
						if (elementos[ii].name==d){
							if((elementos[ii].tagName=='INPUT' && (elementos[ii].type!='checkbox') && (elementos[ii].type!='radio')) || (elementos[ii].tagName=='TEXTAREA') || (elementos[ii].tagName=='SELECT')){
								elementos[ii].value=data[iii][d];
								if($(elementos[ii]).hasClass("numeros")){
									elementos[ii].value=numero.invertir_signo_decimal(elementos[ii].value);
									elementos[ii].value=numero.separarMiles(elementos[ii].value, $(elementos[ii]).data("especificaciones").tipo);
								}
							}
							if((elementos[ii].tagName=='INPUT') && ((elementos[ii].type=='checkbox') || (elementos[ii].type=='radio'))){
								elementos[ii].prop({checked: 'checked'});
							}
						}
					}
				}
			}
		}
	}
	armar_link_paginacion(total,limite,clase){
		let num_bt_nav=Math.ceil(total/limite);
		let link="";
		if(num_bt_nav<6){
			for(let i=1;i<=num_bt_nav;i++){
				let ofs=limite*(i-1);
				link=`${link}<button class='link_nav ${clase}' data-offset='${ofs}' data-limite='${limite}'>${i}</button>`;
			}
		}
		else{
				link=`<button class='link_nav'><<</button><button class='link_nav'><</button><select  class='link_nav'>`;
				for(let i=1;i<=num_bt_nav;i++){link=link+"<option>"+i+"</option>";}
				link+="</select><button class='link_nav'>></button><button class='link_nav'>>></button>";
		}
		link=link+"Mostrar: <select class='link_nav' id='limi'>";
		for(let i=1;i<11;i++){
			let j=limite*i;
			link=link+"<option";
			if(limite==j){link=link+` selected`;}
			link=link+`>${j}</option>`;
		}
		link=link+"</select>";
		return link;
	}
	vista_tabla(opciones){
		let tabla=`<table class='tabla'><thead>`;
		opciones.titulos.forEach(element => {tabla+=`<th>${element}</th>`;});
		if(opciones.acciones){tabla+=`<th>acciones</th>`;}
		tabla+=`</thead><tbody>`;
		opciones.datos.forEach(function(info, indice){
			tabla+=`<tr>`;
			for (let index = 0; index < info.length; index++)
			{tabla+=`<td>${info[index]}</td>`; }
			if(opciones.acciones!="no"){
				if(opciones.acciones.tipo_acc[0]=='lista'){
					tabla+=`<td><select`;
					if(opciones.identificador!="no"){tabla+=` name='${info[opciones.identificador]}' class='${opciones.acciones.tipo_acc[1]}'`;}
					tabla+=`>`;
					opciones.acciones.registros.forEach(element => {tabla+=`<option>${element}</option>`;});
					tabla+=`</select></td>`;
				}
				if(opciones.acciones.tipo_acc[0]=='boton'){
					tabla+=`<td>`;
					opciones.acciones.registros.forEach(element => {
						tabla+=`<button`;
						if(opciones.identificador!="no"){
							tabla+=` name='${info[opciones.identificador]}' class='${opciones.acciones.tipo_acc[1]}'`;
						}
						tabla+=`>`;
						tabla+=`${element}</button>`;
					});
					tabla+=`</td>`;
				}
			}
			tabla+=`</tr>`;
		});
		let span=opciones.titulos.length;
		if(opciones.acciones){span++;}
		tabla+=`<tr><td colspan='${span}'>`;
		tabla+=formulario.armar_link_paginacion(opciones.paginacion[0],opciones.paginacion[1],opciones.paginacion[2]);
		tabla+=`</td></tr>`;
		tabla+=`</tbody></table>`;
		return tabla;
	}
}
class Modal{
	modal_abrir(vt){
		$("section,body").css({"overflow":"none !important"});
		$("#"+vt).css({"display":"inline-block"}).parent().append("<div class='cortina-modal'></div>");
		$("header,footer").append("<div class='cortina-modal'></div>");
	}
	modal_cerrar(vt){
		$("section,body").css({"overflow":"auto !important"});
		$(".cortina-modal").remove();
		$("#"+vt).css({"display":"none"});
	}
	bar_visible(){$("#myProgress").css({"display":"inline-block"});}
	bar_invisible(){$("#myProgress").css({"display":"none"});}
	bar_avance(){
		let elem = document.getElementById("myBar");
		let width = 0;
		let id = setInterval(frame,30);
		function frame() {
			if (width >= 100) {clearInterval(id);}
			else{
				width++; 
				elem.style.width = width + '%'; 
			}
		}
	}
}
class Temporales{
	fechaModeloHaciaVista(fecha){
		let fdev=fecha.split("-").reverse().join("/");
		return fdev;
	}
	calcularEdad(fecha){
		let fn=fecha.split("/");
		let mto =new Date();
		let d= mto.getDate();
		let m= mto.getMonth()+1;
		let a= mto.getFullYear();
		let edad=a-fn[2];
		if(m<fn[1]){edad=edad-1;}
		if((m==fn[1])&&(d<fn[0])){edad=edad-1;}
		return edad;
	}
	relojDigital(){
		let momento =new Date();
		let ds= momento.getDay();
		let d="";
		if (ds==0){d="DOMINGO";}
		else if (ds==1){d="LUNES";}
		else if (ds==2){d="MARTES";}
		else if (ds==3){d="MIERCOLES";}
		else if (ds==4){d="JUEVES";}
		else if (ds==5){d="VIERNES";}
		else {d="SABADO";} 
		let dia 	= momento.getDate();
		let mes 	= momento.getMonth()+1;
		let ao 		= momento.getFullYear();
		let ho 		= momento.getHours();
		if(ho>12){ho=ho-12; var m="PM";}else{var m="AM"}
		let mi 		= momento.getMinutes();
		let sg 		= momento.getSeconds();
		if(dia<10){dia=`0${dia}`;}
		if(mes<10){mes=`0${mes}`;}
		if(mi<10){mi=`0${mi}`;}
		if(sg<10){sg=`0${sg}`;}
		if(ho<10){ho=`0${ho}`;}
		let fecha=`${d} ${dia}/${mes}/${ao} ${ho}:${mi}:${sg}:${m}`;
		$("#reloj").text(fecha);
	}
	fechaBd(fecha){
		var dia = fecha.split('/').reverse().join('-');
		return dia;
	}
}
class Numero{
	completarDecimales(cadena,especificaciones){
		let valor="";
		if(cadena!=""){
			let decimal=especificaciones.decimales;
			let numeros=new String(cadena);
			let texto=numeros.split(",");
			valor=texto[0];
			if(decimal=="s"){
				if(texto[1]!=undefined && texto[1].length>0){
					valor=valor+",";
					for(let i=0;i<texto[1].length;i++){
						let ii=i+1;
						if(texto[1].substring(i)>0){valor=valor+texto[1].substring(i,ii);}
						else{break;}
					}
				}
			}else{
				if(decimal>0){
					if(texto[1]!=undefined){
						if(texto[1].length<decimal){
							let dec=texto[1].length;
							for(let i=dec; i<decimal; i++){texto[1]=`${texto[1]}0`;}
						}
					}else{
						texto[1]="";
						for(let i=0; i<decimal; i++){texto[1]=`${texto[1]}0`;}
					}
					valor=valor+","+texto[1];
				}
			}
		}
		return valor;
	}
	separarMiles(cadena,tipo)
	{
		let texto=cadena.split(",");
		let unidades=0;
		let numero_debuelto='';
		let seq= texto[0].split("");
		let negativo="no";
		if(tipo=="auto" && seq[0]=="-"){seq.shift();negativo="si";}
		if(tipo=="negativo"){negativo="si";}
		seq=seq.reverse();
		let c_enteros=0
		for(let aa=0;aa<seq.length;aa++)
		{
			if(seq[aa]!="." && seq[aa]!="-")
			{
				unidades++;
				numero_debuelto=`${seq[aa]}${numero_debuelto}`;
				if(unidades==3 && seq[aa+1]!=undefined && seq[aa+1]!="-")
				{
					numero_debuelto=`.${numero_debuelto}`;
					unidades=0;
				}
			}
		}
		if(negativo=="si" && cadena!="" && cadena!=0)
		{
			numero_debuelto=`-${numero_debuelto}`;
		}
		if(numero_debuelto=="-" && tipo=='negativo')
		{
			numero_debuelto="";
		}
		if(texto[1]!=undefined)
		{
			numero_debuelto=`${numero_debuelto},${texto[1]}`;
		}
		return numero_debuelto;
	}
	enteroDecimal(cadena,enteros,decimales)
	{
		//esta funcion establece el largo maximo que puede tener un mumero tanto de enteros como de decimales
		if(cadena.indexOf('-')>-1)
		{
			enteros++;
		}
		let texto=cadena.split(",");
		let seq= this.formatoBd(texto[0]).substring(0,enteros);
		if(decimales!=undefined && texto[1]!=undefined)
		{
			seq=seq+","+this.formatoBd(texto[1]).substring(0,decimales);
		}
		return seq;
	}
	formatoBd(valor){
		let a=new String(valor);
		let t=a.split("");
		t=t.reverse();
		let nn="";
		for(let z=0;z<t.length;z++){
			if(t[z]=="."){t[z]="";}
			if(t[z]==","){t[z]=".";}
			nn=t[z]+nn;
		}
		return nn;
	}
	invertir_signo_decimal(valor){
		let a=new String(valor);
		let t=a.split("");
		t=t.reverse();
		let nn="";
		for(let z=0;z<t.length;z++){
			if(t[z]==","){t[z]=".";}
			if(t[z]=="."){t[z]=",";}
			nn=t[z]+nn;
		}
		return nn;
	}
	numeroLetra(valor){
		let unidad={}; 
		let decena={}; 
		let centena={}; 
		let resul={};
		let rp={};
		let ind;
		let tipo="positivo";
		function nl(uni,dec,cen,ite){
			if((ite==0)||(ite==1)||(ite==2))ind="uni";
			if((ite==3)||(ite==4)||(ite==5))ind="mil";
			if((ite==6)||(ite==7)||(ite==8))ind="mll";
			if((ite==9)||(ite==10)||(ite==11))ind="bll";
			if((ite==12)||(ite==13)||(ite==14))ind="tri";
			if((ite==15)||(ite==16)||(ite==17))ind="cua";
			if((ite==18)||(ite==19)||(ite==20))ind="qui";
			if((ite==21)||(ite==22)||(ite==23))ind="sex";
			if(dec==undefined){dec='';}
			if(cen==undefined){cen='';}
			if(uni==0){resul.ind="cero";}
			else if(uni==1){ind=="uni"?resul.ind="uno":resul.ind="un";}
			else if(uni==2){resul.ind="dos";}
			else if(uni==3){resul.ind="tres";}
			else if(uni==4){resul.ind="cuatro";}
			else if(uni==5){resul.ind="cinco";}
			else if(uni==6){resul.ind="seis";}
			else if(uni==7){resul.ind="siete";}
			else if(uni==8){resul.ind="ocho";}
			else if(uni==9){resul.ind="nueve";}
			if(dec==0 && uni==0){resul.ind="cero";}
			else if(dec==1){
				if(uni==0)resul.ind="diez";
				else if(uni==1)resul.ind="once";
				else if(uni==2)resul.ind="doce";
				else if(uni==3)resul.ind="trece";
				else if(uni==4)resul.ind="catorce";
				else if(uni==5)resul.ind="quince";
				else resul.ind=`dieci${resul.ind}`;
			}else if(dec==2){if(uni==0)resul.ind="veinte";else resul.ind=`veinti${resul.ind}`;
			}else if(dec==3){if(uni==0)resul.ind="treinta";else resul.ind=`treinta y ${resul.ind}`;
			}else if(dec==4){if(uni==0)resul.ind="cuarenta";else resul.ind=`cuarenta y ${resul.ind}`;
			}else if(dec==5){if(uni==0)resul.ind="cincuenta";else resul.ind=`cincuenta y ${resul.ind}`;
			}else if(dec==6){if(uni==0)resul.ind="sesenta";else resul.ind=`sesenta y ${resul.ind}`;
			}else if(dec==7){if(uni==0)resul.ind="setenta";else resul.ind=`setenta y ${resul.ind}`;
			}else if(dec==8){if(uni==0)resul.ind="ochenta";else resul.ind=`ochenta y ${resul.ind}`;
			}else if(dec==9){if(uni==0)resul.ind="noventa";else resul.ind=`noventa y ${resul.ind}`;}
			if(cen==0 && dec==0 && uni==0){resul.ind="";}
			else if(cen==1 && dec==0 && uni==0){resul.ind="cien";}
			else if(cen==1 && (dec!=0 || uni!=0)){resul.ind=`ciento ${resul.ind}`;}
			else if(cen==2 && dec==0 && uni==0){resul.ind="doscientos";}
			else if(cen==2 && (dec!=0 || uni!=0)){resul.ind=`doscientos ${resul.ind}`;}
			else if(cen==3 && dec==0 && uni==0){resul.ind="trescientos";}
			else if(cen==3 && (dec!=0 || uni!=0)){resul.ind=`trescientos ${resul.ind}`;}
			else if(cen==4 && dec==0 && uni==0){resul.ind="cuatrocientos";}
			else if(cen==4 && (dec!=0 || uni!=0)){resul.ind=`cuatrocientos ${resul.ind}`;}
			else if(cen==5 && dec==0 && uni==0){resul.ind="quinientos";}
			else if(cen==5 && (dec!=0 || uni!=0)){resul.ind=`quinientos ${resul.ind}`;}
			else if(cen==6 && dec==0 && uni==0){resul.ind="seiscientos";}
			else if(cen==6 && (dec!=0 || uni!=0)){resul.ind=`seiscientos ${resul.ind}`;}
			else if(cen==7 && dec==0 && uni==0){resul.ind="setecientos";}
			else if(cen==7 && (dec!=0 || uni!=0)){resul.ind=`setecientos ${resul.ind}`;}
			else if(cen==8 && dec==0 && uni==0){resul.ind="ochocientos";}
			else if(cen==8 && (dec!=0 || uni!=0)){resul.ind=`ochocientos ${resul.ind}`;}
			else if(cen==9 && dec==0 && uni==0){resul.ind="novecientos";}
			else if(cen==9 && (dec!=0 || uni!=0)){resul.ind=`novecientos ${resul.ind}`;}
			return resul.ind;
		}
		if(typeof(valor)!='string'){a=new String(valor);}
		let dato=valor.split(",");
		let seq= this.formatoBd(dato[0]).split("");
		if(seq[0]=="-"){tipo="negativo"; seq.shift();}
		for(let i=0; i<seq.length; i++){
			if(i==0){unidad.uni=seq[seq.length-(i+1)];if(seq.length==1)rp.uni=nl(unidad.uni,"","",i);}
			if(i==1){decena.uni=seq[seq.length-(i+1)];if(seq.length==2)rp.uni=nl(unidad.uni,decena.uni,"",i);}
			if(i==2){centena.uni=seq[seq.length-(i+1)];rp.uni=nl(unidad.uni,decena.uni,centena.uni,i);}
			if(i==3){unidad.mil=seq[seq.length-(i+1)];if(seq.length==4)rp.mil=nl(unidad.mil,"","",i);}
			if(i==4){decena.mil=seq[seq.length-(i+1)];if(seq.length==5)rp.mil=nl(unidad.mil,decena.mil,"",i);}
			if(i==5){centena.mil=seq[seq.length-(i+1)];rp.mil=nl(unidad.mil,decena.mil,centena.mil,i);}
			if(i==6){unidad.mll=seq[seq.length-(i+1)];if(seq.length==7)rp.mll=nl(unidad.mll,"","",i);}
			if(i==7){decena.mll=seq[seq.length-(i+1)];if(seq.length==8)rp.mll=nl(unidad.mll,decena.mll,"",i);}
			if(i==8){centena.mll=seq[seq.length-(i+1)];rp.mll=nl(unidad.mll,decena.mll,centena.mll,i);}
			if(i==9){unidad.bll=seq[seq.length-(i+1)];if(seq.length==10)rp.bll=nl(unidad.bll,"","",i);}
			if(i==10){decena.bll=seq[seq.length-(i+1)];if(seq.length==11)rp.bll=nl(unidad.bll,decena.bll,"",i);}
			if(i==11){centena.bll=seq[seq.length-(i+1)];rp.bll=nl(unidad.bll,decena.bll,centena.bll,i);}
			if(i==12){unidad.tri=seq[seq.length-(i+1)];if(seq.length==13)rp.tri=nl(unidad.tri,"","",i);}
			if(i==13){decena.tri=seq[seq.length-(i+1)];if(seq.length==14)rp.tri=nl(unidad.tri,decena.tri,"",i);}
			if(i==14){centena.tri=seq[seq.length-(i+1)];rp.tri=nl(unidad.tri,decena.tri,centena.tri,i);}
			if(i==15){unidad.cua=seq[seq.length-(i+1)];if(seq.length==16)rp.cua=nl(unidad.cua,"","",i);}
			if(i==16){decena.cua=seq[seq.length-(i+1)];if(seq.length==17)rp.cua=nl(unidad.cua,decena.cua,"",i);}
			if(i==17){centena.cua=seq[seq.length-(i+1)];rp.cua=nl(unidad.cua,decena.cua,centena.cua,i);}
			if(i==18){unidad.qui=seq[seq.length-(i+1)];if(seq.length==19)rp.qui=nl(unidad.qui,"","",i);}
			if(i==19){decena.qui=seq[seq.length-(i+1)];if(seq.length==20)rp.qui=nl(unidad.qui,decena.qui,"",i);}
			if(i==20){centena.qui=seq[seq.length-(i+1)];rp.qui=nl(unidad.qui,decena.qui,centena.qui,i);}
			if(i==21){unidad.sex=seq[seq.length-(i+1)];if(seq.length==22)rp.sex=nl(unidad.sex,"","",i);}
			if(i==22){decena.sex=seq[seq.length-(i+1)];if(seq.length==23)rp.sex=nl(unidad.sex,decena.sex,"",i);}
			if(i==23){centena.sex=seq[seq.length-(i+1)];rp.sex=nl(unidad.sex,decena.sex,centena.sex,i);}
		}
		rp.respuesta=`${rp.uni}`;
		if(rp.mil!=undefined){
			if(rp.mil=='un'){rp.mil="mil"}
			if(rp.mil!="mil" && rp.mil!=""){rp.mil=`${rp.mil} mil`};
			rp.respuesta=`${rp.mil} ${rp.respuesta}`;}
		if(rp.mll!=undefined){
			if(rp.mll=='un'){rp.mll=`${rp.mll} millon`;}
			else{rp.mll=`${rp.mll} millones`;}
			if(rp.mll=='millon' || rp.mll==' millones'){rp.mll='';}
			rp.respuesta=`${rp.mll} ${rp.respuesta}`;}
		if(rp.bll!=undefined){
			if(rp.bll=='un'){rp.bll=`${rp.bll} billon`;}
			else{rp.bll=`${rp.bll} billones`;}
			if(rp.bll=='billon' || rp.bll==' billones'){rp.bll='';}
			rp.respuesta=`${rp.bll} ${rp.respuesta}`;}
		if(rp.tri!=undefined){
			if(rp.tri=='un'){rp.tri=`${rp.tri} trillon`;}
			else{rp.tri=`${rp.tri} trillones`;}
			if(rp.tri=='trillon' || rp.tri==' trillones'){rp.tri='';}
			rp.respuesta=`${rp.tri} ${rp.respuesta}`;}
		if(rp.cua!=undefined){
			if(rp.cua=='un'){rp.cua=`${rp.cua} cuatrillon`;}
			else{rp.cua=`${rp.cua} cuatrillones`;}
			if(rp.cua=='cuatrillon' || rp.cua==' cuatrillones'){rp.cua='';}
			rp.respuesta=`${rp.cua} ${rp.respuesta}`;}
		if(rp.qui!=undefined){
			if(rp.qui=='un'){rp.qui=`${rp.qui} quintillon`;}
			else{rp.qui=`${rp.qui} quintillones`;}
			if(rp.qui=='quintillon' || rp.qui==' quintillones'){rp.qui='';}
			rp.respuesta=`${rp.qui} ${rp.respuesta}`;}
		if(rp.sex!=undefined){
			if(rp.sex=='un'){rp.sex=`${rp.sex} sextillon`;}
			else{rp.sex=`${rp.sex} sextillones`;}
			if(rp.sex=='sextillon' || rp.sex==' sextillones'){rp.sex='';}
			rp.respuesta=`${rp.sex} ${rp.respuesta}`;}
		if (tipo=="negativo"){rp.respuesta=`menos ${rp.respuesta}`;}
		if (rp.respuesta=='undefined')rp.respuesta="";
		return rp.respuesta;
	}
}
class BarraMenu{
	volverMenu(){
		data[0]["accion"]='llamar_menu';
		$.ajax({
			type: "POST",
			url: "controlador/Usuario_ctr.php",
			data: {info:data[0]},
		}).done(function(res){$("body").html(res);})
	}
	medirMenu=()=>{
		let lista=document.getElementsByClassName('cont_menu');
		for(let i=0;i<lista.length;i++){
			let altura=0;
			let elementos=lista[i].children;
			for(let ii=0;ii<elementos.length; ii++){
				if($(elementos[ii]).height()>altura){altura=$(elementos[ii]).height();}
				$($(elementos[ii]).children("ul")).css({"display":"none"});
			}
			let h=(altura+30)+"px";
			$(lista[i]).css({"height":h,"overflow":"hidden"});
		}
	}
}
class Letras{
	LetraCapital(e){
		let a=e.value.split("");
		let t="";
		for(let i=0;i<a.length;i++){
			if((i==0)||(a[i-1]==" ")){t+=(a[i]).toUpperCase();}
			else{t+=(a[i]).toLowerCase();}
		}
		e.value=t;
	}
	minusculas(e){
		let a=e.value.split("");
		let t="";
		for(let i=0;i<a.length;i++){t+=(a[i]).toLowerCase();}
		e.value=t;
	}
	mayusculas(e){
		let a=e.value.split("");
		let t="";
		for(let i=0;i<a.length;i++){t+=(a[i]).toUpperCase();}
		e.value=t;
	}
}
class Validacion{
	formatoEmail(a){
		if(a.value.length>0){
			c=0; b=a.value.split("");
			for(let i=0;i<b.length;i++){if(b[i]=="@"){c++;}}
			if((b[b.length-3]==".")||(b[b.length-4]==".")){c++;}
			if(c!=2){
				alert("DEBE INGRESAR UN CORREO ELÉCTRONICO VALIDO");
				a.focus();
				throw'';
			}
		}
	}
	soloNumero(ev,t)//funcion que valida ingresar numeros y la coma de separacion decimal en los campos de ingreso de texto
	{
		let decimales=0;
		if($(t).data('especificaciones').decimales)
		{
			decimales=$(t).data('especificaciones').decimales;
		}
		if((ev.keyCode < 44 || ev.keyCode > 57)||(ev.keyCode==45 && t.value.length>0)||(ev.keyCode==44 && (decimales==undefined || decimales == 0))){return false;}
	}
	SoloLetra(e){
		let key = e.keyCode || e.which;
		if((key!=32)&&(key<65 || key>90)&&(key<97 || key>122)&&(key!=209)&&(key!=241)&&(key!=225)&&(key!=223)&&(key!=237)&&(key!=243)&&(key!=250)&&(key!=193)&&(key!=201)&&(key!=205)&&(key!=211)&&(key!=218)&&(key!=46)&&(key!=44))
		{return false;}
	}
	enterosCompletos(campo){
		let enteros=$(campo).data('especificaciones').enteros;
		let numeros=new String(campo.value);
		let texto=numeros.split(",");
		if(texto!=""){
			texto[0]=this.formatoBd(texto[0]);
			if(texto[0].length<enteros){
				campo.focus();
				formulario.mensaje(`debe completar los ${enteros} digitos de el campo:${campo.name}`,"observacion");
				throw'';
			}
		}
	}
}
class Ecepciones{
	falla_ajax(jq,text,error){
		if (jq.status === 0){alert('No conecta revisar la red, cortafuego antivirus');}
		else if (jq.status == 404){alert('controlador no encontrado');}
		else if (jq.status == 500) {alert('ERROR INTERNO 500');} 
		else if (text == 'parsererror'){alert('FALLÓ FORMATO JSON (RESPUESTA)');}
		else if (text == 'timeout') {alert('TIEMPO EXPIRADO');}
		else if (text == 'abort') {alert('AJAX ABORTADA');}
		else {alert(jq.responseText);}
	}
	fin(){
		throw'FIN DE EJECUCION';
	}
}
class Media{
	vdo(pantalla){
		navigator.mediaDevices.getUserMedia({audio:true, video:true}).then((vi)=>{
			let vid=document.getElementById(pantalla);
			vid.srcObject=vi;
		}).catch((e)=>Formulario.mensaje(e,'observacion'));
	}
	cam(pantalla){
		navigator.mediaDevices.getUserMedia({audio:false, video:{width: 400, height: 400}}).then((vi)=>{
			let camara=document.getElementById(pantalla);
			camara.srcObject=vi;
		}).catch((e)=>Formulario.mensaje(e,'observacion'));
	}
	capturarImg(lugar,fuente){
		let n=document.getElementById(lugar).childNodes.length
		let cv=`<canvas id='${lugar}_fotografia_${n}'></canvas>`
		$(`#${lugar}`).append(cv);
		setTimeout(function(){const video = document.getElementById(fuente);
		var dest = document.getElementById(`${lugar}_fotografia_${n}`);
		dest=dest.getContext("2d");
		dest.drawImage(video, 0, 0, 20, 60);},0);
	}
	aud(pantalla){
		navigator.mediaDevices.getUserMedia({audio:true, video:false}).then((vi)=>{
			let audio=document.getElementById(pantalla);
			audio.srcObject=vi;
		}).catch((e)=>Formulario.mensaje(e,'observacion'));
	}
	previa_img (input,html,campo){
		if (input.files){
			let img='';
			for(let i=0; i<input.files.length;i++){
				img=`${img}<div class='columna5'><img id='${html}${i}' class='columna20 campo${campo}' src='${URL.createObjectURL(input.files[i])}'/><button onclick='media.eliminar_padre(this)' type="button" class='eliminar'></button></div>`;
			}
			$(`#${html}`).append(img);
		}
	}
	eliminar_padre(elemento){
		$(elemento).parent().remove();
	}
}*/
