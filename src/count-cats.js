module.exports = function countCats( matrix ) {
//  1st solution

  return matrix.flat().filter(cat => cat==="^^").length

// 2nd solution
//   return matrix.flat().reduce(function(sum,cat){
//     if (cat==="^^"){
//         sum++;
//     }
//     return sum
// }, 0);


// 3rd solution
// return matrix.flat().reduce((sum,cat) => (cat==='^^') ? ++sum : sum, 0)
};
