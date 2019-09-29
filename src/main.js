const data = RICKANDMORTY.results;
const menuSpecie = document.getElementById("menuSpecie");
const menuStatus = document.getElementById("menuStatus");
const menuGender = document.getElementById("menuGender");
const card = document.getElementById("cards");
const menuOrder = document.getElementById("menuOrder");
const valorStatistic = document.getElementById("Statistics")//grafico

valorStatistic.addEventListener("change",grafico); //grafico

menuSpecie.addEventListener("change", () =>{
  buildCard(app.filterData(data, menuSpecie.value, "species"));
  porcentagemEspecie (menuSpecie.value);
}
);

menuStatus.addEventListener("change", () =>{
  buildCard(app.filterData(data, menuStatus.value, "status"));
  porcentagemStatus(menuStatus.value);
}
);
menuGender.addEventListener("change", () =>{
  buildCard(app.filterData(data, menuGender.value, "gender"));
  porcentagemGenero(menuGender.value);
});
menuOrder.addEventListener("change", () => {
  buildCard(app.selectOrderAlpha(menuOrder.value, data));});

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

const statistic = document.getElementById("percentage");

function porcentagemEspecie(specie) {
  let totalSpecie = (data.length);
  let especie = app.filterData(data, specie, "species").length;
  let calculo = ((especie/totalSpecie)*100).toFixed(2);

  statistic.innerHTML =`<p> This species represents ${calculo}% of the characters in the cartoon.</p>`;

}

function porcentagemGenero(gender) {
  let totalGender = (data.length);
  let genero = app.filterData(data, gender, "gender").length;
  let calculo = ((genero/totalGender)*100).toFixed(2);

  statistic.innerHTML =`<p> This gender represents ${calculo}% of the characters in the cartoon.</p>`;

}

function porcentagemStatus(status) {
  let totalStatus = (data.length);
  let valorStatus = app.filterData(data, status, "status").length;
  let calculo = ((valorStatus/totalStatus)*100).toFixed(2);

  statistic.innerHTML =`<p> This status represents ${calculo}% of the characters in the cartoon.</p>`;

}

//grafico 
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(grafico);

function grafico (){
  if(valorStatistic.value === "male&Female"){
  let dados = google.visualization.arrayToDataTable([
    ['Gênero','Valor'],
    ['Female', (app.filterData(data, "Female", "gender").length)] //coluna do grafico
    ['Male', (app.filterData(data, "Male", "gender").length)]
  ]);
  let options = {'title':'Grafico de gênero dos personagens de Rick and Morty',
                   'width':400,
                   'height':300};
  const chart = new google.visualization.ColumnChart("graphic") //div que irá receber 
  chart.draw(dados,options);
  }
  if (valorStatistic.value === "human&Alien"){
    let dados = google.visualization.arrayToDataTable([
      ['Specie','Valor'],
      ['Human', (app.filterData(data, "Human", "species").length)]
      ['Alien', (app.filterData(data, "Alien", "species").length)]
    ]);
    let options = {'title':'Grafico de gênero dos personagens de Rick and Morty',
                     'width':400,
                     'height':300};
    const chart = new google.visualization.ColumnChart("graphic")
    chart.draw(dados,options); 
  }
}



