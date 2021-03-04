
var employee = {
  name : "John Smith",
  job : "Programmer",
  age : 31

}
employee['nameLength'] = function(){ console.log("The length is: "+this.name.length); }


function DictionaryPrinter(employee) {
  for (  key in employee) {
      alert( `${key} is ${employee[key]}` );
    }

}

function LastName(){
  console.log(employee.name.split(" ")[1]);
}
