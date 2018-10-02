function calc()
{
  //converts string to intingers
var a = parseInt(document.querySelector("#value1").value);
var b = parseInt(document.querySelector("#value2").value);
var op =(document.querySelector("#operator").value;
var calculate;

//calculations
if (op == "add") {
calculate = a + b;
}else if (op == "min"){
 calculate = a - b;
}else if (op == "div"){
 calculate = a / b;
}else if (op == "mul"){
 calculate = a * b;
 }
 document.querySelector("#result").innerHTML = calculate;
}

//_______________________________________________________________________

function BMIcalc()
{
  //get user inputs
  var w_txt =document.getElementById('weight');
  var h_txt =document.getElementById('height');
  //from string to interval
  var w = parseInt(w_txt.value);
  var h = parseInt(w_txt.value);

  //Validate my inputs
  var errMsg = "";
  if ( w<= 0)
  {
    errMsg = errMsg + "* Weight cannot be negative\n";
  }
  if ( h<= 0)
  {
    errMsg = errMsg + "* Weight cannot be negative\n";
  }
  if (errMsg != "")
  {
    alert(errMsg);
  }

}
