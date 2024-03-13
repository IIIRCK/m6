const qs = _ => document.querySelector(_)
const ce = _ => document.createElement(_)
const ael = (a,b,c) => qs(a).addEventListener(b,c)
document.addEventListener('DOMContentLoaded', function (e){
    let a = ce('div')
    a.setAttribute('class','chunk')
    qs('.cnt').appendChild(a)

    let b = qs('.cnt')
    function centerzoom(e){
        e.preventDefault()
        let a =  Math.round(e.deltaY)
        let ch = b.clientHeight
        let cw = b.clientWidth
        let sl = b.scrollLeft
        let st = b.scrollTop
        let mx = e.clientX - b.getBoundingClientRect().left + sl;
        let my = e.clientY - b.getBoundingClientRect().left + st;

        if (a > 0){
            b.style.width = `${cw * (1 - b)}px`
            b.style.height = `${cw * (1 - b)}px`
        }else if (a < 0){
            b.style.width = `${cw * (1 + b)}px`
            b.style.height = `${cw * (1 + b)}px`
        }


    }
        ael('.chunk','wheel',centerzoom())

})



/*
*
*
* const qs = _ => document.querySelector(_);
const ce = _ => document.createElement(_);
const ael = (a, b, c) => qs(a).addEventListener(b, c);

document.addEventListener('DOMContentLoaded', function (e) {
    let container = qs('.cnt');
    let zoomFactor = 0.1; // Factor de zoom, puedes ajustarlo según tus necesidades

    // Centrar el zoom en el punto central del contenedor
    function centerZoom(e) {
        e.preventDefault(); // Evitar que la página se desplace

        let deltaY = Math.round(e.deltaY);
        let containerWidth = container.clientWidth;
        let containerHeight = container.clientHeight;
        let scrollLeft = container.scrollLeft;
        let scrollTop = container.scrollTop;
        let mouseX = e.clientX - container.getBoundingClientRect().left + scrollLeft;
        let mouseY = e.clientY - container.getBoundingClientRect().top + scrollTop;

        if (deltaY > 0) {
            container.style.width = `${containerWidth * (1 - zoomFactor)}px`;
            container.style.height = `${containerHeight * (1 - zoomFactor)}px`;
        } else if (deltaY < 0) {
            container.style.width = `${containerWidth * (1 + zoomFactor)}px`;
            container.style.height = `${containerHeight * (1 + zoomFactor)}px`;
        }

        // Calcular nuevas coordenadas de desplazamiento para centrar el zoom
        let newScrollLeft = (mouseX * container.clientWidth / (containerWidth * (1 + deltaY * zoomFactor))) - e.clientX + container.getBoundingClientRect().left;
        let newScrollTop = (mouseY * container.clientHeight / (containerHeight * (1 + deltaY * zoomFactor))) - e.clientY + container.getBoundingClientRect().top;

        // Aplicar las nuevas coordenadas de desplazamiento
        container.scrollLeft = newScrollLeft;
        container.scrollTop = newScrollTop;
    }

    // Agregar el evento de zoom centrado al contenedor
    ael('.cnt', 'wheel', centerZoom);
});
*/

