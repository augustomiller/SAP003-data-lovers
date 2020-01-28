const data = RICKANDMORTY.results;
const menuSpecie = document.getElementById("menuSpecie");
const menuStatus = document.getElementById("menuStatus");
const menuGender = document.getElementById("menuGender");
const card = document.getElementById("cards");
const menuOrder = document.getElementById("menuOrder");
const menuGraphic = document.getElementById("Statistics"); //grafico
const graphic = document.getElementById("graphic");
const statistic = document.getElementById("percentage");

menuSpecie.addEventListener("change", () => {
  buildCard(app.filterData(data, menuSpecie.value, "species"));
  porcentagem(menuSpecie.value, "species");
});

menuStatus.addEventListener("change", () => {
  buildCard(app.filterData(data, menuStatus.value, "status"));
  porcentagem(menuStatus.value, "status");
});
menuGender.addEventListener("change", () => {
  buildCard(app.filterData(data, menuGender.value, "gender"));
  porcentagem(menuGender.value, "gender");
});
menuOrder.addEventListener("change", () => {
  buildCard(app.selectOrderAlpha(menuOrder.value, data));
  statistic.innerHTML = '';
});

menuGraphic.addEventListener("change", Graphic); //grafico

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
        <p>
          <p>Status: ${person.status} </p>
          <p>Gender: ${person.gender} </p>
          <p>Espécie: ${person.species} </p>
          <p>Origin: ${person.origin.name} </p>
          <p> Location: ${person.location.name}</p>
        </p>
        </div>`;
  });
  graphic.innerHTML = "";
  card.innerHTML = layout;
}

function porcentagem(atributo, atributoArray) {
  let total = data.length;
  let totalAtributo = app.filterData(data, atributo, atributoArray).length;
  let calculoPorcentagem = ((totalAtributo / total) * 100).toFixed(2);

  statistic.innerHTML = `<p> This species represents ${calculoPorcentagem}% of the characters in the cartoon.</p>`;
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(creatGraphic);

function Graphic() {
  if (menuGraphic.value === "male&Female") {
    creatGraphic("Female", "Male", "gender", "Grafico de Gênero dos personagens de Rick and Morty");
  }
  else if (menuGraphic.value === "human&Alien") {
    creatGraphic("Humano", "Alien", "species", "Grafico de Species dos personagens de Rick and Morty");
  }
  else if (menuGraphic.value === "alive&Dead") {
    creatGraphic("Alive", "Dead", "status", "Grafico de Status de vida dos personagens de Rick and Morty");
  }
}
function creatGraphic(valorAtributo1, valorAtributo2, atributo, tituloGrafico) {
  let dados = new google.visualization.DataTable();
  dados.addColumn("string", "Topping");
  dados.addColumn("number", "Quantidade");
  dados.addRows([
    [valorAtributo1, app.filterData(data, valorAtributo1, atributo).length],
    [valorAtributo2, app.filterData(data, valorAtributo2, atributo).length]
  ]);
  const options = {
    title: tituloGrafico,
    height: 400
  };
  const chart = new google.visualization.ColumnChart(graphic);
  chart.draw(dados, options);
  card.innerHTML = '';
  statistic.innerHTML = '';
}