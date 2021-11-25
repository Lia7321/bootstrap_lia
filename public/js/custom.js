/* Responsive Nav js **/
$(".open-sidebar").on("click", function () {
    $(".leftbar").toggleClass("open-bar");
    //$(".add-fix").toggleClass("open-sidebar");
});

$(".close-bx").on("click", function () {
    $(".leftbar").removeClass("open-bar");
});
