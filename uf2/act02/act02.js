
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
    if (kk != '') {
        kk.forEach(k =>{
            if (k.startsWith('p_')){
            let  row = document.createElement('tr')
            let c1 = document.createElement('td')
            c1.textContent = k.slice(2)
            let v = localStorage.getItem(k)
            let c2 = document.createElement('td')
            c2.textContent = v
            row.appendChild(c1)
            row.appendChild(c2)
            rows.push(row)}
        })
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
            <h3>user: <span>${player.slice(2)}</span></h3>
            <h3>regalos: <span class="o_ct">0</span></h3>
        </div>`
    cnt.appendChild(opt)
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
        btn_bl[e] = 1;
    })
    console.log(btn_bl)
}

function  show_bl(id){
   let btn = document.getElementById(id)
    let spn = btn.querySelector('span')
    
    if (btn_bl[id] ===1){
        spn.textContent = 'C'
        //carbon = true
        alert('perdiste')
        localStorage.setItem(player,ct.toString());
        ct = 0;
        rnk()
    }else   {
        spn.textContent = 'R'
        ct++;
        if (ct === 19){
                alert("ganaste")
                localStorage.setItem(player,ct.toString());
                ct = 0;
                rnk()
        }
        let ctt = document.querySelector('.o_ct')
        ctt.textContent = ct
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

    if (localStorage.getItem(p)){
        alert('jugador ya existe')
    }
    else {
        localStorage.setItem(p,'0')
        cnt.innerHTML= ''
        game()
    }

}