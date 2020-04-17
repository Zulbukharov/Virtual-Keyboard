import { macKeyboard, specialSymbols } from "./js/keyboard.js";


class VirtualKeyboard {
  constructor() {}
}

let currentType = "e";

const getNewTypeAfterCapsLockOrShift = (type) => {
  if (type === "e") 
    currentType = "E";
   else if (type === "E") 
    currentType = "e";
  else if (type === "r")
    currentType = "R";
    else
    currentType = "r"
};

const getNewLanguage = (type) => {
    switch (type) {
        case "e":
            currentType = "r";
            break;
        case "E":
            currentType = "R";
            break;
        case "r":
            currentType = "e";
            break;
        case "R":
            currentType = "E";
            break;
    }
}

let inputBox = document.createElement("textarea");
inputBox.setAttribute("id", "area");
inputBox.setAttribute("rows", "50");
inputBox.setAttribute("cols", "50");
inputBox.focus();

let keyboardContainer = document.createElement("div");

let rows = [];

for (let i = 0; i < 5; i++) {
  rows[i] = document.createElement("div");
  rows[i].classList.add("flex-container");
}

let i = 1;
for (let keyCode in macKeyboard) {
  let key = document.createElement("div");
  key.setAttribute("id", keyCode);
  key.innerHTML = macKeyboard[keyCode].e;
  // first row
  if (i <= 14) {
    rows[0].appendChild(key);
    // second row
  } else if (i <= 28) {
    rows[1].appendChild(key);
    // third row
  } else if (i <= 41) {
    rows[2].appendChild(key);
    // fourth row
  } else if (i <= 54) {
    rows[3].appendChild(key);
    // fifth row
  } else {
    rows[4].appendChild(key);
  }
  i++;
}

const setKeyboardValues = (type) => {
  console.log(type);
  let rows = keyboardContainer.children;

  Array.from(rows).forEach((row) => {
    let elements = row.children;
    Array.from(elements).forEach((element) => {
      element.innerHTML = macKeyboard[element.id][type];
    });
  });
};

const keyEventDown = (e) => {
  e.preventDefault();
  let key = document.querySelector(`#${e.code}`);
  if (!key) {
    console.error(`error key ${e.code}`);
  }
  // if this key is shift, render new dom
  console.log(e);
  if (e.key === "Shift" || e.key === "CapsLock") {
    getNewTypeAfterCapsLockOrShift(currentType);
    setKeyboardValues(currentType);
  }
  if (e.key === "Alt" && e.ctrlKey) {
    getNewLanguage(currentType);
    setKeyboardValues(currentType);
  }
  if (e.key in specialSymbols) {
    specialSymbols[e.key](inputBox);
  } else {
    inputBox.value += macKeyboard[e.code][currentType];
  }

  key.classList.add("pressed");
};

const keyEventUp = (e) => {
  e.preventDefault();
  let key = document.querySelector(`#${e.code}`);
  if (!key) {
    console.error(`error key ${e.code}`);
  }
  if (e.key == "Shift" || e.key === "CapsLock") {
    getNewTypeAfterCapsLockOrShift(currentType);
    setKeyboardValues(currentType);
  }
  key.classList.remove("pressed");
};

document.addEventListener("keydown", keyEventDown);
document.addEventListener("keyup", keyEventUp);

for (let i = 0; i < 5; i++) {
  keyboardContainer.appendChild(rows[i]);
  //   document.body.appendChild(rows[i]);
}

document.body.appendChild(inputBox);
document.body.appendChild(keyboardContainer);

window.onload = function () {
  document.querySelector("textarea").focus();
};
