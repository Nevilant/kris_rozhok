
all_images1 = new Array (
    "content/home_page/main_pics/pics1/pic1.jpg",
    "content/home_page/main_pics/pics1/pic2.jpg",
    "content/home_page/main_pics/pics1/pic3.jpg",
    "content/home_page/main_pics/pics1/pic4.jpg",
    "content/home_page/main_pics/pics1/pic5.jpg",
    "content/home_page/main_pics/pics1/pic6.jpg",
    "content/home_page/main_pics/pics1/pic7.jpg");

all_images2 = new Array (
    "content/home_page/main_pics/pics2/pic1.jpg",
    "content/home_page/main_pics/pics2/pic2.jpg",
    "content/home_page/main_pics/pics2/pic3.jpg",
    "content/home_page/main_pics/pics2/pic4.jpg",
    "content/home_page/main_pics/pics2/pic5.jpg",
    "content/home_page/main_pics/pics2/pic6.jpg",
    "content/home_page/main_pics/pics2/pic7.jpg");

all_images3 = new Array (
    "content/home_page/main_pics/pics3/pic1.jpg",
    "content/home_page/main_pics/pics3/pic2.jpg",
    "content/home_page/main_pics/pics3/pic3.jpg",
    "content/home_page/main_pics/pics3/pic4.jpg",
    "content/home_page/main_pics/pics3/pic5.jpg",
    "content/home_page/main_pics/pics3/pic6.jpg",
    "content/home_page/main_pics/pics3/pic7.jpg");

var ImgNum = 0;
var ImgLength1 = all_images1.length - 1;
var ImgLength2 = all_images2.length - 1;
var ImgLength3 = all_images3.length - 1;
var delay = 2500;
var lock = false;
var run;

function chgImg(direction) {
    if (document.images) {
        ImgNum = ImgNum + direction;
        if (ImgNum > ImgLength1) { 
            ImgNum = 0; 
        }
        if (ImgNum < 0) { 
            ImgNum = ImgLength1; 
        }
        if (ImgNum > ImgLength2) { 
            ImgNum = 0; 
        }
        if (ImgNum < 0) { 
            ImgNum = ImgLength2; 
        }
        if (ImgNum > ImgLength3) { 
            ImgNum = 0; 
        }
        if (ImgNum < 0) { 
            ImgNum = ImgLength3; 
        }
        document.slide_show1.src = all_images1[Math.floor(Math.random()*all_images1.length)];
        document.slide_show2.src = all_images2[Math.floor(Math.random()*all_images2.length)];
        document.slide_show3.src = all_images3[Math.floor(Math.random()*all_images3.length)];
 }
}


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

auto()
