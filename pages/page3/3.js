let newDiv = document.createElement('div');
newDiv.style.height= '100px';
newDiv.style.width = '200px';
newDiv.style.background = 'red';

let description = document.createElement('p');
description.innerHTML = 'Cuando no haya más espacio en el infierno, los muertos caminarán sobre la tierra. (El amanecer de los muertos vivientes)';

newDiv.appendChild(description);

console.log(newDiv);

document.getElementById('lec').appendChild(newDiv)