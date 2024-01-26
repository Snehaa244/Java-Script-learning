//get and set attribute
const link =document.querySelector("a")
console.log(link.getAttribute("href"));
link.setAttribute("href","https://codprog.com");
console.log(link.getAttribute("href"));
//iska output
//#home 104.js:3:9
//https://codprog.com
//ye ayga to sirf home chaiye #nhi chaiye to apn slice ka use 
//on second line
//console.log(link.getAttribute("href").slice(1));