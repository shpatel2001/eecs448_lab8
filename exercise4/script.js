function makeChanges()
{
 
  document.getElementById("border").style.border = "solid"
  var redBorder = document.getElementById("redBorder");
  var greenBorder = document.getElementById("greenBorder");
  var blueBorder = document.getElementById("blueBorder");
  var border_width = document.getElementById("border_w");

  var temp_width = border_width.value+"px";
  document.getElementById("border").style.borderWidth = temp_width;

  var temp_border_color = "rgb("+redBorder.value+","+greenBorder.value+","+blueBorder.value+")";
  document.getElementById("border").style.borderColor = temp_border_color;
  var bg_red = document.getElementById("bg_r");
  var bg_green = document.getElementById("bg_g");
  var bg_blue = document.getElementById("bg_b");

  var temp_bg_color = "rgb("+bg_red.value+","+bg_green.value+","+bg_blue.value+")";
  document.getElementById("border").style.backgroundColor = temp_bg_color;
}
