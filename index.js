 function saveName(){
	 
	  var  key = "name";    
        var value = document.getElementById('putName').value;  
		 localStorage.setItem(key,value);
		
		 document.getElementById('i1').innerHTML=value;
}