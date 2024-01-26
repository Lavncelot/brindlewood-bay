export const SCHEMA_EN = {
  rollFormula: "2d6",
  rollResults: {
    crit: {
      start: 12,
      end: null,
      label: "Critical Success!",
    },
    success: {
      start: 10,
      end: 11,
      label: "Success!",
    },
    partial: {
      start: 7,
      end: 9,
      label: "Partial success",
    },
    failure: {
      start: null,
      end: 6,
      label: "Miss...",
    },
  },
  actorTypes: {
    character: {
      stats: {
        vitality: {
          label: "Vitality",
          value: 0,
        },
        composure: {
          label: "Composure",
          value: 0,
        },
        reason: {
          label: "Reason",
          value: 0,
        },
        presence: {
          label: "Presence",
          value: 0,
        },
        sensitivity: {
          label: "Sensitivity",
          value: 0,
        },
      },
      attrTop: {
        style: {
          label: "Style",
          description: "Pick one or make up your own.",
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
        cozyactivity: {
          label: "Cozy Activity",
          description: "No two Mavens can have the same activity.",
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
        xp: {
          label: "XP Track",
          description:
            "For each marked End of Session question you answer “yes”, mark an XP.",
          customLabel: false,
          userLabel: false,
          type: "Xp",
          value: 0,
          max: 5,
          steps: [false, false, false, false, false],
        },
        conditions: {
          label: "Conditions",
          description: null,
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
      },
      attrLeft: {
        endofsession: {
          label: "End of Session",
          description:
            "The first is always marked. At the beginning of a session, mark two more (three total marked).",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label: "Did the Murder Mavens solve a mystery?",
              value: false,
            },
            1: {
              label:
                "Did you secretly undermine the authority of a local official?",
              value: false,
            },
            2: {
              label: "Did you share your wisdom with a young person?",
              value: false,
            },
            3: {
              label: "Did you share a memory of a late family member?",
              value: false,
            },
            4: {
              label: "Did you behave like a woman half your age?",
              value: false,
            },
            5: {
              label: "Did you dote on someone?",
              value: false,
            },
            6: {
              label: "Did you show someone that you’ve “still got it?”",
              value: false,
            },
          },
        },
        crownqueen: {
          label: "Crown of the Queen",
          description:
            "When you put on this Crown, mark and narrate any you wish.",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label: "A flashback of your fondest memory of your late partner.",
              value: false,
            },
            1: {
              label:
                "A flashback showing how you were an imperfect sister or daughter.",
              value: false,
            },
            2: {
              label: "A flashback showing how you were an imperfect mother.",
              value: false,
            },
            3: {
              label:
                "A flashback of your fondest memory with one of your children.",
              value: false,
            },
            4: {
              label:
                "A scene in the present day showing a private side of you very few get to see.",
              value: false,
            },
            5: {
              label: "A scene in the present day showing a burgeoning romance.",
              value: false,
            },
            6: {
              label:
                "A scene in the present day showing how you satisfy your physical desires.",
              value: false,
            },
          },
        },
        crownvoid: {
          label: "Crown of the Void",
          description: "When you put on this Crown, mark the first empty box.",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label:
                "A Shadow in the Garden. Hereafter, during cozy vignettes focused on you or Cozy Move scenes involving you, you must also narrate how dark entities subtly reveal themselves in the scene.",
              value: false,
            },
            1: {
              label:
                "The Chariot. Your Reason modifier is reduced by 1 and your Sensitivity modifier is increased by 1.",
              value: false,
            },
            2: {
              label:
                "The Pallid Mask. Hereafter, during any intimate conversation with another character, you must make a casual reference to death, dying, the afterlife, or the End of All Things—no matter the subject at-hand.",
              value: false,
            },
            3: {
              label:
                "The Pomegranate Kernel. You gain the condition “Obsessed with the Void.” It can never be removed.",
              value: false,
            },
            4: {
              label:
                "The Void. Retire your character in a way that shows how they are lost to the Void. ",
              value: false,
            },
          },
        },
        advancement: {
          label: "Advancements",
          description: null,
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label: "Increase an ability modifier by 1 (max 3).",
              value: false,
            },
            1: {
              label: "Increase an ability modifier by 1 (max 3).",
              value: false,
            },
            2: {
              label: "Choose an additional Maven move.",
              value: false,
            },
            3: {
              label: "Choose an additional Maven move.",
              value: false,
            },
            4: {
              label: "Unmark all the items in your Cozy Little Place.",
              value: false,
            },
          },
        },
      },
      moveTypes: {
        basic: {
          label: "Basic Moves",
          moves: [],
        },
        class: {
          label: "Maven Moves",
          moves: [],
        },
      },
      equipmentTypes: {
        cozyplace: {
          label: "A Cozy Little Place",
          moves: [],
        },
      },
    },
    npc: {
      attrLeft: {
        details: {
          label: "Descriptive Details",
          description: null,
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
        personality: {
          label: "Personality or Role",
          description: null,
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
        quote: {
          label: "Inspiring Quote",
          description: null,
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
      },
      moveTypes: {
        custom: {
          label: "Moves",
          moves: [],
        },
      },
    },
  },
};
