//Calculate the Tip
function calculateTip() {
    const amountofBill = document.querySelector<HTMLInputElement>("#bill")!.value; //Billamount
    const service = document.querySelector<HTMLInputElement>("#service")!.value; // Percentage of Service
    var sharedByPeople = document.querySelector<HTMLInputElement>("#people")!.value; //Number of People

  
    //check input -> if user wrote sometinh in input field or choosed an option  
    if (amountofBill === "" || service  == `${0}`) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (sharedByPeople === "" || sharedByPeople <= `${1}`) {
      sharedByPeople =  `${1}`;
      document.getElementById("each")!.style.display = "none";
    } else {
      document.getElementById("each")!.style.display = "block";
    }
    
    //Calculate the actual tip
    var total = (<any>amountofBill * <any>service) / <any>sharedByPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = parseFloat(total.toFixed(2));  
    //Show the tip 
    document.getElementById("totalTip")!.style.display = "block";
    document.querySelector<HTMLElement>("#tip")!.innerHTML = `${total}`;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip")!.style.display = "none";
  document.getElementById("each")!.style.display = "none";
  
  //click to call function
  document.getElementById("calculate")!.onclick = function() {
    calculateTip();
  
  };
  //const button = document.querySelector<HTMLElement>('#calculate');
//button!.onclick = () => {
  //calculateTip();
//}
