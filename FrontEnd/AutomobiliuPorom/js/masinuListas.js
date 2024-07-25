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
      console.log(error)
    }
}
document.addEventListener('DOMContentLoaded', function () {
    //fetchMarke();
    //fetchModelis();
    fetchCars();
});
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
    localStorage.setItem('car', car.pavadinimas)
    return '<section id="kortele" style="background-color: #ffffff; width: 300px; padding: 0px; float: left;">' +
        '<div class="container py-5">' +
          '<div class="row justify-content-center">' +
            '<div>' +
              '<div class="card text-black">' +
                
                '<img src="data:image/png;base64,' + car.nuotrauka + '"' +
                  '/>' +
                '<div class="card-body">' +
                  '<div class="text-center">' +
                    '<h5 class="card-title">' + car.pavadinimas + '</h5>' +
                  '<div class="d-flex justify-content-between total font-weight-bold mt-4">' +
                    '<span>Kaina</span><span>' + car.kaina + '€</span><br>' +
                  '</div>' +
                  '<button type="button" onClick="daugiauinfo(' + car.id + ')">Daugiau informacijos</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
                   
}
