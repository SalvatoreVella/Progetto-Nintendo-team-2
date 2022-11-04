
let displayBlockFunc = (idButton, idTarget) => {
    let SubMenuButton = document.getElementById(idButton);
    let SubMenu = document.getElementById(idTarget);
    SubMenuButton.addEventListener("click",() =>
    SubMenu.classList.toggle("none"))
}

displayBlockFunc("firstSubMenuButton", "firstSubMenu");