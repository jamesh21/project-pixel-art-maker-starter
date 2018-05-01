// Select color input
const colorPicker = document.querySelector('#colorPicker');
let currentColor = colorPicker.value;
colorPicker.addEventListener('change', function (event) {
  currentColor = event.target.value;
});

// Select size input
const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function (event) {
  event.preventDefault();
  let currentWidth = document.getElementById('inputWidth').value;
  let currentHeight = document.getElementById('inputHeight').value;
  console.log(currentWidth);
  makeGrid(currentWidth, currentHeight);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(columnNum, rowNum) {
  const canvas = document.querySelector('#pixelCanvas');
  canvas.addEventListener('click', paintSquare);
  for (let i = 0; i < rowNum; i++) {
    const newRow = document.createElement('tr');
    for (let j = 0; j < columnNum; j++) {
      const newCol = document.createElement('td');
      newRow.appendChild(newCol);
    }

    canvas.appendChild(newRow);
  }
}

function paintSquare(event) {
  event.target.style.backgroundColor = currentColor;
}
