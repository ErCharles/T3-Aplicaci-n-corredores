function ValidateEmail(inputText){

var formatoemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.value.match(formatoemail)){
        return true;
    }

    else{
        alert("Formato de email incorrecto");
        document.email1.text1.focus();
        return false;
    }
}

function ValidateNombre() {
    var nombre = document.getElementById("nombre").value;

    if (nombre.length < 4) {
        alert("El nombre introeducido esta en formato incorrecto")
    }
}

function siono() {
        var si=document.createElement("input");
        si.type="number"
        si.id="kilometros";
        var campokm=document.getElementById("campokm");
        campokm.appendChild(si);
}

function MostrarBoton() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var kilometros =document.getElementById("kilometros").value;
    alert("Te llamas " + nombre + " , con email " + email +" y [has corrido carreras de " + kilometros + " km]")
}