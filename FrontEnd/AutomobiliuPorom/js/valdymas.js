function pridetiAuto(){
    var pavadinimas = document.getElementById("pavadinimas").value
    var marke = document.getElementById("marke").value
    var modelis = document.getElementById("modelis").value
    var metai = document.getElementById("metai").value
    var kaina = document.getElementById("kaina").value
    var rida = document.getElementById("rida").value
    var aprasymas = document.getElementById("aprasymas").value
    var nuotrauka = document.getElementById("nuotrauka64").src;
    var n = ""
    for(let i = 23; i < nuotrauka.length; i++){
      n = n + nuotrauka[i]
    }
    
     
    
    try{
      (async () => {
        const rawResponse = await fetch('http://127.0.0.1:8080/addCar', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pavadinimas: pavadinimas,
            marke: marke,
            modelis : modelis,
            metai: metai,
            kaina: kaina,
            rida: rida,
            aprasymas: aprasymas,
            nuotrauka: n
            
            })
            
        });
        const content = await rawResponse.text();
        if(content == "Visi laukeliai yra privalomi."){
            alert(content);
        }else{
          alert("Automobilis sekmingai pridetas");
        }
        
      })();
    }catch(err){
        
    }
    
}
var p;
var canvas = document.createElement("canvas");
var img1=document.createElement("img"); 

function getBase64Image(){     
    p=document.getElementById("nuotrauka").value;
    img1.setAttribute('src', p); 
    canvas.width = img1.width; 
    canvas.height = img1.height; 
    var ctx = canvas.getContext("2d"); 
    ctx.drawImage(img1, 0, 0); 
    var dataURL = canvas.toDataURL("image/png");
    alert("from getbase64 function"+dataURL );    
    return dataURL;
}
function readFile() {
  
  if (!this.files || !this.files[0]) return;
    
  const FR = new FileReader();
    
  FR.addEventListener("load", function(evt) {
    document.querySelector("#nuotrauka64").src         = evt.target.result;
    
  }); 
    
  FR.readAsDataURL(this.files[0]);
  
}
document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelector("#inp").addEventListener("change", readFile);
});

function openForm(id, pavadinimas, marke, modelis, metai, kaina, rida, aprasymas, nuotrauka) {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("pv").value = pavadinimas;
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


 
