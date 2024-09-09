fetch("navbar.html")
.then(res=> res.text())
.then(navbarHTML =>{
    let replaced_item = document.querySelector(".navbar_hold");
    let new_item = document.createElement("div");
    new_item.innerHTML = navbarHTML;
    replaced_item.parentNode.replaceChild(new_item, replaced_item);
})
