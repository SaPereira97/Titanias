function showView() {
    var body = document.getElementById('mainDiv');
    body.innerHTML = '';

    body.innerHTML = `

        <div id="customize-form">
            <h2>Customize Your Product</h2>
            <form id="customizeForm">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br>
                <label for="clothingType">Clothing Type:</label>
                <select id="clothingType" name="clothingType">
                    <option value="tshirt">T-Shirt</option>
                    <option value="pants">Pants</option>
                </select>
                <br>
                <label for="size">Size:</label>
                <select id="size" name="size">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
                <br>
                <label for="color">Color:</label>
                <select id="color" name="color">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                </select>
                <br>
                 <button type="submit" id="submitBtn">Submit</button>
            </form>
        </div>
    `;
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = '/';
    });
}

export default { showView };
