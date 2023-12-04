const btn = document.getElementById('btn');
const rules = document.getElementById('rules');
let clicked = false
    btn.addEventListener('click', () => {
      if (clicked === true) {
        rules.style.width = '200px';
        rules.style.opacity= '1';

        clicked = false
        
      } else if(clicked===false) {
        rules.style.width = '0px';
        rules.style.opacity = '0';

        clicked = true
      }
    });