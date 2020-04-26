//Calculate the Tip
export function calculateTip() {
    const amountofBill = document.querySelector<HTMLInputElement>("#bill")!.value; //Billamount
    const service = document.querySelector<HTMLInputElement>("#service")!.value; // Percentage of Service
    var sharedByPeople = document.querySelector<HTMLInputElement>("#people")!.value; //Number of People

  
    //check input -> if user wrote sometinh in input field or choosed an option  
    if (amountofBill === "" || service  == `${0}` || sharedByPeople === "") {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is equal to 1 and then place each or not 
    if (sharedByPeople <= `${1}`) {
      sharedByPeople =  `${1}`;
      document.getElementById("each")!.style.display = "none";
    } else {
      document.getElementById("each")!.style.display = "block";
    }
    
    //Calculate the actual tip
    var total = (+amountofBill * +service) / +sharedByPeople;
    var totalbill = (+amountofBill / +sharedByPeople) + total;
    //round to two decimal places
    totalbill = Math.round(totalbill * 100) / 100;
    //next line allows us to always have two digits after decimal point
    totalbill = parseFloat(totalbill.toFixed(2));  
    //Show the tip 
    document.getElementById("totalTip")!.style.display = "block";
    document.querySelector<HTMLElement>("#tip")!.innerHTML = `${totalbill}`;
    
  }