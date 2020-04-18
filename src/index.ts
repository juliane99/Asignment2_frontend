//Calculate the Tip
function calculateTip() {
    var amountofBill = document.getElementById("bill").value;
    var service = document.getElementById("service").value;
    var sharedByPeople = document.getElementById("people").value;
  
    //check input -> if user wrote sometinh in input field or choosed an option  
    if (amountofBill === "" || service  == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (sharedByPeople === "" || sharedByPeople <= 1) {
      sharedByPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //Calculate the actual tip
    var total = (amountofBill * service) / sharedByPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Show the tip 
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };