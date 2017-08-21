var arr=new Array("first",true,20);
alert(arr.length);
//or
var arr2=["first",true,20];
arr2.push("some new value");//adding  new value at the end

var things1=["betty","abebe","bazen"],
 things2=["hagosa","metta"];
var both_in_one=things1.concat(things2);
alert(both_in_one);
var joined=both_in_one.join(",");
alert(joined);
alert(both_in_one.reverse());
alert(both_in_one.sort());
//javascript can compare 2 different datatype values by converting both to one same datatype(==)
//===->identity operator
if(!("66"!==66)){
    alert("true");
}
else{
    alert("false");
}

//falsy conditions=0,null,"",undefined variables
//truthy condtions=1,any number or letter,[],{}

alert(typeof null);//typeof is used to know datatype of a var
for(i=0;i<arr2.length;i++){
    alert(arr2.pop());
}