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
