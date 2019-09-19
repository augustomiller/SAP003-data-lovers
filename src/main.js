const data = RICKANDMORTY.results;
// const menuSelect = document.getElementById("menuSelect");
const subMenuSpecie = document.getElementById("subMenuSpecie");
const subMenuStatus = document.getElementById("subMenuStatus");
const subMenuGender = document.getElementById("subMenuGender");
const card = document.getElementById("cards");
const subMenuOrder = document.getElementById("subMenuOrder");

subMenuSpecie.addEventListener("change", () =>
  buildCard(app.filterData(data, subMenuSpecie.value, "species"))
);
subMenuStatus.addEventListener("change", () =>
  buildCard(app.filterData(data, subMenuStatus.value, "status"))
);
subMenuGender.addEventListener("change", () =>
  buildCard(app.filterData(data, subMenuGender.value, "gender"))
);
subMenuOrder.addEventListener("change", selectOrderAlpha);

window.onload = () => {
  getAll(data);
};
function getAll(data) {
  return buildCard(data);
}

function buildCard(app) {
  let layout = "";
  app.forEach(person => {
    layout += `<div class="card">
        <img src="${person.image}"/>
        <h3>${person.name}</h3>
        <p>Status: ${person.status} <br />
         Gender: ${person.gender} <br />
         Espécie: ${person.species} <br/>
         Origin: ${person.origin.name} <br />
         Location: ${person.location.name} </p>
        </div>`;
  });
  card.innerHTML = layout;
}

function selectOrderAlpha() {
  if (subMenuOrder.value === "A-Z") {
    data.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (subMenuOrder.value === "Z-A") {
    data.sort((a, b) => (a.name > b.name ? -1 : 1));
  } else {
    data.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  buildCard(data);
}

// function getSubMenu(data) {
//   const personType = [];
//   data.map(person =>
//     person.type.map(type => {
//       if (!personType.includes(type)) {
//         personType.push(type);
//       } else {
//         return false;
//       }
//     })
//   );

//   subMenu.innerHTML = "";
//   subMenu.innerHTML = `<option valeu="none">Selecionar Filtro</option>`;
//   subMenu.innerHTML += personType
//     .map(type => `<option valeu="${type}">${type}</option>`);
// }
