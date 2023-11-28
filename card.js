const btn = document.getElementById('btn');
const rules = document.getElementById('rules');

    btn.addEventListener('click', () => {
      if (rules.style.display === 'none') {
        rules.style.display = 'block';
      } else {
        rules.style.display = 'none';
      }
    });