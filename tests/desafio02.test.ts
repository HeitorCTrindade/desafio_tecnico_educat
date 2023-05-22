import formatStr from '../functions/desafio01';

describe('1 - Testa função formatStr', () => {
	it('Será validado se fução retorna corretamente a string com as vogais trocadas por - e todos os demais caracteres maiúsculos', async () => {
		expect(formatStr([68, 76, 97, 56, 90])).toEqual([68, 76, 56, 90]);
	});

	it('Será validado se fução retorna um array vazio quando não encontra numeros pares no array', async () => {
		expect(findEvens([55, 67, 201])).toEqual([]);
	});
});