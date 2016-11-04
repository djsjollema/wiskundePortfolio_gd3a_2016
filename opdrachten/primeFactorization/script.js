var myInput = document.getElementById("myInput");
var myButton = document.getElementById("myButton");
var myDiv = document.getElementById("myDiv");
var number;

myButton.addEventListener('click',()=>{
  number = Number(myInput.value);
  myDiv.innerHTML = number.primeFactorization();
})
