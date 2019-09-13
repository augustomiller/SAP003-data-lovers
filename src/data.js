function getSpecies(specie){
  const result = RICKANDMORTY.results.filter( person => person.species === specie);
  return result;
}
function getGender(gender){
  const result = RICKANDMORTY.results.filter( person => person.gender === gender);
  return result;
}
function getStatus(status){
  const result = RICKANDMORTY.results.filter( person => person.status === status);
  return result;
}
