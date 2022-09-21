var dark = false;


function DarkMode() {

    var darkBtn = document.getElementById("darkBtn");

    if (dark == false) {
        document.body.classList.toggle("dark");
        darkBtn.innerHTML = "Modo claro";
        dark = true;
    } else if (dark == true) {
        document.body.classList.toggle("dark")
        darkBtn.innerHTML = "Modo escuro";
        dark = false;
    }
}

//create a collapsible

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
//     });
// }

//animate collapsible
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "200px";
//         }
//     });
// }