const boxElement = document.getElementById('box');
const botonGeneroElement = document.getElementById('botonGenero');
const botonRolMagicElement = document.getElementById('botonRolMagic');
const botonHouseElement = document.getElementById('botonHouse');

let potter;
let houseMagic; 
const fetchData = () => {
  fetch('data/potter.json')
    .then(res => res.json())
    .then(data => {
      potter = data; 
      houseMagic = showData(potter);
      drawData(houseMagic);
    });
};
fetchData();

const drawData = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `<div class="col-4 col-mobile-6">
                  <div class="card">
                    <img src=${data[i].image} class = "imagenRedonda" />
                    <p class="center">  ${data[i].actor}</p>
                    <p class="center"> ${data[i].house}</p>
                    <p> Species: ${data[i].species}</p>
                    <p> rol : ${data[i].rol}</p>
                    <p> year : ${data[i].year}</p>
                    <p> Name character: ${data[i].name} </p>
                   </div> 
                </div>`;
  }
  return boxElement.innerHTML = string;
};

botonGeneroElement.addEventListener("change", () => {
  let condGenero = botonGeneroElement.value;
  drawData(filtraGenero(houseMagic, condGenero));
});

botonHouseElement.addEventListener("change", () => {
  let condCasa = botonHouseElement.value;
  drawData(filtraCasa(houseMagic, condCasa));
});

botonRolMagicElement.addEventListener("change", () => {
  let condition = botonRolMagicElement.value;
  drawData(filtraRol(houseMagic, condition));
});

 