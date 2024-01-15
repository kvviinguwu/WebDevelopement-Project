window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e){
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            document.querySelector('#' + sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    init();
});

async function init () {
    const node = document.querySelector("#type-text")
    
    node.innerText = ""
    await node.type('Tak więc: ')
    
    while (true) {
      await node.type('Mam 24 lata, w IT działam od ponad ośmiu lat. ')
      await sleep(5000)
      await node.delete('Mam 24 lata, w IT działam od ponad ośmiu lat. ')
      await node.type('Zawodowo zajmuje się sieciami i cyberbezpieczeństwem. ')
      await sleep(5000)
      await node.delete('Zawodowo zajmuje się sieciami i cyberbezpieczeństwem. ')
      await node.type('W wolnym czasie lubię psuć i naprawiać elektronikę. ')
      await sleep(5000)
      await node.delete('W wolnym czasie lubię psuć i naprawiać elektronikę. ')
      await node.type('Jestem członkiem ISSA Polska. ')
      await sleep(5000)
      await node.delete('Jestem członkiem ISSA Polska. ')
      await node.type('Założyłem koło naukowe WardenOwls. ')
      await sleep(5000)
      await node.delete('Założyłem koło naukowe WardenOwls. ')
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
        for (let character of text) {
            this.innerHTML += character === ' ' ? '&nbsp;' : character;
            await sleep(this.typeInterval);
        }
    }
    
    async delete () {
        while (this.innerHTML.length > 0) {
            if (this.innerHTML.endsWith("&nbsp;")) {
                this.innerHTML = this.innerHTML.slice(0, this.innerHTML.length - 6);
            } else {
                this.innerHTML = this.innerHTML.slice(0, this.innerHTML.length - 1);
            }
            await sleep(this.typeInterval);
        }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  