function showView() {
    let body = document.getElementById('mainDiv');
    body.innerHTML = `
        <h1 class="title" id="title">Titania's Art</h1>

        <div id="about">
            something about me, my passion for anime and reasons to create this project
        </div>

         <link rel="stylesheet" href="../css/latestView.css">
         <script src="../script2.js"></script>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Link para o plugin Owl Carousel -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

<section class="game-section">
  <h2 class="line-title">trending games</h2>
  <div class="owl-carousel custom-carousel owl-theme">
    <div class="item active" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);">
      <div class="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg);">
      <div class="item-desc">
        <h3>The Witcher 3</h3>
        <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense
          of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg);">
      <div class="item-desc">
        <h3>RDR 2</h3>
        <p>RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg);">
      <div class="item-desc">
        <h3>PUBG Mobile</h3>
        <p>PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg);">
      <div class="item-desc">
        <h3>Fortnite</h3>
        <p>Battle royale where 100 players fight to be the last person standing. which was a community-created mod
          for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg);">
      <div class="item-desc">
        <h3>Far Cry 5</h3>
        <p>Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.
          which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
  </div>
  </div>
</section> `;
}


export default { showView };
