//another way of appending using html
(function() {
  var foo = document.getElementById("foo");
  var html = foo.innerHTML;
  html = html + "<br/>appending after foo";
  html = html + "<br/>appending after foo 2";
  html = html + "<br/>appending after foo 3";
  html = html + "<br/>appending after foo4";
  foo.innerHTML = html; //if we say foo.innerHtml=""--> empty string, then the appended texts will disappear
  //styling elements using javascript
  var style = foo.style; //inorder not to use the document object frequently
  style.color = "Gray";
  style.border = "1px solid black";
  alert(style.color);
})();
//modifying using css class
function modify() {
  var foo = document.getElementById("foo");
  foo.className = " css-class  css-class2 ";
  //or
  foo.classList.add("css-class3");
  //foo.className="" removes the style elements
  //or foo.className=foo.className.replace(" css-class2 ","")
  //or foo.className.remove("css-class")
  foo.className.toggle("css-class"); // for switching on and of the classes
   //getting style in different types of browsers
  var getStyle = function(element, cssProp) {
    if (typeof getComputedStyle !== "undefined") {
      return window.getComputedStyle(element, null).getPropertyValue(cssProp);
    } else {
      return element.currentStyle[cssProp];
    }
  };
  var viewColor = getStyle(foo, "color");
  alert(viewColor);
}
modify();
