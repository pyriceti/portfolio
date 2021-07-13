import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const unmazeProject: ProjectData = {
  title: "Unmaze",
  date: "2019 - 2021 (2 ans)",
  cat: "Jeux vidéo",
  roles: "Unity 3D Developer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>Unmaze est un <span className="bold">jeu narratif</span> mobile produit entre 2019 et 2021 avec
              Unity 3D au sein d’Upian et en coproduction avec Hiver Prod et Arte. Sous la forme d’un <span className="it">visual
                novel</span> interactif, Unmaze revisite le mythe de Thésée et du minotaure en proposant un gameplay original
              basé sur l’environnement lumineux du joueur/de la joueuse.
            </>,
          media: {
            type: "video",
            src: "https://www.youtube.com/watch?v=1tiCSKc2Ie8",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>Dans Unmaze, le joueur/la joueuse incarne Ariane qui essaie d’aider Thésée et Astérion, deux personnes
            qui lui sont chères, à s’échapper d’un labyrinthe surnaturel où ils sont piégés. Cependant, Ariane ne peut aider
            les deux en même temps<ThinSP/>: chacun est piégé dans une partie du labyrinthe, accessible en plaçant
            physiquement son téléphone soit dans la lumière, soit dans l’obscurité. Le gameplay proposé <span
              className="it">via</span> le capteur de lumière force donc le joueur/la joueuse à choisir qui privilégier,
            et par conséquent qui abandonner.</>,
          media: {
            type: "embedded_video",
            src: "/videos/portfolio/games/unmaze/umz_tel_cristal.mp4",
          },
        },
        {
          p: <>Plus généralement, Unmaze développe une histoire autour de plusieurs thèmes contemporains tels que
            l’abandon, la culpabilité, les relations toxiques voire le meurtre. Les thèmes de l’abandon et de la
            culpabilité trouvent un écho dans la manière dont le joueur/la joueuse se comporte vis à vis de Thésée et
            d’Astérion<ThinSP/>: peut-on les sauver tous les deux<ThinSP/>? Et à mesure que l’histoire se creuse, on
            pourra se demander si l’on <em>veut</em> les sauver…</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/unmaze/umz_outside.jpg",
          },
        },
      ],
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Dans ce projet, nous étions seulement deux développeurs avec <a href="http://andreberlemont.com/"
                                                                               target="_blank" rel="noopener">André
            Berlemont</a>. André a mis en place l’architecture technique du projet avec un framework permettant de
            prototyper rapidement les briques gameplay et narrative au cœur du projet. J’ai ensuite pris en charge la
            quasi-totalité du développement du jeu, de la <span className="it">vertical slice</span> au déploiement du
            jeu sur les stores mobiles. Ainsi, j’ai développé le <span className="bold">gameplay</span> du jeu,
            assuré <span className="bold">l’intégration continue</span> des assets du projet (narration, DA), conçu
            des <span className="bold">outils</span> <span className="it">ad hoc</span> permettant d’accélérer le
            développement du jeu. Enfin, j’ai <span className="bold">optimisé</span> le jeu pour qu’il puisse être
            accessible au plus grand nombre d’appareils possible.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/unmaze/umz_maze.jpg",
          },
        },
      ],
    },
    {
      title: "Gameplay",
      isSubTitle: true,
      content: [
        {
          p: <>Le gameplay d’Unmaze comporte plusieurs aspects. D’abord, il s’agit d’un <span className="bold">jeu narratif à embranchements</span>,
            il était donc nécessaire de se souvenir des choix et actions effectués par le joueur/la joueuse, afin de
            pouvoir dérouler l’enchaînement correct de dialogues. Ensuite, le jeu se base sur le dilemme de s’occuper
            d’un personnage au détriment de l’autre, j’ai ainsi dû correctement gérer <span className="bold">l’équilibre du«<ThinSP/>temps<ThinSP/>» passé</span> entre
            les deux, ainsi que les conséquences engendrées par ce dernier. Enfin, le cœur du gameplay d’Unmaze repose
            sur la captation de la <span className="bold">luminosité ambiante</span> du téléphone. Faute d’autres
            références utilisant un système proche du nôtre, j’ai consacré beaucoup de temps en R&D pour obtenir un
            comportement à la fois viable techniquement et compréhensible/ergonomique pour l’expérience utilisateur.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/unmaze/umz_light_doc.jpg",
          },
        },
      ],
    },
    {
      title: "Intégration",
      isSubTitle: true,
      content: [
        {
          p: <>Mon travail d’intégration concernait l’ensemble des assets du projet<ThinSP/>: sprites, SD, musique, mais
            aussi l’UI du jeu (tous les écrans de menu) et les cartes de labyrinthe. Les animations ont été réalisées
            par l’incroyable <a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-gon%C3%A7alv%C3%A8s-7bb7a34/"
                                target="_blank" rel="noopener">Jérôme Gonçalvès</a> dans un projet Unity à part, puis
            importées dans le projet final en suivant des <span
              className="bold">conventions et nomenclatures</span> très précises. Un autre challenge consistait à
            pouvoir rendre correctement les cartes de labyrinthe gigantesques sur des téléphones à la mémoire limitée.
            La solution a consisté en l’élaboration d’un algorithme de <span
              className="bold">slicing des cartes en <span className="it">tiles</span></span> puis de simuler
            l’équivalent d’un <span className="it">frustum culling</span>. Enfin, concernant l’UI du jeu, il a fallu
            penser à des adaptations de ratio pour optimiser l’expérience sur les tablettes.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/unmaze/umz_layers.jpg",
          },
        },
      ],
    },
    {
      title: "Tooling",
      isSubTitle: true,
      content: [
        {
          p: <>Pour gagner du temps sur la production du jeu, j’ai développé un certain nombre <span className="bold">d’outils dans Unity</span>.
            Entre autres, j’ai élaboré des algorithmes pour automatiser le découpage des cartes en <span
              className="it">tiles</span> (SD/HD) et l’import des dialogues du jeu depuis des feuilles de calcul Google
            Spreadsheet. J’ai également mis en place un <span className="it">Save Visualizer</span>, à savoir une
            fenêtre éditeur permettant d’examiner et de modifier le contenu d’une save pour faciliter le debug. Enfin,
            j’ai développé un outil à destination de l’équipe éditoriale pour mieux visualiser les liens de causalité
            entre les différents dialogues à embranchements.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/unmaze/umz_dialog.jpg",
          },
        },
      ],
    },
    {
      title: "Optimisation",
      isSubTitle: true,
      content: [
        {
          p: <>Tout au long de la production, <span className="bold">l’optimisation</span> a été centrale afin de
            s’assurer que le jeu fonctionnait correctement, même avec des téléphones modestes. Unmaze étant très
            demandant pour la mémoire et le GPU, j’ai utilisé des <span className="bold">compressions</span> élevées
            pour les sprites sans qu’elles ne perdent de leur fidélité visuelle. Il a également fallu recourir à de
            nombreux <span className="bold">atlas</span> pour rassembler les sprites similaires entre elles et diminuer
            l’empreinte mémoire du jeu. Enfin, j’ai mis en place dans l’architecture du projet des processus de <span
              className="bold">chargement asynchrone</span> des assets, afin que seuls les éléments visibles/audibles
            soient actuellement chargés. Unmaze fonctionne donc à 60fps sur les téléphones performants, et ne descend
            jamais en dessous de 30fps pour les plus modestes.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/unmaze/umz_atlas.jpg",
          },
        },
      ],
    },
  ],
  credits: [
    {
      name: "Nicolas",
      surname: "Pelloille-Oudart",
      roles: "author, narrative designer",
    },
    {
      name: "Frédéric",
      surname: "Jamain",
      roles: "artistic director",
    },
    {
      name: "Thomas",
      surname: "Cadène",
      roles: "writer",
    },
    {
      name: "Florent",
      surname: "Fortin",
      roles: "2D artist",
    },
  ],
  externalLinks: [
    <>Le jeu est disponible sur le <a href="https://play.google.com/store/apps/details?id=com.upian.unmaze"
                                      target="_blank" rel="noopener">Google Play Store</a> et sur <a
      href="https://apps.apple.com/app/id1522037230" target="_blank" rel="noopener">l’Apple Store</a>.</>,
    <>Les trailers sont sur Youtube en <a href="https://www.youtube.com/watch?v=48jG2Oi-Lsw"
                                      target="_blank" rel="noopener">anglais</a> et <a
      href="https://www.youtube.com/watch?v=1tiCSKc2Ie8" target="_blank" rel="noopener">français</a>.</>,
    <>Le site officiel du jeu est disponible sur <a href="https://unmaze.arte.tv/"
                                                    target="_blank" rel="noopener">Arte</a>.</>,
  ],
  bgImg: "/images/portfolio/games/unmaze/bg.jpg",
  bgImgOverlay: 0.2,
};

export default unmazeProject;