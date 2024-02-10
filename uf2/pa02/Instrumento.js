class Instrumento {
    static  ct = 0
    constructor(p,c,h,w,s) {
        this.id = ++this.ct
        this.price = p
        this.color = c
        this.height= h
        this.width = w
        this.sound = s
    }

    Get_id(){
        return this.id
    }

    GetPrice(){
        return this.price
    }
    GetColor(){
        return this.color
    }
    GetSound(){
        return this.sound
    }


}