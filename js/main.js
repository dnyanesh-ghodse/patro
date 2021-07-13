const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-ul');

const enquiry = document.getElementById('enquiry');
const form = document.getElementById('side_form');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
})


enquiry.addEventListener('click',()=> {
    form.classList.toggle('show_form');
})