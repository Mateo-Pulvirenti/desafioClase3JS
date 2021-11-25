alert('Buen dia! Me das una mano? Necesito saber quienes asistieron a la clase de hoy...');

let alumnosPresentes = parseInt(prompt('Cuantos alumnos vinieron hoy?'));

while(isNaN(alumnosPresentes)){
    alumnosPresentes = parseInt(prompt('Por favor, ingrese un numero natural.'))
}

for(let i = 1; i <= alumnosPresentes; i++){
    prompt(`Ingrese apellido y nombre del alumno N°${i}:`);
}

alert('Gracias por ayudarme a pasar lista!');

