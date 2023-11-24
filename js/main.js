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

function createBoxes() {
    const amount = document.getElementById('boxNumber').value;
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
    }
    }
    
    function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
    }
    
    function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }