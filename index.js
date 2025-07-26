const boxes = document.querySelectorAll(".box")
const input = document.querySelector("input");
let str = "";
boxes.forEach(( box) => {
    box.addEventListener("click", (e) => {
          str += box.value; 
        input.value = str;
  if(e.target.innerText === "=") {
    str = eval(str);
    input.value = str
  } else if(e.target.innerText === "AC") {
    str = "";
    input.value = str
  }  else if(e.target.innerText === "DEL") {
    str = str.slice(0,-1)
     input.value = str
  }

    })
});
