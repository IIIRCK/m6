
document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem('usr', '1234');
    localStorage.setItem('usr1', '1234');
    //loggin()
    calendar()
    rand_gft()
    //localStorage.clear()
});

let cnt = document.querySelector('.container');
let user
function loggin(){
    let loggin = document.createElement('div');
    loggin.setAttribute('class', 'loggin');
    loggin.innerHTML = `
        <form>
            <input type="text" placeholder="user" id="name" value="usr">
            <input type="password" placeholder="psswd" id="psswd" value="1234">
            <input type="submit" value="Loggin" id="btn_loggin">
        </form>
    `;
    cnt.appendChild(loggin)
    document.querySelector('#btn_loggin').onclick = function (e){
        e.preventDefault()
        let usr = document.querySelector('#name').value
        let psswd = document.querySelector('#psswd').value

        check_loggin(usr,psswd)
    }

}
function check_loggin(a,b){

    let x = localStorage.getItem(a)
    if ( x === b ){
        //alert('nice')
        cnt.innerHTML=''
        user = a;
           }
    else {
        alert('usr o psswd no coincide')
    }
}

function calendar(){
    let cal = document.createElement('div')
    cal.setAttribute('class','calendar')
    let btns = document.createElement('div')
    btns.setAttribute('class','buttons')
    for (let i = 1; i <=24; i++) {
        let btn = document.createElement('div')
        let spn = document.createElement('span')
        btn.setAttribute('id',i)
        btn.setAttribute('class','button')
        btn.setAttribute('onclick','flip(this)')
        spn.textContent = i 
        btn.appendChild(spn)
        btns.appendChild(btn)
    }
    cal.appendChild(btns)
    cnt.appendChild(cal)
}

let btn_bl =[]
function rand_gft(){
    let p = []
    let pp;
    for (let i = 0; i <5 ; i++) {
        do {
            pp =   Math.floor(Math.random()* 24)+1
        }while (p.includes(pp))
        p.push(pp)

    }
    p.forEach(e =>{
        console.log(e)
        btn_bl[e] = 1;

    })
    
    btn_bl.forEach((v,i)=>{
        console.log(v+' '+ i)
    })
    console.log(btn_bl)
}

function  show_bl(id){
   let btn = document.getElementById(id)
    let spn = btn.querySelector('span')
    
    if (btn_bl[id] ===1){
        spn.textContent = 'bad'
    }else   {
        spn.textContent = 'good'
    }
}
function flip(button){
    let btn = button
    let id = btn.getAttribute('id')
    let spn = btn.querySelector('span')
    btn.style.transform ='perspective(600px) rotateY(180deg)'
    
    setTimeout(() => {
        spn.textContent =  '100'
        spn.style.transform = 'scalex(-1)'
        show_bl(id)
    }, 200);
    
    console.log('ss')
    
}