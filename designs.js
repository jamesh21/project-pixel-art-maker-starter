// Selectors
const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');

// current color that is chosen
let currentColor = colorPicker.value;

// Add Listeners
canvas.addEventListener('click', paintSquare);

colorPicker.addEventListener('change', function (event) {
  currentColor = event.target.value;
});

sizePicker.addEventListener('submit', function (event) {
  event.preventDefault();
  if (canvas.hasChildNodes()) {
    resetGrid();
  }

  let currentWidth = document.getElementById('inputWidth').value;
  let currentHeight = document.getElementById('inputHeight').value;
  makeGrid(currentWidth, currentHeight);
});

// Dynamically creates the canvas grid
function makeGrid(columnNum, rowNum) {
  for (let i = 0; i < rowNum; i++) {
    const newRow = document.createElement('tr');
    for (let j = 0; j < columnNum; j++) {
      const newCol = document.createElement('td');
      newRow.appendChild(newCol);
    }

    canvas.appendChild(newRow);
  }
}

// Paints the specified square with the current color
function paintSquare(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = currentColor;
  }

}

// function to reset the canvas grid
function resetGrid() {
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }
}
