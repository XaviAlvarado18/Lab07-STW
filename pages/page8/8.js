let newDiv = document.createElement('div');
newDiv.style.height= '50px';
newDiv.style.width = '200px';
newDiv.style.background = 'red';

let description = document.createElement('p');
description.innerHTML = 'Está vivo, ¡está vivo! (Frankenstein)';

newDiv.appendChild(description);

console.log(newDiv);

document.getElementById('lec').appendChild(newDiv)