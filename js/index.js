 function saveName()
{
	 var employeeName=document.getElementById("putName").value;
	 var employeeAge=document.getElementById("putAge").value;
	 var employeeid=document.getElementById("putEmpid").value;
	 localStorage.setItem('user',
	 JSON.stringify({
		 userName:employeeName,
		 userAge:employeeAge,
	 userEmpid:employeeid
	 }));
	 var user=JSON.parse(localStorage.getItem('user'));
		 var table=document.getElementById("empTable");
		 var row= table.insertRow();
	 var cell=row.insertCell(0);
	 cell.innerHTML=employeeName;
	 cell=row.insertCell(1);
	 cell.innerHTML=employeeAge;
	 cell=row.insertCell(2);
	 cell.innerHTML=employeeid;
	 
}
