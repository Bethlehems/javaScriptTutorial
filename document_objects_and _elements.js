//document object is an object directly beneath the window object
(function() {
  var pEl = document.getElementsByTagName("p");
  pEl2 = document.querySelector("p");
  alert(pEl2.parentNode.tagName); //-->to know which tag surrounded p tag
  for (var i = 0, len = pEl.length; i < len; i = i + 1) {
    alert(pEl[i]);
  }
  var lastpEl = pEl[pEl.length - 1];
  alert(lastpEl);
  //old way
  //to access the last p with div
  var testVar = document.getElementById("foo");
  // or testpEl=document.querySelector("#foo")
  alert(testVar);
})();
function creatingElements() {
  //how to add elements to a node.
  var pelements = document.getElementsByTagName("p"); //GetElementByTagName creates live nodelist but query selector is not
  alert(pelements.length); //5
  var el = document.createElement("p");
  var content = document.createTextNode(
    "<strong> look at this text using text node.</strong>"
  ); //dynamically created
  //document.body.appendChild(el);//added at the end of document just before the body closing tag
  //alert(pelements.length);//6-->after adding an element to the node list
  var append = document.getElementById("foo"); //appending at the middle of the elements
  el.appendChild(content);
  el.id = "bar";
  //append.parentNode.insertBefore(el,append);
  append.parentNode.replaceChild(el, append);
}
creatingElements();
//setting content using innerHTml(doesnt overt html to text but uses as actual html)
function inner() {
  var el2 = document.createElement("p");
  el2.innerHTML = "<strong> look at the bold text using inner html</strong>";
  var append1 = document.getElementById("bar");
  append1.parentNode.replaceChild(el2, append1);
  //setting inner html to a variable to avoid acessing the document object frequently which decreases efficiency
  var html = el2.innerHTML;
  html = html + "<p>this is the concatenated one.</p>";
  html = html + "<p>this is also the concatenated one.</p>";
  el.innerHTML = html;
  alert(el2.innerHTML); //we can also get inner html element
}
inner();
