

document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem('usr', '1234');
    localStorage.setItem('usr1', '1234');
    loggin()
    //plane();
    //localStorage.clear()
});

let cnt = document.querySelector('.container');
let user

let plane_seats  = [];
let user_seats = [];
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
        plane();
        plane_seats =[];
        user_seats =[];
        load_user_seats(user)
        load_plane_seats();

    }
    else {
        alert('usr o psswd no coincide')
        user ='';
    }
}


function plane(){
    let plane = document.createElement('div')
    let s_ac = document.createElement('div')
    let s_df = document.createElement('div')
    let s_gi = document.createElement('div')
    plane.setAttribute('class','plane')
    s_ac.setAttribute('class','s_ac')
    s_df.setAttribute('class','s_df')
    s_gi.setAttribute('class','s_gi')
    let options = document.createElement('div')
    let h1 = document.createElement('h1')
    let btn_save = document.createElement('button')
    let btn_exit = document.createElement('button')
    options.setAttribute('class','options')
    btn_save.setAttribute('onclick','btn_save()')
    btn_exit.setAttribute('onclick','btn_exit()')
    h1.textContent = 'user: '+user
    btn_save.textContent = 'SAVE'
    btn_exit.textContent = 'EXIT'
    options.appendChild(h1)
    options.appendChild(btn_save)
    options.appendChild(btn_exit)


    for (let i = 1; i <=20; i++) {

            for (let j = 1; j <= 9; j++) {
                let btn = document.createElement('button')
                if (j <=3) {
                    s_ac.appendChild(btn)
                    if (j===1){
                       btn_set(btn,'a',i)
                    }else if (j===2){
                        btn_set(btn,'b',i)

                    }else if (j===3){
                        btn_set(btn,'c',i)
                    }

                } else if (j <=6) {
                    s_df.appendChild(btn)
                    if (j===4){
                        btn_set(btn,'d',i)
                    }else if (j===5){
                        btn_set(btn,'e',i)
                    }else if (j===6){
                        btn_set(btn,'f',i)
                    }

                } else if (j <=9) {
                    s_gi.appendChild(btn)
                    if (j===7){
                        btn_set(btn,'g',i)
                    }else if (j===8){
                        btn_set(btn,'h',i)
                    }else if (j===9){
                        btn_set(btn,'i',i)
                    }
                }
            }

    }
    plane.appendChild(s_ac)
    plane.appendChild(s_df)
    plane.appendChild(s_gi)
    plane.appendChild(options)

    cnt.appendChild(plane)

}
function btn_set(btn,lt,i){
    btn.setAttribute('id',i+lt)
    btn.setAttribute('onclick','add_seat(this)')
    btn.setAttribute('st','0')
    btn.textContent = i.toString()+lt;
    btn.style.backgroundColor = 'green'
    btn.style.color = 'white'
    btn.style.borderRadius = '50px'

}

function add_seat(button){
    btn_set_color(button)
    add_set_array(button)

}

function btn_set_color(btn){
    let st= btn.getAttribute('st')
    if (st ==='0'){
        btn.style.backgroundColor = 'yellow';
        btn.style.color= 'black'
        btn.setAttribute('st','1')
    }
    else if (st === '1'){
        btn.style.backgroundColor = 'green';
        btn.setAttribute('st','0')
        btn.style.color= 'white'
    }
    else if (st === '3'){
        btn.style.backgroundColor = 'red';
        btn.disabled = 'true'
    }

}


function add_set_array(btn){
    let id = btn.id;
    let i = user_seats.indexOf(id);
    let ii = plane_seats.indexOf(id)
    if (i !== -1 && ii !== -1) {
        user_seats.splice(i, 1);
        plane_seats.splice(ii,1)
    } else {
        user_seats.push(id);
        plane_seats.push(id)
    }

}

function load_user_seats(u){
    let s = localStorage.getItem(u + '_seats')
    if ( s!== null) {
        let s_u = s.split(',')
        s_u.pop();
        s_u.forEach(i => {
            user_seats.push(i);
            let btn = document.getElementById(i)
            btn_set_color(btn)
        })
    }
}

function load_plane_seats(){
    let s = localStorage.getItem('plane_seats')
    if (s !== null) {
        let s_p = s.split(',')
        s_p.pop();
        s_p.forEach(i => {
            let ii = user_seats.indexOf(i)
            if (ii === -1) {
                let btn = document.getElementById(i)
                btn.setAttribute('st', '3')
                btn_set_color(btn)
            }
            plane_seats.push(i)
        })
    }
}
function btn_save(){
    let s_u=''
    let s_p = ''
    user_seats.forEach(i => {
        s_u+= i+','
    })
    plane_seats.forEach(i =>{
        s_p += i+','
    })
    localStorage.setItem(user+'_seats',s_u)
    localStorage.setItem('plane_seats',s_p)
}
function btn_exit(){
    cnt.innerHTML = ''
    loggin()
}