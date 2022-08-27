/* global chrome */
const init = function () {
    const btnElt = document.createElement("button");
    btnElt.innerHTML = 'View Matching Products';
    btnElt.className = 'matches-btn';
    const genderList = ['women', 'men']
    const colorList = ['white', 'blue', 'yellow',];
    const typeList = ['casual-shirt', 't-shirt', 'shirt', 'jeans', 'shoes', 'top', 'dress', 'skirt'];
    chrome.runtime.onMessage.addListener((obj) => {
        const { url } = obj;
        const color = colorList.find(item => url.indexOf(item) > -1);
        const type = typeList.find(item => url.indexOf(item) > -1);
        const gender = genderList.find(item => url.indexOf(item) > -1);
        const product = {
            color,
            type,
            gender
        };
        btnElt.addEventListener("click", () => navigate(product));
    });
    const sizeContainer = document.getElementsByClassName('size-buttons-size-container')?.[0];
    if (sizeContainer) {
        sizeContainer.append(btnElt);
    }
    const productImg = document.getElementsByClassName('image-grid-image')[0].style.backgroundImage;
    const productTitle = document.getElementsByClassName("pdp-title")[0].innerText;
    const productDesc = document.getElementsByClassName("pdp-name")[0].innerText;
    const product = {
        image: productImg.split('"')[1],
        title: productTitle,
        description: productDesc
    };
    localStorage.setItem("product", JSON.stringify(product));
}

const navigate = function (product) {
    window.open(`http://localhost:3000/combinations?color=${product.color}&type=${product.type}&gender=${product.gender}`, '_blank')
}

init();

