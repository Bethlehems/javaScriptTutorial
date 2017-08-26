//another way of appending using html
(function(){
var foo=document.getElementById("foo");
var html=foo.innerHTML;
html=html+"<br/>appending after foo";
html=html+"<br/>appending after foo 2";
html=html+"<br/>appending after foo 3";
html=html+"<br/>appending after foo4";
foo.innerHTML=html;//if we say foo.innerHtml=""--> empty string, then the appended texts will disappear
})();