// import validator from './validator.js';


/* eye option -show password*/
let eyeSelected= false;
const eye = document.getElementById("eye");
eye.addEventListener("click", function toggle(){
  if(eyeSelected){
    document.getElementById("numberInput").setAttribute("type","password");
    eyeSelected=false;
  }   
  else{
    document.getElementById("numberInput").setAttribute("type","text");
    eyeSelected=true;
  }});

// only accept numbers in numberInput
const inputOnlyNumbers = document.getElementById("numberInput");   
inputOnlyNumbers.addEventListener("keypress", function onlyNumbers(x){
  let digitKeycode = inputOnlyNumbers.event ?  x.which :x.keyCode;
      if (digitKeycode < 48 || digitKeycode > 57) {
        x.preventDefault();
       }
    }); 



// console.log(validator);
