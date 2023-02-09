"use strict";
console.log("art!!!!");

// 1. Box getting bigger - width and height of .box

// 1) create a div with class .box
// 2) .box gets styled with variable of style
//

art1();
art2();
art3();
art4();
art5();
art6();

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

// 3. generates circles that changes width and height

function art3() {
  for (let i = 0; i <= 200; i += 10) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = `${i}px`;
    circle.style.height = `${i}px`;
    document.querySelector("#artwork3").appendChild(circle);
    console.log(i);
  }
}

// 4. box moving (translating)

function art4() {
  for (let i = -90; i <= 90; i += 20) {
    const box = document.createElement("div");
    box.className = "box";
    document.querySelector("#artwork4").appendChild(box);
    box.style.transform = `translate(${i}px,${i}px)`;

    console.log(i);
  }
}

//5. circle getting bigger

function art5() {
  for (let i = 1; i <= 512; i *= 2) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = `${i}px`;
    circle.style.height = `${i}px`;
    document.querySelector("#artwork5").appendChild(circle);
    console.log(i);
  }
}

// 6. circle translating and rotating

function art6() {
  for (let i = -20; i <= 45; i += 5) {
    const circle = document.createElement("div");
    circle.className = "circle";
    document.querySelector("#artwork6").appendChild(circle);
    circle.style.transform = `translate(${i - 50}px)`;
    circle.style.transform = `rotate(${i * 4}deg)`;
    console.log(i);
  }
}
