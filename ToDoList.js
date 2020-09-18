changeColor();

function changeColor(){
	var random = Math.floor(Math.random()*12345678).toString(16);
	document.getElementById('h1').style.color = "#"+random;
}

setInterval(changeColor,1000);



var enterButton = document.getElementById("btn");

function inputLength(){
	return document.getElementById("textField").value.length;
} 

function listLength(){
	return document.getElementsByTagName("li").length;
}

function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(document.getElementById("textField").value));
	document.querySelector("ul").appendChild(li); 
	document.getElementById("textField").value = ""; 

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")
	}

}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode ===13) {
		createListElement();
	} 
}


document.getElementById("btn").addEventListener("click",addListAfterClick);

document.getElementById("textField").addEventListener("keypress", addListAfterKeypress);





