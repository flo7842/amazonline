import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
            countInStock: 10

        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 8,
            description: 'High quality product',
            countInStock: 5

        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 150,
            brand: 'Lacoste',
            rating: 5.0,
            numReviews: 18,
            description: 'High quality product',
            countInStock: 0

        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'High quality product',
            countInStock: 2

        },
        {
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 80,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
            countInStock: 15

        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 129,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 17,
            description: 'High quality product',
            countInStock: 30

        },
    ],
};
export default data;