//Creando Eventos

const boxElement = document.getElementById('box');
const botonGeneroElement = document.getElementById('botonGenero');
const botonRolMagicElement = document.getElementById('botonRolMagic')
const botonHouseElement = document.getElementById('botonHouse')

//Llamando al JSON con Fetch
let potter;
let houseMagic; 
const  fetchData = () =>{
    fetch('data/potter.json')
    .then( res => res.json())
    .then( data =>{
       potter = data; 
       houseMagic = showData(potter);
       console.log(houseMagic)
       drawData(houseMagic)
        

      })
}
fetchData();


//Pintando la data
const drawData = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `<div>
                  <img src=${data[i].image} class = "imagenRedonda" />
                  <h2> Name actor: ${data[i].actor}</h2>
                  <h3> Name character: ${data[i].name} </h3>
                  <h4> House: ${data[i].house}</h4>
                  <h4> Species: ${data[i].species}</h4> 
                  <h4> Gender: ${data[i].gender}</h4>  
                  <h4> year : ${data[i].year}</h4> 
                  <h4> rol : ${data[i].rol}</h4>
                                                   
              </div>`
   }
  return boxElement.innerHTML = string;
};

botonGeneroElement.addEventListener("change", () => {
  let condGenero = botonGeneroElement.value;
  drawData(filtraGenero(houseMagic, condGenero));
})

 botonHouseElement.addEventListener("change",()=>{
    let condCasa = botonHouseElement.value;
    drawData(filtraCasa(houseMagic, condCasa));
  })

 botonRolMagicElement.addEventListener("change",()=>{
   let condition = botonRolMagicElement.value;
   drawData(filtraRol(houseMagic, condition));
   })

 