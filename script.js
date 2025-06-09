//detectar movil

cambiar("boton_info");

function cambiar(id){
    let cuerpo = document.getElementById("cuerpo");
    document.getElementsByClassName("boton_nav_actual")[0].classList.replace("boton_nav_actual","boton_nav");
    document.getElementById(id).classList.replace("boton_nav","boton_nav_actual");
    cuerpo.innerHTML = getCuerpo(id);
}

function getCuerpo(id){
    if(id=="boton_2d"){
        var folder = "imagenes/2D/";
        var resultado = [];
        $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    resultado.push("<img src='"+ folder + val +"'>");
                    //$("body").append( "<img src='"+ folder + val +"'>" );
                } 
            });
        }
    });
    alert(resultado);
    return resultado;
    }
    else if(id=="boton_3d"){

    }
    else if(id=="boton_reel"){

    }
    else{
        return `
            Hey there! I'm Mikel. A 2D and 3D animator from Barcelona, Spain. I've studied for 4 years at La Salle Animation & VFX.
            I've worked at Nomada Studio during 6 months, doing clean up of videogame 2D animations. I've also been doing art comissions for 6 years.
            I strive to keep growing in my animation journey, thank you for your time.
        `;
    }
}
