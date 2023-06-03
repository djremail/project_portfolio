const data = [
    {
      image: './image/furniture-showroom.png',
      title: 'Furniture',
      link: 'https://djremail.github.io/Furniture-showroom/'
    },
    {
      image: './image/nike.png',
      title: 'Nike',
      link: 'https://djremail.github.io/Nike/'
    },
    {
        image: './image/mariela.png',
        title: 'Mariela',
        link: 'https://djremail.github.io/mariela/'
      },
      {
        image: './image/code_x.png',
        title: 'Code_X',
        link: 'https://djremail.github.io/code_x/'
      },
      {
        image: './image/estate.png',
        title: 'Estate',
        link: 'https://djremail.github.io/estate/'
      },
      {
        image: './image/boosted_USA.png',
        title: 'boosted_USA',
        link: 'https://djremail.github.io/boosted_USA/'
      },
      {
        image: './image/coffee_style.png',
        title: 'Coffee style',
        link: 'https://djremail.github.io/coffee_style/'
      },
      {
        image: './image/estate-house.png',
        title: 'Estate House',
        link: 'https://djremail.github.io/estate-house/'
      },
      {
        image: './image/pompeo.png',
        title: 'Pompeo',
        link: 'https://djremail.github.io/pompeo/'
      },
      {
        image: './image/dudeShape.png',
        title: 'dudeShape',
        link: 'https://djremail.github.io/dudeShape/'
      },
      {
        image: './image/guest_house.png',
        title: 'Guest House',
        link: 'https://djremail.github.io/guest_house/'
      },
      {
        image: './image/travelo.png',
        title: 'Travelo',
        link: 'https://djremail.github.io/travelo/'
      },
      {
        image: './image/qubit.png',
        title: 'Qubit',
        link: 'https://djremail.github.io/qubit/'
      },
      {
        image: './image/spaatz.png',
        title: 'Spaatz',
        link: 'https://djremail.github.io/spaatz/'
      },
      {
        image: './image/ifinizai.png',
        title: 'Ifinizai',
        link: 'https://djremail.github.io/ifinizai/'
      },
      {
        image: './image/velocity.png',
        title: 'Velocity',
        link: 'https://djremail.github.io/velocity/'
      },
    // Додайте інші проекти до масиву `data`
  ];
  
  const portfolioContainer = document.getElementById('portfolio');
  
  data.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('item');
  
    const itemHTML = `
      <div class="main_image">
        <img src="${item.image}">
      </div>
      <div class="main_wrapper">
        <h4>${item.title}</h4>
        <a href="${item.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    `;
  
    portfolioItem.innerHTML = itemHTML;
    portfolioContainer.appendChild(portfolioItem);
  });