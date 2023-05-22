// test 01

import isOdd from '../functions/desafio01';

describe('1 - Testa se um numero é impar', () => {
	it('Será validado se fução retorna TRUE quando um número impar é informado', async () => {
		expect(isOdd(5)).toBe(true);
	});
});
