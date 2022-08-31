/*console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})



h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456"

const img = document.createElement('img');//crear cosas desde cero
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);
*/




const h1 = document.querySelector("h1")
 
const input1= document.querySelector("#calculo1")
const input2= document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const pResultado = document.querySelector("#resultado")
const form = document.querySelector("#formulario")






form.addEventListener("click", sumarInputValue)//es merjo forma de escuchar

function sumarInputValue (event){
    console.log({event})
    event.preventDefault()
    const suma =  input1.value + input2.value//estoy concatenacion los valores de input
    pResultado.innerText = "resultado: " + suma
}

/* por lo general lso formularios teniendo un button su funcion es la de submit(enviar), pero para cambiar eso, se le puede agragar el button type = "button" para que sea de button y no para enviar, haciendo eso se puede cambiar el escucha arriba "click"*/




