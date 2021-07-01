import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const auroreProject: ProjectData = {
  title: "Ce Carnet appartient à Aurore",
  date: "2019 (4 mois)",
  cat: "Jeux vidéo",
  roles: "Programmer, Game Designer, Sound Designer/Composer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>Ce carnet appartient à Aurore est un <span className="bold">projet hybride</span> réalisé en 2019 avec
              Unity 3D en tant que projet de fin d’études du mastère IDE à GOBELINS, l’école de l’image. Se souciant de
              proposer une expérience interactive originale, mon équipe a choisi de se lancer sur l’étonnante réunion de
              deux média, le jeu vidéo et le livre, dans un jeu hybride coopératif proposant à la fois énigmes et
              intrigue travaillées aux joueuses/joueurs.</>,
          media: {
            type: "video",
            src: "https://www.youtube.com/watch?v=701FiZdJOJc",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>À l’origine du concept, nous souhaitions attribuer un rôle véritablement actif au
            «<ThinSP/>copilote<ThinSP/>»,
            soit la personne qui regarde quelqu’un jouer sans être forcément elle-même joueuse (ami, compagnon/compagne,
            etc.). De là est né un projet hybride entre deux média<ThinSP/>: un jeu vidéo et un livre non connectés
            numériquement (sans QR code, sans augmentation, etc). L’ensemble du game design repose en effet sur
            l’interaction qui naît entre les deux joueurs, ainsi que leur communication afin de résoudre les énigmes qui
            leur sont présentées.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/aurore/aurore1.jpg",
          },
        },
        {
          p: <>Le jeu propose d’incarner en réalité alternée un droïde laissé dans une base de recherches abandonnée.
            Ingénieure métrologue, Aurore travaillait dans celle-ci avant de devoir quitter les lieux pour cause de
            fermeture urgente du site. Pour cause<ThinSP/>: un mystérieux édifice serait apparu là-bas et deviendrait
            menaçant pour les scientifiques. Frustrée de ne pouvoir continuer ses recherches, Aurore envoie son carnet
            aux joueurs/joueuses pour qu’ils puissent percer les secrets de l’édifice et finir ses recherches. C’est
            donc en croisant ce qu’ils voient à l’écran et les écrits du carnet que les joueurs/joueuses pourront
            parvenir à résoudre les énigmes et lever le voile sur le mystère de l’édifice inconnu.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/aurore/aurore2.jpg",
          },
        },
      ],
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Dans ce projet, j’ai travaillé au game design dans la conception d’énigmes qui puissent fonctionner dans
            le système hybride que nous développions. J’ai également assumé une partie du développement technique,
            notamment de l’intégration des modèles 3D, du gameplay et des éléments sonores. Parce que notre projet était
            extrêmement spécifique par sa nature hybride & transmédia, j’ai également apporté mon aide sur le suivi
            marketing, en évaluant notamment sa pertinence sur les plateformes de <span
              className="it">crowdfunding</span> comme KickStarter. Enfin, j’ai développé l’univers sonore du jeu en
            tant que <span className="bold">SoundDesigner</span> et <span className="bold">Composer</span>, essayant de
            rendre à la fois honneur au mystère de l’édifice et au caractère scientifique des lieux (machines, robots,
            etc.).</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/aurore/aurore3.jpg",
          },
        },
      ],
    },
    {
      title: "Sound design",
      isSubTitle: true,
      content: [
        {
          p: <>Pour ce projet, il n’y a pas eu de musique à composer. En revanche, mon but était de caractériser
            fortement les 3 entités essentielles pour le joueur/la joueuse<ThinSP/>: le centre de recherches, l’édifice
            et le carnet. À noter que l’ensemble des éléments sonores ont été travaillés et assemblés sous Ableton et
            grâce à des VST gratuits. En ce qui concerne le centre de recherches, j’ai voulu le peupler de sons
            électroniques, les machines étant les seuls habitants des lieux abandonnés. Pour l’édifice, j’ai tenté de
            produire des sons plus aériens et mélodieux qui puissent donner un sentiment d’espace, de majesté et surtout
            de mystère à cet étonnant monument. Enfin, pour ce qui est du carnet, ce dernier incarnait une contrainte de
            design forte<ThinSP/>: laisser de la place aux joueurs pour échanger confortablement pendant les phases
            d’énigme. Le mixage a donc été pensé pour être le moins intrusif possible dans l’expérience de jeu.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/aurore/aurore4.jpg",
          },
        },
      ],
    },
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
  externalLinks: [],
};

export default auroreProject;