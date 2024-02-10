document.addEventListener('DOMContentLoaded',function (){
load_board()
new_piece(1)
new_piece(2)

})

let pieces = []

function load_board(){
    let a = document.querySelector('.board')
    let b
    for (let i = 0; i < 9; i++) {
        b = document.createElement('div')
        c_set(b)
        a.appendChild(b)
    }
}
function c_set(c){
    c.setAttribute('class','c')
    c.setAttribute('ondrop','drop(event)')
    c.setAttribute('ondragover','allowdrop(event)')
    c.setAttribute('droped','false')
}

function new_piece(x){
    let a = document.querySelector('.p'+x)
    let c= document.createElement('img')
    img_set(c,x)
    a.appendChild(c)
   
}
function img_set(x,i){
        if (i === 1) {
            x.setAttribute('src', './img/x.png');
            x.setAttribute('type','x')

        } else {
            x.setAttribute('src', './img/o.png');
            x.setAttribute('type','o')

        }
        let a
        do {
            a =  Math.floor(Math.random()*20)
        }while (pieces.includes(a))
        pieces.push(a)   
        x.setAttribute('id', a);
        x.setAttribute('draggable', 'true');
        x.setAttribute('ondragstart', 'drag(event)');
        


}


function allowdrop(e) {
e.preventDefault()
    e.target.id
    
}
function drag(e){
    e.dataTransfer.setData('img',e.target.id)
    

}
function drop(e){
    let id = e.target.id
    let dpd = document.getElementById(id).getAttribute('droped')
    console.log(dpd)
    console.log(id)
    e.preventDefault()
    let a = e.dataTransfer.getData('img')
    e.target.appendChild(document.getElementById(a))
    let c = id.getAttribute('type')
    b.setAttribute('draggable','false')
    if (c === 'x'){
        new_piece(1)
    }else{
        new_piece(2)
    }
}
