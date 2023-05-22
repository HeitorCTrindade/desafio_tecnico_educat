// - Escreva uma função que receba uma string como parâmetro e retorne uma nova string com todas as vogais substituídas pelo caractere "-" e todas as consoantes convertidas para maiúsculas. Por exemplo, se a string for "Hello World", a função deve retornar "H-LL- W-RLD".

const formatStr = (str: string): string => {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (/^[aeiou]$/i.test(str[i])) {
			newStr += '-';
		} else {
			newStr += str[i].toLocaleUpperCase();
		}
	}

	return newStr;
};

export default formatStr;
