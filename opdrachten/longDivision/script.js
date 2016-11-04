var myDiv = document.getElementById("myDiv");
var myTable = document.createElement('table');
var numberPair;
myTable.border = "1";
myTable.cellPadding = "4";

for(let i = 1; i<=100; i++){
  var myRow = myTable.insertRow();
  numberPair = new NumberPair(1,i);
  myRow.insertCell().innerHTML= "1/" + i;
  myRow.insertCell().innerHTML = numberPair.longDivision();
}
myDiv.appendChild(myTable);
