let newDiv = document.createElement('div');
newDiv.style.height= '80px';
newDiv.style.width = '200px';
newDiv.style.background = 'red';

let description = document.createElement('p');
description.innerHTML = 'Tengo miedo de cerrar los ojos. Tengo miedo de abrirlos. (El Proyecto de la Bruja de Blair)';

newDiv.appendChild(description);

console.log(newDiv);

document.getElementById('lec').appendChild(newDiv)