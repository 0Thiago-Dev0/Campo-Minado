const casa = require('./Casa');
const vao = require('./Vao');
const input = require('../Input')


class Tabuleiro {
   constructor(nL, nC, nB) {
      this.nL = nL
      this.nC = nC
      this.nB = nB
      this.map = []
      this.tabuleiro()
      this.addBomb()
      this.verificarBombas()
      // this.renderMap()
      this.logicaGame()
   }

   // LOGICA DO JOGO
   logicaGame() {
      while (true) {
         let coluna = input("Digite a coluna: ", "number")
         let linha = input("Digite a linha: ", "number")
         

         if (this.map[linha][coluna].getBomb === false) {
            this.map[linha][coluna].setVisible = this.map[linha][coluna].getNumber
            console.table(this.renderMap())
         } else {
            this.map[linha][coluna].setVisible = '💣'
            console.log("Você perdeu")
            break
         }
      }
      
   }

   // CIRAR TABULEIRO
   tabuleiro() {      
      for (let i = 0; i < this.nC; i++) {
         this.map[i] = []
         for (let j = 0; j < this.nL; j++) {
            var c = new casa
            c.setNumber = 0
            c.setVisible = '#'
            this.map[i][j] = c
         }
      }
   }

   // RENDERIZAR O TABULEIRO
   renderMap() {
      let mapR = []
      for (let i = 0; i < this.nL; i++) {
         mapR[i] = []
         for (let j = 0; j < this.nC; j++) {
            mapR[i][j] = this.map[i][j].getVisible
         }
      }

      return mapR
   }

   // CÓDIGO PARA VERIFICAR AS BOMBAS AO REDOR
   verificarBombas() {
      for (let i = 0; i < this.nC; i++) {
         for (let j = 0; j < this.nL; j++) {
            /**
             * a b c
             * d * e
             * f g h
             */
            let dC
            let dL
            let contador = 0

            if (this.map[i][j].getBomb !== true) {
               // a
               dC = i-1
               dL = j-1
               if ((dC < 0 || dL < 0 || dC>=this.nC || dL>=this.nL) == false ) {
                  if (this.map[dC][dL].getBomb == true) {
                     contador += 1
                  }  
               }
               // b
               dC = i
               dL = j-1
               if ((dC < 0 || dL < 0 || dC>=this.nC || dL>=this.nL) == false ) {
                  if (this.map[dC][dL].getBomb == true) {
                     contador += 1
                  }  
               }
               // c
               dC = i+1
               dL = j-1
               if ((dC < 0 || dL < 0 || dC>=this.nC || dL>=this.nL) == false ) {
                  if (this.map[dC][dL].getBomb == true) {
                     contador += 1
                  }  
               }
               // d
               dC = i-1
               dL = j
               if ((dC < 0 || dL < 0 || dC>=this.nC || dL>=this.nL) == false ) {
                  if (this.map[dC][dL].getBomb == true) {
                     contador += 1
                  }  
               }
               // e
               dC = i+1
               dL = j
               if ((dC < 0 || dL < 0 || dC>=this.nC || dL>=this.nL) == false ) {
                  if (this.map[dC][dL].getBomb == true) {
                     contador += 1
                  }  
               }
               // f
               dC = i-1
               dL = j+1
               if ((dC < 0 || dL < 0 || dC>=this.nC || dL>=this.nL) == false ) {
                  if (this.map[dC][dL].getBomb == true) {
                     contador += 1
                  }  
               }
               // g
               dC = i
               dL = j+1
               if ((dC < 0 || dL < 0 || dC>=this.nC || dL>=this.nL) == false ) {
                  if (this.map[dC][dL].getBomb == true) {
                     contador += 1
                  }  
               }
               // h
               dC = i+1
               dL = j+1
               if ((dC < 0 || dL < 0 || dC>=this.nC || dL>=this.nL) == false ) {
                  if (this.map[dC][dL].getBomb == true) {
                     contador += 1
                  }  
               }
               this.map[i][j].setNumber = contador
            }

         }
      }
   }


   // ADICIONAR AS BOMBAS NO TABULEIRO
   addBomb() {
      if (this.nB > (this.nL + this.nC)) {
         this.nB = (this.nL+this.nC)/2
      }
      for (let i = 0; i < this.nB; i++) {
         let linha = Math.floor(Math.random() * this.nL)
         let coluna = Math.floor(Math.random() * this.nC)
         if (this.map[coluna][linha].getBomb === false) {
            this.map[coluna][linha].setBomb = true
            this.map[coluna][linha].setNumber = -1
         } else {
            i -= 1
         }
      }
   }
}

module.exports = Tabuleiro