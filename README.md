# Desafio Cross Commerce

Olá! Essa é a minha solução para o desafio.
Foi utilizado node v16.13.1 e npm 8.3.1

## Como rodar a aplicação

**Primeiramente, certifique-se de ter o node e npm instalados na sua máquina**<br /><br />
**Setup das dependências**

Execute o seguinte comando para instalar todas as dependências do projeto:

```npm install```
<br /><br />
**Rodando a aplicação**

Depois da instalação das dependências, basta rodar:

```npm run start```<br /><br />

## Como acessar os números ordenados
O resultado final da extração e orndenação dos números será exposto na rota ```/numbers```.<br />
A porta exposta é a porta ```3000``` <br/>.
Poderá ser passado também o parametro page, assim como segue o exemplo: ```http://localhost:3000/numbers?page=7000```

## Como funciona a rota
Ao rodar a aplicação, será feita uma extração de todos os números da api indicada no teste.<br />
Como a quantidade de páginas é muito grande, irá demorar alguns minútos para terminar a extração, e, caso acesse a rota ```/numbers``` antes da extração e transformação serem concluídas, a rota não retornará os números, apenas informação de quantas páginas já foram extraídas com sucesso até o momento, e quantas páginas já foram iteradas no total:

```
{
  "isExtractionComplete": false,
  "pagesSucessfulyExtracted": 8893,
  "pagesIterated": 8920,
  "data": []
}
```

<br/>
Caso a extração e transformação tenham sido concluídas, será retornado também um campo data, contendo os números ordenados (100 por página):

 
 ```
{
  "isExtractionComplete": true,
  "pagesSucessfulyExtracted": 9893,
  "pagesIterated": 10000,
  "data": [
    0.7071230603055692,
    0.7071233555455995,
    0.7071290735730147]
}
```

## Testes

Para rodar os testes, basta rodar o comando ```npm run test``` <br/>
Eles ficam localizados na pasta test, na raiz do projeto.

## Algoritmo de ordenação

O algoritmo de ordenação que escolhi for o mergesort, visto que é um algoritmo eficiente tanto para pequenos arrays quanto para arrays maiores, como é o caso do teste. <br/>
Foi implementada uma versão iterativa do mergesort, pois com um array tão grante, poderia um stack overflow caso fosse usado recursividade.



 
