import customizeView from '/js/view/customizeView.js';


function init() {
    customizeView.showView();
}

document.addEventListener('DOMContentLoaded', function () {
    $('#customize').on('click', function () {
      init();
    });
  });

export default { init };
