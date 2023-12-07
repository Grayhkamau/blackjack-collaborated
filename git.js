const HowItWorks = document.getElementById('HowItWorks');
    const how_it_works= document.getElementById('how_it_works');

    HowItWorks.addEventListener('click', () => {
      if (how_it_works.style.display === 'none') {
        how_it_works.style.display = 'block';
      } else {
        how_it_works.style.display = 'none';
      }
    });