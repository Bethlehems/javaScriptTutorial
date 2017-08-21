var something=function(p1,p2,fn){//passing function to another function
    p1=p2+p1;
    p2=0;
    return fn(p1,p2);

}
function sth(p1,p2){
    return p1^p2;

}
alert(something(2,3,sth));

//or

var store=something(2,3,function(p1,p2){
    return p1^p2;
})
alert(store)

//defining function within another function

var globalFun=function(){
    var localFun=function(){
        alert("Hey i am local");
    }
    alert("Hey i am global")
    localFun();
}
globalFun();

//working with string objects

var strObj="I am string an object",num;
alert("Letter i is found at index "+strObj.indexOf("i"))
alert(strObj.indexOf("a",3));  //alerts -1 if the letter is not found
//or
alert(strObj.lastIndexOf("a")); 
alert(num.toString());

//creating objects
var product={
    name : "TV",
    price : 233223,
    calc :function(){
        return "price of "+this.name+" is " + this.price-0.15*this.price;
    }
};
alert(product.calc());