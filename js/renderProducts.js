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
        const productHTML = `<div class="box" data-id="${item.id}">
					<figure>
						<img src="../imges/${item.imgSrc}" alt="">
						<p class="title T-Center">${item.title}</p>
						<figcaption>

							<div class="price T-Center">
								<div class="price__currency">${item.price} ₽</div>
								<div class="price__weight">${item.weight} гр</div>
							</div>

					</figcaption>
						<div class="details-wrapper">
							<div class="counter-wrapper T-Center">
								<div class="items__control" data-action="minus">-</div>
								<div class="items__current" data-counter>1</div>
								<div class="items__control" data-action="plus">+</div>
							</div>
					   
					</div>

						<button>В корзину</button>
					</figure>
				</div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}