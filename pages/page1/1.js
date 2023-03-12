let newDiv = document.createElement('div');
newDiv.style.height= '50px';
newDiv.style.width = '200px';
newDiv.style.background = 'red';

let description = document.createElement('p');
description.innerHTML = 'En ocasiones veo muertos… (El Sexto Sentido)';

newDiv.appendChild(description);

console.log(newDiv);

document.getElementById('lectura').appendChild(newDiv)