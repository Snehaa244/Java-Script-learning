//loop
//we cant use foreach method to iterate through HTMLcollection
//array like object khene ka mtlb hai indexing use ho skti hai ,length property
const navItems = document.getElementsByTagName("nav-items");
//for(let i=0;i< navItems.length;i++)
//{
    //const navItem = navItems[i];
    //navItem.style.backgroundColor = "#fff";
    //navItem.style.color = "green";
    //navItem.style.fontweight = "bold";

//}
for(let navItem of navItems)
{
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontweight = "bold";
}
//forEach to use kr hi nhi skte

//html collection ko array me change krskte taki array ki sari method apply ki ja ske

//Array.from(navItems);
//navItems.ForEach(navItem)=>{
   // navItem.style.backgroundColor = "#fff";
   // navItem.style.color = "green";
   // navItem.style.fontweight = "bold";
//}