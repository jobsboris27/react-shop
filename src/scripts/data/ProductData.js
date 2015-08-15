let products = [
    {
        id: 1,
        name: 'Product 1',
        price: 10
    },
    {
        id: 2,
        name: 'Product 2',
        price: 15
    },
    {
        id: 3,
        name: 'Product 3',
        price: 20
    },
    {
        id: 4,
        name: 'Product 4',
        price: 8
    },
    {
        id: 5,
        name: 'Product 5',
        price: 32
    }
];
let ProductData = null;

localStorage.setItem( 'products', JSON.stringify(products) );

if (localStorage.getItem( 'products' )) {
    ProductData = JSON.parse(localStorage.getItem( 'products' ));
}
export default ProductData;

