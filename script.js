var textInput = document.getElementById("textField");
var button = document.getElementById("button");
var holder = document.getElementById("holder");

var text;

button.addEventListener("click", addItem);
textInput.addEventListener("keydown", (event)=>{
	if(event.keyCode == 13) addItem();
});

function addItem()
{	
	text = textInput.value;
	if(text == "") return;
	var element = document.createElement("p");
	element.innerHTML = text;
	holder.appendChild(element);
	element.addEventListener("click", function() {toggleColor(element)});

	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.addEventListener("click", function(){removeItem(element)});
	element.appendChild(button);
	textInput.value = "";
}

function removeItem(element)
{
	element.remove();
}

function toggleColor(element)
{
	element.classList.toggle("clicked");
}