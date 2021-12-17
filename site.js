 
$(window).scroll(function () {
    if ($(window).scrollTop()) {
     $("header").addClass("sticky")
    } else {
        $("header").removeClass("sticky")
    }
});

const menu = document.querySelector("#hamburger")
const ulist = document.querySelector("#navbars")

menu.addEventListener("click", function(){
    ulist.classList.toggle("hamenu")
})