function filterData (data, condition, key) {
  return data.filter( item => item[key].includes(condition));
}

function getAll(data) {
  return buildCard(data);
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

app ={
  filterData,
  getAll,
  selectOrderAlpha
};
