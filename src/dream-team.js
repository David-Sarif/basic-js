module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) ){
    return false
  }
  return members.filter(elem => typeof elem ==='string').map(elem =>elem.trim().substr(0,1).toUpperCase()).sort().join('');

};