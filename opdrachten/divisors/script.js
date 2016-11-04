var myDiv = document.getElementById("myDiv");

var myTabel = document.createElement('table');
myTabel.border ="1";
myTabel.cellPadding = "4";

var numMax = 1000;
var myArray = [];

for(let i = 2; i<numMax; i++){
    var myRow  = [];
    myRow.push(i);
    myRow.push(i.divisors());
    myRow.push(i.divisors().length);
    myArray.push(myRow);
}
myArray.sort(function(a,b){
    return b[2]-a[2];
})

for(let i=0;i<myArray.length; i++){
    let tr = myTabel.insertRow();
    tr.insertCell().innerHTML = myArray[i][0];
    tr.insertCell().innerHTML = myArray[i][1];
    tr.insertCell().innerHTML = myArray[i][2];
}

myDiv.appendChild(myTabel);
