const container = document.querySelector(".container");
const createButton = document.querySelector(".createButton");
const inputValue = document.querySelector(".cellAmountInput");
const colorPickerInput = document.querySelector('.colorPickerInput')

function draw() {
  // this.classList.add('drawn-cell');
  let clr = `${colorPickerInput.value}` 
  console.log(clr);
  this.style.cssText += `background-color: ${clr}`
}

function occupyGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < inputValue.valueAsNumber ** 2; i++) {
		let cell = document.createElement("div");
		cell.addEventListener("click", draw);
    cell.classList.add("cell");
    cell.style.cssText = `width: ${container.offsetWidth / inputValue.value}px;
			height: ${container.offsetWidth / inputValue.value}px;`;
    container.appendChild(cell);
  }
}

createButton.addEventListener("click", occupyGrid);
