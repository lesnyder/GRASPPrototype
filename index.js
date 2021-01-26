
function updatePage() {
    var hash = window.location.hash;
    var pageElement;
    if (hash && hash !== "") {
        pageElement = $(hash);
    }
    $('.page-content.visible').removeClass("visible");
    $('#sidebar-wrapper a').removeClass("active");
    if(pageElement) {
        pageElement.addClass("visible");
        $('#sidebar-wrapper a[href="'+hash+'"]').addClass("active");
    } else {
        $('.page-content:first').addClass("visible");
    }
}
window.onhashchange = updatePage;

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

const audioContext = new AudioContext();

var audio;
$('.comic img').click(function(event) {
    event.preventDefault();
    var audiofile = event.target.getAttribute('audio');
    if(audiofile) {
        if (audio) {
            audio.pause()
        }
        audio = new Audio(audiofile);
        audio.play();
    }
})

$(document).ready(function() {
    updatePage();
});
