var usuarios = {
    dados: [
        {
            id: 1,
            nome: "Ana Silva",
            email: "ana.silva@email.com",
            senha: "123",
            senhaConfirmacao: "123",
            telefone: "(11) 1234-5678",
            endereco: {
                estado: "SP",
                cidade: "Cidade Alegre",
                logradouro: "Rua das Flores",
                complemento: "Apt. 4A",
            }
        },
        {
            id: 2,
            nome: "Carlos Oliveira",
            email: "carlos.oliveira@email.com",
            senha: "234",
            senhaConfirmacao: "234",
            telefone: "(21) 9876-5432",
            endereco: {
                estado: "SP",
                cidade: "Cidade Grande",
                logradouro: "Av. Central",
                complemento: " Casa 2, Bairro Centro",
            }
        },
        {
            id: 3,
            nome: "Maria Santos",
            email: "ana.silva@email.com",
            senha: "345",
            senhaConfirmacao: "345",
            telefone: "(11) 8765-4321",
            endereco: {
                estado: "SP",
                cidade: "Cidade Serena",
                logradouro: "Travessa Azul",
                complemento: "789 - Bloco C",
            }
        },
        {
            id: 4,
            nome: "João Oliveira",
            email: "joao.oliveira@email.com",
            senha: "456",
            senhaConfirmacao: "456",
            telefone: "(41) 2345-6789",
            endereco: {
                estado: "SP",
                cidade: " Cidade Aconchegante",
                logradouro: "Rua dos Sonhos",
                complemento: "101 - Casa 3",
            }
        },
        {
            id: 5,
            nome: "Isabela Lima",
            email: "isabela.lima@email.com",
            senha: "567",
            senhaConfirmacao: "567",
            telefone: "(51) 8765-4321",
            endereco: {
                estado: "SP",
                cidade: "Cidade Maravilhosa",
                logradouro: "Alameda das Estrelas",
                complemento: "567 - Apt. 8B",
            }
        }
    ]
}

usuarios();
console.log(usuarios.nome[1])

var produtos = {
    pizzas: [
        {
            id: 1,
            foto: "./foto",
            nome: "Frango com Catupiry",
            preco: "34,90",
            descricao: "Uma combinação irresistível de frango desfiado e catupiry cremoso. Uma explosão de sabores em cada pedaço!",
            comentarios: {
                
               foto: "",
               nome: usuarios.nome[1],
               data: "",
               titulo: "",
               descricao: "",
               avaliacao 
            }
        },
        {
            id: 2,
            foto: "./foto",
            nome: "Margherita Tradicional",
            preco: "29,90",
            descricao: " A clássica Margherita com molho de tomate, muçarela de búfala e manjericão fresco. Simplicidade que encanta o paladar!",
            comentarios: {
                
               foto: "",
               nome: usuarios.nome[1],
               data: "",
               titulo: "",
               descricao: "",
               avaliacao 
            }
        },
        {
            id: 3,
            foto: "./foto",
            nome: "Calabresa Especial",
            preco: "31,90",
            descricao: "A tradicional calabresa ganha um toque especial com cebola, pimentão e azeitonas. Uma explosão de sabores marcantes!",
            comentarios: {
                
               foto: "",
               nome: usuarios.nome[1],
               data: "",
               titulo: "",
               descricao: "",
               avaliacao 
            }
        },
        {
            id: 4,
            foto: "./foto",
            nome: " Quatro Queijos",
            preco: "36,90",
            descricao: "Muçarela, gorgonzola, parmesão e catupiry se unem para criar uma experiência única de quatro queijos. Impossível resistir!",
            comentarios: {
                
               foto: "",
               nome: usuarios.nome[1],
               data: "",
               titulo: "",
               descricao: "",
               avaliacao 
            }
        }
    ]
}
