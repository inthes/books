let localNav = document.querySelector('.local-nav');
list.forEach(item => {
    let listLi = document.createElement('li');
    let listImg = document.createElement('img');
    localNav.appendChild(listLi);
    listImg.src = item;
    listLi.appendChild(listImg);
})

let commodity = document.querySelector('.commodity');
books.forEach(item => {
    let commodityLi = document.createElement('li');
    let commodityImg = document.createElement('img');
    let commodityMessage = document.createElement('div');
    commodityMessage.className = 'message';
    let commodityTitle = document.createElement('h2');
    let commodityContent = document.createElement('p');
    let commodityPrice = document.createElement('h3');
    let commodityOld = document.createElement('span');
    commodityImg.src = item.thumbSrc;
    commodityTitle.innerHTML = item.bookName;
    commodityContent.innerHTML = item.content;
    commodityPrice.innerHTML = "￥" + item.presentPrice;
    commodityOld.innerHTML = "￥" + item.originalPrice;
    commodityLi.appendChild(commodityImg);
    commodityMessage.appendChild(commodityTitle);
    commodityMessage.appendChild(commodityContent);
    commodityMessage.appendChild(commodityPrice);
    commodityPrice.appendChild(commodityOld);
    commodityLi.appendChild(commodityMessage)
    commodity.appendChild(commodityLi);
})
commodity.children[0].addEventListener('click', () => {
    location.href = 'detail/alphabet.html'
})