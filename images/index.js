
//Gallery

alert("HI THERE, WELCOME TO MY WORLD") 


setInterval(myTimer,1000);
function myTimer() {
    const d = new Date();
    document.getElementById("Date").innerHTML = d.toLocaleDateString();
}

let Name = prompt("Hello Please Enter Your Name")
console.log("Hi "+ (Name) + ",Nice To Meet You")
document.getElementById("result").innerHTML = alert("Hi "+ (Name) + ",Nice To Meet You")
