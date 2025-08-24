console.log('hello!');

let click = false; 
let leftTrigger = document.getElementById('leftTrigger');
let rightTrigger = document.getElementById('rightTrigger');
let currentSpread = 0;
const bookContent = [
  { left: "Page1", right: "Page2 },          
  { left: "Page3", right: "Page4" },
  { left: "Page5", right: "Page6" },
  { left: "Page7", right: "Page8" }
];

console.log('leftTrigger element:', leftTrigger);
console.log('rightTrigger element:', rightTrigger);
console.log('leftPage element:', document.querySelector('.left-page'));
console.log('rightPage element:', document.querySelector('.right-page'));

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
  const leftPage = document.querySelector('.left-page .page-content');
  const rightPage = document.querySelector('.right-page .page-content');
   leftPage.innerHTML = bookContent[currentSpread].left;
  rightPage.innerHTML = bookContent[currentSpread].right;
console.log("Current spread:", currentSpread, bookContent[currentSpread]);
};

updateBookContent();

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
