function showView() {
  var body = document.getElementById("mainDiv");
  body.innerHTML = "";

  body.innerHTML = `<h1 class="title" id="art">Titania's Art</h1>
  
      <div id="about">
      something about me, my passing for anime and reasons to create this shit
      </div>`;
}

export default { showView };
