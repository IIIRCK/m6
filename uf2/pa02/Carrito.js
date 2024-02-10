
class Carrito {
    static ct = 0
    constructor() {
        this.carrito = []

    }
    AddItem(x){
      this.carrito.push(x)
    }
    DelItem(id){

        this.carrito.splice(this.carrito.indexOf(this.carrito.id ===id))
    }


    GetCarrito(){
        return this.carrito
    }

}