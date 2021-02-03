let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');     
let h1 = document.querySelector('.out');
let a = new Set();
let del = document.querySelector('.del');
let input = document.querySelector('.input');

button.onclick = function (f1) {
    
    h1.innerHTML = a.add(input.value);
    console.log(a.add(input.value));
}

del.onclick = function () {
    
    h1.innerHTML = a.delete(inputIn.value);
    console.log(a.delete(inputIn.value));
}
