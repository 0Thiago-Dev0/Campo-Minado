const prompt = require('prompt-sync')()

function Input(menssage, type) {
   while (true) {
      //  Salvando o resultado do prompt
      let input = prompt(menssage)
      // Verificando se o 'type' e um number
      if (type = 'number') {
         if (!isNaN(input) && input.trim() !== '') {
            return Number(input)
         } else {
            console.log('ERROR');
         }
      } else if (type === 'string') { // Verificando se o 'type' e uma string
         return input
      } else if (type === 'boolean') { // Verificando se o 'type' e um boolean
         if (input.toLowerCase() === 'true' || input.toLowerCase() === 'false') {
            return input.toLowerCase() === 'true'
         } else {
            console.log('ERROR');
         }
      } else {
         throw new Error('Unsupported input type')
      }
   }
}

module.exports = Input;