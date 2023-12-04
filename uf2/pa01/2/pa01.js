
document.addEventListener('DOMContentLoaded', function () {
    rnk()
    //game()
    //calendar()
    //rand_gft()
    //localStorage.clear()

});

let cnt = document.querySelector('.container');
let player
let ct = 0
let carbon = false
function rnk(){
    cnt.innerHTML= ''
    ranking()
    options_rnk()
}
function game(){
    cnt.innerHTML= ''
    calendar()
    options_game()
    rand_gft();
}
function ranking(){
    let rnk = document.createElement('div')
    rnk.setAttribute('class','ranking')
    let table = document.createElement('table')
    let players = document.createElement('th')
    players.textContent = 'PLAYERS'
    let regals = document.createElement('th')
    regals.textContent = 'REGALS'
    table.appendChild(players);
    table.appendChild(regals);
    ranking_list().forEach(r =>{
        table.appendChild(r)
    })
    rnk.appendChild(table)
    cnt.appendChild(rnk)
}
function ranking_list() {
    let kk = Object.keys(localStorage)
    let rows = [];
    let sorted = []
    if (kk.length > 0) {
        let filteredKeys = kk.filter(k => k.startsWith('p_'));
        let sortedKeys = filteredKeys.sort((a, b) => {
            let va = parseInt(localStorage.getItem(a), 10);
            let vb = parseInt(localStorage.getItem(b), 10);
            return vb - va;
        });

        
        sortedKeys.forEach(k => {
            let row = document.createElement('tr');
            let c1 = document.createElement('td');
            c1.textContent = k.slice(2);
            let v = localStorage.getItem(k);
            let c2 = document.createElement('td');
            c2.textContent = v;
            row.appendChild(c1);
            row.appendChild(c2);
            rows.push(row);
        });
        
        return rows;


    }else {
        let row = document.createElement('tr')
        let c1 = document.createElement('td')
        c1.textContent = 'no'
        let c2 = document.createElement('td')
        c2.textContent = 'players'
        row.appendChild(c1)
        row.appendChild(c2)

        rows.push(row)
        return rows;
    }
}
function options_rnk(){
    let opt = document.createElement('div')
    opt.setAttribute('class','options')
    opt.innerHTML = `
        <div class="rnk">
            <input type="text" id="o_name" placeholder="nickname">
            <button class="o_play" onclick="btn_play()">PLAY</button>
        </div>`
    cnt.appendChild(opt)
}
function options_game(){
    let opt = document.createElement('div')
    opt.setAttribute('class','options')
    opt.innerHTML = `
        <div class="o_game">
            <h3>player: <span>${player.slice(2)}</span></h3>
            <h3>intento: <span class="o_ct">0</span>/5</h3>
        </div>`
    cnt.appendChild(opt)
}
function calendar(){

    let cal = document.createElement('div')
    cal.setAttribute('class','calendar')
    let btns = document.createElement('div')
    btns.setAttribute('class','buttons')
    for (let i = 1; i <=20; i++) {
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
let btn_gl =[] 
function rand_gft(){
    let p = []
    let pp
    for (let i = 0; i <2 ; i++) {
        do {
            pp =   Math.floor(Math.random()* 20)+1
        }while (p.includes(pp))
        p.push(pp)
    }
    let b = true;
    p.forEach(e =>{
        
        if (b) {
            btn_bl[e] = 1;
            b = false;
        }
        else {
            btn_bl[e]=2
        }
    })
    console.log(btn_bl)
    console.log(p)
    
}


function  show_bl(id){
   let btn = document.getElementById(id)
    let spn = btn.querySelector('span')
    
    if (btn_bl[id] === 1){
        spn.textContent = 'GRINCH'
        //carbon = true
        alert('perdiste')
        let w =localStorage.getItem(player)
        let n = parseInt(w,10)
        localStorage.setItem(player,n.toString());
        ct = 0;
        rnk()
    }else if (btn_bl[id] === 2){
        spn.textContent = 'SANTA'
         alert("ganaste")
         let w =localStorage.getItem(player)
         let n = parseInt(w,10)
         n++;
         localStorage.setItem(player,n.toString());
            ct = 0;
            rnk()
    }
    else {
        ct++
    let ctt = document.querySelector('.o_ct')
    ctt.textContent = ct
        if (ct === 5){
            alert('perdiste')
            ct = 0
            rnk()
        }
    }
    

}
function flip(button){
    let btn = button
    let id = btn.getAttribute('id')
    let spn = btn.querySelector('span')
    btn.style.transform ='perspective(600px) rotateY(180deg)'
    
    setTimeout(() => {
        spn.textContent =  ''
        spn.style.transform = 'scalex(-1)'
        show_bl(id)
    }, 200);

    document.getElementById(id).style.pointerEvents = 'none';
}


function btn_exit() {
    cnt.innerHTML = ''
    loggin();

}

function  btn_play(){
    let pp = document.getElementById('o_name').value
    let p = 'p_'+pp
    player = p
    let w =localStorage.getItem(player)
    let n = parseInt(w,10)
    if (isNaN(n)){
        n = 0
    }
        localStorage.setItem(p,n.toString())
    btn_bl =[]

    cnt.innerHTML= ''
        game()
    

}