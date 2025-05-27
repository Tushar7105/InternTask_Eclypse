import { Router } from 'express';

const router = Router();

const dummyProducts = [
  {
    id: 1,
    name: 'Product 1',
    image: '/images/product1.png',
    price: 29.99,
    description: 'A short description of product 1'
  },
  {
    id: 2,
    name: 'Product 2',
    image: '/images/product2.png',
    price: 49.99,
    description: 'A short description of product 2'
  }
];

router.get('/', (req, res) => {
  res.json(dummyProducts);
});

export default router;
