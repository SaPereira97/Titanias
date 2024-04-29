import latestProducts from "/js/view/latestView.js";

function init () {
    latestProducts.showView();
}

document.addEventListener('DOMContentLoaded', function () {
    $('#img2').on('click', function () {
        init();
    });
})

export default { init };