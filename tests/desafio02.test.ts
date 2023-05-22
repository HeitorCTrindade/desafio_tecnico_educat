import formatStr from '../functions/desafio02';

describe('1 - Testa função formatStr', () => {
	it(`Será validado se função retorna corretamente a string "Hello World" com as vogais trocadas por '-' e todos os demais caracteres maiúsculos`, async () => {
		expect(formatStr('Hello World')).toMatch('H-LL- W-RLD');
	});

	it(`Será validado se função retorna corretamente a string "Estagio eduCAT" com as vogais trocadas por '-' e todos os demais caracteres maiúsculos`, async () => {
		expect(formatStr('Estagio eduCAT')).toMatch('-ST-G-- -D-C-T');
	});
});