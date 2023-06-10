import {Persona} from "./persona";
import {Direccion} from "./direccion";
import {Telefono} from "./telefono";
import {Mail} from "./mail";

console.log ('------------- Iniciamos ejecución del programa -------------------');

// Creamos direccion, telefono y email para 3 personas:
let direccion1 = new Direccion('direccion1', 111, 1, 'A', 28082, 'Madrid', 'Madrid');
let telefono1 = new Telefono('Casa', 111111111);
let mail1 = new Mail('Personal', 'persona1@email.com');

let direccion2 = new Direccion('direccion2', 222, 2, 'B', 46512, 'Faura', 'Valencia');
let telefono2 = new Telefono('Trabajo', 222222222);
let mail2 = new Mail('Trabajo', 'persona2@email.com');

let direccion3 = new Direccion('direccion3', 333, 3, 'C', 46022, 'Valencia', 'Valencia');
let telefono3 = new Telefono('Casa', 33333333);
let mail3 = new Mail('Personal', 'persona3@email.com');

// Creamos 3 personas con los objetos anteriores y las añadimos a un Array personas
let personas: Persona[] = [];
let persona1 = new Persona('Persona', 'Uno', 30, 12121212, '10-10-1990', 'Azul', 'Mujer', [direccion1], [telefono1], [mail1], ['Nota 1']);
personas.push(persona1);
let persona2 = new Persona('Persona', 'Dos', 41, 23232323, '20-02-1988', 'Verde', 'Hombre', [direccion2], [telefono2], [mail2], ['Nota 2']);
personas.push(persona2);
let persona3 = new Persona('Persona', 'Tres', 54, 34343434, '30-03-1965', 'Rojo', 'Hombre', [direccion3], [telefono3], [mail3], ['Nota 3']);
personas.push(persona3);

// Mostrar las personas en la consola
console.log('La persona1 es ', persona1.nombre, ' ', persona1.apellidos, ' de ', persona1.edad, ' años con DNI ', persona1.dni, ', cumpleaños: ', persona1.cumpleaños, ', su color favorito es: ', persona1.colorfavorito, ', y su sexo: ', persona1.sexo);
console.log('La persona2 es ', persona2.nombre, ' ', persona2.apellidos, ' de ', persona2.edad, ' años con DNI ', persona2.dni, ', cumpleaños: ', persona2.cumpleaños, ', su color favorito es: ', persona2.colorfavorito, ', y su sexo: ', persona2.sexo);
console.log('La persona3 es ', persona3.nombre, ' ', persona3.apellidos, ' de ', persona3.edad, ' años con DNI ', persona3.dni, ', cumpleaños: ', persona3.cumpleaños, ', su color favorito es: ', persona3.colorfavorito, ', y su sexo: ', persona3.sexo);

let dnibuscar = 23232323;

// Creamos una nueva direccion, email y teléfono
let nuevadireccion = new Direccion('direccionnueva', 222, 2, 'B', 46512, 'Faura', 'Valencia');
let nuevotelefono = new Telefono('Trabajonuevo', 222222223);
let nuevomail = new Mail('Trabajo', 'nuevoemailpersona@email.com');

// Buscamos la persona que corresponde a un DNI dado y añadimos una nueva dirección, email y teléfono
for (var persona of personas) {
    if(dnibuscar == persona.dni) {

        // Modificamos los campos con el set
        persona.direcciones.push(nuevadireccion);
        persona.telefonos.push(nuevotelefono);
        persona.mails.push(nuevomail);

        // Volvemos a ejecutar el console.log para mostrar los nuevos datos registrados
        console.log(persona.nombre, ' ', persona.apellidos, ' tiene una nueva direccion: ', persona.direcciones[persona.direcciones.length - 1].calle);
        console.log(persona.nombre, ' ', persona.apellidos, ' tiene un nuevo telefono: ', persona.telefonos[persona.telefonos.length - 1].numero);
        console.log(persona.nombre, ' ', persona.apellidos, ' tiene un nuevo email: ', persona.mails[persona.mails.length - 1].direccion);
    }
}   



console.log ('----------- Finalizamos ejecución del programa --------------------');