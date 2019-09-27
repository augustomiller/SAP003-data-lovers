function filterData (data, condition, key) {
  return data.filter( item => item[key].includes(condition));
}

app ={
  filterData, 
  selectOrderAlpha
};

function getAll(data) {
  return buildCard(data);
}

function selectOrderAlpha(escolha, dados) {
  
  if (escolha === "A-Z") {
    return dados.sort((a, b) => a.name > b.name ? 1 : -1);
  } else if (escolha === "Z-A") {
    return dados.sort((a, b) => a.name > b.name ? -1 : 1);
  } else {
    dados.sort((a, b) => a.id > b.id ? 1 : -1);
  }
  buildCard(data);
  
}
