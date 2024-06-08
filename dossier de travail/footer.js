let link_team48 = document.querySelector(".link_team48");
// console.log(link_team48.children[1]);

function show_team48_summary(param) {
    if (param) {
        link_team48.children[1].classList.add("active_hidden_item");
    } else {
        link_team48.children[1].classList.remove("active_hidden_item");
    }
    
}