import countWords from '../functions/desafio04';

describe('4 - Testa função countWords', () => {
	it(`Será validado se função retorna corretamente a contagem de palavras da lista`, async () => {
		expect(countWords(['apple', 'banana', 'apple', 'orange'])).toEqual({
			apple: 2,
			banana: 1,
			orange: 1,
		});
	});

	it(`Será validado se função retorna corretamente a contagem de palavras da lista`, async () => {
		expect(countWords(['apple', 'banana', 'apple', 'orange', 'apple', 'apple', 'avocado'])).toEqual({
			apple: 4,
			banana: 1,
			orange: 1,
			avocado: 1,
		});
	});
});
