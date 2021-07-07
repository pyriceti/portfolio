import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const exhibitionProject: ProjectData = {
  title: "The Exhibition",
  date: "2019 (72h)",
  cat: "Jeux vidéo",
  roles: "Programmer, Game Designer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>The Exhibition est un jeu vidéo réalisé en 2019 sous Unity au cours de la Digital Art Jam #3 organisée au
              centre Pompidou. Le but du projet était de concevoir une expérience interactive en 48h en s’inspirant de
              deux expositions temporaires du centre, l’une sur la fabrique du vivant (biotechnologies), l’autre dédiée
              à l’artiste brésilienne Erika Verzutti. Notre groupe a alors choisi de réaliser un jeu d’infiltration dans
              un musée.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/exhibition/menu.jpg",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>The Exhibition est un jeu parti d’un constat : nous avons vu au cours des différentes expositions des
            œuvres ou créations autour du vivant, notamment dans son organisation en éco-systèmes régis selon des
            logiques propres. Néanmoins, on pouvait appliquer le même raisonnement au centre Pompidou lui-même, et par
            une mise en abyme, considérer que les visiteurs et guides font eux-mêmes partie d’un écosystème unique (ce
            que l’architecture du centre exprime notamment dans sa gestion des «<ThinSP/>flux<ThinSP/>»).</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/exhibition/game.jpg",
          },
        },
        {
          p: <>Le joueur incarne donc un journaliste ayant perdu sa carte membre et devant donc s’infiltrer sur les
            lieux pour réaliser un article sur les différentes expositions. Pour ce faire, il doit avoir collecté un
            maximum de mots à la fin de la journée sans s’être fait repéré par les guides et/ou visiteurs en évitant de
            rester trop longtemps dans leur champ de vision.</>,
        },
      ]
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Nous avons réalisé le game design du projet tous ensemble, n’ayant que 48h pour le réaliser. J’ai de mon
            côté assuré deux rôles dans ce projet<ThinSP/>: la programmation gameplay et l’intégration du sound
            design.</>,
        },
      ]
    },
    {
      title: "Programmation gameplay",
      isSubTitle: true,
      content: [
        {
          p: <>J’ai programmé les logiques de #[span.it gameplay] propres au concept d’infiltration que nous
            souhaitions. Tout d’abord, il s’agissait de gérer l’état d’alarme basé sur la présence ou non du joueur dans
            le champ de vision conique des guides et des visiteurs. Ensuite, je me suis occupé du système de collecte
            des mots, dès que le joueur reste suffisamment longtemps à côté d’un guide en train de parler.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/exhibition/unity.jpg",
          },
        },
      ]
    },
    {
      title: "Intégration Sound design",
      isSubTitle: true,
      content: [
        {
          p: <>Benjamin s’est occupé de créer l’ensemble du sound design du jeu. Il a fallu ensuite l’intégrer au jeu,
            tâche complexe en raison de l’intégration de l’ensemble des éléments du jeu qui s’est faite tardivement.
            J’ai assisté Benjamin dans Unity pour lier les événements, états et paramètres aux différents sons qu’il
            avait créés sous Wwise de son côté.</>,
        },
      ]
    },
  ],
  credits: [
    {
      name: "Romain",
      surname: "Dannin",
      roles: "game design, level design",
    },
    {
      name: "Benjamin",
      surname: "Darmon",
      roles: "sound design",
    },
    {
      name: "Sébastien",
      surname: "Gaumin",
      roles: "programmeur IA",
    },
    {
      name: "Hyunah",
      surname: "Jung",
      roles: "direction artistique",
    },
    {
      name: "Baptiste",
      surname: "Perraud",
      roles: "programmeur gameplay",
    },
  ],
  externalLinks: [
    <>Le jeu est disponible en ligne sur <a href="https://pyriceti.itch.io/the-exhibition" target="_blank"
                                            rel="noopener">itch.io</a>.</>,
  ],
  bgImg: "/images/portfolio/games/exhibition/menu.jpg",
};

export default exhibitionProject;