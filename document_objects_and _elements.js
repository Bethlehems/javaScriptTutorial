//document object is an object directly beneath the window object
(function(){
var pEl=document.getElementsByTagName("p");
 pEl2=document.querySelector("#foo")
 alert(pEl2.parentNode.tagName);//-->to know which tag surrounded p tag

for(var i=0,len=pEl.length;i<len;i=i+1){
alert(pEl[i])
}
var lastpEl=pEl[pEl.length-1];
alert(lastpEl);
}());//old way
//to access the last p with div

var testVar=document.getElementById("foo");
// or testpEl=document.querySelector("#foo")
alert(testVar)

