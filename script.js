function textAction(thisItem, style) {
  document.getElementById("text-field").classList.toggle(style);
  document.getElementById(thisItem).classList.toggle("bg-blue-500");
}

function textStyle(thisItem, extension) {
  let style = document.getElementById(thisItem).value;
  document
    .getElementById("text-field")
    .classList.add(`text-[${style}${extension}]`);
}
