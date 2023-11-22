const galleryE1 = document.querySelectorAll('.image') ;
const imgContainer = document.querySelector('.full-image-container') ;
const fullImage = document.querySelector('.full-image') ;
console.log(galleryE1);

let currentIndex = 0;
galleryE1.forEach( (img, index) => { console.log(img);
img.addEventListener('click', () => {console.log(index); }  )
currentIndex = index;
})

function fullScreenImg(index) {
    fullImage.src = galleryE1[index]
}





//2

