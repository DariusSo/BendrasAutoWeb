function registruotis(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    try{
      (async () => {
        const rawResponse = await fetch('http://127.0.0.1:8080/addVartotojas', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password : password
            })
            
        });
        const content = await rawResponse.text();
        if(content == "Visi laukeliai yra privalomi."){
            alert(content);
        }else{
            alert(content);
        }
        
      })();
    }catch(err){
        console.error(err);
    }
    window.location.href = "./prisijungti.html"
}