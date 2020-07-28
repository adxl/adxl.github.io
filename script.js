function gotoAbout() {
    // console.log("scrolled");
    var sec = document.getElementById("about-sec");
    sec.scrollIntoView({ behavior: "smooth" });
}

function gotoEdu() {
    // console.log("scrolled");
    var sec = document.getElementById("edu-sec");
    sec.scrollIntoView({ behavior: "smooth" });
}
function gotoSkills() {
    // console.log("scrolled");
    var sec = document.getElementById("skills-sec");
    sec.scrollIntoView({ behavior: "smooth" });
}

function gotoWtrk() {
    var project = document.getElementById("p-wtrk");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-wtrk .picture").clearQueue().animate({ left: 30 }, 600)
    $("#p-wtrk .picture").clearQueue().fadeTo("slow", 1)
}

function gotoLife() {
    var project = document.getElementById("p-life");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-life .picture").clearQueue().animate({ left: 30 }, 600)
    $("#p-life .picture").clearQueue().fadeTo("slow", 1)
}

function gotoKnights() {
    var project = document.getElementById("p-knights");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-knights .picture").clearQueue().animate({ left: 30 }, 600)
    $("#p-knights .picture").clearQueue().fadeTo("slow", 1)
}

function gotoWebuy() {
    var project = document.getElementById("p-webuy");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-webuy .picture").clearQueue().animate({ left: 30 }, 600)
    $("#p-webuy .picture").clearQueue().fadeTo("slow", 1)
}

function gotoForum() {
    var project = document.getElementById("p-forum");
    project.scrollIntoView({ behavior: "smooth" });
    $("#p-forum .picture").clearQueue().animate({ left: 30 }, 600)
    $("#p-forum .picture").clearQueue().fadeTo("slow", 1)
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
