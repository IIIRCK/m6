class User {
    constructor() {
        this.users = []
        this.ct = 0
    }
    new_id(){
        return ++this.ct;
    }
    add(n,s,e,d,t) {
      let xuser = {
          id: this.new_id(),
          name: n,
          surname: s,
          email: e,
          dni:d,
          tlf: t
      }
      this.users.push(xuser);
    }

    get(id){
        this.users.forEach(a =>{
            if(a.id === id){
                return a
            }

        })
        return false;
    }
}

