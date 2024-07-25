
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
document.addEventListener('DOMContentLoaded', function () {
    var prisijungtiMygtukas = document.getElementById("prisijungti")
    var registruotisMygtukas = document.getElementById("registruotis")
    if(getCookie("privilegijos") != null){
        prisijungtiMygtukas.innerHTML = "Paskyros valdymas";
        prisijungtiMygtukas.href = "./vartotojosPaskyra.html";
        registruotisMygtukas.innerHTML = "Atsijungti";
        registruotisMygtukas.href = "./prisijungti.html";
        
    }
    
});

function logout(){
    deleteCookie("privilegijos", "/", "127.0.0.1");
}
  function deleteCookie( name, path, domain ) {
    if( getCookie( name ) ) {
      document.cookie = name + "=" +
        ((path) ? ";path="+path:"")+
        ((domain)?";domain="+domain:"") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  }