let sections = document.querySelectorAll('.main-sections');
let navLinks = document.querySelectorAll('.und .list a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY + 100;
        let offset = sec.offsetTop ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector("#und").classList.remove("activeund") 
    document.querySelector("#LiveStuffs").classList.remove("activeLiveStuffs") 
            document.querySelector(`.und .list a[href='#${id}']`).classList.add('active');
            document.querySelector(`.und .list a[href='#${id}']`).classList.add('active');
        };
    });    
};
