console.log('hello!');

let leftTrigger = document.getElementById('leftTrigger');
let rightTrigger = document.getElementById('rightTrigger');

leftTrigger.addEventListener("mouseover", () => {
  leftTrigger.style.transformOrigin = "right";
    leftTrigger.style.transform = "scaleX(0.9)";
  });
leftTrigger.addEventListener("mouseout", () => {
    leftTrigger.style.transform = "scaleX(1)";
  });

leftTrigger.addEventListener("click", () => {
    leftTrigger.classList.add("pageLiftL");
  });
leftTrigger.addEventListener("animationend", () => {
    leftTrigger.classList.remove("pageLiftL");
  });



rightTrigger.addEventListener("mouseover", () => {
  rightTrigger.style.transformOrigin = "left";
    rightTrigger.style.transform = "scaleX(0.9)";
  });
rightTrigger.addEventListener("mouseout", () => {
    rightTrigger.style.transform = "scaleX(1)";
  });

rightTrigger.addEventListener("click", () => {
    rightTrigger.classList.add("pageLiftR");
  });
rightTrigger.addEventListener("animationend", () => {
    rightTrigger.classList.remove("pageLiftR");
  });