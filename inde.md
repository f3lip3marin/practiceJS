RESPUESTAS DE JavaScript


-Que es un variable y para que sirve?

    Es como cajitas(espacios en memoria) donde podemos guardar informacion(dependiendo los tipos y estructuras de datos que soporte el lenguaje)


-Cual es la diferencia entre declarar e inicializar uan variable?

    declarar es cuando le dicemos a js que vamos a creara una variable con el nombre tal. Mientras que incializar es asiganrle un valor a esa variable


-Cual es la diferencia entre sumas y concatenar strings?
-Cual operador se usa para sumar?

    El operador que nos permite sumar y concatenar es  +.


-Determina el nombre y tipo de dato para almacenar en variable la siguiente informacion :

    - Nombre: string
    - Apellido : string
    - Nombre de usuario Platzi: string
    - Edad: number
    - Correo electronico :  string
    - Mayor de edad: boolean
    - Dinero ahorrado : Number
    - Deudas. number



-Traduce a codigo Js del ejemplo anterior
 
    let nombre = "felipe"
    let apelido = "marin"
    let nomnbreUsuarioPlazti = "@andres"
    let edad = 23
    let correoElectronico = "@andresfelipe"
    let mayorQue = true
    let dineroAhorrado = 342
    let deudas = 10


-Calcula e imprime las siguientes variables a partir de las variables del ejemplo:

    ---Nombre completo (mombre y apellido)

    let nombre = "felipe"
    let apellido = "marin"
    let nombreCompleto = nombre + " " + apellido
    conosole.log(nombreCompleto)

    ---Dinero real ( dinero ahorrado menos deudas)

    let dineroAhorrado = 342
    let deudas = 10
    let dineroReal = dineroAhorrado - deudas
    console.log(dineroReal)




## Funciones

-Que es una funcion?

    las funciones nos permiten encapsular(guardar) bloques de codigo para reutilizarlos y ejecutarlos en el futuro

-Cundo me sirve usar una funcion en mi codigo?

    Nos sirve cuandontenemos variables y bloques de codigo muy parecidos (con cambios que podrain ser parametros y arguemntos) que podemos encapsilar para reutilizar mas de una vez en el futuro 

    Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo



-Cual es la diferencia entre parametros y argumentos de una funcion? 

    las funciones reciben parametros cuando las creamos, y les enviamos argumentos  cubnado las ejecutamos


convierte el siguiente codigo en una fucnion pero cambiadno las varibales con sean necesario 


const name= "juan david"
const lastName = "castro gallegos"
const completeName = name + lastName
const nickName = "juandc"

console.log("mi nombre es " + completeName + ", pero prefiero que me digan " + nickName + ".")



## Condicionales

-Que es un condicional
    
    Son la forma que que ejecutamos un bloque de codigo u otro despendiendo de alguna condicion o validacion

-Que tipos de condicionales exiten en javascript y cuales son sus diferencias

    IF(ELSE Y ELSE IF),
    SWITCH

    El condicional if nos permite hacer validaciones completamente distintas en cada validacion o condicional, en cambio en switch todos los cases se comparan con las misma variable y condion que definimos en el switch.

-Puedo combinar funciones y condicionales? 
    
    SI, 



2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:



const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}



## ciclos

-Que es un ciclo?

    “La forma de ejecutar un bloque de código mientras una condición sea verdadera o se cumpla”  

-Que tipos de cilos existen en javascript

    WHILE, FOR, DO WHILE 
-Que es ciclo infinito y por que es un problema?

    Es cuando la validacion de nuestro condionales nunca se cumple y termina toteando(dañando) la aplicacion 

-Puedo mezclar ciclos y condionales? 

    for (let i = 0; i <5; i++){
        console.log("el valor de i es :" + i)
    }





## Arrays

-Que es un array

    Es una lista de elementos

-Que es un ojbeto?

    Es una lista de elementos PERO cada elemento tiene un nombre clave


    const obj = {
        nombre: "felipe",
        edad: 23,
        soltero: true
    }


-Cunado es mejor usar un objetos o array?

    Arrays cuando lo que haremos en un elemnto es lo mismo que en todos los demas

    Mientas que un objeto cuando los nombre de cada elementos son importantes para nuestro algoritmo


-Puedo mezclar array con obejtos 

    Si


-Crea una funcion que pueda recibir cyalquier array como parametro o imprima su primer resultado

(los arrays entran oir su index, en cambio los obj entran por el ".")
