function validate()
{
  var first = document.getElementById("pwd");
  var second = document.getElementById("pwd2");

  if(first.value.length < 8)
  {
    alert("Password needs to be at least 8 characters long");
  }
  else if(second.value.length < 8)
  {
    alert("Password needs to be at least 8 characters long");
  }
  else if(first.value != second.value)
  {
    alert("Password and Re enter does not match eachother");
  }
  else if(first.value == second.value)
  {
    alert("Congrats!! The passwords match eachother!");
  }
}
