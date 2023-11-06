const ele_loggin = document.querySelector(".loggin")
const ele_seats = document.querySelector(".seats")

const inp_name = document.querySelector("#inp_name").value
const inp_psswd = document.querySelector("#inp_psswd").value;

const btn_loggin = document.querySelector("#btn_loggin")
btn_loggin.addEventListener("click",loggin_user)

localStorage.setItem("admin","1234");
function loggin_user(e){
    e.preventDefault();

    let v1 = inp_name
    let v2 = inp_psswd
    if (check_log(v1,v2)) {
        console.log(v1, v2)
        ele_loggin.style.display = "none";
    }else {
        console.log("cagaste")
    }

}

function check_log(v1,v2){
    let lh = localStorage.getItem(v1)
    //let psswd = parseInt(v2)
    if (lh !== null && lh == v2){
        return true
    }
    return false
}