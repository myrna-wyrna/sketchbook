/*
Heyo! Updated the script so that it's more compact.
Thanks for adding page numbers and such! 😊.
Your original code is still at the bottom in case of us
needing to revert the code back.

There's some new test images now, but I haven't
implemented them yet. Feel free to add more test images!

(also added comments to explain code)
*/

let click = false; 

let leftPage = document.getElementById('leftPage');
let rightPage = document.getElementById('rightPage');

let pageTriggers = document.getElementsByClassName('pageTrigger');

let currentSpread = 0;
const bookContent = [
  { left: "Page1", right: "Page2" },          
  { left: "Page3", right: "Page4" },
  { left: "Page5", right: "Page6" },
  { left: "Page7", right: "Page8" }
];

// ADD ALL IMAGE FILE NAMES (WITH FILE EXTENSIONS) HERE (Does not need to be numerical)
const imageFiles = [ 
  "1.png",
  "2.jpg",
  "three.svg",
]

console.log('leftPage element:', leftPage);
console.log('rightPage element:', rightPage);



Array.from(pageTriggers).forEach(page => {  // Turn HTMLCollection to a true array, then do the following for each element (left and right triggers).

  page.addEventListener("click", () => {    // Pages listen to when they are clicked.

    if(click != true){                      // NOTE: If click is true that means the page turn anim is playing.
      if (page == leftPage) {               // Was it the left page clicked?
        if (currentSpread > 0) {            // Check if there are more pages (left)
          currentSpread--;
          page.classList.add("pageLift");
          click = true;
        }
      } else if (page == rightPage) {       // Was it the right page clicked?
        if (currentSpread < bookContent.length - 1) { // Check if there are more pages (right)
          currentSpread++;
          page.classList.add("pageLift");
          click = true;
        }
      }
      updateBookContent();
    }
  });

  page.addEventListener("animationend", () => { //when animation ends remove CSS from element and click = false (allows for pages to be clicked again).
    page.classList.remove("pageLift");          // Remove page flip animation
    click = false;
  });

});

/* Myn's code
leftPage.addEventListener("mouseover", () => {
  leftPage.style.transformOrigin = "right";
    leftPage.style.transform = "scaleX(0.9)";
  });
leftPage.addEventListener("mouseout", () => {
    leftPage.style.transform = "scaleX(1)";
  });

leftPage.addEventListener("click", () => {
    if(click == true){
    }else{
      if (currentSpread > 0) {
        currentSpread--;
        updateBookContent();
        leftPage.classList.add("pageLift");
        click = true;
      }
    }
  });
leftPage.addEventListener("animationend", () => {
    leftPage.classList.remove("pageLift");
    click = false;
  });



rightPage.addEventListener("mouseover", () => {
  rightPage.style.transformOrigin = "left";
    rightPage.style.transform = "scaleX(0.9)";
  });
rightPage.addEventListener("mouseout", () => {
    rightPage.style.transform = "scaleX(1)";
  });

rightPage.addEventListener("click", () => {
    if(click == true){
    } else{
      if (currentSpread < bookContent.length - 1) {
        currentSpread++;
        updateBookContent();
        rightPage.classList.add("pageLift");
        click = true;
      }
    }
  });
rightPage.addEventListener("animationend", () => {
    rightPage.classList.remove("pageLift");
    click = false;
  });
*/

function updateBookContent() {
  //const leftPage = document.querySelector('#leftPage .page-content');
  //const rightPage = document.querySelector('#rightPage .page-content');
  leftPage.innerHTML = bookContent[currentSpread].left;       // Edit page text (left).
  rightPage.innerHTML = bookContent[currentSpread].right;     // Edit page text (right).
  console.log("Current spread:", currentSpread, bookContent[currentSpread]);

  let pageImg1 = document.createElement("img");     // Left page image.
  let pageImg2 = document.createElement("img");     // Right page image.

  //Left page
  let lftPgNum = Number(bookContent[currentSpread].left.replace("Page", "")) - 1; // Get left page number from currentSpread dictionary.
  console.log("/TEST IMAGES/" + imageFiles[lftPgNum]);
  pageImg1.src = "/TEST IMAGES/" + imageFiles[lftPgNum];          // Set image element source
  pageImg1.id = bookContent[currentSpread].left;          //  Set image element ID
  leftPage.append(pageImg1);          // Append the final image element.
  console.log("#" + pageImg1.id);

  //Right page (essentially works the same as previous code)
  let rtPgNum = Number(bookContent[currentSpread].right.replace("Page", "")) - 1; // Get right page number from currentSpread dictionary.
  pageImg2.src = "/TEST IMAGES/" + imageFiles[rtPgNum];
  pageImg2.id = bookContent[currentSpread].right;
  rightPage.append(pageImg2);
  console.log("#" + pageImg2.id);

  //console.log(document.getElementById(bookContent[currentSpread].left));
  //console.log(document.getElementById(bookContent[currentSpread].right));
};

updateBookContent();