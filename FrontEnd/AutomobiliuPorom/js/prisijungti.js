function prisijungti(){
    var loginEmail = document.getElementById("email").value
    var loginPassword = document.getElementById("password").value
    try{
      (async () => {
        const rawResponse = await fetch('http://127.0.0.1:8080/getToken?' + new URLSearchParams({
            email : loginEmail,
            password : loginPassword
        }).toString(), 
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        const content = await rawResponse.text();
        if(content.length == 0){
          alert("Blogas el. pastas arba slaptazodis, bandykite dar karta.")
        }else{
          console.log(content)
          setCookie("privilegijos", content, 20)
          window.location.href = "./vartotojosPaskyra.html"
        }
      })();
    }catch(error){
        console.error(error);
        alert("Nepavyko, bandykite dar karta")
    }
}
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
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