class Habitacion{
    static id = 0
    constructor(n,p,c) {
        this._id = ++Habitacion.id
        this._n = n
        this._p = p
        this._pp = [c]
    }
    set_persona(pp){
        this._pp.push(pp.get_id())
    }


}