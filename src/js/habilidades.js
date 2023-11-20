const habilidades = [
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
        texto: "Bootstrap",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        texto: "C",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        texto: "CSS",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
        texto: "Django",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
        texto: "Figma",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
        texto: "Firebase",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
        texto: "Flask",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        texto: "Git",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
        texto: "Github",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        texto: "HTML",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        texto: "JavaScript",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        texto: "Postgresql",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        texto: "Python",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        texto: "React Native",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        texto: "VsCode",
    },
]


function adicionarHabilidades() {
    const habilidadesContainer = document.querySelector(".container-habilidades");

    habilidades.forEach(habilidade => {
        const div = document.createElement("div");
        div.classList.add("item-habilidade");

        const img = document.createElement("img");
        img.src = habilidade.img;
        img.alt = habilidade.texto;

        const nomeHabilidade = document.createElement("span");
        nomeHabilidade.textContent = habilidade.texto;

        div.appendChild(img);
        div.appendChild(nomeHabilidade);

        habilidadesContainer.appendChild(div);
    });
}

adicionarHabilidades();
