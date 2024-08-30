class Casa {
   constructor() {
      this._bomb = false
      this._click = false
      this._number = -1
      this._visible = null
      this._vao = null
   }


   get getVisible() {
      return this._visible
   }

   set setVisible(v) {
      this._visible = v
   }

   get getBomb() {
      return this._bomb;
   }

   /**
    * @param {any} b
    */
   set setBomb(b) {
      this._bomb = true
   }

   get getNumber() {
      return this._number;
   }

   /**
    * @param {number} n
    */
   set setNumber(n) {
      this._number = n
   }

   set setClick(s) {
      this._click = true
   }

}

module.exports = Casa