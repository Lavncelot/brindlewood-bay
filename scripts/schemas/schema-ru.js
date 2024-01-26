export const SCHEMA_RU = {
  rollFormula: "2d6",
  rollResults: {
    crit: {
      start: 12,
      end: null,
      label: "Критический успех!",
    },
    success: {
      start: 10,
      end: 11,
      label: "Успех!",
    },
    partial: {
      start: 7,
      end: 9,
      label: "Успех с ценой",
    },
    failure: {
      start: null,
      end: 6,
      label: "Провал...",
    },
  },
  actorTypes: {
    character: {
      stats: {
        vitality: {
          label: "Живость",
          value: 0,
        },
        composure: {
          label: "Выдержка",
          value: 0,
        },
        reason: {
          label: "Мышление",
          value: 0,
        },
        presence: {
          label: "Манеры",
          value: 0,
        },
        sensitivity: {
          label: "Чуткость",
          value: 0,
        },
      },
      attrTop: {
        style: {
          label: "Стиль",
          description: "Выберите из списка или придумайте свой",
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
        cozyactivity: {
          label: "Уютное хобби",
          description: "Хобби тетушек не должны повторяться.",
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
        xp: {
          label: "Опыт",
          description:
            "Когда вы утвердительно отвечаете на вопросы конца встречи, получите опыт.",
          customLabel: false,
          userLabel: false,
          type: "Xp",
          value: 0,
          max: 5,
          steps: [false, false, false, false, false],
        },
        conditions: {
          label: "Состояния",
          description: null,
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
      },
      attrLeft: {
        endofsession: {
          label: "Конец встречи",
          description:
            "Первый пункт всегда отмечен. В начале встречи отметьте еще два (в сумме должно быть три отметки).",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label: "Тетушкам удалось раскрыть преступление?",
              value: false,
            },
            1: {
              label:
                "Удалось ли вам тайно подорвать авторитет местных властей или служителей порядка?",
              value: false,
            },
            2: {
              label: "Вы делились мудростью с юным поколением?",
              value: false,
            },
            3: {
              label: "Вы делились воспоминаниями об ушедшем родственнике?",
              value: false,
            },
            4: {
              label: "Вы вели себя как женщина вдвое моложе себя?",
              value: false,
            },
            5: {
              label: "Вы с кем-нибудь нянчились?",
              value: false,
            },
            6: {
              label: "Вы показали кому-нибудь, что ещё ого-го?”",
              value: false,
            },
          },
        },
        crownqueen: {
          label: "Корона королевы",
          description:
            "Надев эту Корону, можете отметить любой вариант и описать подходящую сцену.",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label:
                "Воспоминание о любимом моменте, проведенном с умершим партнером.",
              value: false,
            },
            1: {
              label:
                "Воспоминание о том,как вы были неидеальной дочерью или сестрой.",
              value: false,
            },
            2: {
              label: "Воспоминание о том,как вы были неидеальной матерью.",
              value: false,
            },
            3: {
              label: "Воспоминание о любимом моменте, проведенном с детьми",
              value: false,
            },
            4: {
              label:
                "Сцена из настоящего, в которой раскрывается та сторона вашей жизни, которую вы редко кому-то показываете.",
              value: false,
            },
            5: {
              label:
                "Сцена из настоящего, в которой у вас зарождается новый роман.",
              value: false,
            },
            6: {
              label:
                "Сцена из настоящего, в которой вы удовлетворяете свои физические потребности.",
              value: false,
            },
          },
        },
        crownvoid: {
          label: "Корона пустоты",
          description: "Отмечайте сверху вниз.",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label:
                "Тень в саду. Теперь во время уютных зарисовок или занятий уютным хобби вы должны описывать как некие зловещие сущности незримо являют свое присутствие.",
              value: false,
            },
            1: {
              label:
                "Колесница. Ваше мышление уменьшается на 1, а чуткость увеличивается на 1.",
              value: false,
            },
            2: {
              label:
                "Бледная маска. Теперь,когда вы говорите с другими персонажами, вы, независимо от темы разговора, должны вскользь упоминать о смерти, загробной жизни или Конце Всего Сущего.",
              value: false,
            },
            3: {
              label:
                "Зернышко граната. Вы получаете состояние одержимость пустотой. От него нельзя избавиться.",
              value: false,
            },
            4: {
              label:
                "Пустота. Ваш персонаж покидает игру. Опишите сцену,в которой нам станет ясно, что он теперь принадлежит Пустоте.",
              value: false,
            },
          },
        },
        advancement: {
          label: "Улучшения",
          description: "Каждое улучшение можно получить только один раз",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label: "Увеличьте характеристику на 1 (макс. +3)",
              value: false,
            },
            1: {
              label: "Увеличьте характеристику на 1 (макс. +3)",
              value: false,
            },
            2: {
              label: "Выберите дополнительный ход тетушки",
              value: false,
            },
            3: {
              label: "Выберите дополнительный ход тетушки",
              value: false,
            },
            4: {
              label:
                "Снимите все отметки с предметов в вашем маленьком уютном гнездышке",
              value: false,
            },
          },
        },
      },
      moveTypes: {
        basic: {
          label: "Основные ходы",
          moves: [],
        },
        class: {
          label: "Ходы тетушек",
          moves: [],
        },
      },
      equipmentTypes: {
        cozyplace: {
          label: "Маленькое уютное гнездышко",
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
