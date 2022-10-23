//let d = new Date();
//const tag = document.createElement("p");
//const text = document.createTextNode("Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
//tag.appendChild(text);
//document.body.appendChild(tag);

var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var borrar = document.getElementById('borrar');
var correo = document.getElementById('correo');
var correo_label = document.getElementById('correo_label');
var cantidad = document.getElementById('cantidad');
var total_pagar = document.getElementById('TotalPagar');
var selector = document.getElementById('inputState');

const MostrarResumen = (ctg, cant) => {
    
    let final = cant*200;

    switch (ctg) {
        case 1:
            final = final - (final*0.8);
            break;
        case 2:
            final = final - (final*0.5); //Tambien podria dividir por 2
            break;
        case 3:
            final = final - (final*0.15);
            break;
        default:
            break;
    }

    total_pagar.textContent = "Total a pagar: $" + final;
}

// https://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer
function isPositiveInteger(n) {
    return 0 === n % (!isNaN(parseFloat(n)) && 0 <= ~~n);
}

const Reinicio = () => {
    fname.classList.remove("is-invalid");
    lname.classList.remove("is-invalid");
    correo.classList.remove("is-invalid");
    cantidad.classList.remove("is-invalid");
    total_pagar.textContent = "Total a pagar: $";
}

form.onsubmit = function(e) {

    if (fname.value === '') {
        fname.classList.add("is-invalid");
    } else {
        fname.classList.remove("is-invalid");
    }
    if (lname.value === '') {
        lname.classList.add("is-invalid");
    } else {
        lname.classList.remove("is-invalid");
    }

    let arroba = correo.value.indexOf('@');
    if (correo.value === '' || arroba === -1) {
        correo.classList.add("is-invalid");
    } else {
        correo.classList.remove("is-invalid");
    }

    if (isPositiveInteger(cantidad.value) === false || cantidad.value === '') {
        cantidad.classList.add("is-invalid");
    } else {
        cantidad.classList.remove("is-invalid");
        let index = selector.selectedIndex;
        MostrarResumen(index, Number(cantidad.value));
    }
}