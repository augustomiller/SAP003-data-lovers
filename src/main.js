const data = RICKANDMORTY.results;
const menuSpecie = document.getElementById("menuSpecie");
const menuStatus = document.getElementById("menuStatus");
const menuGender = document.getElementById("menuGender");
const card = document.getElementById("cards");
const menuOrder = document.getElementById("menuOrder");
const valorStatistic = document.getElementById("Statistics"); //grafico
const graphic = document.getElementById("graphic");
const statistic = document.getElementById("percentage");

menuSpecie.addEventListener("change", () => {
  buildCard(app.filterData(data, menuSpecie.value, "species"));
  porcentagemEspecie(menuSpecie.value);
});

menuStatus.addEventListener("change", () => {
  buildCard(app.filterData(data, menuStatus.value, "status"));
  porcentagemStatus(menuStatus.value);
});
menuGender.addEventListener("change", () => {
  buildCard(app.filterData(data, menuGender.value, "gender"));
  console.log(menuGender.value)
  porcentagemGenero(menuGender.value);
});
menuOrder.addEventListener("change", () => {
  buildCard(app.selectOrderAlpha(menuOrder.value, data));
});

valorStatistic.addEventListener("change", grafico); //grafico

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
  graphic.innerHTML = "";
  card.innerHTML = layout;
}

function porcentagemEspecie(specie) {
  let totalSpecie = data.length;
  let especie = app.filterData(data, specie, "species").length;
  let calculo = ((especie / totalSpecie) * 100).toFixed(2);

  statistic.innerHTML = `<p> This species represents ${calculo}% of the characters in the cartoon.</p>`;
}

function porcentagemGenero(gender) {
  let totalGender = data.length;
  let genero = app.filterData(data, gender, "gender").length;
  let calculo = ((genero / totalGender) * 100).toFixed(2);

  statistic.innerHTML = `<p> This gender represents ${calculo}% of the characters in the cartoon.</p>`;
}

function porcentagemStatus(status) {
  let totalStatus = data.length;
  let valorStatus = app.filterData(data, status, "status").length;
  let calculo = ((valorStatus / totalStatus) * 100).toFixed(2);

  statistic.innerHTML = `<p> This status represents ${calculo}% of the characters in the cartoon.</p>`;
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(grafico);

function grafico() {
  if (valorStatistic.value === "male&Female") {
    let dados = new google.visualization.DataTable();
    dados.addColumn("string", "Topping");
    dados.addColumn("number", "Quantidade");
    dados.addRows([
      ["Female", app.filterData(data, "Female", "gender").length],
      ["Male", app.filterData(data, "Male", "gender").length]
    ]);
    let options = {
      title: "Grafico de Gênero dos personagens de Rick and Morty",
      height: 400
    };
    const chart = new google.visualization.ColumnChart(graphic);
    chart.draw(dados, options);
    card.innerHTML = "";
  } else if (valorStatistic.value === "human&Alien") {
    let dados = new google.visualization.DataTable();
    dados.addColumn("string", "Topping");
    dados.addColumn("number", "Quantidade");
    dados.addRows([
      ["Humano", app.filterData(data, "Human", "species").length],
      ["Alien", app.filterData(data, "Alien", "species").length]
    ]);
    let options = {
      title: "Grafico de Species dos personagens de Rick and Morty",
      height: 400
    };
    const chart = new google.visualization.ColumnChart(graphic);
    chart.draw(dados, options);
    card.innerHTML = "";
  }
  if (valorStatistic.value === "alive&Dead") {
    let dados = new google.visualization.DataTable();
    dados.addColumn("string", "Topping");
    dados.addColumn("number", "Quantidade");
    dados.addRows([
      ["Vivo", app.filterData(data, "Alive", "status").length],
      ["Morto", app.filterData(data, "Dead", "status").length]
    ]);
    let options = {
      title: "Grafico de Status de vida dos personagens de Rick and Morty",
      height: 400
    };
    const chart = new google.visualization.ColumnChart(graphic);
    chart.draw(dados, options);
    card.innerHTML = "";
  }
}
