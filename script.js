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


    document.getElementById('calculate').addEventListener('click', function () {
        const deliveryTime = deliveryTimeSlider.value;
        const length = lengthSlider.value;
        const complexity = complexitySlider.value;
        var complexity_level = '';

        const result = parseFloat(350 * (1/deliveryTime) * length * (complexity * 0.5)).toFixed(2) + '€';
        document.getElementById('result').innerHTML = result;

        switch (complexity) {
            case '1':
                complexity_level = 'really basic.';
                break;
            case '2':
                complexity_level = 'a bit less complex.';
                break;
            case '3':
                complexity_level = 'pretty standard.';
                break;
            case '4':
                complexity_level = 'a bit more complex.';
                break;
            case '5':
                complexity_level = 'really complex.';
                break;
        }

        const description = "Your consultation takes place in " + deliveryTime + " days, it is " + length + " hours long and it is " + complexity_level;
        document.getElementById('complexityDescription').innerHTML = description;
        console.log(description);


    });

    var modal = document.getElementById('myModal');

    var btn = document.getElementById('sendFormButton');
  
    var span = document.getElementById('closeModal');
  
    var form = document.getElementById('contactForm');
  
    btn.onclick = function(event) {
      event.preventDefault(); 

      if (form.checkValidity()) {
        modal.style.display = 'block';
      }
    };
  
    span.onclick = function() {
      modal.style.display = 'none';
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

});