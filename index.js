function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }

alert("HI THERE, THANK YOU FOR VISITING MY WEBSITE")

setInterval(myTimer,1000);

function myTimer() {
    const d = new Date();
    document.getElementById("Date").innerHTML = d.toLocaleDateString();
}


let Name = prompt("Hello Please Enter Your Name")
console.log("Hi "+ (Name) + ",Nice To Meet You")
document.getElementById("result").innerHTML = alert("Hi "+ (Name) + ",Nice To Meet You")

  