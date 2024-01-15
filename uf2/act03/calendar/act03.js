
import * as fecha from './date/dist/fecha.min'
import * as datepick from './datepick/dist/js/hotel-datepicker.min'
import HotelDatepicker from "./datepick/dist/js/hotel-datepicker.min";
document.addEventListener('DOMContentLoaded', function () {


    localStorage.setItem('usr', '1234');
    localStorage.setItem('usr1', '1234');
    let hab = new Room()
    hab.add("hab1",100)
    loggin()
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
    function check_loggin(a,b){

        let x = localStorage.getItem(a)
        if ( x === b ){
            cnt.innerHTML=''
            user = a;

        }
        else {
            alert('usr o psswd no coincide')
            user ='';
        }
    }


}

document.querySelector('.date').onclick = function (e) {
e.preventDefault()
    new HotelDatepicker()
}
