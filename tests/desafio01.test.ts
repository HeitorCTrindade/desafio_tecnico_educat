// test 01

import findEvens from '../functions/desafio01';

describe('1 - Testa função findEvens', () => {
	it('Será validado se fução retorna corretamente os numeros pares do array [68, 76, 97, 56, 90]', async () => {
		expect(findEvens([68, 76, 97, 56, 90])).toEqual([68, 76, 56, 90]);
	});

	it('Será validado se fução retorna um array vazio quando não encontra numeros pares no array', async () => {
		expect(findEvens([55, 67, 201])).toEqual([]);
	});
});
