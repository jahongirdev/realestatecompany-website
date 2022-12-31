function openNav() {
     document.getElementById("fullscreenMenu").style.height = "100%";
}
function closeNav() {
     document.getElementById("fullscreenMenu").style.height = "0%";
}
$(function () {
     $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
     $(".accordion > .accordion-item").click(function () {
          $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
          $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
     });
});