// this keyword
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});
//this k case me value rhegi click ki function itself
//arrow function k case me this ki value rhegi window object
//jis bhi elemt me event listner add karnge jab this ki value vhi rhegi