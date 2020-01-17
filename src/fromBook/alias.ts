namespace Shape {
  export namespace Polygons {
    export class Triangle {
      showTest() {
        console.log('showT1')
      }
    }
    export class Square {
      showTest() {
        console.log('showT2')
      }
    }
  }
}

import polygons = Shape.Polygons
let sq = new polygons.Square()

sq.showTest()
