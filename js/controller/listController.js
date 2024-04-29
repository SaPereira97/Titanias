import listView from '/js/view/listView.js';

function init() {
  listView.showView();
}

document.addEventListener('DOMContentLoaded', function () {
  $('#img3').on('click', function () {
    init();
  });
});

export default { init };