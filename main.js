const url = 'http://localhost:3000';
const endpoint = '/eShop';

fetch(url + endpoint)
    .then((response) => response.json())
    .then((eShop) => listShop(eShop))

function listShop(eShop) {
    const template = document.querySelector('#eShop-cards');
    const output = document.querySelector('[data-cards]')
      

   for (const shop of eShop) {
 
        const clonedTemplate = template.content.cloneNode(true);

        const description = clonedTemplate.querySelector('[data-eShopDescription]');
        description.textContent = shop.description;

        const offers = clonedTemplate.querySelector('[data-eShopOffers]');
        offers.textContent = shop.offers;

        const price = clonedTemplate.querySelector('[data-eShopPrice]');
        price.textContent = shop.price;

        const image = clonedTemplate.querySelector('[data-eShopImage]');
        image.src = shop.images;

        output.appendChild(clonedTemplate)
    }

}