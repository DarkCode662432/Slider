// Variables --------------------------
var imgList, lightBox, exitBtn, nextBtn, prevBtn, imgIndex;

// Display photo ----------------------
imgList = Array.from(document.querySelectorAll("#imgList img"));
lightBox = document.getElementById("lightBox");
lightBoxItem = document.getElementById("lightBoxItem");

for (let img = 0; img < imgList.length; img++) {
    imgList[img].addEventListener("click", function(e){
        lightBox.style.display = "flex";
        lightBoxItem.style.backgroundImage = `url(${e.target.src})`;
        imgIndex = imgList.indexOf(e.target);
    })
}

// Hidden photo -----------------------
exitBtn = document.getElementById("exit");

exitBtn.addEventListener("click", function(){
    lightBox.style.display = "none";
});

lightBox.addEventListener("click", function(e){
    if(e.target == lightBox){
        lightBox.style.display = "none";
    }
});

// Change photo -----------------------
nextBtn = document.getElementById("next");
prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", function(){
    imgIndex++;
    if(imgIndex > (imgList.length - 1)){
        imgIndex = 0;
    }
    lightBoxItem.style.backgroundImage = `url(${imgList[imgIndex].src})`;
});

prevBtn.addEventListener("click", function(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = imgList.length - 1;
    }
    lightBoxItem.style.backgroundImage = `url(${imgList[imgIndex].src})`;
});
