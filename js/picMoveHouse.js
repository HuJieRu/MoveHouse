$(document).ready(function(){
	 var picData=$.ajax({url:"ajaxData/picData.json",async:false});
	 var i=0;
	 while(i<picData.length){
	 	console.log(picData[i].url);
	 	i++;
	 }
});