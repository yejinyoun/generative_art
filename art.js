"use strict";
console.log("art!!!!");

// 1. Box getting bigger - width and height of .box

// 1) create a div with class .box
// 2) .box gets styled with variable of style
//

art1();
art2();

function art1() {
  for (let i = 100; i <= 300; i += 20) {
    const box = document.createElement("div");
    box.className = `box`;
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    document.querySelector("#artwork1").appendChild(box);

    console.log(i);
  }
}

// 2. generates a div that has class of .box, and rotate;

function art2() {
  for (let i = 0; i <= 300; i += 10) {
    const box = document.createElement("div");
    box.className = "box";
    document.querySelector("#artwork2").appendChild(box);
    box.style.transform = `rotate(${i}deg)`;

    console.log(i);
  }
}
