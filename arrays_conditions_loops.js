var arr=new Array("first",true,20);
alert(arr.length);
//or
var arr2=["first",true,20];
arr2.push("some new value");//to add new value at the end

var things1=["betty","abebe","bazen"]
var things2=["hagosa","metta"]
var both_in_one=things1.concat(things2);
var joined=both_in_one.join(",");
var reversed=both_in_one.reverse();
var sorted=both_in_one.sort();
alert(both_in_one);
alert(joined);
alert(reversed);
alert(sorted);