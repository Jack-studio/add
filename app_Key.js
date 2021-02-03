document.querySelector('.input').onkeypress = () => {
     console.log(event.keyCode);
    if (event.keyCode > 47 && event.keyCode < 58){
        document.querySelector('.input-in').value = true;}
            else{document.querySelector('.input-in').value = false}
 }




 document.onkeypress = () => {
    if (event.keyCode == 119 && 113) {
        console.log('+');
    }
}




  