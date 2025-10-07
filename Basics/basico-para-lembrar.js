//--------------------------> SINAIS DE ALERTA E ERRO NO CONSOLE INSPECIONAR
console.warn('ESSE NÃO É ERRO, É SÓ UM AVISO') //Use o console.warn() para exibir avisos. Não é um erro que quebra a aplicação, mas uma situação que o desenvolvedor deve estar ciente.
console.error('Falha na autenticação: A senha precisa ter no mínimo 8 caracteres.') //Use o console.error() para exibir erros. Diferente de um aviso, um erro geralmente significa que algo deu errado e a operação esperada não pôde ser concluída. É usado para mensagens de falha crítica.

//-------------------------->APENAS MENSAGENS NO CONSOLE INSPECIONAR
console.log('Para aparecer algo no console - inspecionar elemento')
console.log('String with \n multiple \n lines') //Aspas Normais (' ou "): Use \n para pular a linha na saída, mas escreva todo o seu código em uma única linha.
console.log(`String
with multiple lines`) //Aspas de Acento (`): Pode pular a linha diretamente no seu código, e essa quebra será refletida na saída.

//-------------------------->console.table() serve para exibir dados complexos, como arrays e objetos, de uma forma muito mais organizada e legível do que o console.log() tradicional.  Ele formata os dados em uma tabela interativa dentro do console do navegador.
const usuarios = [
 { id: 1, nome: 'Ana', cidade: 'São Paulo' },
 { id: 2, nome: 'Bruno', cidade: 'Rio de Janeiro' },
 { id: 3, nome: 'Carla', cidade: 'São Paulo' }
]
console.table(usuarios)
console.log(usuarios)

//-------------------------->IT OPEN A BOX ON THE BROWSER, SO THE USER CAN TEXT SOMETHING
//prompt('Dit it opened there, mooron?')

//--------------------------> INSERIR COR DE FUNDO EM UMA DIV (1a e 3a seções)
const bgHero = document.querySelector('.relatives') //1a seção
bgHero.style.background = 'linear-gradient(180deg, rgba(7, 48, 108, 1) 0%, rgba(96, 58, 222, 1) 100%)'

const bgWhoWeAre = document.querySelector('.cards') //3a seção
bgWhoWeAre.style.backgroundColor = '#151515ff'

//--------------------------> TESTE DE QUERY SELECTOR
const firstElement = document.querySelector('.javonico') // Pega UM SÓ elemento (o primeiro que encontra). Ele não retorna uma lista, então você não pode usar o método .forEach() nele.
firstElement.style.color = '#50F798'

const quartoLi = document.querySelector('li:nth-of-type(4)') // Pega o quarto elemento
quartoLi.style.color = '#50F798'

const secao4 = document.querySelector('.branquelonico') // 1. Mudar a cor de fundo da 4ª seção
secao4.style.backgroundColor = 'white'

//--------------------------> INSERT A TEXT BEFORE THE <P> IN THE CARDS SECTION
const pDosCards = document.querySelectorAll('.iamacard p') // Seleciona TODOS os parágrafos (<p>) dentro das divs com a classe .iamacard
const descricoes = ['Added by Js No 1', 'Js No2', 'Js No3'] // As descrições que você quer adicionar

// Passa por cada parágrafo encontrado
pDosCards.forEach((paragrafoExistente, index) => {
 // Verifica se existe uma descrição para a posição atual
 if (descricoes[index]) {
  const novoParagrafo = document.createElement('p') // 1. Cria um elemento <p> completamente NOVO na memória
  novoParagrafo.textContent = descricoes[index] // 2. Coloca o texto da descrição nesse novo <p>
  paragrafoExistente.insertAdjacentElement('afterend', novoParagrafo) // 3. Insere o NOVO parágrafo DEPOIS do parágrafo existente. O original não é tocado.
  novoParagrafo.classList.add('formataAddedP') // Adiciona uma classe e alterei depois no CSS
 }
})

//--------------------------> TESTE DE QUERY SELECTOR ALL
const todosOsPCards = document.querySelectorAll('.iamacard p') // 2. Pegar o SEGUNDO <P> dos cards e mudar a cor.
const segundoPCard = todosOsPCards[1] // Depois, acessamos o segundo item da lista (que está na posição 1, pois a contagem começa em 0).
segundoPCard.style.color = 'orange' // Mudando a cor do texto

// Pega TODOS os elementos que correspondem. Ele retorna uma NodeList (uma lista), na qual você pode usar o .forEach(). Abaixo temos .forEach() para passar por CADA elemento da lista
const allElements = document.querySelectorAll('.iamacard')
allElements.forEach(card => {
 card.style.maxWidth = '32%'
 card.style.width = '100%'
 card.style.backgroundColor = 'var(--white)'
 card.style.padding = '1em'
 card.style.borderRadius = '10px'
})
