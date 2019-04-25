
// const showData = (data) =>{
//     let newData = []
//     for(let i=0; i<data.length; i++){
//         newData.push({image : data[i].image ,
//                       actor :data[i].actor,
//                       name:data[i].name,
//                       house :data[i].house ,
//                       species:data[i].species, 
//                       gender: data[i].gender})  
//                       }
//     return newData;
// }



//Filtrando Gender

const filtrarGenero = (data,gender)=>{
let arrayFiltra = [];
for(let i= 0; i<data.length; i++){
if(data[i].gender===gender){
  arrayFiltra.push(data[i]);
}
}
return(arrayFiltra);
}

const filtraCasa = (data,house)=>{
let arrayCasa = [];
for(let i= 0; i<data.length;i++){
if(data[i].house===house){
  arrayCasa.push(data[i]);
}
}
return(arrayCasa);
}

  

  
//   const filtraRol = ()=>{
//     let arrayRol = []
//     for(let i= 0; i<potter.length; i++){
//       arrayRol.push(potter[i].hogwartsStudent)
//     }
//     return(arrayRol);
//   }
  

window.magic ={
  filtrarGenero,
  filtraCasa
  

// //filtrarGenero,
// filtraCasa,
// filtraRol
}
