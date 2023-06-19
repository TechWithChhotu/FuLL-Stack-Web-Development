/*=======================
    Write a function that takes an array of products and returns a function that filters the array by a given product category. The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input.
========================*/
function filterProductsByCategory(products) {
    return function (category) {
        return products.filter(product => product.category === category);
    };
}

const products = [
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Clothing' },
    { name: 'Product 3', category: 'Electronics' },
    { name: 'Product 4', category: 'Home' },
];

const filterByCategory = filterProductsByCategory(products);

const electronicsProducts = filterByCategory('Electronics');
console.log(electronicsProducts);

const clothingProducts = filterByCategory('Clothing');
console.log(clothingProducts);

const homeProducts = filterByCategory('Home');
console.log(homeProducts);

