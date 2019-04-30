// const harryData = (data)=>{
//   let magicData = [];
//   for(let i= 0; i <data.length;i++){
//     magicData.push({image: data[i].image,
//                     name: data[i].name,
//                     species: data[i].species,
//                     actor : data[i].actor,
                   //  house: data[i].house,
                   //  year: data[i].dateOfBirth,
//                     gender: data[i].gender}) 
                                     
//                     
//   } 
//   return magicData;
// }

//Filtrando Gender


const filtraGenero = (data,gender)=>{
let arrayFiltra = [];
for(let i= 0; i<data.length; i++){
if(data[i].gender===gender){
  arrayFiltra.push(data[i]);
}
}
return arrayFiltra;
}

const filtraCasa = (data,house)=>{
let arrayCasa = [];
for(let i= 0; i<data.length;i++){
if(data[i].house===house){
  arrayCasa.push(data[i]);
}
}
return arrayCasa;
}

const filtraCondition = (data,rol)=>{
  let arrayCondition = [];
  for(let i=0; i<data.length;i++){
    if(data[i][rol]===true){
      arrayCondition.push(data[i]);
    }
  }
  return arrayCondition;
}


window.magic ={
  // harryData,
  filtraGenero,
  filtraCasa,
  filtraCondition  

}
