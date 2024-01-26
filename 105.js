//get multiple elements using getElements by class name
//get multiple elements items using querySelectorAll
const navItems = document.getElementByClassName("nav-items");
console.log(navItems);
//we get output HTML collection which is an array like object (mtlb ap isme indexing krskte)
//console.log(navItems[1]);//this is to find konsi indexing pr kya hai
//if we want to check its type object hai
//ye array like object hai array nhi
//if check krba hai to
//console.log(Array.isArray(navItems));
//output false ayga
const navItems = document.guerySelectorAll("nav-items");//Nodelist
console.log(navItems[1]);
