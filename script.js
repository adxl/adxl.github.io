function scrollToAbout() {
    // console.log("scrolled");
    var about = document.getElementById("about-sec");
    about.scrollIntoView({ behavior: "smooth" });
}


// $(window).scroll(function () {
//     $('.onfoot1').each(function () {
//         if ($(window).scrollTop() + $(window).height() - scrollOffset > $(this).position().top) {
//             if ($(this).position().left < $(this).data("scrollTo")) {
//                 $(this).clearQueue().animate({
//                     left: $(this).data("scrollTo")
//                 });
//             }
//         } else {
//             if ($(this).position().left > 0) {
//                 $(this).clearQueue().animate({
//                     left: 0
//                 });
//             }
//         }
//     });
// });


$(window).scroll(function () {
    $('.picture').each(function () {
        if ($(window).scrollTop() + $(window).height() - 200 > $(this).position().top) {
            $(this).clearQueue().fadeTo("fast", 1)
            $(this).clearQueue().animate({
                left: 30
            }
            )


        } else {
            if ($(this).css("opacity") > 0) {
                $(this).clearQueue().fadeTo("fast", 0)
                $(this).clearQueue().animate({
                    left: -500
                })
            };
        }

    })

})
