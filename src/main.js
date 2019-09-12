document.getElementById("btn-humans").addEventListener("click", clickHumans)
document.getElementById("btn-aliens").addEventListener("click", clickAliens)
document.getElementById("btn-alive").addEventListener("click", clickAlive)
document.getElementById("btn-dead").addEventListener("click", clickDead)
document.getElementById("btn-male").addEventListener("click", clickMale)
document.getElementById("btn-female").addEventListener("click", clickFemale)

function clickHumans(){
  const species = getSpecies("Human");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  species.forEach(item => {
    cards.innerHTML += item.name + "<br />"
  });
}

function clickAliens(){
  const species = getSpecies("Alien");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  species.forEach(item => {
    cards.innerHTML += item.name + "<br />"
  });
}

function clickMale(){
  const species = getGender("Male");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  species.forEach(item => {
    cards.innerHTML += item.name + "<br />"
  });
}

function clickFemale(){
  const species = getGender("Female");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  species.forEach(item => {
    cards.innerHTML += item.name + "<br />"
  });
}

function clickAlive(){
  const alive = getStatus("Alive");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  alive.forEach(item => {
    cards.innerHTML += item.name + "<br/>"
  });
}

function clickDead(){
  const dead = getStatus("Dead");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  dead.forEach(item => {
    cards.innerHTML += item.name + "<br/>"
  });
}

