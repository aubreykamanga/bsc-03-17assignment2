//This code describes the project details for the user
function save(){

	
    
 // This code checks to avoid sending blank input value,
    var error = "";
    
    if (document.getElementById('projname').value=="") {
    	error += "Enter the project name...\n";
    	document.getElementById('projname').style.borderColor = "red";
    }
    if (document.getElementById('projectDescription').value=="") {
    	error += "Enter the project description...\n";
    	document.getElementById('projectDescription').style.borderColor = "red";
    }
    if (document.getElementById('deadline').value=="") {
    	error += "Enter the project date...\n";
    	document.getElementById('deadline').style.borderColor = "red";
    }
    if (error != "") {
    	alert(error);
    	return false;
    }

    confirm('press OK to submit');

// set project input into local storage
	var pn = document.getElementById('projname').value;
	var pd = document.getElementById('projectDescription').value;
	var pDate = document.getElementById('deadline').value;

	localStorage.setItem('projname',pn);
	localStorage.setItem('projectDescription',pd);
	localStorage.setItem('deadline',pDate);

alert('you have successfully submitted,press  DETAILS key for more infomation');
 
}

// get the stored project inputs
function load(){
	var storedValue = localStorage.getItem('projname');
	var storedValue = localStorage.getItem('projectDescription');
	var storedValue = localStorage.getItem('deadline');
}
function clean(){

    confirm('Press OK to continue');

	localStorage.removeItem('projname');
	localStorage.removeItem('projectDescription');
	localStorage.removeItem('deadline');
}

//exprience details
function show(){



  var emptyinputvalue= "";
    
    if (document.getElementById('Workdetals').value=="") {
    	emptyinputvalue += "Enter the your exprience...\n";
    	document.getElementById('Workdetals').style.borderColor = "red";
    }
    
	
	    if (document.getElementById('deadline').value=="") {
    	emptyinputvalue += "Enter the working date...\n";
		document.getElementById('From').style.borderColor = "red";
		document.getElementById('To').style.borderColor = "red";
    }
    if (emptyinputvalue != "") {
    	alert(emptyinputvalue);
    	return false;	
	}

 confirm(' press OK to save');

//set work exprience input	
    var workT = document.getElementById('Workdetals').value;
	
	var workDate = document.getElementById('From').value;
	var workDate = document.getElementById('To').value;


    localStorage.setItem('Work_detais',workT);

	localStorage.setItem('From',workDate);
	localStorage.setItem('To',workDate);
 alert('you have successfully submitted your details,click on  DETAILS key for more infomation');
}
//get the work exprience input
function work(){
	var storedValue = localStorage.getItem('Workdetals');
	
	var storedValue = localStorage.getItem('From');
	var storedValue = localStorage.getItem('To');
}
//it will going to clear all work exprience localstorage
function cleared(){
     confirm('This action will clear your work exprience,press OK to continue')

	localStorage.removeItem('Workdetals');
	
	localStorage.removeItem('From');
	localStorage.removeItem('To');
}
