import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const fragmentsProject: ProjectData = {
  title: "Fragments",
  date: "2019 (2 mois)",
  cat: "Jeux vidéo",
  roles: "Sound Designer/Composer, Game Designer, Programmer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>Fragments est un <span className="bold">jeu vidéo narratif</span> réalisé en 2019 sous Unity dans le cadre
              du séminaire «<ThinSP/>Histoire interactive<ThinSP/>» au sein du mastère IDE à GOBELINS, l’école de
              l’image. Le but du projet était de créer une expérience à forte composante narrative. Mon groupe a choisi
              de réaliser un <span className="it">walking simulator</span>.</>,
          media: {
            type: "video",
            src: "https://www.youtube.com/watch?v=SuBtDq6JNJo&",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>Fragments est une expérience qui explore le traumatisme et l’émancipation par l’introspection, à travers
            un point de vue très intimiste. Le joueur/la joueuse incarne Lauren, une jeune adulte de 33 ans, qui va
            revivre certains souvenirs liés à sa relation fraternelle, pour tourner la page d’une étape douloureuse de
            sa vie.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/fragments/1.jpg",
          },
        },
        {
          p: <>Le <span className="it">hub</span> dans lequel le joueur/la joueuse reconstruit les souvenirs de Lauren
            est un espace éthéré, brumeux<ThinSP/>: il s’agit du palais mental de Lauren. Des
            «<ThinSP/>fragments<ThinSP/>» de scènes sont répartis sur des îlots qui flottent dans le vide. On y retrouve
            des morceaux de bâtiments, de forêt ou encore de pavillon résidentiel qui peuplent la mémoire de Lauren et
            servent de support à la narration.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/fragments/2.jpg",
          },
        },
      ]
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Dans ce projet, j’ai assisté mon équipe en game design et scénarisation pour que nous soyons sûrs que le
            gameplay et la narration de notre jeu aillent bien de pair. Néanmoins, j’ai surtout assumé les rôles
            de <span className="bold">Sound Designer</span> et de <span className="bold">Composer</span>.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/fragments/3.jpg",
          },
        },
      ]
    },
    {
      title: "Composition",
      isSubTitle: true,
      content: [
        {
          media: {
            type: "audio",
            src: "https://soundcloud.com/user-128757034/sets/fragments-original-soundtrack",
          },
        },
        {
          p: <>J’ai composé l’ensemble de la bande originale de Fragments à l’aide d’Ableton et de VST gratuits. Il
            s’agissait d’un challenge intéressant, par rapport à la l’écriture d’une musique interactive qui <span
              className="bold">s’adapte</span> aux actions du joueur.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/fragments/Ableton.jpg",
          },
        },
      ]
    },
    {
      title: "Enregistrement & Mixage",
      isSubTitle: true,
      content: [
        {
          p: <>Nous avons fait appel à une comédienne professionnelle pour obtenir les voix de Lauren et de son frère
            Tommy. J’ai supervisé l’enregistrement de sa voix dans un studio dédié de l’école, puis nettoyé et mixé les
            fichiers résultants dans Audacity, en appliquant au besoin certains effets (voix du passé, au téléphone,
            etc.).</>,
          media: {
            type: "image",
          src: "/images/portfolio/games/fragments/Audacity.jpg",
          },
        },
      ]
    },
    {
      title: "Intégration",
      isSubTitle: true,
      content: [
        {
          p: <>Nous avons fait appel à un étudiant en sound design pour m’épauler dans mon travail : Matthieu. Ce
            dernier a produit les bruitages dont nous avions besoin pour le jeu. Je me suis occupé d’intégrer l’ensemble
            des ressources sonores du projet (voix, bruitages et musique) dans le moteur audio Wwise dédié, puis à mixer
            et équilibrer les sorties pour obtenir un résultat convainquant.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/fragments/Wwise.jpg",
          },
        },
        {
          p: <>Enfin, j’ai finalisé l’intégration sonore du projet en interfaçant Wwise et Unity grâce à l’API
            officielle. Il s’agissait <span className="it">in fine</span> de scripter les interactions entre les deux
            moteurs pour que les sons se déclenchent au bon moment, en fonction de l’action du joueur.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/fragments/Rider.jpg",
          },
        },
      ]
    }
  ],
  credits: [
    {
      name: "Romain",
      surname: "Dannin",
      roles: "narrative designer, screenwriter, level designer",
    },
    {
      name: "Camille",
      surname: "Durif",
      roles: "game designer, programmer, technical artist",
    },
    {
      name: "Mathilde",
      surname: "Miossec",
      roles: "artistic director, 2D & 3D artist, level designer",
    },
    {
      name: "Baptiste",
      surname: "Perraud",
      roles: "game designer, sound designer, programmer",
    },
  ],
  externalLinks: [
    <>Le jeu est disponible en ligne sur <a href="https://pyriceti.itch.io/fragments" target="_blank"
                                            rel="noopener">itch.io</a>. Attention, il est conseillé d’avoir une carte
      graphique dédiée pour que le jeu soit stable.</>,
  ],
  bgImg: "/images/portfolio/games/fragments/1.jpg",
};

export default fragmentsProject;