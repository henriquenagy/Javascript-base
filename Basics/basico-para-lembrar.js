// ===================================================
// CONSOLE.LOG E VARIAÇÕES
// ===================================================
console.warn('ESSE NÃO É ERRO, É SÓ UM AVISO') //Use o console.warn() para exibir avisos. Não é um erro que quebra a aplicação, mas uma situação que o desenvolvedor deve estar ciente.
console.error('Falha na autenticação: A senha precisa ter no mínimo 8 caracteres.') //Use o console.error() para exibir erros. Diferente de um aviso, um erro geralmente significa que algo deu errado e a operação esperada não pôde ser concluída. É usado para mensagens de falha crítica.

console.log('Para aparecer algo no console - inspecionar elemento')
console.log('String with \n multiple \n lines') //Aspas Normais (' ou "): Use \n para pular a linha na saída, mas escreva todo o seu código em uma única linha.
console.log(`String
 with multiple lines`) //Aspas de Acento (`): Pode pular a linha diretamente no seu código, e essa quebra será refletida na saída.

//----------------------> console.table() serve para exibir dados complexos, como arrays e objetos, de uma forma muito mais organizada e legível do que o console.log() tradicional.  Ele formata os dados em uma tabela interativa dentro do console do navegador.
const usuarios = [
 { id: 1, nome: 'Ana', cidade: 'São Paulo' },
 { id: 2, nome: 'Bruno', cidade: 'Rio de Janeiro' },
 { id: 3, nome: 'Carla', cidade: 'São Paulo' }
]
console.table(usuarios)
console.log(usuarios)

// APARECE UMA CAIXA/MENSAGEM NA FRENTE DO NAVEGADOR, OCULTEI PRA NÃO ATRAPALHAR
//prompt('Dit it opened there, mooron?')

// ===================================================
// USAR IF COM insertAdjacentElement PARA ADICIONAR ELEMENTO
// ===================================================

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

// ===================================================
// TESTES DE QUERY SELECTOR SIMPLES
// ===================================================

const bgHero = document.querySelector('.relatives') // INSERIR COR DE FUNDO 1a seção
bgHero.style.background = 'linear-gradient(180deg, rgba(7, 48, 108, 1) 0%, rgba(96, 58, 222, 1) 100%)'

const bgWhoWeAre = document.querySelector('.cards') //INSERIR COR DE FUNDO 3a seção
bgWhoWeAre.style.backgroundColor = '#151515ff'

const secao4 = document.querySelector('.sectionFOUR') //INSERIR COR DE FUNDO 4a seção
secao4.style.backgroundColor = 'var(--black-light)' //Pego direto do CSS root

const firstElement = document.querySelector('.javonico') // Pega UM SÓ elemento (o primeiro que encontra). NÃO retorna uma lista, então você NÃO PODE usar o método .forEach() nele.
firstElement.style.color = '#50F798'
console.log(firstElement) //Veja no console q aparece o <p> selecionado

const quartoLi = document.querySelector('.list_items li:nth-of-type(4)') // PEGAR UM ELEMENTO ESPECÍFICO (n)
quartoLi.style.color = 'orange'

//----------------------> INSERIR ITENS DENTRO DO HTML
const getUl = document.querySelector('#titledosobre') //VOU COLOCAR H1 NO COMEÇO DA SEÇÃO
const getSectionUl = document.querySelector('#titlePlusUl') //VOU COLOCAR IMAGEM DEPOIS DA SEÇÃO DA UL
const insertH1 = document.createElement('h1') //CRIO H1
const colocarUnaImagene = document.createElement('img') // CRIO A IMAGEM PARA POR DEPOIS

insertH1.textContent = 'I am H1 and was added here by JS' // Colocando e editando H1
insertH1.style.color = 'var(--Purple)'
getUl.insertAdjacentElement('afterbegin', insertH1)
getUl.style.listStyle = 'none' // REAPROVEITAR UL PARA REMOVER OS PONTOS DA LISTA

colocarUnaImagene.src = 'img/MM.webp' // Dando o endereço da imagem via src
colocarUnaImagene.alt = 'Descrição da Imagem' // Boa prática
colocarUnaImagene.classList.add('unaClassParaJS', 'blur-load', 'parallax-img') // ADICIONAR CLASSES (Separe por vírgula, sem espaços extras)
colocarUnaImagene.setAttribute('loading', 'lazy') // ADICIONAR ATRIBUTO (loading="lazy")
getSectionUl.insertAdjacentElement('afterend', colocarUnaImagene) // Insere a imagem no HTML
// CORREÇÃO: Use 'Object.assign()' com 'O' maiúsculo, correto é criar classe e mexer pelo CSS
Object.assign(colocarUnaImagene.style, {
 width: '100%',
 height: 'auto',
 objectFit: 'contain',
 maxWidth: '47%',
 marginTop: '2em'
})

const divComCards = document.querySelector('.los-cartones') // INSERIR BOTÃO DENTRO DE UMA DIV
const btnJS = document.createElement('button')
btnJS.classList.add('bttn', 'scroll-top')
btnJS.textContent = 'Esse botão é do JS'
divComCards.append(btnJS)

// ===================================================
// TESTE DE QUERY SELECTOR ALL
// ===================================================

const segundoPCard = document.querySelectorAll('.iamacard p')[2] //Seleciona todos os <p> E depois, acessamos o 3 item da lista (que está na posição 2, pois a contagem começa em 0).
segundoPCard.style.color = 'yellow' // Mudando a cor do texto

const terceiroLi = document.querySelectorAll('.list_items li')[2]
terceiroLi.style.color = 'red'

const allLi = document.querySelectorAll('.inside-flexx ul li') //Colocar cor branca nos ul li. Abaixo usamos .forEach() PARA PASSAR POR CADA ITEM DA LISTA
allLi.forEach(itemDaLista => {
 itemDaLista.style.fontSize = '1.6em' // 'itemDaLista' representa cada <li>, um por um
 itemDaLista.style.marginBottom = '10px'
})

//----------------------> Pega TODOS os elementos que correspondem. Ele retorna uma NodeList (uma lista), na qual você pode usar o .forEach(). Abaixo temos .forEach() para passar por CADA elemento da lista
const allElements = document.querySelectorAll('.iamacard')
allElements.forEach(card => {
 card.style.maxWidth = '32%'
 card.style.width = '100%'
 card.style.backgroundColor = 'var(--white)'
 card.style.padding = '1em'
 card.style.borderRadius = '10px'
})

// ===================================================
// ALTERAÇÕES
// ===================================================

//----------------------> USANDO GETCOMPUTEDSTYLE PARA FAZER LEITURAS
const secaoCards = document.querySelector('.sectionTHREE')
//console.log(getComputedStyle(secaoCards)) //Tampei só pra não poluir o console, mostra muita coisa
console.log(getComputedStyle(secaoCards).color) //rgb(0, 0, 0)
console.log(getComputedStyle(secaoCards).height) //674.766px

//----------------------> Modificando valor da variável
secaoCards.style.height = Number.parseFloat(getComputedStyle(secaoCards).height) + 50 + 'px' // Soma 50 e aplica o novo valor

//----------------------> Modificando uma cor do ROOT CSS com setproperty
const segundoLi = document.querySelectorAll('.list_items li')[1] //segundo filha da lista UL LI
segundoLi.style.color = 'var(--troqueinoJS)'
document.documentElement.style.setProperty('--troqueinoJS', '#41b3ff') // Trocando a cor de um elemento

//----------------------> Alterando Conteúdo de Elementos

// Exemplo 1: .innerHTML (Interpreta HTML com strong e style).
const trocaComInnerHtml = document.querySelector('.inside-flexx p.unicao')
if (trocaComInnerHtml) {
 // A tag <strong> e o <span style> SÃO interpretados pelo navegador
 trocaComInnerHtml.innerHTML = '----> Trocado via <strong>InnerHtml</strong> e <span style="color:var(--Purple)">Pega</span> a formatação.'
}

// Exemplo 2: .innerText (Insere Texto Puro sem interpretar).
const trocaComInnerText = document.querySelectorAll('.los-cartones p')[1]
if (trocaComInnerText) {
 // NÃO é interpretada, ela aparece escrita na tela
 trocaComInnerText.innerText = '----> <strong>Trocado</strong> via <br> InnerText. (Tags não funcionam)'
}

// --- Exemplo 3: .textContent (O recomendado para texto)
const trocaComTextContent = document.querySelectorAll('.inside-flexx p.unicao')[1]
if (trocaComTextContent) {
 // igual o .innerText, Porém é mais rápido
 trocaComTextContent.textContent = '----> Trocado via textContent. Mais rápido e seguro para texto puro.'
}

// Exemplo 4: Lendo o conteúdo (TESTE) ---
const h2daSecao4 = document.querySelector('#titledosobre')
// 4.1. Sem .textContent, mostra o elemento HTML inteiro no console
console.log('Elemento H2:', h2daSecao4)
// 4.2. Com .textContent, mostra SÓ o texto de dentro
console.log('Texto do H2:', h2daSecao4.textContent) // "SEÇÃO COM OS ITENS DE LISTA"

// ===================================================
// ACESSAR ATRIBUTOS DE UM ELEMENTO
// ===================================================

//////////////ABAIXO INDO DIRETO AO ITEM COM SRC, ALT, CLASSNAME
const primeiraImagem = document.querySelector('.iamacard img') // 1. Selecionamos a primeira imagem dos cards
console.log(primeiraImagem.src) // Retorna o link completo da imagem
console.log(primeiraImagem.alt) // Retorna o texto do 'alt'
console.log(primeiraImagem.className) // Retorna a classe da imagem
primeiraImagem.alt = 'TEXTO ALTERADO via JS' // Modificando um atributo padrão. Agora o 'alt' tem um novo texto
console.log(primeiraImagem.alt) // Só para mostrar o alt que já foi trocado

//////////////AGORA USANDO O GET E SET ATTRIBUTE
primeiraImagem.setAttribute('data-criador', 'Nagys') // Primeiro, vamos criar um atributo customizado com setAttribute(). 'data-criador' não é um atributo padrão
console.log('Atributo customizado (jeito errado):', primeiraImagem.dataCriador) //Tentando ler o atributo customizado do jeito "fácil" (NÃO FUNCIONA).  Retorna 'undefined'
console.log('Atributo customizado (jeito certo):', primeiraImagem.getAttribute('data-criador')) // Lendo o atributo customizado do JEITO CERTO, com getAttribute() Retorna 'Nagys'

//////////////INSERINDO LINK <a> DEMONSTRANDO A DIFERENÇA COM LINKS <a>
const novoLink = document.createElement('a') // Como não há links no seu HTML, vamos criar um com JS para testar
novoLink.href = '#redirects' // Aponta para um ID que existe na sua página
novoLink.style.color = 'white'
novoLink.classList.add('hero3')
novoLink.textContent = 'Ir para a seção "O que fazemos"'
document.querySelector('.absolutes').append(novoLink) // Adiciona o link na primeira seção
//OBS: NAO VAI FUNCIONAR PQ EU IMPEDI O MOVIMENTO MAIS PRA BAIXO EM EVENT LISTENERS

// Agora, vamos ver a diferença que sua anotação apontou:
console.log('Link .href (valor COMPLETO):', novoLink.href) // Mostra o URL inteiro, http://127.0.0.1:5500/Basics/index.html#redirects
console.log('Link .getAttribute("href") (valor EXATO do código):', novoLink.getAttribute('href')) // Mostra exatamente o que escrevemos: #redirects

// ===================================================
// Pegar item com children, elementChild, closest, sibling
// ===================================================

//-----------------------> 1. Navegando para Baixo (Acessando os Filhos)
const primeiroCard = document.querySelector('.iamacard') // Seleciona a div "pai" do primeiro card
//Checar com CLG qual item estamos pegando com o const primeiroCard
console.log(primeiroCard.querySelectorAll('.highlight')) //Nodelist [0]
console.log(primeiroCard.childNodes) // NodeList(6) [text, img.unaClassParaJS, text, p, p.formataAddedP, text]
console.log(primeiroCard.children) //HTMLCollection(3) [img.unaClassParaJS, p, p.formataAddedP]
//Ai nos dois abaixo, é como se tivesse usado o children do CLG primeirocard.children
primeiroCard.firstElementChild.style.border = '2px solid green' // Pega o PRIMEIRO filho (a imagem) e muda a borda
primeiroCard.lastElementChild.style.color = 'red' // Pega o ÚLTIMO filho (o parágrafo) e muda a cor

//Agora teste somente com children + posição
const testeChildren = document.querySelector('.absolutes') //caixa 1 dentro da 1a seção
console.log('TESTE CHILDREN SEÇÃO 1:', testeChildren.children[1]) //<p style="color: orange;">...</p>
testeChildren.children[0].style.backgroundColor = 'red' // O primeiro filho
testeChildren.children[1].style.color = 'orange' // O segundo filho
console.log(testeChildren.childNodes[2]) //#text

//-----------------------> 2. Navegando para Cima (Acessando os Pais)
const pDoCard = document.querySelector('.iamacard p') // Seleciona o parágrafo "filho"
pDoCard.parentElement.style.backgroundColor = 'lightblue' // Pega o PAI direto (a div .iamacard) e muda o fundo
pDoCard.closest('.cards').style.backgroundColor = 'var(--black-light)' // Pega o ancestral mais próximo com a classe .cards (a section) e muda o fundo

//-----------------------> 3. Navegando para os Lados (Acessando os Irmãos)
const segundoCard = document.querySelectorAll('.iamacard')[1] // Seleciona o segundo card como ponto de partida
segundoCard.previousElementSibling.style.transform = 'scale(0.9)' // Pega o irmão ANTERIOR (o primeiro card) e aplica uma escala
segundoCard.nextElementSibling.style.transform = 'scale(0.95)' // Pega o próximo irmão (o terceiro card) e aplica uma escala

//Estilizando Todos os Irmãos, Menos o Próprio Elemento
const h2Test = document.querySelector('.inside-flexx h2') // 2ND SECTION - WHAT WE DO
const listaDeIrmaos = h2Test.parentElement.children // 2. Acessa a lista de todos os filhos do elemento pai
// 3. Converte a lista para um array e percorre cada item com .forEach
Array.from(listaDeIrmaos).forEach(function (elementoIrmao) {
 // 4. Se o item da lista for DIFERENTE do nosso h2 original...
 if (elementoIrmao !== h2Test) {
  // ...aplica o estilo.
  elementoIrmao.style.color = 'green'
 }
})

// ===================================================
// EVENT LISTENERS
// ===================================================

//-----------------------> 1. Evento de Clique ('click') e troca o title da seção dos cards junto da cor
const botaoCriadoComJS = document.querySelector('.bttn')
const tituloDosCards = document.querySelector('.los-cartones h2')

botaoCriadoComJS.addEventListener('click', function () {
 tituloDosCards.textContent = 'Você clicou no botão!'
 tituloDosCards.style.color = 'var(--Green)'
})

//-----------------------> 2. Eventos de Mouse ('mouseover' e 'mouseout') - Exemplo de Eventos de Mouse
const terceiroCard = document.querySelectorAll('.iamacard')[2] // Pega o terceiro card
// Ocorre quando o mouse ENTRA na área do elemento
terceiroCard.addEventListener('mouseover', function () {
 terceiroCard.style.backgroundColor = 'lightblue'
})
// Ocorre quando o mouse SAI da área do elemento
terceiroCard.addEventListener('mouseout', function () {
 terceiroCard.style.backgroundColor = 'var(--white)' // Volta para a cor original
})

//-----------------------> 3. Eventos de Teclado ('keydown')
// Adiciona o "ouvinte" ao documento inteiro
document.addEventListener('keydown', function (e) {
 // 'e' é o objeto do evento, que contém informações sobre a tecla
 console.log('Tecla pressionada:', e.key) // Mostra o nome da tecla no console
 // Se a tecla pressionada for 'Escape'...
 if (e.key === 'Escape') {
  // ...muda o fundo da primeira seção para preto.
  document.querySelector('.sectionONE').style.background = 'var(--black-light)'
 }
})

//-----------------------> 4. O Objeto de Evento (o 'e' na função) -  Usando o link que criamos em outro exercício
const linkCriado = document.querySelector('.absolutes a')
linkCriado.addEventListener('click', function (e) {
 // Impede o link de navegar para a âncora #redirects
 e.preventDefault()
 // Em vez disso, apenas muda a cor do link
 e.target.style.color = 'red'
})

// ===================================================
// EXEMPLO PRÁTICO DE EVENT BUBBLING (DELEGAÇÃO DE EVENTOS)
// ===================================================

// 1. Em vez de selecionar cada card, selecionamos o container PAI deles.
const containerDosCards = document.querySelector('.los-cartones')
// 2. Adicionamos UM ÚNICO "ouvinte" de clique no container PAI.
containerDosCards.addEventListener('click', function (e) {
 // 3. 'e.target' é o elemento exato onde o clique começou (pode ser a imagem, o <p>, etc.). |  Usamos .closest('.iamacard') para encontrar o ancestral mais próximo que seja um card.
 const cardClicado = e.target.closest('.iamacard')
 // 4. Se o clique não foi dentro de um '.iamacard' (foi no espaço entre eles), a variável 'cardClicado' será nula e a função vai parar aqui.
 if (!cardClicado) return
 // 5. Se um card foi encontrado, adicionamos ou removemos a classe 'card-selecionado'.|  Usar 'toggle' é ótimo para "ligar e desligar" o efeito.
 console.log('Card clicado:', cardClicado)
 cardClicado.classList.toggle('card-selecionado')
})

// ===================================================
// 5a seção dos botões ativados tab container
// ===================================================
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function (e) {
 const clicked = e.target.closest('.operations__tab')
 if (!clicked) return
 tabs.forEach(t => t.classList.remove('operations__tab--active'))
 clicked.classList.add('operations__tab--active')
 tabsContent.forEach(tabs => tabs.classList.remove('operations__content--active'))
 document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// ===================================================
// Seção fixa – Menu sticky
// ===================================================
const nav = document.querySelector('.nav')
const headr = document.querySelector('.header')
// const getNavHeightDireto... (Não precisa mais dessa conta pro rootMargin funcionar)

const stickyNav = function (entries) {
 const [entry] = entries

 // Se o Header saiu totalmente da tela (isIntersecting false)
 if (!entry.isIntersecting) {
  nav.classList.add('sticky')
 } else {
  nav.classList.remove('sticky')
 }
}

// O Observador
const headerObserver = new IntersectionObserver(stickyNav, {
 root: null,
 threshold: 0,

 // A CORREÇÃO:
 // Se usar margin negativa igual a altura, ele dispara na hora.
 // Use '0px' para disparar quando o Header verde sumir totalmente.
 // Ou use algo como '-20px' se quiser que dispare um pouco antes de sumir.
 rootMargin: '0px'
})

headerObserver.observe(headr)

// ===================================================
// lazy load
// ===================================================
const images = document.querySelectorAll('.blur-load')
images.forEach(img => {
 // Se a imagem já estiver no cache (carregada instantaneamente)
 if (img.complete) {
  img.classList.add('loaded')
 } else {
  // Se ainda for baixar, espera o evento 'load'
  img.addEventListener('load', function () {
   img.classList.add('loaded')
  })
 }
})

/* ===================================================
USANDO O GSAP 2025!!!!!!!!!!!
=================================================== */
//--------------------------------------------------------------------------------> EFEITO SCROLL REVEAL
// Aguarda o site carregar 100% para evitar bugs de posição
window.addEventListener('load', function () {
 gsap.registerPlugin(ScrollTrigger)
 ScrollTrigger.refresh() // Garante que o GSAP leu o tamanho correto da página

 // Seleciona todos os elementos com as classes de animação
 const scrolls = document.querySelectorAll('.scroll-top, .scroll-bottom, .scroll-left, .scroll-right')

 scrolls.forEach(scroll => {
  // Configuração Padrão
  const settings = {
   opacity: 0,
   filter: 'blur(8px)', // Efeito de desfoque inicial
   scrollTrigger: {
    trigger: scroll,
    start: 'top 95%', // Começa quando o topo do elemento chega em 85% da tela
    end: 'top 70%', // Termina a animação no meio da tela
    scrub: 0.3 // Suavidade de 1s (Se quiser seco, tire essa linha)
    // markers: true  // Descomente para ver as linhas guias durante o desenvolvimento
   }
  }

  // Direção do Movimento (De onde ele vem)
  if (scroll.classList.contains('scroll-bottom')) settings.y = 50 // Vem 50px de baixo
  if (scroll.classList.contains('scroll-top')) settings.y = -50 // Vem 50px de cima
  if (scroll.classList.contains('scroll-left')) settings.x = -50 // Vem 50px da esquerda
  if (scroll.classList.contains('scroll-right')) settings.x = 50 // Vem 50px da direita

  // Aplica a animação (FROM = Do estado invisível PARA o estado normal)
  gsap.from(scroll, settings)
 })
})

//--------------------------------------------------------------------------------> EFEITO IMAGE PARALLAX
// Aplique a classe .parallax-img nas imagens
gsap.utils.toArray('.parallax-img').forEach(img => {
 gsap.to(img, {
  yPercent: -20, // Move a imagem 20% para cima enquanto rola
  ease: 'none',
  scrollTrigger: {
   trigger: img,
   start: 'top bottom', // Começa quando entra na tela
   end: 'bottom top', // Termina quando sai
   scrub: true
  }
 })
})

//--------------------------------------------------------------------------------> EFEITO Stagger (Efeito Cascata)
// Aplique a classe .stagger-box no container dos itens
// E a classe .stagger-item em cada item filho
gsap.from('.stagger-item', {
 y: 50,
 opacity: 0,
 duration: 0.8,
 stagger: 0.1,
 scrollTrigger: {
  trigger: '.stagger-box',
  start: 'top 80%',
  toggleActions: 'play none none reset'
 }
})

//--------------------------------------------------------------------------------> EFEITO Hero Sections (o topo do site)
// Crie a linha do tempo
const tl = gsap.timeline()
// Adicione as animações em sequência
tl
 .from('.hero1', { opacity: 0, duration: 1 })
 .from('.hero2', { y: 50, opacity: 0, duration: 0.8 }, '-=0.5') // "-=0.5" começa 0.5s ANTES do anterior terminar
 .from('.hero3', { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
 .from('.hero4', { scale: 0, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.4')

/* ===================================================
SEÇÃO 6 SLIDER
=================================================== */
const sliderContainer = document.querySelector('.slider-container')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

// Ao clicar, ele simplesmente "rola" a div para o lado
nextBtn.addEventListener('click', () => {
 sliderContainer.scrollBy({ left: sliderContainer.offsetWidth, behavior: 'smooth' })
})

prevBtn.addEventListener('click', () => {
 sliderContainer.scrollBy({ left: -sliderContainer.offsetWidth, behavior: 'smooth' })
})
