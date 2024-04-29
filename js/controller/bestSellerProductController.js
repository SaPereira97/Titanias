import bestSellerProductView from "/js/view/bestSellerProductView.js";

function init() {
  bestSellerProductView.showView();
}

document.addEventListener("DOMContentLoaded", function () {
  $("#img1").on("click", function () {
    init();
  });
});

export default { init };
