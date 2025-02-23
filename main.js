// const container = document.createElement('div');
// const numberRow = document.createElement("div");

// container.appendChild(numberRow);

// container.classList.add('container');
// numberRow.classList.add('row');

// document.body.appendChild(container);

// for (let i = 0; i < 100; i++) {
//     const numberBox = document.createElement('div');
//     numberBox.classList.add('col-2', 'p-3', 'text-white');
//     numberBox.style.backgroundColor = i % 2 === 0 ? 'blue' : 'brown';
//     numberBox.innerHTML = i;
//     numberBox.style.border = '1px solid black';
//     numberRow.appendChild(numberBox);
// };





let products = [
    { title: 'Headphone', description: 'this is Headphone', price: 2500 },
    { title: 'keyboard', description: 'this is keyboard', price: 3000 },
    { title: 'Iphone', description: 'this is Iphone', price: 4000 }

]
const productsContainer = document.createElement('div');
productsContainer.classList.add('container', 'text-center', 'bg-warning', 'text-dark');
document.body.appendChild(productsContainer);

function displayData(products) {
    products.forEach(element => {
        const productBox = document.createElement('div');
        productBox.classList.add('card', 'mb-3', 'p-3', 'py-5');
        productBox.innerHTML = `<h3>${element.title}</h3>
        <p>${element.description}</p>
        <h4>${element.price}</h4>`
        productsContainer.appendChild(productBox)

    });
}
displayData(products)