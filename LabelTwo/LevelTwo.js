var students = [ 'ram', 'shyam', 'hari' ];


function SimpleArray(students){
  while (true) {

  var something = prompt("What do you want to do? add, remove, display or quit?");
  if (something == 'add'){
    var newName = prompt("Write the name of the student to be added.");
    students.push(newName);
  }
  else if(something == 'remove'){
    var removeName = prompt("Enter the name of the student to be removed.");
    students.pop(removeName);
  }
  else if ( something == 'display' ){
    console.log(students);
  }

  else if ( something == 'quit' ){
    break;
  }
  else {
    prompt('please enter the valid input');
  }



}
}
