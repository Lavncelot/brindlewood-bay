export const SCHEMA_FR = {
  rollFormula: '2d6',
  rollResults: {
    crit: {
      start: 12,
      end: null,
      label: 'Succès critique !',
    },
    success: {
      start: 10,
      end: 11,
      label: 'Succès !',
    },
    partial: {
      start: 7,
      end: 9,
      label: 'Succès partiel',
    },
    failure: {
      start: null,
      end: 6,
      label: 'Échec...',
    },
  },
  actorTypes: {
    character: {
      stats: {
        vitality: {
          label: 'Vitalité',
          value: 0,
        },
        composure: {
          label: 'Calme',
          value: 0,
        },
        reason: {
          label: 'Raison',
          value: 0,
        },
        presence: {
          label: 'Présence',
          value: 0,
        },
        sensitivity: {
          label: 'Sensibilité',
          value: 0,
        },
      },
      attrTop: {
        style: {
          label: 'Style',
          description: 'Choisissez-en un ou inventez-en un autre.',
          customLabel: false,
          userLabel: false,
          type: 'LongText',
          value: '',
        },
        cozyactivity: {
          label: 'Passe-temps',
          description: 'Deux Maîtresses ne peuvent pas avoir le même passe-temps.',
          customLabel: false,
          userLabel: false,
          type: 'LongText',
          value: '',
        },
        xp: {
          label: 'Suivi d’expérience',
          description: 'Pour chaque réponse affirmative aux questions de Fin de session, remplis un secteur du disque.',
          customLabel: false,
          userLabel: false,
          type: 'Xp',
          value: 0,
          max: 5,
          steps: [false, false, false, false, false],
        },
        conditions: {
          label: 'Conditions',
          description: null,
          customLabel: false,
          userLabel: false,
          type: 'LongText',
          value: '',
        },
      },
      attrLeft: {
        endofsession: {
          label: 'Fin de session',
          description: 'La première ligne est toujours cochée. Au début de chaque session, coches-en deux autres (pour un total de trois par session).',
          customLabel: false,
          userLabel: false,
          type: 'ListMany',
          condition: false,
          options: {
            0: {
              label: 'Les Maîtresses du crime ont-elles résolu un Mystère ?',
              value: false,
            },
            1: {
              label: 'As-tu secrètement sapé l’autorité d’un officiel du coin ?',
              value: false,
            },
            2: {
              label: 'As-tu partagé ta sagesse avec une jeune personne ?',
              value: false,
            },
            3: {
              label: 'As-tu partagé un souvenir d’un défunt membre de ta famille ?',
              value: false,
            },
            4: {
              label: 'T’es-tu comportée comme une femme de la moitié de ton âge ?',
              value: false,
            },
            5: {
              label: 'As-tu été aux petits soins avec quelqu’un ?',
              value: false,
            },
            6: {
              label: 'As-tu montré à quelqu’un que « tu en étais encore capable » ?',
              value: false,
            },
          },
        },
        crownqueen: {
          label: 'Couronne de la Reine',
          description: 'Quand tu coiffes cette Couronne, coche l’entrée de ton choix et raconte ce qui t’est demandé.',
          customLabel: false,
          userLabel: false,
          type: 'ListMany',
          condition: false,
          options: {
            0: {
              label: 'Flashback. Ton souvenir le plus cher avec ton défunt partenaire.',
              value: false,
            },
            1: {
              label: 'Flashback. Comment tu as été une sœur ou une fille imparfaite.',
              value: false,
            },
            2: {
              label: 'Flashback. Comment tu as été une mère imparfaite.',
              value: false,
            },
            3: {
              label: 'Flashback. Ton souvenir le plus cher avec un de tes enfants.',
              value: false,
            },
            4: {
              label: 'Présent. Un aspect privé que très peu connaissent.',
              value: false,
            },
            5: {
              label: 'Présent. Une romance en plein essor.',
              value: false,
            },
            6: {
              label: 'Présent. Comment tu satisfais tes désirs physiques.',
              value: false,
            },
          },
        },
        crownvoid: {
          label: 'Couronne des Tréfonds',
          description: 'Quand tu coiffes cette Couronne, coche la première case vide.',
          customLabel: false,
          userLabel: false,
          type: 'ListMany',
          condition: false,
          options: {
            0: {
              label: 'Une Ombre dans le Jardin. Par la suite, lors des vignettes « Confort » centrées sur toi, ou lors des scènes de la manœuvre Partager auxquelles tu participes, raconte comment de sombres entités se révèlent peu à peu dans la scène.',
              value: false,
            },
            1: {
              label: 'Le Chariot. Ton score de Raison diminue de 1, ton score de Sensibilité augmente de 1.',
              value: false,
            },
            2: {
              label: 'Le Masque Blême. Par la suite, à chaque conversation intime avec un autre personnage, ajoute une référence fortuite à la mort, à la fin de la vie, à l’au-delà ou à la Fin de Toutes Choses – peu importe le sujet évoqué.',
              value: false,
            },
            3: {
              label: 'Les Graines du Grenadier. Tu reçois la condition « Obsédée par les Tréfonds ». Elle ne peut pas être retirée.',
              value: false,
            },
            4: {
              label: 'Les Tréfonds. Retire ton personnage en montrant comment elle s’est abandonnée aux Tréfonds.',
              value: false,
            },
          },
        },
        advancement: {
          label: 'Progressions',
          description: null,
          customLabel: false,
          userLabel: false,
          type: 'ListMany',
          condition: false,
          options: {
            0: {
              label: 'Augmente une caractéristique d’un point (maximum +3).',
              value: false,
            },
            1: {
              label: 'Augmente une caractéristique d’un point (maximum +3).',
              value: false,
            },
            2: {
              label: 'Choisis une manœuvre de Maîtresse supplémentaire.',
              value: false,
            },
            3: {
              label: 'Choisis une manœuvre de Maîtresse supplémentaire.',
              value: false,
            },
            4: {
              label: 'Décoche tous les objets cochés de ton Petit Nid Douillet.',
              value: false,
            },
          },
        },
      },
      moveTypes: {
        basic: {
          label: 'Manœuvres de base',
          moves: [],
        },
        class: {
          label: 'Manœuvres de Maîtresse',
          moves: [],
        },
      },
      equipmentTypes: {
        cozyplace: {
          label: 'Un Petit Nid Douillet',
          moves: [],
        },
      },
    },
    npc: {
      attrLeft: {
        details: {
          label: 'Détails descriptifs',
          description: null,
          customLabel: false,
          userLabel: false,
          type: 'LongText',
          value: '',
        },
        personality: {
          label: 'Personnalité ou rôle',
          description: null,
          customLabel: false,
          userLabel: false,
          type: 'LongText',
          value: '',
        },
        quote: {
          label: 'Citation d’inspiration',
          description: null,
          customLabel: false,
          userLabel: false,
          type: 'LongText',
          value: '',
        },
      },
      moveTypes: {
        custom: {
          label: 'Manœuvres',
          moves: [],
        },
      },
    },
  },
};
