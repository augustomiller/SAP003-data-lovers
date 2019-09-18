function filterData (data, condition, key) {
  return data.filter( item => item[key].includes(condition));
}

const app ={
  filterData
};
