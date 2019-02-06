//Amount of previous reservations
var reservations = 44;
//max allowed additional reservations
var max = reservations + 6;
//Create amount var
var amount = reservations + 1;

//Calling the DOMz for the spots id
var num = document.getElementById("spots");

var elem = document.getElementById("myBar");
elem.style.width = reservations + '%';
var id = setInterval(frame,1);
    
function frame(){
if (amount < reservations){
        clearInterval(id);
    }
}
function cancelSpot(){
  amount--;
  if (amount <= reservations) {
      amount = reservations;
  }
  elem.style.width = amount + '%';
  num.textContent = "There are " + (100 - amount) + " reservations left. You may add " + (max - amount) +" more.";
}
function reserveSpot(){
   amount++;
   if (amount > max) {
       amount = max;
   }
    elem.style.width = amount + '%';
   num.textContent = "There are " + (100 - amount) + " reservations left. You may add " + (max - amount )
   + " more.";
}