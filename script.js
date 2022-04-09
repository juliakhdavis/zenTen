const startBtn = document.querySelector("#startBtn")
const timeInputVal = document.getElementById("timeInput").value




function redirect () {
    
  
  window.location.href = "file:///Users/isaacluton/Documents/BootCamp/homework/zenTen/start.html"

  let timeInputVal = document.getElementById("timeInput").value

  localStorage.setItem("timeInput", timeInputVal)
}

function startBtnListener () {

  startBtn.addEventListener("click", redirect);

}

startBtnListener ();
