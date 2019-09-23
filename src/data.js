function filterData (data, condition, key) {
  return data.filter( item => item[key].includes(condition));
}

app ={
  filterData
};

function getAll(data) {
  return buildCard(data);
}


