
const addClassById = (idButton, idTarget, classe) => {
    let action = document.getElementById(idButton);
    let target = document.getElementById(idTarget);
    action.addEventListener("click",() =>
    target.classList.toggle(classe));
}

function toggleStyle(el, styleName, value) {
    if (el.style[styleName] === '') {
        el.style[styleName] = value;
    } else {
        el.style[styleName] = '';
    }
}

addClassById("search", "search-menu", "none");
addClassById("button2", "search-menu", "none");

for (let i = 1; i <= 4; i++) {
    addClassById(`sub-menu-button-${i}`, `sub-menu-${i}`, "none");
    addClassById(`sub-menu-button-${i}`, `rotate${i}`, "reverse");
    let button = document.getElementById(`sub-menu-button-${i}`);
    let target = document.getElementById(`sub-menu-${i}`);
        button.addEventListener("click",
        () => toggleStyle(body, "overflow", "hidden"))
    }