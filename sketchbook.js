console.log('hello!');

let click = false; 
let leftTrigger = document.getElementById('leftTrigger');
let rightTrigger = document.getElementById('rightTrigger');
let currentSpread = 0;
const bookContent = [
  { left: "Page1", right: "Page2" },          
  { left: "Page3", right: "Page4" },
  { left: "Page5", right: "Page6" },
  { left: "Page7", right: "Page8" }
];


leftTrigger.addEventListener("mouseover", () => {
  leftTrigger.style.transformOrigin = "right";
    leftTrigger.style.transform = "scaleX(0.9)";
  });
leftTrigger.addEventListener("mouseout", () => {
    leftTrigger.style.transform = "scaleX(1)";
  });

leftTrigger.addEventListener("click", () => {
    if(click == true){
    }else{
      if (currentSpread > 0) {
        currentSpread--;
        updateBookContent();
        leftTrigger.classList.add("pageLiftL");
        click = true;
      }
    }
  });
leftTrigger.addEventListener("animationend", () => {
    leftTrigger.classList.remove("pageLiftL");
    click = false;
  });



rightTrigger.addEventListener("mouseover", () => {
  rightTrigger.style.transformOrigin = "left";
    rightTrigger.style.transform = "scaleX(0.9)";
  });
rightTrigger.addEventListener("mouseout", () => {
    rightTrigger.style.transform = "scaleX(1)";
  });

rightTrigger.addEventListener("click", () => {
    if(click == true){
    } else{
      if (currentSpread < bookContent.length - 1) {
        currentSpread++;
        updateBookContent();
        rightTrigger.classList.add("pageLiftR");
        click = true;
      }
    }
  });
rightTrigger.addEventListener("animationend", () => {
    rightTrigger.classList.remove("pageLiftR");
    click = false;
  });

function updateBookContent() {
  const leftPage = document.querySelector('.left-page');
  const rightPage = document.querySelector('.right-page');
};

/* what spacehedgie made, in case i mess up:
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
  });*/
