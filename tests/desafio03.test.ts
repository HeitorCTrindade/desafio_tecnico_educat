import { Product, findMostExpensiveProduct } from '../functions/desafio03';

describe('3 - Testa função findMoreExpensiveProduct', () => {
	it(`Será validado se função retorna corretamente o produto mais caro da lista`, async () => {
		expect(findMostExpensiveProduct(mockProductsList1)).toEqual({
			nome: 'produto6',
			preco: 100,
		});
	});

	it(`Será validado se função retorna corretamente o produto mais caro da lista`, async () => {
		expect(findMostExpensiveProduct(mockProductsList2)).toEqual({
			nome: 'produto1',
			preco: 100,
		});
	});

	it(`Será validado se função retorna corretamente o produto mais caro da lista`, async () => {
		expect(findMostExpensiveProduct(mockProductsList3)).toEqual({
			nome: 'produto10',
			preco: 100,
		});
	});
});

const mockProductsList1: Product[] = [
	{ nome: 'produto1', preco: 55 },
	{ nome: 'produto2', preco: 30 },
	{ nome: 'produto3', preco: 80 },
	{ nome: 'produto4', preco: 25 },
	{ nome: 'produto5', preco: 50 },
	{ nome: 'produto6', preco: 100 },
	{ nome: 'produto7', preco: 40 },
	{ nome: 'produto8', preco: 60 },
	{ nome: 'produto9', preco: 35 },
	{ nome: 'produto10', preco: 45 },
];

const mockProductsList2: Product[] = [
	{ nome: 'produto1', preco: 100 },
	{ nome: 'produto2', preco: 30 },
	{ nome: 'produto3', preco: 80 },
	{ nome: 'produto4', preco: 25 },
	{ nome: 'produto5', preco: 50 },
	{ nome: 'produto6', preco: 70 },
	{ nome: 'produto7', preco: 40 },
	{ nome: 'produto8', preco: 60.58 },
	{ nome: 'produto9', preco: 35 },
	{ nome: 'produto10', preco: 45 },
];

const mockProductsList3: Product[] = [
	{ nome: 'produto1', preco: 1 },
	{ nome: 'produto2', preco: 30.89 },
	{ nome: 'produto3', preco: 80 },
	{ nome: 'produto4', preco: 25 },
	{ nome: 'produto5', preco: 50 },
	{ nome: 'produto6', preco: 70 },
	{ nome: 'produto7', preco: 40 },
	{ nome: 'produto8', preco: 60 },
	{ nome: 'produto9', preco: 35 },
	{ nome: 'produto10', preco: 100 },
];
