const activeMenuItem=document.getElementById(window.location.pathname.replace("/", "").split(".")[0]);
activeMenuItem.style.color="#FF001F";
const activeMobileMenuItem=document.getElementById(`m-${window.location.pathname.replace("/", "").split(".")[0]}`);
activeMobileMenuItem.style.color="#FF001F";

const sideMenu=document.getElementById("side-menu");
var menuState=false;
function toggleMenu(){
    menuState=!menuState;
    if(menuState){
        sideMenu.classList.add("isActive");
    }
    else{
        sideMenu.classList.remove("isActive");
    }
}