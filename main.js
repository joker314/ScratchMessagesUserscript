//A piece of JavaScript I decided to write
// (For Scratch)
function f(el){
	var n = el.id;
		var status = (el.checked)?"none":"list-item";
		for(var j = 0; j < document.getElementById("notification-list").children.length; j++){
		var cont = document.getElementById("notification-list").children[j];
		try{
		for(var i = 1;i < 200; i++) //Iterate over all messages
		{
			var q = cont.children[i];
			if(q.children[0].className.indexOf(n)!=-1){q.style.display=status;}
		}
		} catch(e){if(0){console.log("")}}
	}}
try{
	var temp = document.getElementsByClassName("tabs-index")[0].children[0].appendChild(
	document.createElement("LI")).innerHTML = "Hide:<br/><input type='checkbox' onclick='f(this);'\
	id='follow'/>Followers<br/><input type='checkbox' onclick='f(this);'\
	id='project'/>Studios<br/><input type='checkbox' onclick='f(this);'\
	id='comment'/>Comments<br/><input type='checkbox' onclick='f(this);'\
	id='love'/>Love-its<br/><input type='checkbox' onclick='f(this);'\
	id='favorite'/>Favourites<br/>";
} catch(e){
	if(0){console.log("Hello, this really shouldn't have happened :/")}
}
