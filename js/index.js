window.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('#home');
    let bg = document.querySelectorAll('.bg');
    
    
    bg.forEach(item => item.style.height = `${home.clientHeight + 220}px`);
    
    window.addEventListener('resize', () => {
        bg = document.querySelectorAll('.bg');
        bg.forEach(item => item.style.height = `${home.clientHeight + 220}px`);
    });
});