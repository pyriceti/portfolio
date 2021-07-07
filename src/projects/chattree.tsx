import { ProjectData } from "./index";
import ThinSP          from "../../components/util/thinsp";

const chatTreeProject: ProjectData = {
  title: "ChatTree",
  date: "2017 (9 mois)",
  cat: "Web",
  techno: "Stack MEAN (MongoDB, Express.js, Angular 2+, Node.js), Android, Java",
  content: [
    {
      title: "Présentation",
      content: [
        {
          p:
            <>ChatTree est une application prototypée en web et Android de messagerie instantanée permettant de créer et
              de gérer des <span className="bold">conversations arborescentes</span>. Il s’agit d’un projet étudiant
              réalisé dans le cadre de deux cours à l’UTC en équipe de 5 étudiants, que j’ai ensuite repris avec une
              équipe de 4 étudiants à l'Université de Sherbrooke.</>,
          media: {
            type: "video",
            src: "https://www.youtube.com/watch?v=gTLoVibgaBY",
          },
        },
      ],
    },
    {
      title: "Concept",
      content: [
        {
          p: <>C'est suite à une prise de recul sur nos pratiques quotidiennes de messagerie instantanée et sur la
            frustration qui en découle parfois que le concept de ChatTree est né. La linéarité verticale des messageries
            instantanées classiques se révèle vite inefficace en cas de conversations de groupe, et en particulier
            celles dédiées à l’organisation d’un événement, à la gestion d’un projet, ou même à de simples conversations
            entre amis.</>,
          media: {
            type: "image",
            src: "/images/portfolio/web/chattree/creation_thread.jpg",
          },
        },
        {
          p: <>ChatTree cherche à travers «<ThinSP/>l’arbre à threads<ThinSP/>» de briser la linéarité verticale en
            apportant la possibilité de structurer une conversation en multiples sous-fils de conversation. Chacun de
            ces threads est paramétrable du point de vue des notifications, nommable, taggable pour faciliter
            l’identification de leurs contenus. ChatTree offre une vue de chaque conversation sous forme d’arbre à
            threads qui en apporte un aperçu global clair et concis.</>,
          media: {
            type: "image",
            src: "/images/portfolio/web/chattree/discussion_thread.jpg",
          },
        },
      ],
    },
    {
      title: "Application Android",
      content: [
        {
          p: <>Après avoir travaillé sur ce projet à l’UTC, j’ai eu envie de le poursuivre dans le cadre de deux autres
            cours pendant mon semestre d’études à l’Université de Sherbrooke (Québec). Mon envie était d’avoir
            l’opportunité de confirmer notre intuition que le concept avait une réelle valeur, en se basant sur une
            nouvelle série de playtests après avoir affiné le projet. J’ai donc monté une nouvelle équipe de 4 étudiants
            et ensemble, nous avons finalement décidé de prototyper une version Android de l’application, pour obtenir
            des playtests pertinents sur un usage mobile des messageries instantanées, et donc sur la proposition de
            concept de ChatTree.</>,
          media: {
            type: "video",
            src: "https://www.youtube.com/watch?v=EObvNMn0vMM",
          },
        },
      ],
    },
    {
      title: "Rôle & responsabilités",
      content: [
        {
          p: <>Dans le cadre du projet UTC, j’ai participé avec le reste de l’équipe à l’élaboration du concept,
            notamment en produisant des maquettes et storyboards de cas d’usage de ChatTree. J’ai par ailleurs réalisé
            des entretiens utilisateur dans la phase de définition du projet, et des tests utilisateur avec sondages en
            fin de projet pour déterminer les forces et faiblesses du prototype web et par extension du projet ChatTree.
            En programmation, j’ai œuvré à la fois sur l’architecture serveur (système multi-agents, BDD), l’application
            cliente et la communication entre les deux <span className="it">via</span> websockets en tant que fullstack
            développeur.</>,
          media: {
            type: "image",
            src: "/images/portfolio/web/chattree/architecture.jpg",
          },
        },
        {
          p: <>Une fois à l'Université de Sherbrooke, j’ai repris ChatTree en tant que chef projet, afin de m’assurer
            que l’application conserve son identité et son originalité, indépendamment de ses mutations techniques ou
            visuelles. J’ai donc planifié le travail de l’équipe, ordonné les tâches et leur priorité et produit les
            documents de cadrage projet nécessaires à la production d’un nouveau prototype en quelques mois de travail.
            Enfin, j’ai aussi participé activement à la programmation Android de l’application, en particulier la
            migration des fonctionnalités <span className="it">core</span> de ChatTree.</>,
        },
      ],
    },
  ],
  creditsComplex: [
    {
      title: "Équipe UTC",
      credits: [
        {
          name: "Fabien",
          surname: "Boucaud",
          roles: "backend developer",
        },
        {
          name: "Agathe",
          surname: "Guillemot",
          roles: "frontend developer, UI designer",
        },
        {
          name: "Camille",
          surname: "Legeron",
          roles: "backend developer",
        },
        {
          name: "Mathilde",
          surname: "Longuet",
          roles: "backend developer",
        },
        {
          name: "Baptiste",
          surname: "Perraud",
          roles: "fullstack developer",
        },
      ],
    },
    {
      title: "Équipe Sherbrooke",
      credits: [
        {
          name: "Augustin",
          surname: "De Champs",
          roles: "data programmer",
        },
        {
          name: "Steve",
          surname: "Dias",
          roles: "frontend developer",
        },
        {
          name: "Désir",
          surname: "Pembele",
          roles: "frontend developer",
        },
        {
          name: "Baptiste",
          surname: "Perraud",
          roles: "fullstack developer",
        },
      ],
    },
  ],
  externalLinks: [],
  bgImg: "/images/portfolio/web/chattree/creation_thread.jpg",
};

export default chatTreeProject;