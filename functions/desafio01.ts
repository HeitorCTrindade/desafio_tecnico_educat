// - Escreva uma função que receba uma lista de números inteiros como parâmetro e retorne uma nova lista contendo apenas os números pares da lista original.

const findEvens = (list: number[]): number[] => {
	const listEvens: number[] = [];
	list.forEach((number) => {
		if (!isOdd(number)) listEvens.push(number);
	});
	return listEvens;
};

const isOdd = (n: number): boolean => {
	return Boolean(n % 2);
};

export default findEvens;
