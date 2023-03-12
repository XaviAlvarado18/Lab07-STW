let newDiv = document.createElement('div');
newDiv.style.height= '60px';
newDiv.style.width = '200px';
newDiv.style.background = 'red';

let description = document.createElement('p');
description.innerHTML = 'Hagas lo que hagas, no te quedes dormido. (Pesadilla en Elm Street)';

newDiv.appendChild(description);

console.log(newDiv);

document.getElementById('lec').appendChild(newDiv)