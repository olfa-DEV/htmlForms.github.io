function displayValues(){
	e.preventDefault();
	var form=document.getElementById("formFeed");
	var elements=form.elements;
	var name=form.elements[0].value;
	var track=form.elements[1].value;
	var slide=form.elements[2].value;
	var message=form.elements[3].value;
	alert("name: "+name+" track: "+track+" slide: "+slide+" message: "+message);
	document.getElementById("labelMessage").style.display="block";

}

/*document.getElementById("formFeed").addEventListener("submit", submitForm);

  function submitForm(e){
      e.preventDefault();

      var form=document.getElementById("formFeed");
		var elements=form.elements;
		var name=form.elements[0].value;
		var track=form.elements[1].value;
		var slide=form.elements[2].value;
		var message=form.elements[3].value;
      document.getElementById("labelMessage").style.display = "inline-block";
  }*/