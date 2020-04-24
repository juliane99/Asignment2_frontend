
export function popup() {
    const Popupbutton = document.querySelector("#popupButton");
    const allButtons = document.querySelector(".button-small");
    const popupButton = document.querySelector(".button-popup");
    const container = document.querySelector("#container");
    const PopupClose = document.querySelector("#closePopup");
    
    Popupbutton!.addEventListener("click", displayPopUp);
    PopupClose!.addEventListener("click", closePopUp);
    
    function displayPopUp(){
        allButtons!.classList.add("blur");
        popupButton!.classList.add("blur");
        container!.classList.add("blur");
        document.getElementById("popup")!.style.display = "block";
    }
    
    function closePopUp(){
        allButtons!.classList.remove("blur");
        popupButton!.classList.remove("blur");
        container!.classList.remove("blur");
        document.getElementById("popup")!.style.display = "none";
    }
    
    }
    