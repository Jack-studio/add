



    
/*let k = 4;
let ost = '';
let p = 0;
let h1 = document.querySelector('.out');
let button = document.querySelector('button');
button.onclick = function (f1) {
    while (p < 5) {
        
        let p1 = 0;
        while (p1 < 4) {
            if (p1 < k) {
                ost += 'k';
            } else {
                ost += 'p';
            }
             p1++;
            
        }k--;
        ost += '<br>';
        p++;
      }
    h1.innerHTML = ost;
    }  */
    







/*let button = document.querySelector('button');     
let h1 = document.querySelector('.out');

button.onclick = function (f1) {

    for (let i = 1; i < 4; i= i+2) {
        h1.innerHTML += i + '<br>';
        for (let k = 0; k < 8; k++) {
         h1.innerHTML += '*'+'_';
        } 
        h1.innerHTML += '<br>';
    }

} */






/*let button = document.querySelector('button');     
let h1 = document.querySelector('.out');

button.onclick = function (f1) {
    let x = 27;
    
    while (x >= 7){
        
    h1.innerHTML += `${x}${' '}`;   
    x = x-2;
}
}*/






/*let k = 1; //k
let ost = '';
let p = 5; //p
let h1 = document.querySelector('.out');
let button = document.querySelector('button');
button.onclick = function (f1) {
    while (k < 5) {
        
        let p1 = 0; // calc elem
        while (p1 < 5) {
            if (p1 < k) {
                ost += 'k';
            } else {
                ost += 'p';
            }
             p1++;
            
        }k++;
        ost += '<br>';
        p--;
      }
    h1.innerHTML = ost;
    }  */





/*let est = '';
let k = 5;
let ost = '';
let p = 0;
let h1 = document.querySelector('.out');
let button = document.querySelector('button');
button.onclick = function (f1) {
    while (p < 9) {
        let r = 2;
        //est = r;
        let p1 = 0;
        while (p1 < 5) {
            if (p1 < k || k < r) {
                ost += 'k'; est += '0';
            } else {
               ost += '';
               //est += 'k'; 
            }
             p1++;
            r--;
        }k--;
        ost += '<br>'; est +='<br>'
        p++;
      }
    h1.innerHTML = `${ost}${est}`;
    } */






/*let k = 1; //k
let ost = '';
let p = 5; //p
let h1 = document.querySelector('.out');
let button = document.querySelector('button');
button.onclick = function (f1) {
    while (k < 5) {
        
        let p1 = 0; // calc elem
        while (p1 < 5) {
            if (p1 < k) {
                ost += 'k';
            } else {
                ost += 'p';
            }
             p1++;
            
        }k++;
        ost += '<br>';
        p--;
      }
    h1.innerHTML = ost;
    }  */






//let est = '';
let k = 4;  // k
let ost = '';
let p = 0;  // strings
let h1 = document.querySelector('.out');
let button = document.querySelector('button');
button.onclick = function (f1) {
    while (p < 7) {
        let r = 4;  // <= ; littless  k
        //est = r;
        let p1 = 0; // <=
        while (p1 < 5) {
            if (p1 < k || k < r) {
                ost += ''; //est += '0';
            } else {
               ost += 'k';
               //est += ''; 
            }
             p1++;
            r--;
        }k--;
        ost += '<br>'; //est +='<br>'
        p++;
      }
    h1.innerHTML = `${ost}`; //+${est}
    } 