//incase of overriding a variable by local one we use window.var name to access the global one
var glob="i am being overriden.";
var sth=function(){
    var glob="i am overriding!";
    alert(glob);
    alert(window.glob);
}
sth();
//immediately invoked function(return type is void)
(
    function(){
        alert("i am immediately invoked function. and i dont need caller statement.")
    }
())
//confirm()->confirms user's yes or no choice and is found inside window object
var choose=function(){
    if (confirm("Do you wanna know about js?"))
        {
            alert("thats great! lets learn js.")
        }
        else{
            alert("you are that much lazy?!")
        }

}
choose();
//location object is used to get and set a url in our code
if(confirm("you wanna go to betty.com?"))
{
location="http://www.betty.com";
}