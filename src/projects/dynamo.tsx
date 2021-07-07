import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const dynamoProject: ProjectData = {
  title: "Dynamo",
  date: "2018 (72h)",
  cat: "Jeux vidéo",
  roles: "Level Designer, Sound Designer/Composer, Programmer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>Dynamo est un jeu vidéo de type <span className="bold">platformer 2D</span>réalisé en 2018 sous Unity dans
              le cadre du séminaire "game jam" au sein du mastère IDE à GOBELINS, l’école de l’image. Le but du projet
              était de concevoir une expérience interactive en 72h dans le thème <span
                className="it">Black and White</span>. Nous avons choisi de réaliser un jeu basé sur la peur du
              noir.</>,
          media: {
            type: "video",
            src: "https://www.youtube.com/watch?v=rxKF9MgrZcI",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>Dynamo est un jeu inspiré de la peur enfantine d’être plongé(e) dans l’obscurité. Nous voulions traduire
            le sentiment d’urgence que ressent un enfant une fois la lumière éteinte à courir retrouver la sécurité de
            sa chambre.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/dynamo/1.jpg",
          },
        },
        {
          p: <>Ainsi, le joueur incarne Dynamo, un petit personnage plongé dans un environnement
            inquiétant<ThinSP/>&ndash;<ThinSP/>et surtout dans l’obscurité. Ce dernier est obligé de lancer l’orbe
            lumineuse accrochée à son bonnet de nuit pour éclairer son chemin ; néanmoins, il doit retourner la chercher
            au plus vite sous peine d’être à nouveau plongé dans l’obscurité totale.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/dynamo/2.jpg",
          },
        },
      ]
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Le game design du projet s’est fait à quatre, compte tenu du peu de temps dont nous disposions. J’ai
            cependant assumé deux autres rôles dans ce projet : le level design et le sound design.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/dynamo/3.jpg",
          },
        },
      ]
    },
    {
      title: "Level design",
      isSubTitle: true,
      content: [
        {
          p: <>J’ai travaillé sur le level design du jeu. Nous voulions proposer un niveau qui suive une courbe de
            difficulté et d’apprentissage progressive chez le joueur. Plusieurs obstacles étaient prévus, mais seuls
            sont qui étaient les plus «<ThinSP/>simples<ThinSP/>» ont été intégrés au niveau. Ce dernier contient
            également des pentes et une verticalité pensées pour offrir des interactions intéressantes avec la physique
            de l’orbe.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/dynamo/LD.jpg",
          },
        },
      ]
    },
    {
      title: "Sound design",
      isSubTitle: true,
      content: [
        {
          p: <>J’ai composé la musique adaptative de Dynamo à l’aide d’Ableton. L’idée était de proposer une boucle
            simple mais comportant suffisamment de pistes différentes pour pouvoir jouer sur des variations de volume
            entre ces dernières (ambiance effrayante). Les bruitages ont eux été récupérés depuis des banques de son
            gratuites, puis intégrés après correction (normalisation, etc.).</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/dynamo/4.jpg",
          },
        },
      ]
    },
    {
      title: "Intégration",
      isSubTitle: true,
      content: [
        {
          p: <>Je me suis servi des outils de mixage natifs sous Unity pour mixer en temps réel les pistes et les effets
            sonores. Par exemple, des effets de volume et de pitch transforment la musique vers un ton d’autant plus
            angoissant que Dynamo est resté plongé dans l’obscurité trop longtemps.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/dynamo/Audio.jpg",
          },
        },
      ]
    },
  ],
  credits: [
    {
      name: "Camille",
      surname: "Durif",
      roles: "light artist, programmation",
    },
    {
      name: "Mathilde",
      surname: "Miossec",
      roles: "character design, direction artistique",
    },
    {
      name: "Benjamin",
      surname: "Morelle",
      roles: "programmation",
    },
    {
      name: "Baptiste",
      surname: "Perraud",
      roles: "level design, composition, sound design",
    },
  ],
  externalLinks: [
    <>Le jeu est disponible en ligne sur <a href="https://alabamaben.itch.io/dynamo" target="_blank"
                                            rel="noopener">itch.io</a>.</>,
  ],
  bgImg: "/images/portfolio/games/dynamo/4.jpg",
  bgImgOverlay: 0,
};

export default dynamoProject;