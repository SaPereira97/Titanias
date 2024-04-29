function showView() {
  var body = document.getElementById("mainDiv");
  body.innerHTML = "";

  body.innerHTML = `<link rel="stylesheet" href="./css/view.css" />
  
  <h1 class="title" id="title">Titania's Art</h1>

  <main class="page-content">
    <div class="card" id="mountainCard">
        <div class="content">
            <h2 class="title">Mountain View</h2>
            <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p><button class="btn">View Trips</button></div>
    </div>
    <div class="card" id="beachCard">
        <div class="content">
            <h2 class="title">To The Beach</h2>
            <p class="copy">Plan your next beach trip with these fabulous destinations</p><button class="btn">View Trips</button></div>
    </div>
    <div class="card" id="desertCard">
        <div class="content">
            <h2 class="title">Desert Destinations</h2>
            <p class="copy">It's the desert you've always dreamed of</p><button class="btn">Book Now</button></div>
    </div>
    <div class="card" id="galaxyCard">
        <div class="content">
            <h2 class="title">Explore The Galaxy</h2>
            <p class="copy">Seriously, straight up, just blast off into outer space today</p><button class="btn">Book Now</button></div>
    </div>
</main> `;

  var title = document.getElementById('title');
  title.style.position = 'fixed';
  title.style.top = '18px'; 
  title.style.left = '50%'; 
  title.style.transform = 'translateX(-50%)';
  title.style.fontFamily = 'Fantasy, Papyrus';
  title.style.fontSize = '500%'; 

  var cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => {
        if (c !== card) {
          c.style.display = 'none';
        }
      });
      card.style.width = '140%';
      card.style.height = '500px'; 
      card.style.right = '70%'
    });
  });
}

export default { showView };
