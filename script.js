window.addEventListener("load",function(){
	var nav = document.querySelectorAll('nav');
	for(var i=0; i<nav.length; i++){
		var control = document.createElement("span");
		nav[i].appendChild(control);
		if(nav[i].hasAttribute("data-toggle") == false)
			nav[i].setAttribute("data-toggle", "closed");
		control.addEventListener("click", function(e){
			if(this.parentNode.getAttribute("data-toggle") == "open")
				this.parentNode.setAttribute("data-toggle", "closed");
			else
				this.parentNode.setAttribute("data-toggle", "open");
		});
	}
});
