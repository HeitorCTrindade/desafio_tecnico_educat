<a name="readme-top"></a>

<h1 align="center">Desafio Técnico submetido à empresa Educat para o cargo de estágio.</h1>

<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-desafio">Sobre o Projeto</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#como-executar-o-projeto-do-desafio">Como Executar o Projeto</a></li>     
  </ol>
</details>

## Sobre o Projeto
Olá, esse é o README do projeto criado para atender ao desafio proposto pela empresa Educat para o cargo de estágio em desenvolvimento de software.

O desafio proposto consistiu em criar 05 funções para resolver os seguintes problemas (ipsis litteris - conforme recebido por email):

- Escreva uma função que receba uma lista de números inteiros como parâmetro e retorne uma nova lista contendo apenas os números pares da lista original.
- Escreva uma função que receba uma string como parâmetro e retorne uma nova string com todas as vogais substituídas pelo caractere "-" e todas as consoantes convertidas para maiúsculas. Por exemplo, se a string for "Hello World", a função deve retornar "H-LL- W-RLD".
- Escreva uma função que receba uma lista de dicionários, em que cada dicionário representa um produto com as chaves "nome" (string) e "preco" (float). A função deve retornar o produto mais caro da lista.
- Escreva uma função que receba uma lista de strings como parâmetro e retorne um dicionário em que as chaves são as palavras únicas da lista e os valores são a contagem de quantas vezes cada palavra aparece. Por exemplo, se a lista for ["apple", "banana", "apple", "orange"], a função deve retornar {"apple": 2, "banana": 1, "orange": 1}.
- Escreva uma função que receba um número inteiro como parâmetro e verifique se ele é um número primo. A função deve retornar True se o número for primo e False caso contrário. E deve identificar os números primos entre 0 e 2000.

Para resolver o desafio: 
- Criei o ambiente necessário em TypeScript para presente projeto (Node.js, Eslint e Jest).
- Criei um arquivo para cada função (denominados como desafio0'X'.ts). Implementei nos arquivos as funções necessárias para resolver os problemas assinalados, assim como funções auxiliares para deixar a código mais coeso e claro. 
- Implementei testes com Jest para avaliar as funções criadas.

Foi utilizada a metodologia *TDD* sempre que viável. 

## Tecnologias utilizadas

[![Typescript][typescript-badge]][typescript-url] [![Jest][jest-badge]][jest-url]

## Como executar os testes criados para o desafio
Para rodar o projeto localmente, siga os passos abaixo.

1. Clone o repositório;
```
git@github.com:HeitorCTrindade/desafio_tecnico_educat.git
```
2. Instale as dependências necessárias (porem ser consutadas no arquivo package.json)  ;
```
npm install
```
3. Para executar verificar o funcionamento das funções execute os testes, utilize o comando `npm test`. 
```
npm test
```
É possível testar cada arquivo individualmente, conforme o exemplo abaixo.
```
npm test tests/*nome.do.arquivo*.ts
```


## Contato
Projeto desenvolvido por Heitor C. Trindade :robot:.

[![Gmail][gmail-badge]][gmail-url] [![Linkedin][linkedin-badge]][linkedin-url] [![GitHub][github-badge]][github-url]

<p align="right"><a href="#readme-top">Voltar ao topo</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
[typescript-url]: https://www.typescriptlang.org/
[typescript-badge]:https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[jest-url]: https://jestjs.io/
[jest-badge]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:heitorct.dev@gmail.com
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/heitor-catarino-trindade
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/HeitorCTrindade/
