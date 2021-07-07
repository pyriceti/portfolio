import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const the2116Project: ProjectData = {
  title: "2116",
  date: "2018 (1 mois)",
  cat: "Autres (jeu de société)",
  roles: "Game Designer, Programmer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>2116 est un jeu de plateau de stratégie asymétrique à 4 joueurs réalisé en 2018 dans le cadre du séminaire
              «<ThinSP/>jeu de société<ThinSP/>» au sein du mastère IDE à GOBELINS, l’école de l’image. Le but du projet
              était de concevoir un jeu de société sur le thème du changement climatique. Notre groupe a réalisé un jeu
              où la Planète cherche à éradiquer les humains. Par la suite, nous avons réalisé une version hybride du jeu
              pour le séminaire «<ThinSP/>objet connecté<ThinSP/>».</>,
          media: {
            type: "image",
            src: "/images/portfolio/other/2116/board.jpg",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>Dans 2216, la Planète veut se débarrasser de l’espèce humaine à l’aide de cataclysmes et montées de la
            température. Nous voulions sensibiliser les joueurs sur la question du changement climatique, tout en
            insistant sur la difficulté de faire corps ensemble face à cette question. Il s’agit d’un jeu
            asymétrique<ThinSP/>: un joueur incarne la Planète et affronte les trois autres joueurs Humain.</>,
          media: {
            type: "image",
            src: "/images/portfolio/other/2116/cards.jpg",
          },
        },
        {
          p: <>La coopération du côté des humains est cruciale, mais pas nécessaire pour l’emporter<ThinSP/>: un joueur
            Humain peut gagner seul s’il parvient à construire son Arche de Noé. Le bluff et la gestion des ressources
            sont également des éléments de gameplay essentiels pour gagner la partie.</>,
          media: {
            type: "image",
            src: "/images/portfolio/other/2116/combos.jpg",
          },
        },
      ]
    },
    {
      title: "Jeu hybride",
      content: [
        {
          p: <>Nous avons choisi de poursuivre ce projet en l’hybridant. Concrètement, nous avons réalisé un plateau en
            forme de demi dôme géodésique où se grefferait de l’électronique (LED, boutons poussoirs, etc.) contrôlé par
            une carte Arduino. L’intérêt était triple<ThinSP/>: faciliter la mise en place du plateau, permettre des
            innovations en terme de gameplay, et favorisation de la sensibilisation sur le sujet environnemental<span
              className="it">via</span> une simplification des règles).</>,
          media: {
            type: "image",
            src: "/images/portfolio/other/2116/geode.jpg",
          },
        },
      ]
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Pour le séminaire «<ThinSP/>jeu de société<ThinSP/>», j’ai participé activement à l’écriture des règles,
            leur équilibrage et leur correction itérative. Il s’agissait d’un processus complexe qui nous a demandé bon
            nombre de playtests pour arriver à une version satisfaisante.<br/>Dans le cadre de l’hybridation du jeu,
            j’ai retravaillé sur les règles en aidant à leur adaptation. D’autre part, j’ai prototypé des circuits
            Arduino utilisant des registres à décalage afin de pouvoir contrôler une centaine de LED et boutons
            poussoirs.</>,
          media: {
            type: "image",
            src: "/images/portfolio/other/2116/arduino.jpg",
          },
        },
      ]
    },
  ],
  credits: [
    {
      name: "Nadège",
      surname: "Bourguignon",
      roles: "game designer, construction/assemblage, programmation",
    },
    {
      name: "Camille",
      surname: "Durif",
      roles: "game designer, programmation",
    },
    {
      name: "Pauline",
      surname: "Marseglia",
      roles: "game designer, direction artistique",
    },
    {
      name: "Mathilde",
      surname: "Miossec",
      roles: "game designer, direction artistique, construction/assemblage",
    },
    {
      name: "Baptiste",
      surname: "Perraud",
      roles: "game designer, programmation",
    },
  ],
  externalLinks: [
    <>Les règles du jeu sont disponibles <a href="/files/2116-rules.pdf" download>ici</a></>
  ],
  bgImg: "/images/portfolio/other/2116/board.jpg",
  bgImgOverlay: .75,
};

export default the2116Project;