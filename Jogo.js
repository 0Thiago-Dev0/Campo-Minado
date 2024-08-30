//cd Project\Back-end-Projects\CampoMinado
const tabuleiro = require('./script/Tabuleiro')

let arrayMap = new tabuleiro(10, 10, 20)
console.table(arrayMap.renderMap());
