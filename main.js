   const nombre;
    const apellido;
    const cp;
    const municipio;
    const errores=document.createElement();

function validarformulario() {

 
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    cp = document.getElementById('cp').value;

    if (nombre === "" || apellido === "" || cp === "" || municipio === "") {
        errores.textContent="Este campo es obligatorio";
        document.body.appendChild(errores);
        return false
    }else{
        obtenerDatos();
    }
}

function obtenerDatos(){
 nombre = document.getElementById("nombre").value;
 apellido = document.getElementById("apellido").value;
 fecha = document.getElementById("fecha").value;
 direccion = document.getElementById("direccion").value;
 cp = document.getElementById("cp").value;
 provincia = document.getElementById("provincia").value;
 municipio = document.getElementById("municipio").value;

    var usuario = [nombre, apellido, fecha, direccion, cp, provincia,municipio];
    return usuario;
}

function cargarDatos(){

    document.getElementById("nombre").innerHTML = usuario.nombre;
    document.getElementById("apellido").innerHTML = usuario.apellido;
    document.getElementById("fecha").innerHTML = usuario.fecha;
    document.getElementById("direccion").innerHTML = usuario.direccion;
    document.getElementById("cp").innerHTML = usuario.cp;
    document.getElementById("provincia").innerHTML = usuario.provincia;
    document.getElementById("municipio").innerHTML = usuario.municipio;


}