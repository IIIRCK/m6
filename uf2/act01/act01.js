document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem('usr', '1234');
    localStorage.setItem('usr1', '1234');
    //loggin()
    plane();
    //localStorage.clear()
});

let cnt = document.querySelector('.container');
let user

let s_id  = [];
let s_st  =[]
let us_id = [];
let us_st = []
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
        load_user_seats(user)
        load_seats();
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
    let id = button.id
    btn_seat_color(button)
    add_seat_array(button)

}

function btn_seat_color(btn){
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
        btn.style.backgroundColor = 'green';
    }

}

function btn_save(){
    let s_u='';
    let s_a = ''
    us_id.forEach(i => {
        s_u+= i+';'
        let c = s_id.find((e) => e===i)
        if (c){
            s_id.push(i)
        }

    })
    s_id.forEach(i =>{
        s_a += i+';'
    })
    localStorage.setItem(user+'_s_id',s_u)
    localStorage.setItem('s_id',s_u)
    let array = s_u.split(';')
    array.pop()


}

function btn_exit(){
cnt.innerHTML = ''
    loggin()
    us_id =[];
    s_id=[];
}

function add_seat_array(btn){
    let st = btn.getAttribute('st')
    let id = btn.id;
    let c = us_id.find((e) =>e===id)
    let p = us_id.indexOf(c)
    if (c){
        us_id.splice(p,1)
        us_st.splice(p,1)
    }else{
        us_id.push(id)
        us_st.push(st)
    }

}

function load_user_seats(u){
    let s = localStorage.getItem(u+'_s_id')
    let s_u = s.split(';')
    s_u.pop();
    s_u.forEach(i =>{
        let k = '#'+i;
        let btn = document.getElementById(i)
        btn.style.backgroundColor = 'yellow'
        btn.style.color = 'black'
        btn.setAttribute('st','1')
    })

}

function load_seats(){
    let s = localStorage.getItem('s_id')
    let s_p = s.split(';')
    s_p.pop();
    s_p.forEach(i =>{
        if (us_id.find((e) => e===i)){
            let k = '#'+i;
            let btn = document.getElementById(i)
            btn.style.backgroundColor = 'red'
            btn.style.color = 'white'
            btn.setAttribute('st','1')
            btn.disabled = true;
        }


    })

}


