var search = document.querySelector('#input-busca')
var produtosContainer = document.querySelector('#produtos-itens')


var produtos = [
    {
        "id": "1",
        "imagem": "img/copo-stormtrooper.svg",
        "descricao": "Copo com forma do capacete de um stormtropper",
        "titulo": "Caneca Stormtrooper",
        "preco": "R$55,00"
    },
    {
        "id": "2",
        "imagem": "img/capacete-piloto.svg",
        "descricao": "Capacete miniatura de um piloto stormtropper negro e Darth Vader",
        "titulo": "Capacete miniatura",
        "preco": "R$50,00"
    },
    {
        "id": "3",
        "imagem": "img/boneco-yoda.svg",
        "descricao": "Boneco do Mestre Yoda",
        "titulo": "Boneco Mestre Yoda",
        "preco": "R$120,00"
    },
    {
        "id": "4",
        "imagem": "img/stormtrooper.svg",
        "descricao": "Boneco stormtropper",
        "titulo": "Boneco Stormtrooper",
        "preco": "R$100,00"
    },
    {
        "id": "5",
        "imagem": "img/grogu.svg",
        "descricao": "Boneco do Groogo",
        "titulo": "Boneco Groogo",
        "preco": "R$140,00"
    },
    {
        "id": "6",
        "imagem": "img/kyloren.svg",
        "descricao": "Boneco do Kylo Ren",
        "titulo": "Boneco Kylo Ren",
        "preco": "R$140,00"
    },
    {
        "id": "7",
        "imagem": "img/controle-xbox.svg",
        "descricao": "Controle do console Xbox",
        "titulo": "Controle Xbox Wireless",
        "preco": "R$220,00"
    },
    {
        "id": "8",
        "imagem": "img/Ps5.svg",
        "descricao": "Playstation 5",
        "titulo": "Console Playstation 5",
        "preco": "R$3.800,00"
    },
    {
        "id": "9",
        "imagem": "img/nintendo.svg",
        "descricao": "Super Nintendo",
        "titulo": "Console SNES",
        "preco": "R$1.100,00"
    },
    {
        "id": "10",
        "imagem": "img/nintendo-switch.svg",
        "descricao": "Console Nintendo Switch OLED",
        "titulo": "Nintendo Switch OLED",
        "preco": "R$2.000,00"
    },
    {
        "id": "11",
        "imagem": "img/xboxseriesx.svg",
        "descricao": "Console Xbox Series X",
        "titulo": "Xbox Series X",
        "preco": "R$3.800,00"
    },
    {
        "id": "12",
        "imagem": "img/gameboycolor.svg",
        "descricao": "Console portátil Game Boy Color",
        "titulo": "Game Boy Color",
        "preco": "R$950,00"
    },
    {
        "id": "13",
        "imagem": "img/camisa-atari.svg",
        "descricao": "Camisa branca do Atari",
        "titulo": "Camisa Atari",
        "preco": "R$50,00"
    },
    {
        "id": "14",
        "imagem": "img/camisa-snes.svg",
        "descricao": "Camisa cinza do Snes",
        "titulo": "Camisa SNES",
        "preco": "R$50,00"
    },
    {
        "id": "15",
        "imagem": "img/boneco-sonic.svg",
        "descricao": "Boneco do Sonic",
        "titulo": "Boneco Sonic",
        "preco": "R$70,00"
    },
    {
        "id": "16",
        "imagem": "img/mp3-bluetooh.svg",
        "descricao": "Aparelho de som portátil bluetooth",
        "titulo": "MP3 Bluetooh",
        "preco": "R$85,00"
    },
    {
        "id": "17",
        "imagem": "img/VR+camisa.svg",
        "descricao": "Óculos de realidade virtual da Playstation",
        "titulo": "Playstation VR",
        "preco": "R$2700,00"
    },
    {
        "id": "18",
        "imagem": "img/boneco-picachu.svg",
        "descricao": "Boneco de pelúcia do Pikachu",
        "titulo": "Boneco Pokemon",
        "preco": "R$65,00"
    }
]

function listaProdutos(produtos) {
    var lista = ''

    produtos.forEach(produto => {
        lista +=
            `<article class="produtos-itens__card" id="cards-produtos">
                <img src="${produto.imagem}" alt="${produto.descricao}"
                    class="imagem-card">
                <h3 class="card-titulo">${produto.titulo}</h3>
                <p class="card-preco">${produto.preco}</p>
                <a href="#" class="card-botao">Ver produto</a>
            </article>`
    })
    produtosContainer.innerHTML = lista;
}


function produtosAdicionados() {
    var listaProdutosRegistrados = JSON.parse(localStorage.getItem('produtoAdicionado') || '[]')
    if (listaProdutosRegistrados.length > 0) {
        listaProdutosRegistrados.forEach((item) => {
            produtos.push(
                {
                    imagem: item.imagem,
                    descricao: item.descricao,
                    titulo: item.titulo,
                    preco: item.preco
                }
            )
        }
        )
    }
}



function filtrarProdutos() {
    const busca = search.value;

    const produtosAchados = produtosFiltrados(busca);

    produtosAchados.length > 0 ? listaProdutos(produtosAchados) : listaProdutos(produtos)
}

function produtosFiltrados(busca) {
    return produtos.filter(produto => {
        return produto.titulo.toLowerCase().includes(busca.toLowerCase())
    });
}

search.addEventListener('keyup', _.debounce(filtrarProdutos, 300));


produtosAdicionados()
listaProdutos(produtos)