/*let h1 = document.querySelector('.out');
let button = document.querySelector('button');     

button.onclick = function () {
    let a = Math.ceil(Math.random() * 10);
    let i = Math.ceil(Math.random() * 10);
     document.querySelector('.input').value = a;
     document.querySelector('.input-in').value = i;
     let qwe = [1, true];
          
    if (i >= a){
        h1.innerHTML = qwe;
        console.log(qwe.length);
   }else if(i < a){
        qwe[1] = false;
        h1.innerHTML = qwe;
        console.log(qwe.length);
   }
} */






/*let b = [2, 6, 90, 0, 65];
let min = b[0];
let max = b[0];

for (let i = 0; i < b.length; i++) {
     if (b[i] < min) {
          min = b[i];
     }
     if (b[i] > max) {
          max = b[i];
     }
}

let sum = 0;
for (let i = 0; i < b.length; i++) {
     sum = sum + b[i];
}

let h1 = document.querySelector('.out');
h1.innerHTML = `${+min} ${+sum} ${b} ${max}`;*/



/*let input = document.querySelector('.input');
let inputIn = document.querySelector('.input-in');

let button = document.querySelector('button');  
let h1 = document.querySelector('.out');
let d1 = [33,'best', 66, 'best']; 
let del = document.querySelector('.del');


button.onclick = function showArr() {
let a = input.value;
let i = inputIn.value;
let c = a + i;
     if (a = true) {
     d1.push(c);
   }
     h1.innerHTML = d1;
     console.log(d1.length);
} 

del.onclick = function () {
     
     let i = inputIn.value;
     d1.splice(i);
        
          h1.innerHTML = d1;
          console.log(d1.length);
}*/





/*let dif = [
     [1, 2, 3, 4],
     ['qwe', 'asd', 'zxc', 'rty'],
     ['', '@', '#', '$']
];
let h1 = document.querySelector('.out');
let button = document.querySelector('button');
let input = document.querySelector('.input');
let inputIn = document.querySelector('.input-in');

button.onclick = function () {
     let a = input.value;
     let i = inputIn.value;
     h1.innerHTML = dif[a][i]
}*/





let dif = {
     one: 1,
     two: 2,
     three: 3,
     '1 one': 4,
};
let h1 = document.querySelector('.out');
let button = document.querySelector('button');
let input = document.querySelector('.input');
let inputIn = document.querySelector('.input-in');

button.onclick = function () {
     let a = input.value;
     let i = inputIn.value;
     h1.innerHTML = `${dif[a]} ${dif[i]}`;
     }





/*let h1 = document.querySelector('.out');
let a3 = [4,"3",6,7,"12",34,"56",78,90,11];

a3_res = a3.filter((item) => {
     if(typeof(item) == 'number' == true){
     return  true
  }
});
console.log(a3_res);
h1.innerHTML = a3_res;*/
 
     



/*let h1 = document.querySelector('.out');
let button = document.querySelector('button');
let a3 = [4,"3",6,7,"12",34,"56",78,90,11];
button.onclick = function(){
a3_res = a3.map((item) => {
     return Number(item)
  });
console.log(a3_res);
h1.innerHTML = a3_res;
}*/




     /*let a0 = '1, 11, 111';
     console.log(a0.split());
a1 = [5, 10, 15, 20, 25];
//let a2 = a1.join();
     //console.log(a2);
a1.forEach(function(elem, index){
     let a2 = a1;
     console.log(a2);

     //console.log(index);
     console.log(elem);
     
})*/