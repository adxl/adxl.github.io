function scrollToAbout() {
    // console.log("scrolled");
    var about = document.getElementById("about-sec");
    about.scrollIntoView({ behavior: "smooth" });
}

function gotoWtrk() {
    var project = document.getElementById("p-wtrk");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-wtrk .picture").fadeTo("fast", 1)
    $("#p-wtrk .picture").animate({ left: 30 })
}

function gotoLife() {
    var project = document.getElementById("p-life");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-life .picture").fadeTo("fast", 1)
    $("#p-life .picture").animate({ left: 30 })
}

function gotoKnights() {
    var project = document.getElementById("p-knights");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-knights .picture").fadeTo("fast", 1)
    $("#p-knights .picture").animate({ left: 30 })
}

function gotoWebuy() {
    var project = document.getElementById("p-webuy");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-webuy .picture").fadeTo("fast", 1)
    $("#p-webuy .picture").animate({ left: 30 })
}

function gotoForum() {
    var project = document.getElementById("p-forum");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-forum .picture").fadeTo("fast", 1)
    $("#p-forum .picture").animate({ left: 30 })
}



$(window).scroll(function () {
    $('.picture').each(function () {
        if ($(window).scrollTop() + $(window).height() - 200 > $(this).position().top) {




        } else {
            // if ($(this).css("opacity") > 0) {
            //     $(this).clearQueue().fadeTo("fast", 0)
            //     $(this).clearQueue().animate({
            //         left: -500
            //     })
            // };
        }

    })

})
