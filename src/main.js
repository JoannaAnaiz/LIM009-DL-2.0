//Creando Eventos

const boxElement = document.getElementById('box');
const botonGeneroElement = document.getElementById('botonGenero');
const botonRolMagicElement = document.getElementById('botonRolMagic')
const botonHouseElement = document.getElementById('botonHouse')

//Pintando la data
const potterData = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `<div>
                  <img src=${data[i].image} class = "imagenRedonda" />
                  <h2> Name actor: ${data[i].actor}</h2>
                  <h3> Name character: ${data[i].name} </h3>
                  <h4> House: ${data[i].house}</h4>
                  <h4> Species: ${data[i].species}</h4> 
                  <h4> Gender: ${data[i].gender}</h4>  
                  <h4> Year : ${data[i].yearOfBirth}</h4> 
                  <h4> Rol : ${data[i].hogwartsStudent}</h4>                                 
              </div>`
   }
  return boxElement.innerHTML = string;
};

//Llamando al JSON con Fetch
let potter; 
const  fetchData = () =>{
    fetch('data/potter.json')
    .then( res => res.json())
    .then( data =>{
       potter = data; 
      potterData(potter)
   /*    filtraGenero(potter)
       pintarGenero(potter);
       filtraCasa(potter);
       pintarCasa(potter);
       filtraRolStudent(potter);
       pintarStudent(potter);
       filtraRolstaff(potter);
       pintarStaff(potter); */

      })
}
fetchData();


botonGeneroElement.addEventListener("change", () => {
  let condGenero = botonGeneroElement.value;
  potterData(filtraGenero(potter, condGenero));
})


/*
const pintarGenero = (data) => {
  botonGeneroElement.addEventListener("change", () => {
    let condGenero = botonGeneroElement.value;
    potterData(filtraGenero(data, condGenero));
  })
}
*/

const pintarCasa  = (data) => {
  botonHouseElement.addEventListener("change",()=>{
    let condCasa = botonHouseElement.value;
    potterData(filtraCasa(data, condCasa));
  })
}

const pintarStudent = (data) =>{
  botonRolMagicElement.addEventListener("change",() => {
    let condStud = botonRolMagicElement.value;
    potterData(filtraRolStudent(data, condStud));
  })
}

const pintarStaff = (data) =>{
  botonRolMagicElement.addEventListener("change",() => {
    let condStaff = botonRolMagicElement.value;
    potterData(filtraRolstaff(data, condStaff));
  })
}