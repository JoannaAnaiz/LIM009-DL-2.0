//Creando Eventos

const boxElement = document.getElementById('box');
const botonGeneroElement = document.getElementById('botonGenero');
const botonRolMagicElement = document.getElementById('botonRolMagic')
const botonCasasElement = document.getElementById('botonCasas')

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
      //  filtrarGenero();
      //  filtraCasa();
      //  filtraRol();
      })
}
fetchData();



