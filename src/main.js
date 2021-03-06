const boxElement = document.getElementById('box');
const botonGeneroElement = document.getElementById('botonGenero');
const botonRolMagicElement = document.getElementById('botonRolMagic');
const botonHouseElement = document.getElementById('botonHouse');
const botonAscElement = document.getElementById('asc');
const botonDescElement = document.getElementById('desc');

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
    string += `<div>
                  <div class="card">
                    <img src=${data[i].image} class = "imagenRedonda" />
                    <strong><center>  ${data[i].actor}</strong></center>
                    <strong><center> ${data[i].house}</strong></center>
                    <p> Species: ${data[i].species}</p>
                    <p> Rol : ${data[i].rol}</p>
                    <p> Year : ${data[i].year}</p>
                    <p> Name Character: ${data[i].name} </p>
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

botonAscElement.addEventListener("click", () => {
  const ascendente = sortAge(houseMagic);
  drawData(ascendente);
});

botonDescElement.addEventListener("click", () => {
  const descendente = sortAge(houseMagic);
  drawData(descendente.reverse());
});


