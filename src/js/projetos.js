const usuario = 'luizfernandoin';
const repositorios = [
    {
        nome: "Probability-Distributions",
        url: "https://github.com/luizfernandoin/Probability-Distributions",
        site: "https://luizfernandoin.github.io/Probability-Distributions/",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        descricao: "Sistema para geração de gráficos de distribuições de probabilidade.",
        img: "../../assets/probabilidade.png"
    },
    {
        nome: "CinemaFlask",
        url: "https://github.com/luizfernandoin/CinemaFlask",
        site: "",
        tecnologias: ["HTML", "CSS", "JavaScript", "Flask"],
        descricao: "InCine é um serviço web desenvolvido durante o curso Tecnico em Informatica Integrado como requisito obrigatório da disciplina de Desenvolvimento de Aplicações Web do Instituto Federal de Educação, Ciência e Tecnologia da Paraíba. Trata-se de uma aplicação web para visualizar informações de filmes criado com o framework Flask usando a API TMDB. O mesmo possui CRUD, autenticação de usuário, pesquisa de mídias e dados sobre o serviço.",
        img: "../../assets/cinemaFlask.gif"
    },
    {
        nome: "QR-Code-Generator",
        url: "https://github.com/luizfernandoin/QR-Code-Generator",
        site: "https://qrgenerator-km38.onrender.com/",
        tecnologias: ["HTML", "CSS", "JavaScript", "Python"],
        descricao: "QR Code Generator é uma ferramenta online eficaz para criar códigos QR personalizados de maneira simples e conveniente. Com ênfase na praticidade, permite a geração rápida de códigos QR para diversas finalidades como compartilhamento de informações de contato, URLs e mensagens. A facilidade de uso e os recursos de personalização fazem do QR Code Generator uma solução confiável e moderna para interagir com o mundo digital.",
        img: "../../assets/qrcode.png"
    },
    {
        nome: "PasswordGenerator",
        url: "https://github.com/luizfernandoin/PasswordGenerator",
        site: "https://luizfernandoin.github.io/PasswordGenerator/",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        descricao: "Password Generator é um serviço web projetado para criar senhas seguras e aleatórias. Com foco na segurança, o aplicativo permite ao usuário selecionar o comprimento da senha e os caracteres desejados, incluindo letras maiúsculas e minúsculas, números e caracteres especiais. É uma ferramenta simples e eficaz para gerar senhas confiáveis ​​para diversos fins.",
        img: "../../assets/password.png"
    },
    {
        nome: "MegaSena",
        url: "https://github.com/luizfernandoin/MegaSena",
        site: "https://luizfernandoin.github.io/MegaSena/",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        descricao: "O Gerador de Números da Mega-Sena é uma ferramenta simples e prática projetada para ajudar os jogadores a escolherem combinações aleatórias de números para apostar na loteria Mega-Sena. Com apenas alguns cliques, você pode obter uma seleção única de números que pode ser utilizada em seus bilhetes de aposta.",
        img: "../../assets/megasena.png"
    },
    {
        nome: "NewSpace",
        url: "https://github.com/luizfernandoin/NewSpace",
        site: "https://new-space.onrender.com/",
        tecnologias: ["HTML", "CSS", "JavaScript", "Flask"],
        descricao: "NewSpace é um web service desenvolvido durante o curso de Análise e Desenvolvimento de Sistemas do Instituto Federal de Educação, Ciência e Tecnologia da Paraíba. A mesma pode ser considerada uma revista científica de cunho astronômico, na qual é composta por algumas ferramentas que permitem maior interatividade com o usuário, preservando o âmbito educacional. Além disso, o usuário consegue visualizar informações astronômicas relevantes, como notícias, eventos, imagens e vídeos.",
        img: "../../assets/newspace.png"
    },
    {
        nome: "CarinaWebb",
        url: "https://github.com/luizfernandoin/CarinaWebb",
        site: "",
        tecnologias: ["HTML", "CSS", "JavaScript", "Django"],
        descricao: "CarinaWeb é um serviço web desenvolvido durante o curso Tecnico em Informatica Integrado como requisito obrigatório da disciplina de Desenvolvimento de Aplicações Web do Instituto Federal de Educação, Ciência e Tecnologia da Paraíba. Trata-se de uma aplicação web para visualizar informações astronomicas criado com o framework Django usando a API's da NASA. O mesmo possui CRUD, autenticação de usuário e pesquisa de fotos.",
        img: "../../assets/carina.jpeg"
    },
    {
        nome: "Pyquiz-RN",
        url: "https://github.com/luizfernandoin/Pyquiz-RN",
        site: "https://luizfernandoin.github.io/LandingPage-Pyquiz/",
        tecnologias: ["React Native", "HTML", "CSS", "Bootstrap"],
        descricao: "Pyquiz é um aplicativo mobile construído durante o curso Tecnico em Informatica Integrado como requisito obrigatório para conclusão, no qual a aplicação tem como objetivo principal, promover o estudo e aprendizagem da programação, especificamente Python, de forma teorica, pratica e intuitiva para iniciantes nesse fastastivo universo da tecnologia. No mesmo pode-se encontrar diversos beneficios aos usuarios, tornando-o uma inovação no mercado:",
        img: "../../assets/pyquiz.png"
    },
]


function adicionarProjetos() {
    const projetosContainer = document.querySelector(".container-projetos");

    repositorios.forEach(projeto => {
        const itemProjeto = document.createElement("div");
        itemProjeto.classList.add("item-projeto");

        const imgProjeto = document.createElement("img");
        imgProjeto.src = projeto.img;
        imgProjeto.alt = projeto.nome;

        const descProjeto = document.createElement("div");
        descProjeto.classList.add("desc-projeto");

        const nomeProjeto = document.createElement("div");
        nomeProjeto.classList.add("nome-projeto");

        const spanNomeProjeto = document.createElement("span");
        spanNomeProjeto.textContent = projeto.nome;

        const linksProjeto = document.createElement("div");
        linksProjeto.classList.add("links-projeto");

        const linkGitHub = document.createElement("a");
        linkGitHub.href = projeto.url;
        linkGitHub.target = "_blank";
        const iconGitHub = document.createElement("i");
        iconGitHub.classList.add("fab", "fa-github");
        linkGitHub.appendChild(iconGitHub);

        const linkExternal = document.createElement("a");
        linkExternal.href = projeto.site;
        linkExternal.target = "_blank";
        const iconExternal = document.createElement("i");
        iconExternal.classList.add("fas", "fa-external-link-alt");
        linkExternal.appendChild(iconExternal);

        linksProjeto.appendChild(linkGitHub);
        linksProjeto.appendChild(linkExternal);

        const languages = document.createElement("div");
        languages.classList.add("languages");
        projeto.tecnologias.forEach(linguagem => {
            console.log(languages)
            const spanLinguagem = document.createElement("span");
            spanLinguagem.textContent = linguagem;
            languages.appendChild(spanLinguagem);
        });

        const separator = document.createElement("div");
        separator.classList.add("separator");

        const descricaoProjeto = document.createElement("div");
        descricaoProjeto.classList.add("description");
        descricaoProjeto.textContent = projeto.descricao;

        nomeProjeto.appendChild(spanNomeProjeto);
        nomeProjeto.appendChild(linksProjeto);
        descProjeto.appendChild(nomeProjeto);
        descProjeto.appendChild(languages);
        descProjeto.appendChild(separator);
        descProjeto.appendChild(descricaoProjeto);

        itemProjeto.appendChild(imgProjeto);
        itemProjeto.appendChild(descProjeto);

        
        projetosContainer.appendChild(itemProjeto);
    });
}

adicionarProjetos();