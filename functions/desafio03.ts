// - Escreva uma função que receba uma lista de dicionários, em que cada dicionário representa um produto com as chaves "nome" (string) e "preco" (float). A função deve retornar o produto mais caro da lista.

export interface Product {
	nome: string;
	preco: number;
}

export const findMostExpensiveProduct = (products: Product[]): Product => {
	const mostExpensiveProduct = products.reduce((accProduct, product) => {
		return product.preco > accProduct.preco ? product : accProduct;
	});
	return mostExpensiveProduct;
};
