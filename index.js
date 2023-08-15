
function auto() {
    if (lock == true) {
        lock = false;
        window.clearInterval(run);
 }
    else if (lock == false) {
        lock = true;
        run = setInterval("chgImg(1)", delay);
 }
}

all_images = new Array (
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg");

var ImgNum = 0;
var ImgLength = all_images.length - 1;
var delay = 2500;
var lock = false;
var run;

function chgImg(direction) {
    if (document.images) {
        ImgNum = ImgNum + direction;
        if (ImgNum > ImgLength) { 
            ImgNum = 0; 
        }
        if (ImgNum < 0) { 
            ImgNum = ImgLength; 
        }
        document.slide_show1.src = all_images[Math.floor(Math.random()*all_images.length)];
        document.slide_show2.src = all_images[Math.floor(Math.random()*all_images.length)];
        document.slide_show3.src = all_images[Math.floor(Math.random()*all_images.length)];
 }
}

auto()
