import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const iciProject: ProjectData = {
  title: "IcI",
  date: "2015 (6 mois)",
  cat: "Jeux vidéo",
  roles: "Composer",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>IcI est un jeu vidéo de type <span className="it">walking simulator</span> onirique réalisé en 2015 à
              l'Université de Technologie de Compiègne (UTC) dans le cadre du cours SI28 (Écriture interactive et
              multimédia). Mon groupe a choisi de réaliser un jeu onirique où la musique est au cœur du gameplay.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/ici/1.jpg",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>Avec IcI, nous avons voulu proposer une aventure scénarisée où la musique se retrouve au cœur de
            l’histoire et du gameplay. L’univers se présente sous la forme d’un conte, d’un parcours initiatique. Le
            joueur incarne un astronaute perdu sur une planète étrange. Il fait la rencontre d’un étrange oiseau qui lui
            apprendra comment se frayer un chemin en utilisant la musique pour modifier son environnement.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/ici/2.jpg",
          },
        },
        {
          p: <>Le visuel et le sonore ont été pensés pour tenter de former une véritable synergie, s’influençant l’un et
            l’autre. L’idée est qu’un changement de la musique impacte l’environnement, et réciproquement. Dans le
            tableau que nous avons pu réaliser, ceci se matérialise par le changement des saisons en altérant le thème
            principal<ThinSP/>: mélodie mineure pour l’hiver, majeure pour le printemps.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/ici/3.jpg",
          },
        },
      ],
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Dans ce projet, je me suis occupé de composer la musique allant de pair avec le gameplay que nous
            souhaitions pour le jeu.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/ici/4.jpg",
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
            src: "https://soundcloud.com/user-128757034/sets/ici-original-soundtrack",
          },
        },
        {
          p: <>J’ai composé la musique à l’aide de Finale, en utilisant une orchestration inspirée des contes de fées et
            aventures oniriques modernes (Child of Light par exemple)<ThinSP/>: violons et vents surtout. Le tableau
            comporte un thème principal que j’ai composé selon deux déclinaisons<ThinSP/>: l’une majeure et l’autre
            mineure. Lorsque le joueur passe de l’un à l’autre, un <span className="it">cross fade</span> permet de
            faire la transition entre les deux modes.</>,
          media: {
            type: "image",
            src: "/images/portfolio/games/ici/5.jpg",
          },
        },
      ],
    },
  ],
  credits: [
    {
      name: "Alexandre",
      surname: "Ballet",
      roles: "game design, programmation",
    },
    {
      name: "Nicolas",
      surname: "Borri",
      roles: "game design, direction artistique",
    },
    {
      name: "Loïc",
      surname: "Lerat",
      roles: "game design, programmation",
    },
    {
      name: "Baptiste",
      surname: "Perraud",
      roles: "game design, composition",
    },
  ],
  externalLinks: [],
  bgImg: "/images/portfolio/games/ici/4.jpg",
};

export default iciProject;