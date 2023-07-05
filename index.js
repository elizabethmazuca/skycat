alert('im aliveeee');

let moon = document.getElementById('moon');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    moon.style.right = value * 0.50 + 'px'; 
    moon.style.top = value * 2.3 + 'px';

    /* FFFFFFF */
})