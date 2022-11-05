const toggle = document.querySelector('#header .toggle-button');
const collapse = document.querySelectorAll('#header .collapse');

toggle.addEventListener('click', ()=>{
    collapse.forEach(e => {
        e.classList.toggle('collapse-toggle')
    });
});

new Masonry('#posts .grid', {
    itemSelector: '.grid-items',
    gutter : 20
})