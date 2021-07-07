import { ProjectData } from "./index";

const musicHelperProject: ProjectData = {
  title: "Music Helper",
  date: "2019 (1 mois)",
  cat: "Autres (artistic tool, experimental)",
  roles: "Designer, Programmer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>Music Helper est un <span className="bold">outil expérimental</span> réalisé en 2019 sous Unity dans le
              cadre des cours de scripting avancés reçus au sein du mastère IDE à GOBELINS, l’école de l’image. Pour ce
              projet, la contrainte était de réaliser une expérience mobilisant soit des techniques de shader
              personnalisés, soit des techniques de génération procédurale (visuelle ou sonore). J’ai décidé de
              mobiliser la génération procédurale sonore pour concevoir un outil d’aide à la composition musicale.</>,
          media: {
            type: "image",
            src: "/images/portfolio/other/musichelper/musichelper1.jpg",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>J’ai conçu Music Helper comme une aide décalée pour trouver des bouts de mélodie dans un processus de
            création musicale, par une approche procédurale. Les mélodies générées utilisent des sons type 8bit sous une
            interface rétro et des couleurs bien saturées. J’ai été largement inspiré par le Google Doodle sur J.S. Bach
            qui utilise du machine-learning pour générer procéduralement une harmonisation à n’importe quel bout de
            mélodie selon le style du célèbre compositeur.</>,
          media: {
            type: "image",
            src: "/images/portfolio/other/musichelper/bach.jpg",
          },
        },
      ]
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Music Helper est un projet individuel, j’ai donc entièrement designé et développé le projet sous
            Unity.</>,
        },
      ]
    },
  ],
  credits: [
    {
      name: "Baptiste",
      surname: "Perraud",
      roles: "designer, programmer",
    },
  ],
  externalLinks: [
    <>Le Google Doodle sur J.S. Bach est disponible à cette <a href="https://g.co/doodle/mq5877" target="_blank"
                                                               rel="noopener">adresse</a>.</>,
    <>L’outil est disponible en ligne sur <a href="https://pyriceti.itch.io/musichelper" target="_blank"
                                             rel="noopener">itch.io</a>.</>,
  ],
  bgImg: "/images/portfolio/other/musichelper/musichelper1.jpg",
};

export default musicHelperProject;