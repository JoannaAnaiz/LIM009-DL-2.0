/* Manejo del DOM */

const boxElement = document.getElementById('box');

function obtener(){
    fetch('data/potter.json')
    .then( res => res.json())
    .then(data => verData(data))
   
    const verData = (data) => {
      let string = '';
      for (let i = 0; i < data.length; i++) {
        string += `<div class="card">
                    <div>
                      <img src=${data[i].image} alt=${data[i].name}/>
                      <h2> Name actor: ${data[i].actor}</h2>
                      <h3> Name character: ${data[i].name} </h3>
                      <h4> House: ${data[i].house}</h4>
                      <h4> Species: ${data[i].species}</p> 
                                         
                    </div> 
                  </div>`
       };
      
    return boxElement.innerHTML = string;
  } 
}
obtener();