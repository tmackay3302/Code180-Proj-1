//Write notes to humans 
//Set count
if(localStorage.getItem("count") == null) {
	localStorage.setItem ("count", 0)
}

// Update count
function update(){
	document.getElementById ("count") .innerHTML = localStorage.getItem("count")
}

update()

// Add 1 to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count")) + 1)
	update()
}

// Reset Count
function reset(){
	if(confirm("Were you dumb enough to eat a Snickers?")){
		localStorage.setItem("count",0)
		update()
	}
}