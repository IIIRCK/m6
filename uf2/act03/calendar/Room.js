class Room {
    constructor() {
        this.rooms = []
        this.ct = 0
    }
    new_id(){
        return ++this.ct;
    }
    add(n,p){
        let xroom=  {
            id: this.new_id(),
            name: n,
            price: p,
            status: false
        }
        this.rooms.push(xroom);

    }
    set_used(id){
        this.rooms.forEach(a=>{
            if(a.id === id){
                a.status = true
            }
        })
    }
    set_unused(id){
        this.rooms.forEach(a=>{
            if(a.id === id){
                a.status = false
            }
        })
    }
}