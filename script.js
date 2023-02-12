const container = document.querySelector(".container");
const createButton = document.querySelector(".createButton");
const inputValue = document.querySelector(".cellAmountInput");
const colorPickerInput = document.querySelector('.colorPickerInput')

function draw() {
  let clr = `${colorPickerInput.value}` 
  this.style.cssText += `background-color: ${clr}`
}
function onMouseOver() {
  this.classList.add("cell-hovered")
}
function onMouseOut() {
  this.classList.remove("cell-hovered")
}

function occupyGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < inputValue.valueAsNumber ** 2; i++) {
		let cell = document.createElement("div");
		cell.addEventListener("click", draw);
    cell.addEventListener("mouseover", onMouseOver)
    cell.addEventListener("mouseout", onMouseOut)
    cell.classList.add("cell");
    cell.style.cssText = `width: ${container.offsetWidth / inputValue.value}px;
			height: ${container.offsetWidth / inputValue.value}px;`;
    container.appendChild(cell);
  }
}

createButton.addEventListener("click", occupyGrid);