const productsContainer = document.querySelector('#products-container');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('./js/products.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `                <div class="box" data-id="${item.id}">
        <img src="../imges/${item.imgSrc}" alt=""/>
        <div class="info">
            <div>
            <p class="title T-Center">${item.title}</p>
            
            <div >${item.price} ₽</div>
            <div >${item.weight} гр</div>
            <div class="counter-wrapper T-Center ">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter>1</div>
                <div class="items__control" data-action="plus">+</div>
            </div>
            <div >${item.price} Руб</div>
            </div>

        </div>
        
    </div>`;


                
     
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}