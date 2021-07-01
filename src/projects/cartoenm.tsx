import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const cartoenmProject: ProjectData = {
  title: "Carto-enm",
  date: "2016 – 2017 (8 mois)",
  cat: "Web",
  techno: "Stack WAMP (Windows, Apache Server, MySQL, PHP), VB/VBA, Python",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>Carto-ENM est une application web réalisée dans le cadre d’un job étudiant à l’UTC en binôme avec Raphaël
              Debray et sous la direction d’Hamid Le Fleurier. L’application propose une cartographie des articles de
              lois liés à la gestion des successions dans les différents pays signataires du Règlement. L’ENM est le
              commanditaire de la plateforme, destinée à être utilisée par un large public (notamment les
              étudiants).</>,
          media: {
            type: "image",
            src: "/images/portfolio/web/cartoenm/home.jpg",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>La gestion des successions dans le Règlement repose sur bon nombre de textes de lois, qu’il est difficile
            de comparer ou d’avoir accès de manière facile et centralisée. Le projet Carto-ENM vise à simplifier la
            vision de ces derniers en offrant une cartographie par pays signataire du règlement.<br/>L’interface propose
            ainsi de sélectionner le pays puis de filtrer les types de textes désirés (fond, procédure, autorité). Les
            résultats sont ensuite chargés depuis la base de données sous forme de liste ordonnée selon les différentes
            phases de succession légales. L’utilisateur peut alors être redirigé vers les articles sources des résultats
            de sa recherche.</>,
          media: {
            type: "image",
            src: "/images/portfolio/web/cartoenm/main.jpg",
          },
        },
      ]
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>J’ai principalement assumé le rôle de développeur backend sur ce projet, sous plusieurs aspects<ThinSP/>:
            pipeline d’alimentation de la BDD, programmation plateforme et mise en place de la zone admin. Toutefois,
            j’ai également assumé un rôle de coordinateur technique sur le projet, afin d’avancer en phase avec les
            participants externes au projet (docteure alimentant les textes de lois pour la BDD, traducteurs…).</>,
        },
      ]
    },
    {
      title: "Alimentation BDD",
      isSubTitle: true,
      content: [
        {
          p: <>J’ai élaboré un pipeline d’alimentation de la BDD selon les entrées xls que nous recevions. J’ai donc
            conçu des macros en VB/VBA afin de formatter/standardiser correctement les données d’entrée de chaque pays.
            Ensuite, j’ai réalisé des scripts VB/VBA & Python afin de générer des CSV au format dédié à l’architecture
            de la BDD. Enfin, j’ai écrit des scripts d’insertion <span className="it">bulk</span> SQL des données CSV
            pour alimenter la BDD correctement. Le site étant disponible en plusieurs langues, j’ai également adapté le
            pipeline afin de gérer les données traduites jusqu’à leur insertion en BDD.</>,
        },
      ]
    },
    {
      title: "Programmation plateforme",
      isSubTitle: true,
      content: [
        {
          p: <>J’ai programmé la logique centrale de la plateforme permettant de traiter la requête d’un utilisateur.
            Lorsque ce dernier lance une recherche, le serveur récupère depuis la BDD les données adéquates traduites
            correspondant à cette dernière, puis les ordonne selon une architecture arborescente avant de les renvoyer à
            l’utilisateur.</>,
        },
      ],
    },
    {
      title: "Zone admin",
      isSubTitle: true,
      content: [
        {
          p: <>Enfin, j’ai développé une interface administrateur permettant de modifier l’url d’un texte de loi,
            d’ajouter un admin à la plateforme ainsi que de modifier son mot de passe.</>,
        },
      ],
    },
  ],
  credits: [
    {
      name: "Raphaël",
      surname: "Debray",
      roles: "frontend developer",
    },
    {
      name: "Hamid",
      surname: "Le Fleurier",
      roles: "coordinateur projet",
    },
    {
      name: "Baptiste",
      surname: "Perraud",
      roles: "coordinateur technique, backend developer",
    },
  ],
  externalLinks: [
    <>La plateforme est actuellement disponible <a href="https://ics.utc.fr/cartoenm/" target="_blank"
                                                   rel="noopener">ici</a>.</>,
  ],
};

export default cartoenmProject;