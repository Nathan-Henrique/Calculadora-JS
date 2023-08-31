import calculate from "./calculate.js";
import copy from "./copy.js";
import theme from "./theme.js";
import { handleBtnPress, handleTyping, handleclearBtn } from "./key.js";

const input = document.getElementById("input");
const resultInput = document.getElementById("result");

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleBtnPress);
});

document.getElementById("clear").addEventListener("click", handleclearBtn);
document.getElementById("input").addEventListener("keydown", handleTyping);
document.getElementById("equal").addEventListener("click", calculate);
document.getElementById("copyToClipboard").addEventListener("click", copy);
document.getElementById("themeSwitcher").addEventListener("click", theme);
