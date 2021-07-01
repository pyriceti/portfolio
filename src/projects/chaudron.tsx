import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const chaudronProject: ProjectData = {
  title: "Chaudron Magique",
  date: "2016 (6 mois)",
  cat: "Jeux vidéo",
  roles: "2D Artist, Composer, Programmer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>Chaudron magique est un jeu vidéo narratif à embranchements réalisé en 2016 à l'Université de Technologie
              de Compiègne (UTC) dans le cadre du cours IC06 (Industrie et conception des jeux vidéo). Mon groupe a
              choisi de réaliser un jeu inspiré des livres dont vous êtes le héros sous la forme d’une aventure au ton
              humoristique.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/chaudron/home.jpg",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>Chaudron magique est un jeu narratif où le joueur se met en route afin de rencontrer le célèbre sorcier
            Zek. L’univers est fantastique et l’écriture teintée d’humour, à la manière d’un conte de fées décalé. Le
            jeu est divisée en deux phases. Dans la première, le joueur incarne d’abord Zek lui-même, pris de panique
            face à son chaudron sur le point d’exploser. Il doit verser plusieurs ingrédients dedans dans un temps
            imparti. Dans la seconde phase, le joueur incarne un promeneur parti à la recherche de Zek, et qui devra
            faire face aux conséquences magiques dues aux ingrédients mis dans le chaudron auparavant.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/chaudron/game.jpg",
          },
        },
        {
          p: <>Comme tout jeu à embranchements, le joueur doit avancer en faisant des choix qui modifieront son aventure
            au fur et à mesure qu’il progresse dans l’histoire. Le jeu contient d’ailleurs plusieurs fins possibles,
            certaines plus faciles à débloquer que d’autres.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/chaudron/achievements.jpg",
          },
        },
      ],
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Dans ce projet, j’ai assumé trois rôles principaux, notamment en raison de notre faible effectif de
            groupe : 2D artist, composer et programmer.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/chaudron/game2.jpg",
          },
        },
      ],
    },
    {
      title: "Artistic Direction",
      isSubTitle: true,
      content: [
        {
          p: <>Je me suis occupé de la direction artistique dans ce projet, notamment en dessinant les illustrations qui
            accompagnent le texte tout au long de l’histoire. J’ai notamment réalisé plusieurs états du chaudron pour
            donner un effet <span className="it">step motion</span> à ce dernier lorsqu’il bout de plus en plus fort
            durant la phase 1.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/chaudron/chaudrons.jpg",
          },
        },
      ],
    },
    {
      title: "Composition",
      isSubTitle: true,
      content: [
        {
          media: {
            type: "audio",
            src: "https://soundcloud.com/user-128757034/sets/chaudron-magique",
          },
        },
        {
          p: <>J’ai composé la musique de Chaudron magique en utilisant Finale. Elle se compose de plusieurs thèmes
            correspondant aux différentes phases de jeu<ThinSP/>: réveil de Zek, chaudron qui bout, etc.
            L’instrumentation est inspirée des grands orchestres symphoniques souvent présents dans les univers
            fantastiques et contes de fées classiques (cordes frottées, instruments à vents). Les<span className="it">sound effects</span> ont
            eux été récupérés depuis des banques de son gratuites.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/chaudron/finale.jpg",
          },
        },
      ],
    },
    {
      title: "Programmation",
      isSubTitle: true,
      content: [
        {
          p: <>J’ai porté la narration à embranchements sur Twine, afin d’obtenir une version web du jeu sans avoir à
            reprogrammer l’ensemble des mécaniques propres au genre. Twine étant basé sur du javascript, j’ai ensuite
            implémenté des scripts au dessus afin d’avoir certains comportements particuliers (e.g. transition en fondu)
            non natifs dans le framework.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/chaudron/squelette.jpg",
          },
        },
      ],
    },
  ],
  credits: [
    {
      name: "Fabien",
      surname: "Boucaud",
      roles: "game design, storytelling, programmation",
    },
    {
      name: "Maxime",
      surname: "Nivelle",
      roles: "game design, storytelling",
    },
    {
      name: "Baptiste",
      surname: "Perraud",
      roles: "direction artistique, composition, programmation",
    },
  ],
  externalLinks: [
    <>Le jeu est disponible en ligne sur <a href="https://pyriceti.itch.io/chaudron-magique" target="_blank"
                                            rel="noopener">itch.io</a>.</>,
  ],
};

export default chaudronProject;