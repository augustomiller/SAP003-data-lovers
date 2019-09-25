const data = RICKANDMORTY.results;
// const menuSelect = document.getElementById("menuSelect");
const menuSpecie = document.getElementById("menuSpecie");
const menuStatus = document.getElementById("menuStatus");
const menuGender = document.getElementById("menuGender");
const card = document.getElementById("cards");
const menuOrder = document.getElementById("menuOrder");

menuSpecie.addEventListener("change", () =>{
  buildCard(app.filterData(data, menuSpecie.value, "species"))
  porcentagemEspecie (menuSpecie.value)
}
  );
menuStatus.addEventListener("change", () =>{
  buildCard(app.filterData(data, menuStatus.value, "status"))
  porcentagemStatus(menuStatus.value)
}
);
menuGender.addEventListener("change", () =>{
  buildCard(app.filterData(data, menuGender.value, "gender"))
porcentagemGenero(menuGender.value)
});
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

function porcentagemEspecie(specie){
let totalSpecie = (data.length)-64
let especie = app.filterData(data, specie, "species").length
let calculo = ((especie/totalSpecie)*100).toFixed(2);
document.getElementById("cards").innerHTML+=`<p> Essa especie representa</p>${calculo}% dos personagens do desenho`
}

function porcentagemGenero(gender){
  let totalGender = (data.length)-6
  let genero = app.filterData(data, gender , "gender").length
  let calculo = ((genero/totalGender)*100).toFixed(2);
  document.getElementById("cards").innerHTML+=`<p> Esse gênero representa</p>${calculo}% dos personagens do desenho`
}

function porcentagemStatus(status){
  let totalStatus = (data.length)
  let valorStatus = app.filterData(data, status, "status").length
  let calculo = ((valorStatus/totalStatus)*100).toFixed(2);
  document.getElementById("cards").innerHTML+=`${calculo}% dos personagens estão nesse status`
  
}

// function porcentagem(dados, diferenca, palavra){
//   let total = data.length - diferenca;
//   let valorElemento = app.filterData(data,dados,palavra).length
//   return ((valorElemento/total)*100).toFixed(2)
//   }
  