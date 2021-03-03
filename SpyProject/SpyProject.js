function SearchSpy(){
  FirstName = document.getElementById('FirstName').value
  LastName = document.getElementById('LastName').value
  Age = document.getElementById('Age').value
  Height =document.getElementById('Height').value
  PetName = document.getElementById('PetName').value

  if ( FirstName[0] == 'J' && LastName[0] == 'J' ) {
    if (Age >= 20 && Age <= 30)
    {
      if ( Height == 170 ){
        if (PetName[PetName.length - 1] == 'y'){
          console.log('Hello Secret Agent');}
        else{
          alert('random');
        }
        }
      }
    }

}
