const showData = (data) => {
  let newData = [];
  for (let i = 0; i < data.length;i++) {
    if (data[i].hogwartsStudent) {
      newData.push({image: data[i].image,
        name: data[i].name,
        species: data[i].species,
        actor: data[i].actor,
        house: data[i].house,
        gender: data[i].gender,
        rol: "Student",
        year: new Date().getFullYear() - data[i].yearOfBirth
      }); 
    } else if (data[i].hogwartsStaff) {
      newData.push({image: data[i].image,
        name: data[i].name,
        species: data[i].species,
        actor: data[i].actor,
        house: data[i].house,
        gender: data[i].gender,
        rol: "Staff",
        year: new Date().getFullYear() - data[i].yearOfBirth
      });
    } else newData.push({image: data[i].image,
      name: data[i].name,
      species: data[i].species,
      actor: data[i].actor,
      house: data[i].house,
      gender: data[i].gender,
      rol: "ninguno",
      year: new Date().getFullYear() - data[i].yearOfBirth
    });
  }  
  return newData;
};

const filtraGenero = (data, gender) => {
  let arrayFiltra = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].gender === gender) {
      arrayFiltra.push(data[i]);
    }
  }
  return arrayFiltra;
};

const filtraCasa = (data, house) => {
  let arrayCasa = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]. house === house) {
      arrayCasa.push(data[i]);
    }
  }
  return arrayCasa;
};

const filtraRol = (data, rol) => {
  let arrayCondition = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]. rol === rol) {
      arrayCondition.push(data[i]);
    }
  }
  return arrayCondition;
};


const sortAge = (data) => {
  let ageData = data.sort((a, b) => { 
    a=a.year;
    b=b.year;
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return ageData;
};




window.magic = {
  // hauseMagic,
  showData,
  filtraGenero,
  filtraCasa,
  filtraRol,
  sortAge
};
