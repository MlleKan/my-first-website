function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }

  const button = document.querySelector('button');

  button.addEventListener('click', event => {
    button.textContent = `Click count: ${event.detail}`;
  });
  
  
