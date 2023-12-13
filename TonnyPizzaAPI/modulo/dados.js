var usuarios = {
    dados: [
        {
            id: 1,
            nome: "Ana Silva",
            email: "ana.silva@email.com",
            senha: "123",
            telefone: "(11) 1234-5678",
            foto: "../img/AnaFoto",
            endereco: [
                {
                    uf: "SP",
                    cidade: "Cidade Alegre",
                    logradouro: "Rua das Flores",
                    complemento: "Apt. 4A",
                }
            ]
        },
        {
            id: 2,
            nome: "Carlos Oliveira",
            email: "carlos.oliveira@email.com",
            senha: "234",
            telefone: "(21) 9876-5432",
            foto: "../img/CarlosFoto",
            endereco: [
                {
                    uf: "SP",
                    cidade: "Cidade Grande",
                    logradouro: "Av. Central",
                    complemento: " Casa 2, Bairro Centro",
                }
            ]
        },
        {
            id: 3,
            nome: "Maria Santos",
            email: "maria.silva@email.com",
            senha: "345",
            telefone: "(11) 8765-4321",
            foto: "../img/MariaFoto",
            endereco: [
                {
                    uf: "SP",
                    cidade: "Cidade Serena",
                    logradouro: "Travessa Azul",
                    complemento: "789 - Bloco C",
                }
            ]
        },
        {
            id: 4,
            nome: "João Oliveira",
            email: "joao.oliveira@email.com",
            senha: "456",
            telefone: "(41) 2345-6789",
            foto: "../img/JoãoFoto",
            endereco: [
                {
                    uf: "SP",
                    cidade: " Cidade Aconchegante",
                    logradouro: "Rua dos Sonhos",
                    complemento: "101 - Casa 3",
                }
            ]
        },
        {
            id: 5,
            nome: "Isabela Lima",
            email: "isabela.lima@email.com",
            senha: "567",
            telefone: "(51) 8765-4321",
            foto: "../img/IsabelaFoto",
            endereco: [
                {
                    uf: "SP",
                    cidade: "Cidade Maravilhosa",
                    logradouro: "Alameda das Estrelas",
                    complemento: "567 - Apt. 8B",
                }
            ]
        }
    ]
}
var categorias = {
    dados: [
        {
            id: 1,
            nome: "Pizzas salgadas",
            foto: "iconPizzaS.svg"
        },
        {
            id: 2,
            nome: "Pizzas doces",
            foto: "iconPizzaD.svg"
        },
        {
            id: 3,
            nome: "Frutas",
            foto: "iconFrutas.svg"
        },
        {
            id: 4,
            nome: "Sobremesas",
            foto: "iconSobremesas.svg"
        },
        {
            id: 5,
            nome: "Bebidas",
            foto: "iconBebidas.svg"
        },
        {
            id: 6,
            nome: "Sorvetes",
            foto: "iconSorvetes.svg"
        }
    ]
}
console.log(categorias.dados[1].nome)
var produtos = {
    pizzas: [
        {
            id: 1,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaFrango",
            nome: "Frango com Catupiry",
            preco: "34,90",
            descricao: "Uma combinação irresistível de frango desfiado e catupiry cremoso. Uma explosão de sabores em cada pedaço!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[1].foto,
                    nome: usuarios.dados[1].nome,
                    data: "12/01/2023",
                    titulo: "Pizza top!",
                    descricao: "A variedade de sabores é surpreendente.",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "26/10/2023",
                    titulo: "Pizza Incrivel!",
                    descricao: "Amo esse sabor de pizza mas demorou para chegar.",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 2,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaMargherita",
            nome: "Margherita Tradicional",
            preco: "29,90",
            descricao: "A clássica Margherita com molho de tomate, muçarela de búfala e manjericão fresco. Simplicidade que encanta o paladar!",
            favorito: false,
            comentarios: [
                { 
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "22/04/2023",
                    titulo: "Pizza otima!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[1].foto,
                    nome: usuarios.dados[1].nome,
                    data: "13/02/2023",
                    titulo: "Pizza pessima!",
                    descricao: "Fria e queimada.",
                    avaliacao: 1
                 }
            ]
        },
        {
            id: 3,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaCalabresa",
            nome: "Calabresa Especial",
            preco: "31,90",
            descricao: "A tradicional calabresa ganha um toque especial com cebola, pimentão e azeitonas. Uma explosão de sabores marcantes!",
            favorito: false,
            comentarios: [
                { 
                    foto: usuarios.dados[3].foto,
                    nome: usuarios.dados[3].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[3].foto,
                    nome: usuarios.dados[3].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de Calabresa!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 4,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizza4Queijos",
            nome: "Quatro Queijos",
            preco: "36,90",
            descricao: "Muçarela, gorgonzola, parmesão e catupiry se unem para criar uma experiência única de quatro queijos. Impossível resistir!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "12/04/2023",
                    titulo: "Pizza deciliosa!",
                    descricao: "Uma opção saudável e deliciosa!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[1].foto,
                    nome: usuarios.dados[1].nome,
                    data: "13/02/2023",
                    titulo: "Pizza Otima!",
                    descricao: "Para os verdadeiros amantes de queijo!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 5,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaPepperoni",
            nome: "Pepperoni Picante",
            preco: "35,90",
            descricao: "Fatias generosas de pepperoni levemente apimentado, combinadas com muçarela derretida. Para os amantes de um toque picante!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[1].foto,
                    nome: usuarios.dados[1].nome,
                    data: "06/08/2023",
                    titulo: "Pizza incrivel!",
                    descricao: "Uma experiência única! Melhor pizza que ja comi.",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[4].foto,
                    nome: usuarios.dados[4].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de Pepperoni!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 6,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaBacon",
            nome: "Bacon Lovers",
            preco: "31,90",
            descricao: "A tradicional calabresa ganha um toque especial com cebola, pimentão e azeitonas. Uma explosão de sabores marcantes!",
            favorito: false,
            comentarios: [
                { 
                    foto: usuarios.dados[3].foto,
                    nome: usuarios.dados[3].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 3
                 },
                 {
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Realmente é para os verdadeiros amantes de Bacon!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 7,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaVegetariana",
            nome: "Vegetariana Suprema",
            preco: "33,90",
            descricao: "Uma seleção colorida de legumes frescos, como abobrinha, berinjela, tomate e pimentão. Uma opção saudável e deliciosa!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[3].foto,
                    nome: usuarios.dados[3].nome,
                    data: "12/04/2023",
                    titulo: "Pizza ruim!",
                    descricao: "A pior pizza que ja comi!",
                    avaliacao: 1
                 },
                 {
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de legumes!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 8,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaPortuguesa",
            nome: "Portuguesa Tradicional",
            preco: "35,90",
            descricao: "Presunto, muçarela, ovos e azeitonas pretas se unem nesta clássica pizza portuguesa. Uma explosão de sabores tradicionais!",
            favorito: false,
            comentarios: [
                { 
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[1].foto,
                    nome: usuarios.dados[1].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de pizza!",
                    avaliacao: 5
                 }
            ]
        },
        {
            id: 9,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaFrutos",
            nome: "Frutos do Mar Especial",
            preco: "31,90",
            descricao: "Uma mistura de camarões suculentos, lulas e mexilhões, tudo sobre uma generosa camada de molho de tomate e queijo. Uma experiência única!",
            favorito: false,
            comentarios: [
                { 
                    foto: usuarios.dados[4].foto,
                    nome: usuarios.dados[4].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[1].foto,
                    nome: usuarios.dados[1].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de frutos do mar!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 10,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaCaprese",
            nome: "Caprese Gourmet",
            preco: "38,90",
            descricao: "Uma versão gourmet da clássica Caprese, com muçarela de búfala, tomate cereja, manjericão fresco e um toque de pesto. Uma explosão de frescor!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[3].foto,
                    nome: usuarios.dados[3].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de caprese!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 11,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaMexicana",
            nome: "Mexicana Picante",
            preco: "39,90",
            descricao: "Uma explosão de sabores com carne moída, pimenta jalapeño, milho e molho de tomate temperado. Para quem gosta de um toque picante!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[4].foto,
                    nome: usuarios.dados[4].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[3].foto,
                    nome: usuarios.dados[3].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de caprese!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 12,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaAtum",
            nome: "Atum com Cebola Roxa",
            preco: "36,90",
            descricao: "Combinação clássica de atum suculento e cebola roxa, tudo regado com azeite de oliva. Simples, mas cheia de sabor!",
            favorito: false,
            comentarios: [
                { 
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[1].foto,
                    nome: usuarios.dados[1].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de atum!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 13,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaCheddar",
            nome: "Pepperoni com Cheddar",
            preco: "38,90",
            descricao: "Uma explosão de sabores com carne moída, pimenta jalapeño, milho e molho de tomate temperado. Para quem gosta de um toque picante!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[3].foto,
                    nome: usuarios.dados[3].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de pepperoni e Cheddar!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 14,
            categoria: categorias.dados[1].nome,
            foto: "../img/pizzaCarneSeca",
            nome: "Carne Seca com Catupiry",
            preco: "35,90",
            descricao: "A combinação perfeita da suculenta carne seca desfiada com o cremoso catupiry. Uma opção que agrada a todos os paladares!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[1].foto,
                    nome: usuarios.dados[1].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[3].foto,
                    nome: usuarios.dados[3].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de carne seca!",
                    avaliacao: 4
                 }
            ]
        },
        {
            id: 15,
            categoria: categorias.dados[2].nome,
            foto: "../img/pizzaBaconAbacaxi",
            nome: "Chocolate com Abacaxi",
            preco: "34,90",
            descricao: "A doçura do chocolate contrasta perfeitamente com o abacaxi. Uma mistura de sabores que vai surpreender o seu paladar!",
            favorito: true,
            comentarios: [
                { 
                    foto: usuarios.dados[2].foto,
                    nome: usuarios.dados[2].nome,
                    data: "12/04/2023",
                    titulo: "Pizza boa!",
                    descricao: "Uma explosão de sabores em cada pedaço!",
                    avaliacao: 5
                 },
                 {
                    foto: usuarios.dados[4].foto,
                    nome: usuarios.dados[4].nome,
                    data: "13/02/2023",
                    titulo: "Pizza otima!",
                    descricao: "Para os verdadeiros amantes de abacaxi e chocolate!",
                    avaliacao: 4
                 }
            ]
        },
    ],
    bebidas: [
        {
            id: 1,
            categoria: categorias.dados[5].nome,
            foto: "..img/cocaCola",
            preco: "14,99",
            nome: "Coca-cola 2L",
            descricao: "Refrigerante Garrafa 2l Embalagem Econômica"
        },
        {
            id: 2,
            categoria: categorias.dados[5].nome,
            foto: "..img/guarana",
            preco: "17,99",
            nome: "Guaraná 2L",
            descricao: "Refrigerante Garrafa 2l Embalagem Econômica"
        },
        {
            id: 3,
            categoria: categorias.dados[5].nome,
            foto: "..img/heineken",
            preco: "14,99",
            nome: "Cerveja Heineken",
            descricao: "Cerveja de Garrafa 500ml Embalagem Vidro"
        },
        {
            id: 4,
            categoria: categorias.dados[5].nome,
            foto: "..img/sprite",
            preco: "14,99",
            nome: "Sprite 2L",
            descricao: "Refrigerante Garrafa 2l Embalagem Econômica"
        },
        {
            id: 5,
            categoria: categorias.dados[5].nome,
            foto: "..img/agua",
            preco: "4,99",
            nome: "Água Crystal",
            descricao: "Garrafa 500ml Embalagem Econômica"
        }
    ],
    sobremesas: [
        {
            id: 1,
            categoria: categorias.dados[4].nome,
            foto: "..img/Acai",
            preco: "14,99",
            nome: "Açai com cupuaçu",
            descricao: "Pote de 400ml de açai com cupuaçu"
        },
        {
            id: 2,
            categoria: categorias.dados[4].nome,
            foto: "..img/BananSplit",
            preco: "17,99",
            nome: "Banana Split",
            descricao: " Banana cortada ao meio servida com o sabor de sorvete da sua preferencia."
        },
        {
            id: 3,
            categoria: categorias.dados[4].nome,
            foto: "..img/Picole",
            preco: "5,99",
            nome: "Sorvete - picole",
            descricao: "Sabores: Frutas tropicais e chocolate"
        }
    ]
}

module.exports = {
    usuarios,
    categorias,
    produtos
}

