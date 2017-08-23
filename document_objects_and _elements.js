//document object is an object directly beneath the window object
(function(){
var pEl=document.getElementById("p");
// or pEl=document.querySeletorAll("p")
//alert(pEl).parentNode.tagName-->to know what parent node is 
for(var i=0;i<pEl.length;i++){
alert(pEl[i])
}
}());//old way
//to access the last p with div
var lastpEl=pEl[pEl.length-1];
alert(lastpEl);
var testVar=document.getElementById("foo");
// or testpEl=document.querySelector("#foo")
alert(testVar)

