const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 3;
ctx.fillStyle = "#FFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let sat = '100%';
let lum = '80%';
let direction = true;


function draw(e) {
	if (!isDrawing) return; // stop the fn from running when they are not moused down
	ctx.strokeStyle = `hsl(${hue}, ${sat}, ${lum})`;
	ctx.beginPath();
	// start from
	ctx.moveTo(lastX, lastY);
	// go to
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
			[lastX, lastY] = [e.offsetX, e.offsetY];

	if (ctx.lineWidth >= 3 || ctx.lineWidth <= 2) {
		direction = !direction;
	}

	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}

}

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
			[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

/* =====================
 ** ====== BUTTONS ======
 ** ===================== */
document.getElementById("clear").addEventListener("click", clearCanvas);

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById("save").addEventListener("click", saveCanvas);

function saveCanvas() {
	var canvas = document.getElementById("draw");
	let img = canvas.toDataURL("image/png");
	document.write(`<img src="${img}"/>`);
}
document.getElementById("color").addEventListener("click", colorSelect);

function colorSelect() {
	if (colorSelectMenu.style.display === "block") {
		colorSelectMenu.style.display = "none";
	} else {
		colorSelectMenu.style.display = "block";
	}
}

function changeColor(choice) {
	let selection = choice;
	if (selection == 'red') {
		hue = 0;
		sat = '100%';
		lum = '80%';
	} else if (selection == 'orange') {
		hue = 35;
		sat = '100%';
		lum = '80%';
	} else if (selection == 'yellow') {
		hue = 60;
		sat = '100%';
		lum = '80%';
	} else if (selection == 'green') {
		hue = 85;
		sat = '100%';
		lum = '80%';
	} else if (selection == 'blue') {
		hue = 160;
		sat = '100%';
		lum = '80%';
	} else if (selection == 'purple') {
		hue = 285;
		sat = '100%';
		lum = '80%';
	}  else if (selection == 'peach') {
		hue = 30;
		sat = '60%';
		lum = '80%';
	}  else if (selection == 'brown') {
		hue = 30;
		sat = '30%';
		lum = '60%';
	} else if (selection == 'black') {
		hue = 0;
		sat = '0%';
		lum = '60%';
	} else if (selection == 'white') {
		hue = 0;
		sat = '0%';
		lum = '100%';
	}
}
