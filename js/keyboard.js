// export const die = () => console.log(2366);

/*
5 rows
14
14
13
13
11
*/

export const specialSymbols = {
  Backspace: (inputBox) =>
    (inputBox.value = inputBox.value.substring(0, inputBox.value.length - 1)),
  Tab: (inputBox) => (inputBox.value += "\t"),
  Meta: (inputBox) => inputBox,
  Enter: (inputBox) => (inputBox.value += "\n"),
  Shift: (inputBox) => inputBox,
  Control: (inputBox) => inputBox,
  Alt: (inputBox) => inputBox,
  CapsLock: (inputBox) => inputBox,
  ArrowLeft: (inputBox) => {
    console.log(inputBox.cols);
    inputBox.selectionEnd -= 1;
    inputBox.selectionStart = inputBox.selectionEnd;
    // split by newline
    console.log(inputBox.selectionStart, inputBox.selectionEnd);
    // return to n element
    inputBox.focus();
  },
  ArrowRight: (inputBox) => {
    console.log(inputBox.selectionStart, inputBox.selectionEnd);
    inputBox.selectionStart = inputBox.selectionEnd + 1;
    inputBox.focus();
  },
  // looking for last newline, depends on current cursor
  ArrowUp: (inputBox) => {
    // console.log(
    //   val.substring(0, inputBox.selectionStart - 1).lastIndexOf("\n")
    // );
    // console.log(inputBox.selectionEnd);
    let val = inputBox.value;
    let indexOfLastNewLine = val
      .substring(0, inputBox.selectionStart)
      .lastIndexOf("\n");
    indexOfLastNewLine = indexOfLastNewLine === -1 ? 0 : indexOfLastNewLine;
    inputBox.selectionEnd = indexOfLastNewLine;
    inputBox.focus();
    // inputBox.selectionStart -= indexOfLastNewLine + 1;
    // console.log(inputBox.selectionEnd);
    // console.log(inputBox.value.split("\n"));
  },
  ArrowDown: (inputBox) => {
    let val = inputBox.value;
    console.log(val.split(''));
    console.log(inputBox.selectionEnd);
    let indexOfNext = val
      .lastIndexOf("\n", inputBox.selectionEnd + 4);
    console.log(indexOfNext);
    indexOfNext = indexOfNext === -1 ? 0 : indexOfNext;
    inputBox.selectionStart = indexOfNext;
    inputBox.focus();
  },
};

export const macKeyboard = {
  Backquote: {
    e: "§",
    E: "±",
    r: "ё",
    R: "Ё",
  },
  Digit1: {
    e: "1",
    E: "!",
    r: "1",
    R: "!",
  },
  Digit2: {
    e: "2",
    E: "@",
    r: "2",
    R: '"',
  },
  Digit3: {
    e: "3",
    E: "#",
    r: "3",
    R: "№",
  },
  Digit4: {
    e: "4",
    E: "$",
    r: "4",
    R: ";",
  },
  Digit5: {
    e: "5",
    E: "%",
    r: "5",
    R: "%",
  },
  Digit6: {
    e: "6",
    E: "^",
    r: "6",
    R: ":",
  },
  Digit7: {
    e: "7",
    E: "&",
    r: "7",
    R: "?",
  },
  Digit8: {
    e: "8",
    E: "*",
    r: "8",
    R: "*",
  },
  Digit9: {
    e: "9",
    E: "(",
    r: "9",
    R: "(",
  },
  Digit0: {
    e: "0",
    E: ")",
    r: "0",
    R: ")",
  },
  Minus: {
    e: "-",
    E: "_",
    r: "-",
    R: "_",
  },
  Equal: {
    e: "=",
    E: "+",
    r: "=",
    R: "+",
  },
  Backspace: {
    e: "Backspace",
    E: "Backspace",
    r: "Backspace",
    R: "Backspace",
  },
  Tab: {
    e: "Tab",
    E: "Tab",
    r: "Tab",
    R: "Tab",
  },
  KeyQ: {
    e: "q",
    E: "Q",
    r: "й",
    R: "Й",
  },
  KeyW: {
    e: "w",
    E: "W",
    r: "ц",
    R: "Ц",
  },
  KeyE: {
    e: "e",
    E: "E",
    r: "у",
    R: "У",
  },
  KeyR: {
    e: "r",
    E: "R",
    r: "к",
    R: "К",
  },
  KeyT: {
    e: "t",
    E: "T",
    r: "е",
    R: "Е",
  },
  KeyY: {
    e: "y",
    E: "Y",
    r: "н",
    R: "Н",
  },
  KeyU: {
    e: "u",
    E: "U",
    r: "г",
    R: "Г",
  },
  KeyI: {
    e: "i",
    E: "I",
    r: "ш",
    R: "Ш",
  },
  KeyO: {
    e: "o",
    E: "O",
    r: "щ",
    R: "Щ",
  },
  KeyP: {
    e: "p",
    E: "P",
    r: "з",
    R: "З",
  },
  BracketLeft: {
    e: "[",
    E: "{",
    r: "х",
    R: "Х",
  },
  BracketRight: {
    e: "]",
    E: "}",
    r: "ъ",
    R: "Ъ",
  },
  Enter: {
    e: "Enter",
    E: "Enter",
    r: "Enter",
    R: "Enter",
  },
  CapsLock: {
    e: "CapsLock",
    E: "CapsLock",
    r: "CapsLock",
    R: "CapsLock",
  },
  KeyA: {
    e: "a",
    E: "A",
    r: "ф",
    R: "Ф",
  },
  KeyS: {
    e: "s",
    E: "S",
    r: "ы",
    R: "Ы",
  },
  KeyD: {
    e: "d",
    E: "D",
    r: "в",
    R: "В",
  },
  KeyF: {
    e: "f",
    E: "F",
    r: "а",
    R: "А",
  },
  KeyG: {
    e: "g",
    E: "G",
    r: "п",
    R: "П",
  },
  KeyH: {
    e: "h",
    E: "H",
    r: "р",
    R: "Р",
  },
  KeyJ: {
    e: "j",
    E: "J",
    r: "о",
    R: "О",
  },
  KeyK: {
    e: "k",
    E: "K",
    r: "л",
    R: "Л",
  },
  KeyL: {
    e: "l",
    E: "L",
    r: "д",
    R: "Д",
  },
  Semicolon: {
    e: ";",
    E: ":",
    r: "ж",
    R: "Ж",
  },
  Quote: {
    e: "'",
    E: '"',
    r: "э",
    R: "Э",
  },
  Backslash: {
    e: "\\",
    E: "|",
    r: "\\",
    R: "/",
  },
  ShiftLeft: {
    e: "Shift",
    E: "Shift",
    r: "Shift",
    R: "Shift",
  },
  IntlBackslash: {
    e: "`",
    E: "~",
    r: "]",
    R: "[",
  },
  KeyZ: {
    e: "z",
    E: "Z",
    r: "я",
    R: "Я",
  },
  KeyX: {
    e: "x",
    E: "X",
    r: "ч",
    R: "Ч",
  },
  KeyC: {
    e: "c",
    E: "C",
    r: "с",
    R: "С",
  },
  KeyV: {
    e: "v",
    E: "V",
    r: "м",
    R: "М",
  },
  KeyB: {
    e: "b",
    E: "B",
    r: "и",
    R: "И",
  },
  KeyN: {
    e: "n",
    E: "N",
    r: "т",
    R: "Т",
  },
  KeyM: {
    e: "m",
    E: "M",
    r: "ь",
    R: "Ь",
  },
  Comma: {
    e: ",",
    E: "<",
    r: "б",
    R: "Б",
  },
  Period: {
    e: ".",
    E: ">",
    r: "ю",
    R: "Ю",
  },
  Slash: {
    e: "/",
    E: "?",
    r: ".",
    R: ",",
  },
  ShiftRight: {
    e: "Shift",
    E: "Shift",
    r: "Shift",
    R: "Shift",
  },
  FN: {
    e: "FN",
    E: "FN",
    r: "FN",
    R: "FN",
  },
  ControlLeft: {
    e: "Control",
    E: "Control",
    r: "Control",
    R: "Control",
  },
  AltLeft: {
    e: "Alt",
    E: "Alt",
    r: "Alt",
    R: "Alt",
  },
  MetaLeft: {
    e: "Meta",
    E: "Meta",
    r: "Meta",
    R: "Meta",
  },
  Space: {
    e: " ",
    E: " ",
    r: " ",
    R: " ",
  },
  MetaRight: {
    e: "Meta",
    E: "Meta",
    r: "Meta",
    R: "Meta",
  },
  AltRight: {
    e: "Alt",
    E: "Alt",
    r: "Alt",
    R: "Alt",
  },
  ArrowLeft: {
    e: "ArrowLeft",
    E: "ArrowLeft",
    r: "ArrowLeft",
    R: "ArrowLeft",
  },
  ArrowUp: {
    e: "ArrowUp",
    E: "ArrowUp",
    r: "ArrowUp",
    R: "ArrowUp",
  },
  ArrowDown: {
    e: "ArrowDown",
    E: "ArrowDown",
    r: "ArrowDown",
    R: "ArrowDown",
  },
  ArrowRight: {
    e: "ArrowRight",
    E: "ArrowRight",
    r: "ArrowRight",
    R: "ArrowRight",
  },
};
