document.write("Seperate even numbers<br>");
document.write("---------------------<br>");
document.write("var a=[2,3,4,5,6,7,100,55,22]<br>");
document.write("--------------<br>");
document.write("output:<br>");
document.write("2<br>4<br>6<br>100<br>22<br>");

var a=[2,3,4,5,6,7,100,55,22];
for(let i=0;i<a.length;i++){
	if(a[i]%2==0){
		var b=a[i];
		console.log(b);
	}
}

