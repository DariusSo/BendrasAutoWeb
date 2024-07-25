async function fetchCars() {
    try {
        const response = await fetch('http://127.0.0.1:8080/getCar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    
        const cars = await response.json();
        
        if(!Object.keys(cars).length){
          console.log("no data found");
      }else{
          displayCars(cars);
        }
        
    } catch (error) {
      console.log(error);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    fetchCars();
});
function displayCars(cars) {
    const kortele = document.getElementById('korteles');
    kortele.innerHTML = '';
    cars.forEach(car => {
        var darVienasDiv = document.createElement('div');
        darVienasDiv.innerHTML = showCardModifyUpdate(car);
        kortele.append(darVienasDiv);
        
    });
}
function showCardModifyUpdate(car){
    localStorage.setItem('car', car.pavadinimas);
    var pavadinimas = "'" + car.pavadinimas + "'";
    return '<section id="kortele" style="background-color: #ffffff; width: 300px; padding: 0px; float: left;">' +
        '<div class="container py-5">' +
          '<div class="row justify-content-center">' +
            '<div>' +
              '<div class="card text-black">' +
                '<i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>'  +
                '<img src="data:image/png;base64,' + car.nuotrauka + '"' +
                  'class="card-img-top" alt="Apple Computer" />' +
                '<div class="card-body">' +
                  '<div class="text-center">' +
                    '<h5 class="card-title">' + car.pavadinimas + '</h5>' +
                  '<div class="d-flex justify-content-between total font-weight-bold mt-4">' +
                    '<span>Kaina</span><span>' + car.kaina + '€</span><br>' +
                  '</div>' +
                  '<button type="button" onClick="">Daugiau informacijos</button>' +
                  '<button type="button" name="carModifyButton" id="modify' + car.id + '" onClick="openForm('+car.id+');" style="background-color: #72bcd4";">Keisti</button>' +
                  '<button type="button" style="background-color: #FF5B61" onClick="deleteCar('+car.id+'); fetchCars();">Istrinti</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';            
}
async function openForm(id) {
    
    
    var fetchedCar = await getCarById(id);
    document.getElementById("hiddenId").value = fetchedCar.id;
    document.getElementById("mPavadinimas").value = fetchedCar.pavadinimas;
    document.getElementById("mMarke").value = fetchedCar.marke;
    document.getElementById("mModelis").value = fetchedCar.modelis;
    document.getElementById("mMetai").value = fetchedCar.metai;
    document.getElementById("mKaina").value = fetchedCar.kaina;
    document.getElementById("mRida").value = fetchedCar.rida;
    document.getElementById("mAprasymas").value = fetchedCar.aprasymas;
    document.getElementById("modifyImage").src = "data:image/png;base64," + fetchedCar.nuotrauka;
    document.getElementById("modifyImage").dataset.base64 = fetchedCar.nuotrauka;

    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  async function getCarById(id) {
    try {
        const response = await fetch('http://127.0.0.1:8080/getCarById?id=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    
        const carById = await response.json();
        return carById;
        
    } catch (error) {
      console.log(error);
    }
}
function readFileModify() {
  
  if (!this.files || !this.files[0]) return;
    
  const FR = new FileReader();
    
  FR.addEventListener("load", function(evt) {
    document.querySelector("#modifyImage").src         = evt.target.result;
    document.getElementById("modifyImage").dataset.base64 = fotoTo64(evt.target.result)
    
  }); 
    
  FR.readAsDataURL(this.files[0]);
  
  
}
document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelector("#mNuotrauka").addEventListener("change", readFileModify);
});

function modifyCar(){
  var mId = document.getElementById("hiddenId").value;
  var mPavadinimas = document.getElementById("mPavadinimas").value;
    var mMarke = document.getElementById("mMarke").value;
    var mModelis = document.getElementById("mModelis").value;
    var mMetai = document.getElementById("mMetai").value;
    var mKaina = document.getElementById("mKaina").value;
    var mRida = document.getElementById("mRida").value;
    var mAprasymas = document.getElementById("mAprasymas").value;
    var foto = document.getElementById("modifyImage").dataset.base64;
  try{
    (async () => {
      const rawResponse = await fetch('http://127.0.0.1:8080/modifyCar', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id : mId,
          pavadinimas: mPavadinimas,
          marke: mMarke,
          modelis: mModelis,
          metai: mMetai,
          rida: mRida,
          kaina: mKaina,
          aprasymas: mAprasymas,
          nuotrauka: foto
          })
          
      });
      fetchCars();
    })();
  }catch(err){
      console.error(err);
  }
  alert("Automobilio duomenys sekmingai pakeisti")
  window.location.reload();
  
}

function fotoTo64(foto){

  var fotoTo64 = ""
  for(let i = 23; i < foto.length; i++){
    
    var fotoTo64 = fotoTo64 + foto[i];
  }
  return fotoTo64;
}
async function deleteCar(id){
  try{
    (async () => {
      const rawResponse = await fetch('http://127.0.0.1:8080/deleteCarById?id=' + id, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        });
        fetchCars();
    })();
  }catch(err){
      console.error(err);
  }
}

function formaPridetiNaujaAuto(){
  var btn = document.getElementById("pridetiFormaContainer");
  if(btn.style.display == "block"){
    btn.style.display = "none";
    document.getElementById("pridetiForma").style.borderWidth = "0px";
  }else{
    btn.style.display = "block";
    document.getElementById("pridetiForma").style.borderWidth = "3px";
  }
}
function formaKeistiVartotoja(){
  var btn = document.getElementById("pridetiFormaContainer1");
  var token = getCookie("privilegijos");
  if(btn.style.display == "block"){
    btn.style.display = "none";
    document.getElementById("pridetiForma1").style.borderWidth = "0px";
  }else{
    getUserData(token)
    btn.style.display = "block";
    document.getElementById("pridetiForma1").style.borderWidth = "3px";
  }
}
function modifyUser(){
  
}
async function getUserData(token){
  try {
    const response = await fetch('http://127.0.0.1:8080/getVartotojas?token=' + token, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });

    const user = await response.json();
    
    if(!Object.keys(user).length){
      console.log("no data found");
  }else{
      var pastas = document.getElementById("elPastas");
      var vardas5 = document.getElementById("vardas")
      vardas5.value = user.name;
      pastas.value = user.email;
      document.getElementById("hiddenUserId").value = user.id;
    }
    
} catch (error) {
  console.log(error)
}
}
async function modifyUser(){
  var userVardas = document.getElementById("vardas").value;
  var userEmail = document.getElementById("elPastas").value;
  var userPassword = document.getElementById("slaptazodis").value;
  var userId = document.getElementById("hiddenUserId").value;
  try{
    (async () => {
      const rawResponse = await fetch('http://127.0.0.1:8080/modifyVartotojas', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id : parseInt(userId),
          name: userVardas,
          email: userEmail,
          password: userPassword
          })
          
      });
    })();
  }catch(err){
      console.error(err);
  }
  window.location.reload();
  
}



