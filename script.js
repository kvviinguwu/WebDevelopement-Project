window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e){
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            document.querySelector('#' + sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const deliveryTimeSlider = document.getElementById('deliveryTime');
    const lengthSlider = document.getElementById('length');
    const complexitySlider = document.getElementById('complexity');


//code that multiples read values on click of a button and prints them out
    document.getElementById('calculate').addEventListener('click', function () {
        const deliveryTime = deliveryTimeSlider.value;
        const length = lengthSlider.value;
        const complexity = complexitySlider.value;

        const result = parseFloat(350 * (1/deliveryTime) * length * (complexity * 0.5)).toFixed(2) + '€';
        document.getElementById('result').innerHTML = result;

    });


});