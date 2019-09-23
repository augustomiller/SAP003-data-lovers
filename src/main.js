const data = RICKANDMORTY.results;
// const menuSelect = document.getElementById("menuSelect");
const menuSpecie = document.getElementById("menuSpecie");
const menuStatus = document.getElementById("menuStatus");
const menuGender = document.getElementById("menuGender");
const card = document.getElementById("cards");
const menuOrder = document.getElementById("menuOrder");

menuSpecie.addEventListener("change", () =>
  buildCard(app.filterData(data, menuSpecie.value, "species"))
);
menuStatus.addEventListener("change", () =>
  buildCard(app.filterData(data, menuStatus.value, "status"))
);
menuGender.addEventListener("change", () =>
  buildCard(app.filterData(data, menuGender.value, "gender"))
);
menuOrder.addEventListener("change", selectOrderAlpha);

window.onload = () => {
  getAll(data);
};

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
  if (menuOrder.value === "A-Z") {
    data.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (menuOrder.value === "Z-A") {
    data.sort((a, b) => (a.name > b.name ? -1 : 1));
  } else {
    data.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  buildCard(data);
}

