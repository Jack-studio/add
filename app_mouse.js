document.querySelector('.one').onclick = function (event) {
    console.log(event);
    console.log('click');
    let h1 = document.querySelector('.out');
    h1.innerHTML = '';
}

/*let h2 = document.querySelector('.out');
document.querySelector('.two').ondblclick = function KeyboardEvent() {
    if (ctrlKey = true){
    h2.innerHTML = true;
    console.log('dowble');
}}*/

document.querySelector('.two').oncontextmenu = () => {
    console.log('right button');
    return false;
}


//let button = document.querySelector('button');
//button.onclick = function imageChange (){
let h = 50;
let w = 50;
document.querySelector('.three').onmouseenter = function fun() {
    while (h <= 75 && w <= 75){
    document.querySelector('.three').style.height = h + 'px';
    document.querySelector('.three').style.width = w + 'px';
    h++; w++;}
    console.log(fun);
    } 
     
document.querySelector('.three').onmouseleave = function fun1() {
    while (h >= 5 && w >= 5) {
        document.querySelector('.three').style.height = h - '5px';
    document.querySelector('.three').style.width = w - '5px';
        h--; w--;
    }console.log(fun1);
    }  
    //}



    



    document.querySelector('.four').onclick = () => {
let ost = '';
let p = 0;
let wi = 4;
        while (p < 7) {
            let r = 2;
            let p1 = 0;
            while (p1 < 5) {
                if (p1 < wi||wi < r) {
                    ost += '';
                } else {
                   ost += 'k';
                }
                 p1++;
                r--; 
            }wi--;
            ost += '<br>'; 
            p++;
          }document.querySelector('.four').style.width = wi + '2px'; 
          document.querySelector('.four').style.width = wi - '2px';}




/*let k = 4;  // k
let ost = '';
let p = 0;  // strings
let h1 = document.querySelector('.out');
let button = document.querySelector('button');
button.onclick = function (f1) {
    while (p < 7) {
        let r = 2;  // <= ; littless  k
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
    } */