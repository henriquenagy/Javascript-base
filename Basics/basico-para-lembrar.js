//-------------> SINAIS DE ALERTA E ERRO NO CONSOLE INSPECIONAR
console.warn('ESSE NÃO É ERRO, É SÓ UM AVISO') //Use o console.warn() para exibir avisos. Não é um erro que quebra a aplicação, mas uma situação que o desenvolvedor deve estar ciente.
console.error('Falha na autenticação: A senha precisa ter no mínimo 8 caracteres.') //Use o console.error() para exibir erros. Diferente de um aviso, um erro geralmente significa que algo deu errado e a operação esperada não pôde ser concluída. É usado para mensagens de falha crítica.

//-------------> APENAS MENSAGENS NO CONSOLE INSPECIONAR
console.log('Para aparecer algo no console - inspecionar elemento')
console.log('String with \n multiple \n lines') //Aspas Normais (' ou "): Use \n para pular a linha na saída, mas escreva todo o seu código em uma única linha.
console.log(`String
with multiple lines`) //Aspas de Acento (`): Pode pular a linha diretamente no seu código, e essa quebra será refletida na saída.

//-------------> console.table() serve para exibir dados complexos, como arrays e objetos, de uma forma muito mais organizada e legível do que o console.log() tradicional.  Ele formata os dados em uma tabela interativa dentro do console do navegador.
const usuarios = [
 { id: 1, nome: 'Ana', cidade: 'São Paulo' },
 { id: 2, nome: 'Bruno', cidade: 'Rio de Janeiro' },
 { id: 3, nome: 'Carla', cidade: 'São Paulo' }
]
console.table(usuarios)
console.log(usuarios)

//-------------> IT OPEN A BOX ON THE BROWSER, SO THE USER CAN TEXT SOMETHING
//prompt('Dit it opened there, mooron?')

//-------------> INSERIR COR DE FUNDO EM UMA DIV (AQUI É A HERO 1a seção e fundo dos cards Who we are)
const bgHero = document.querySelector('.relatives')
const bgWhoWeAre = document.querySelector('.cards')
//Aplica o estilo de background diretamente na propriedade 'style.background'. Note que passamos apenas o valor, dentro de aspas.
bgHero.style.background =
 'linear-gradient(180deg, rgba(7, 48, 108, 1) 0%, rgba(96, 58, 222, 1) 100%)'
bgWhoWeAre.style.backgroundColor = '#151515ff'

//-------------> TESTE DE SELETORES
const firstElement = document.querySelector('.javonico') // Pega UM SÓ elemento (o primeiro que encontra). Ele não retorna uma lista, então você não pode usar o método .forEach() nele.
firstElement.style.color = '#50F798'
const quartoP = document.querySelector('p:nth-of-type(4)')

const allElements = document.querySelectorAll('.iamacard') // Pega TODOS os elementos que correspondem. Ele retorna uma NodeList (uma lista), na qual você pode usar o .forEach(). Abaixo temos .forEach() para passar por CADA elemento da lista
allElements.forEach(card => {
 card.style.backgroundColor = 'white'
}) // 'card' aqui representa um elemento .iamacard de cada vez durante o loop

const doFundao = document.querySelector('#branquelonico')
const body = document.body
doFundao.style.width = '100vw'
doFundao.style.height = '20vh'

//-------------> INSERT A TEXT BEFORE THE <P> IN THE CARDS SECTION
const pDosCards = document.querySelectorAll('.iamacard p') // Seleciona TODOS os parágrafos (<p>) dentro das divs com a classe .iamacard
// As descrições que você quer adicionar
const descricoes = [
 'Hi, im eistein and was add by js',
 'Add with js 2',
 'And im the last card of the list'
]
// Passa por cada parágrafo encontrado
pDosCards.forEach((paragrafoExistente, index) => {
 // Verifica se existe uma descrição para a posição atual
 if (descricoes[index]) {
  const novoParagrafo = document.createElement('p') // 1. Cria um elemento <p> completamente NOVO na memória
  // 2. Coloca o texto da descrição nesse novo <p>
  novoParagrafo.textContent = descricoes[index]
  novoParagrafo.classList.add('descricao-imagem-custom') // Adiciona uma classe para estilo
  // 3. Insere o NOVO parágrafo DEPOIS do parágrafo existente. O original não é tocado.
  paragrafoExistente.insertAdjacentElement('afterend', novoParagrafo)
 }
})

//AGORA FALTA MEXER NO BODY NA 4A SEÇÃO PRA DEIXAR BRANCO OU SEI LÁ, E DEPOIS PEGAR O 2GUNDO P dos cards e mudar cor
