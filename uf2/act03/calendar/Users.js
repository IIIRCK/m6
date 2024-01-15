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

    find(dni){
        return this.users.find(user => user.dni === dni)
    }
    print() {
        this.users.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Surname: ${user.surname}, Email: ${user.email}, DNI: ${user.dni}, Phone: ${user.tlf}`);
        });
    }
}

let users = new User()
users.add('a','b','c','d','e')
let a = users.find('d')
if (a) {
    console.log(a.name);
} else {
    console.log("User not found");
}
users.print()