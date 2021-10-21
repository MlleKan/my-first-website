alert("HI THERE, WELCOME TO MY WORLD") 

setInterval(myTimer,1000);

function myTimer() {
    const d = new Date();
    document.getElementById("Clock").innerHTML = d.toLocaleDateString();
}