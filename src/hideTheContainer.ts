export function hideContainer() {
    var x = document.getElementById("container");
    if (x!.style.display === "none") {
      x!.style.display = "block";
    } else {
      x!.style.display = "none";
    }
  }