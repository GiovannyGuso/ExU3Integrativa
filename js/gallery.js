// js/gallery.js
document.addEventListener('DOMContentLoaded', () => {
  const games = [
    {
      title: 'God of War 1',
      img: 'assets/gow1.png',
      desc: 'Kratos, un guerrero espartano traicionado, busca venganza contra Ares.'
    },
    {
      title: 'God of War 2',
      img: 'assets/gow2.jpg',
      desc: 'Kratos se enfrenta a los dioses del Olimpo tras ser traicionado por Zeus.'
    },
    {
      title: 'God of War 3',
      img: 'assets/gow3.jpg',
      desc: 'La batalla final de Kratos contra Zeus y los poderosos dioses del Olimpo.'
    },
    {
      title: 'God of War (2018)',
      img: 'assets/gow4.jpg',
      desc: 'Kratos viaja con su hijo Atreus para cumplir la promesa de su esposa.'
    },
    {
      title: 'God of War Ragnarök',
      img: 'assets/gow5.jpg',
      desc: 'Kratos y Atreus se preparan para enfrentar el Ragnarök en los Nueve Reinos.'
    }
  ];

  const gallery = document.getElementById('gallery');

  games.forEach(({ title, img, desc }) => {
    const cell = document.createElement('div');
    cell.className = 'mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet mdl-cell--12-col-phone';

    cell.innerHTML = `
      <div class="demo-card mdl-card mdl-shadow--4dp">
        <div class="mdl-card__media">
          <img src="${img}" alt="${title}">
        </div>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">${title}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          ${desc}
        </div>
      </div>
    `;

    // Fallback si la imagen no carga
    const imageEl = cell.querySelector('img');
    imageEl.onerror = () => {
      imageEl.src = 'assets/placeholder.png';
    };

    gallery.appendChild(cell);
  });
});
