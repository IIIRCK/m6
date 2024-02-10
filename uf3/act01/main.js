

document.addEventListener('DOMContentLoaded',function(){
    let u = new User()
    let l = new loggin()
    u.add('x','1234')
    
})

class User {
    
    constructor() {
    }
    add(a,b){
        if (this.check1(a)){
            throw new Error("Usuario no existe")
        }
        let user = {}
        user[a]={
            nick: a,
            psswd: b
        }
        localStorage.setItem('users',JSON.stringify(user))
    }
    check1(a){
        let x = JSON.parse(localStorage.getItem('users'))|| {}
        return x.hasOwnProperty(a);
    }
    check2(a,b){
        let u
        let p
        let x = JSON.parse(localStorage.getItem('users'))|| {}
        if (this.check1(a)){
             u = x[a].nick
             p = x[a].psswd  
        }
        return a === u && b === p;        
    }
    
    
}

class loggin{
    btn01 = document.querySelector('.btn01')
    u
    p
    
    user = new User()
    constructor() {
    this.btn01.addEventListener('click',function (e){
        let l = new loggin()
        e.preventDefault()
        l.check_log()
    })

    }
    check_log(){
        this.get_values()
        console.log('ss')
        
        if (this.user.check2(this.u,this.p)){
            alert('existe')
        }
        else {
            alert('no')
        }
    }
    get_values(){
        this.u =  document.querySelector('.i01')
        this.p =  document.querySelector('.i02')
        
    }
}
