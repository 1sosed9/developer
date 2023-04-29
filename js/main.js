// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__list-item-link');

    burgerItem.addEventListener('click', () => {
        burgerItem.addEventListener('click', () => {
            menu.classList.add('header__nav_active');


        })
    })

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            })
        }
    }

}());

// Smooth scroll 
(function () {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (const anchor of anchors) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            let blockID = anchor.getAttribute("href");
            let chooseElement = document.getElementById(blockID.split("").slice(1).join(""));
            window.scrollTo({
                top: chooseElement.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        })
    }
}());


