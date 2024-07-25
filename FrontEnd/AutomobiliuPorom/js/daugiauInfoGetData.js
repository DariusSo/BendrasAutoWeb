document.addEventListener('DOMContentLoaded', function () {
    getCarDetailedInfo();
});
async function getCarDetailedInfo(){
    var car = await getCarById(localStorage.getItem("id"));
    document.getElementById("pavadinimas").innerHTML = car.pavadinimas;
    document.getElementById("marke").innerHTML = car.marke;
    document.getElementById("modelis").innerHTML = car.modelis;
    document.getElementById("metai").innerHTML = car.metai;
    document.getElementById("kaina").innerHTML = car.kaina + "€";
    document.getElementById("aprasymas").innerHTML = car.aprasymas;
    document.getElementById("nuotrauka").src = "data:image/png;base64," + car.nuotrauka;
    document.getElementById("rida").innerHTML = car.rida;
}