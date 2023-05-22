// - Escreva uma função que receba um número inteiro como parâmetro e verifique se ele é um número primo. A função deve retornar True se o número for primo e False caso contrário. E deve identificar os números primos entre 0 e 2000.

const verifyPrimes = (num: number): object => {
	return { isPrime: isPrime(num), primes: findPrimesLessThan2000() };
};

const isPrime = (num: number): boolean => {
	if (num < 2) return false;

	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
};

const findPrimesLessThan2000 = (): number[] => {
	const primes: number[] = [];

	for (let i = 2; i < 2000; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}

	return primes;
};

export default verifyPrimes;
