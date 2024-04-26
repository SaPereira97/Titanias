import bestSellerView from '/js/view/bestSellerView.js';

function init() {
  bestSellerView.showView();
}

document.addEventListener('DOMContentLoaded', function () {
  $('#img1').on('click', function () {
    init();
  });
});

export default { init };
