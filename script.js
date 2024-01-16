window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e){
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            document.querySelector('#' + sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

