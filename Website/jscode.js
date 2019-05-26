var c=0;

function multiplyBy()
{
        var num1 = document.getElementById("weight").value;
        var num2 = document.getElementById("gender").value;
		var num3 = document.getElementById("lean").value;
		var num4 = document.getElementById("activity").value;
		var grandtotal=num1*num2*num3*num4*24;
        document.getElementById("result").innerHTML = grandtotal+" calories";
}

function additem() {
	
		var text = document.getElementById("food").value;
		var element=document.createElement("p");
		var main=document.getElementById("main");
		main.appendChild(element);
		
		var test=document.createTextNode(text);
		element.appendChild(test);
}
				
function add() {
	var i=0;
	var c = document.getElementById("numberofmeals").value;
	var confirmation=confirm("Are you sure you want to add extra rows.You cant add more rows if you press (OK)");
	if(confirmation==true){
 while(i<c){
var element = document.createElement("input");
 
    
 
element.setAttribute("type","number");
element.setAttribute("span","any");
element.setAttribute("id","food2");

var foo = document.getElementById("main2");
 
foo.appendChild(element);
 
	var elementH= document.createElement("p")
    foo.appendChild(elementH);
    var linebreak=elementH.innerHTML="\n";	
	i++;
	
	}
document.getElementById("summation").style.visibility="hidden";	
	}
}	


function calculate(){
	   
        var sum = 0;
		var elem=new Array();
		elem=document.getElementsByTagName("input");
		
		
		for(var i = 0;i<elem.length; i++)
        {
            if(elem[i].id=="food2"){
			sum=parseFloat(sum)+parseFloat(elem[i].value)}
            
        } 
        document.getElementById("total").innerHTML = sum +" calories";
		
 
}

function warning() {

        var num1 = document.getElementById("weight").value;
        var num2 = document.getElementById("gender").value;
		var num3 = document.getElementById("lean").value;
		var num4 = document.getElementById("activity").value;
		var grandtotal=num1*num2*num3*num4*24;
		
		 var sum = 0;
		var elem=new Array();
		elem=document.getElementsByTagName("input");
		
		
		for(var i = 0;i<elem.length; i++)
        {
            if(elem[i].id=="food2"){
		sum=parseFloat(sum)+parseFloat(elem[i].value)}
		}
		
		if(sum>grandtotal){
			alert("You are eating more than daily calorific requirement");
		}
		else{
			alert("You are eating below daily requirement.Good Job");
}

}        		

function passvalues(){
	var firstname=document.getElementById("txt").value;
	localStorage.setItem("textvalue",firstname);
	return false;
}