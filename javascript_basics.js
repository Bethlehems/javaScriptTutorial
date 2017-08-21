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