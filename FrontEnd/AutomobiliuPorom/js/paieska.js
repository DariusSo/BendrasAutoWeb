function displayMarke(markes) {
    const selectMarke = document.getElementById('selectMarke');
    selectMarke.innerHTML = ''; // Clear existing ticket entries
    var p = document.createElement("option")
    selectMarke.appendChild(p)
    markes.forEach(marke => {
        var option = document.createElement('option')
        option.innerHTML = marke
        //option.onclick = fetchModelis(option.innerHTML);
        selectMarke.appendChild(option)
    });
}
async function fetchMarke() {
    try {
        const response = await fetch('http://127.0.0.1:8080/getMarke', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    
        const cars = await response.json();
        console.log(cars.status)
        if(!Object.keys(cars).length){
          console.log("no data found");
      }else{
          displayMarke(cars);
        }
        
    } catch (error) {
      console.log(error)
    }
}
document.addEventListener('DOMContentLoaded', function () {
    fetchMarke();
});


  function displayModelis(modeliai) {
    const selectMarke = document.getElementById('selectModelis');
    selectModelis.innerHTML = ''; // Clear existing ticket entries
    var p1 = document.createElement("option")
    selectMarke.append(p1)
    modeliai.forEach(modelis => {
        var option = document.createElement('option')
        option.innerHTML = modelis
        selectMarke.appendChild(option)
    });
}
async function fetchModelis(marke) {
    try {
        const response = await fetch('http://127.0.0.1:8080/getModelis?marke=' + marke, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    
        const models = await response.json();
        console.log(models.status)
        if(!Object.keys(models).length){
          console.log("no data found");
          var optiondelete = document.getElementById("selectModelis")
          optiondelete.innerHTML = ""
      }else{
          displayModelis(models);
        }
        
    } catch (error) {
      console.log(error)
    }
}
document.addEventListener('DOMContentLoaded', function () {
    fetchMarke();
    //fetchModelis();
  });
  async function fetchSearchList() {
    try {
        var selectoMarke = document.getElementById("selectMarke").value;
        var selectoModelis = document.getElementById("selectModelis").value;
        var selectoKainaNuo = document.getElementById("selectKainaNuo").value;
        var selectoKainaIki = document.getElementById("selectKainaIki").value;
        var selectoMetaiNuo = document.getElementById("selectMetaiNuo").value;
        var selectoMetaiIki = document.getElementById("selectMetaiIki").value;
        var selectoRidaNuo = document.getElementById("selectRidaNuo").value;
        var selectoRidaIki = document.getElementById("selectRidaIki").value;
        

        const response = await fetch('http://127.0.0.1:8080/paieska?marke=' + selectoMarke + '&modelis='+ selectoModelis +
            '&kainaNuo=' +parseInt(selectoKainaNuo) + '&kainaIki=' + parseInt(selectoKainaIki) +
            '&metaiNuo=' +parseInt(selectoMetaiNuo) + '&metaiIki=' + parseInt(selectoMetaiIki) +
            '&ridaNuo=' +parseInt(selectoRidaNuo) + '&ridaIki=' + parseInt(selectoRidaIki), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    
        const cars = await response.json();
        
        if(!Object.keys(cars).length){
          console.log("no data found");
          document.getElementById('korteles').innerHTML = '';
      }else{
          displayCars(cars);
        }
        
    } catch (error) {
      console.log(error)
    }
}
function displayCars(cars) {
    const kortele = document.getElementById('korteles');
    kortele.innerHTML = '';
    cars.forEach(car => {
        var darVienasDiv = document.createElement('div')
        darVienasDiv.innerHTML = showCard(car);
        kortele.append(darVienasDiv)
        
    });
}
function showCard(car){
    return '<section id="kortele" style="background-color: #ffffff; width: 300px; padding: 0px; float: left;">' +
        '<div class="container py-5">' +
          '<div class="row justify-content-center">' +
            '<div>' +
              '<div class="card text-black">' +
                '<i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>'  +
                '<img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"' +
                  'class="card-img-top" alt="Apple Computer" />' +
                '<div class="card-body">' +
                  '<div class="text-center">' +
                    '<h5 class="card-title">' + car.pavadinimas + '</h5>' +
                  '<div class="d-flex justify-content-between total font-weight-bold mt-4">' +
                    '<span>Kaina</span><span>' + car.kaina + '€</span><br>' +
                  '</div>' +
                  '<button type="button">Daugiau informacijos</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
                   
}

