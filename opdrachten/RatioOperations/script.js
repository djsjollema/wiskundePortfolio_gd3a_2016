var a_up,a_down,b_up,b_down,c_up,c_down;
var a,b,c
var is_button = document.getElementById("is_button");

is_button.addEventListener('click',()=>{
  a_up = document.getElementById("a_up").value;
  a_down = document.getElementById("a_down").value;
  b_up = document.getElementById("b_up").value;
  b_down= document.getElementById("b_down").value;

  a = new Ratio(a_up,a_down);
  b = new Ratio(b_up,b_down);
  c = a.add(b);
  document.getElementById("c_up").value = c.dividend;
  document.getElementById("c_down").value = c.divisor;
})
