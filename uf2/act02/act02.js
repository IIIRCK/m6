
document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem('usr', '1234');
    localStorage.setItem('usr1', '1234');
    //loggin()
    //plane();
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
