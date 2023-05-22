// - Escreva uma função que receba uma lista de strings como parâmetro e retorne um dicionário em que as chaves são as palavras únicas da lista e os valores são a contagem de quantas vezes cada palavra aparece. Por exemplo, se a lista for ["apple", "banana", "apple", "orange"], a função deve retornar {"apple": 2, "banana": 1, "orange": 1}.

const countWords = (words: string[]): object => {
	const wordsObj: {[key: string]: number} = {};
	words.forEach((word) => {
		if (!(word in wordsObj)) {
			wordsObj[word] = 0;
		}
		wordsObj[word] += 1;
	});
	return {};
};

export default countWords;
