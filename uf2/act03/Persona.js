class Persona {
    static id = 0
    constructor(n,a,tlf,dni) {
            this._id = ++Persona.id
            this._n = n
            this._a = a
            this._tlf = this.check_tlf(tlf)
            this._dni = this.check_dni(dni)
       
    }
    set set_dni(dni){
        this._dni = this.check_dni(dni)
    }
    set set_tlf(tlf){
        this._tlf = this.check_tlf(tlf)
    }
    get get_id(){
        return this._id
    }
    check_tlf(tlf){
        let regex = /^[0-9]{9}$/;
        if (!regex.test(tlf)) {
            throw new Error("TLF no válido");
        }
        return tlf
    }
    check_dni(dni){
        let dniRegex = /^[0-9]{8}[a-zA-Z]$/;
        if (!dniRegex.test(dni)) {
            throw new Error("DNI no válido");
        }
        return dni
    }

}


try {
    var p1 = new Persona('a', 'b', '123456789', '12345678Z')
}catch (e){
    console.error(`error ${e.message}`)
}


console.log(p1)



