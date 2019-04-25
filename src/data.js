
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

const filtraGenero = (data,gender)=>{
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

const filtraRolStudent = (data)=>{
let arrayStudent = [];
for(let i = 0; i<data.length; i++){
  if(data[i].hogwartsStudent===true){
    arrayStudent.push(data[i]);
  }
}
return(arrayStudent);
};

const filtraRolstaff = (data)=>{
  let arrayStaff = [];
  for(let i = 0; i<data.length; i++){
    if(data[i].hogwartsStaff===true){
      arrayStaff.push(data[i]);
    }
  }
  return(arrayStaff);
  }
  

  

window.magic ={
  filtraGenero,
  filtraCasa,
  filtraRolStudent,
  filtraRolstaff

  


}
