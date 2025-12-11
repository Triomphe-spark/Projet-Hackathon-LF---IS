document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector("i.icon");
    var navList = document.querySelectorAll(".list");

    if (icon && navList) {
        icon.addEventListener("click", function () {
            
            if (navList[0].style.display === "block") {
                navList.forEach(el => {el.style.display = 'none';});
            } else {
                navList.forEach(el => {el.style.display = 'block';});
            }
        });
    }
});

window.addEventListener('scroll', function() {
    var sc = window.scrollY;
    var header = document.querySelector('header');

    if (sc > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Effet box outils
 var boxOutil = document.querySelectorAll("list-outil");

  function Fonction1(){
    this.style.heigth = '310px';
    this.style.margin = '5px';
 }

  function Fonction2(){
    this.style.heigth = 'blue';
    this.style.margin = '10px';
 }

 boxOutil.forEach(item => {
    item.addEventListener('click', Fonction1);
    item.addEventListener('mouseout', Fonction2);
 });


