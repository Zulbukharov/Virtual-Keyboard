/*
    keyboard table generator
*/
let box = document.createElement("div");

// let d = document.createElement("div");
//   d.innerHTML = `
//   "${e.code}": {<br>
//     "e": "${e.key}",<br>
//     "r": "2",<br>
//     "R": "2",<br>
//     "E": "2",<br>
// },<br>
//   `

let l = "";
const keyListener = (e) => {
  console.log(e);

  if (e.key === "Control" || e.key === "Shift")
    return;

  if (l === "") {
    l += `"${e.code}": {<br>
        "e": "${e.key}",<br>`;
  } else if (l.split("<br>").length === 3) {
    l += `"E": "${e.key}",<br>`;
  } else if (l.split("<br>").length === 4) {
    l += `"r": "${e.key}",<br>`;
  } else if (l.split("<br>").length === 5) {
    l += `"R": "${e.key}",<br>},<br>`;
    box.innerHTML += l;
    l = "";
  }
};

document.addEventListener("keydown", keyListener);

document.body.appendChild(box);
