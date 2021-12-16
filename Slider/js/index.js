let galleryImages = document.querySelectorAll(".gallery a");
let popUp = document.querySelector(".popup");
let bigImage = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".close");
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let clickBtn = document.querySelector("#click");
let gallery = document.querySelector(".gallery");
let input = document.querySelector('input');
let h1 = document.querySelector("h1");

function clickForEnter(){
        gallery.style.display = "flex";
        input.style.display = "none";
        clickBtn.style.display = "none";
        h1.innerText = "WELCOME" + "  " + input.value ;
        h1.style.visibility = "visible";
        h1.style.transform = "scale(1.5)";
}

input.addEventListener('keyup',(e)=>{
    if (e.code === "Enter") {
        e.preventDefault();
        clickForEnter();
    }
})
clickBtn.addEventListener("click",clickForEnter);

// This section for slide
galleryImages.forEach((image) => {
    image.addEventListener("click", (e) => {
        e.preventDefault();
        openImage();
        changeImage(image);
        image.classList.add("showSlide");
    })
})

// open big image function and use parent div
function openImage() {
    popUp.style.display = "flex";
}

function changeImage(item) {
    let imgSrc = item.getAttribute("href");
    bigImage.setAttribute("src", imgSrc);
}

// Close event inn opened PopUp
popUp.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        popUp.style.display = "none"
    }
})

closeIcon.addEventListener("click", (e) => {
    if (e.target.classList.contains("far")) {
        popUp.style.display = "none";
    }
})

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        popUp.style.display = "none";
    }
})


// Buttons click events
prev.addEventListener("click", () => {
    let showSlide = document.querySelector(".showSlide");
    prevElemSib(showSlide);
})

next.addEventListener("click", () => {
    let showSlide = document.querySelector(".showSlide");
    nextElemSib(showSlide);
});


function nextElemSib(item) {
    if (item.nextElementSibling !== null) {
        item.nextElementSibling.classList.add("showSlide");
        changeImage(item.nextElementSibling);
    } else {
        item.parentElement.children[0].classList.add("showSlide");
        changeImage(item.parentElement.children[0]);
    }
    item.classList.remove("showSlide");
}

  function prevElemSib(item) {
  let length = item.parentElement.children.length;

  if (item.previousElementSibling !== null) {
    item.previousElementSibling.classList.add("showSlide");
    changeImage(item.previousElementSibling);
  } else {
    item.parentElement.children[length - 1].classList.add("showSlide");
    changeImage(item.parentElement.children[length - 1]);
  }
  item.classList.remove("showSlide");
}


