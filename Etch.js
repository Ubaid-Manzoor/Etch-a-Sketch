let board =  document.querySelector('.Board');
let Body = document.querySelector('body');
function RemovePreviousGrid() {	
	let AllBoxes = document.querySelectorAll('.Box');
	AllBoxes.forEach((EachBox) => board.removeChild(EachBox));
}

function MakeGrid(WidthofGrid) {
	//First Remove Already Existing Grid
	RemovePreviousGrid();

	//Now Built New Grid
	board.setAttribute("style", `grid-template-columns: repeat(${WidthofGrid}, 1fr);`);
	for(var j = 0; j < WidthofGrid ; j++){
		for(var i = 0 ; i < WidthofGrid ; i++)
		{
			let Div = document.createElement('div');
			Div.classList.add('Box');
			board.appendChild(Div);
		}
	}
	//Set colorChange on MouseHover on New Grid
	ResetBoard();
	SetColorProperty(0,0,0);
}
Body.addEventListener('onload', MakeGrid(16)); // Setting Board to 16 x 16 

// Set New Board on Users Choise

function ResizeBoard() {
	let NewBoardSize
	while(NewBoardSize == null){
	NewBoardSize = prompt("Enter NUmber of Boxs per row");}
	MakeGrid(NewBoardSize);
}
function SetColorProperty(R,G,B,Hex,WhichFormateToTake){
	let AllBoxs = document.querySelectorAll('.Box');
	
		if(WhichFormateToTake == 1){
				AllBoxs.forEach(function(Box){
				Box.addEventListener('mouseover' , () => Box.style.backgroundColor = `rgb(${R},${G},${B})`);
			});
		}
		else
		{
			AllBoxs.forEach(function(Box){
				Box.addEventListener('mouseover' , () => Box.style.backgroundColor = Hex);
			});
		}

}
function SetColorToRed(argument) {
	RemoveEventListener();
	SetColorProperty(255,0,0,0,1);
}
function EraseAllColorEffect(argument) {
	RemoveEventListener();
	SetColorProperty(255,255,255,0,1);
}
function SetColorToGreen(argument) {
	RemoveEventListener();
	SetColorProperty(0,128,0,0,1);
}
function SetColorOfUserChoise(argument) {
	RemoveEventListener();
	let UserChoise =  document.querySelector('.SetColor').value;
	SetColorProperty(0,0,0,UserChoise,0);
}
function SetColorEffectAtRandom() {
	let AllBoxs = document.querySelectorAll('.Box');
	AllBoxs.forEach(HelperFunction);
}
function HelperFunction(Box) {
	Box.addEventListener('mouseover',() => Box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`);
}
function RemoveEventListener(){
		let AllBoxs = document.querySelectorAll('.Box');
		AllBoxs.forEach(function(Box){
			Box.removeEventListener('mouseover',() => Box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`);
		});
}
function ResetBoard() {
	let AllBoxs = document.querySelectorAll('.Box');
		AllBoxs.forEach(function(Box){
			Box.style.backgroundColor = "rgb(256,256,256)";
		});
		SetColorProperty(0,0,0,0,1);
}