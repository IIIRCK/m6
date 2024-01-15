class Reserve{
    constructor() {
        this.rs = []
        this.ct =0
    }
    new_id(){
        return ++this.ct;
    }
    add(idu,idr,cin,cout){
        let xrs ={
            id: this.new_id(),
            id_user: idu,
            id_room: idr,
            date_cin: cin,
            date_cout: cout
        }
        this.rs.push(xrs)
    }
    get(){
        this.rs.forEach(a => {

        })
    }
}