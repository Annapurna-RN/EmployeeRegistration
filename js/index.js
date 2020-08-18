 function saveName()
 {
	var table=document.getElementById("table");
	var  name = "Name";    
	
	var employeeName = document.getElementById('putName').value; 
	
	localStorage.setItem(name,JSON.stringify(employeeName));
	
	var row= table.insertRow();
	 var cell=row.insertCell(0);
	 cell.innerHTML=employeeName;
	
}
