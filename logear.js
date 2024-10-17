function loguear(){
    let user = document.getElementById("usuario").value; 
    let pass= document.getElementById("clave").value; 
    if(user == "Elar" && pass=="1234"){
        window.location= "bienvenida1.html";
    }else{
        alert("NO PODEMOS ACCEDER A TU CUENTA");
    }
}