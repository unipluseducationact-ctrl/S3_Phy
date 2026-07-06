/** F.3 Heat — Final exam question bank */
export const QUIZ_SECTIONS = [
  {
    "id": "thermometer",
    "label": "Thermometer",
    "labelZh": "溫度計"
  },
  {
    "id": "heat-internal-energy",
    "label": "Heat and internal energy",
    "labelZh": "熱與內能"
  },
  {
    "id": "change-of-state",
    "label": "Change of state",
    "labelZh": "物態變化"
  },
  {
    "id": "heat-transfer",
    "label": "Heat transfer",
    "labelZh": "熱傳入"
  }
];

export const QUIZ_ITEMS = [
  {
    "id": "heat-mc-2425-q01",
    "section": "thermometer",
    "difficulty": "Foundation",
    "stem": "An unmarked thermometer is placed in pure melting ice and then in steam over pure boiling water. The lengths of the liquid column are 3 cm and 28 cm respectively. What is the length of the liquid column when the liquid is kept at 37 °C?",
    "options": [
      {
        "key": "A",
        "text": "11.25 cm"
      },
      {
        "key": "B",
        "text": "12.25 cm"
      },
      {
        "key": "C",
        "text": "13.25 cm"
      },
      {
        "key": "D",
        "text": "14.25 cm"
      }
    ],
    "answer": "B",
    "hint": "28−3 100−0 = 𝐿−3 37−0 𝐿= 12.25 𝑐𝑚"
  },
  {
    "id": "heat-mc-2425-q02",
    "section": "thermometer",
    "difficulty": "Foundation",
    "stem": "A resistance thermometer has a resistance of 85 Ω in melting ice and a resistance of 160 Ω in boiling water.\nWhat is its resistance at 40 °C? Assume that the resistance of the thermometer increases linearly with the temperature.",
    "options": [
      {
        "key": "A",
        "text": "110 W"
      },
      {
        "key": "B",
        "text": "115 W"
      },
      {
        "key": "C",
        "text": "120 W"
      },
      {
        "key": "D",
        "text": "125 W"
      }
    ],
    "answer": "B",
    "hint": "160−85 100−0 = 𝑅−85 40−0 𝑅= 115 Ω"
  },
  {
    "id": "heat-mc-2425-q03",
    "section": "thermometer",
    "difficulty": "Foundation",
    "stem": "A faulty thermometer has a wrong calibration. It reads 5 °C and 85 °C when the actual temperatures are 0 °C and 100 °C respectively. If the faulty thermometer reads 45 °C, what is the real temperature?",
    "options": [
      {
        "key": "A",
        "text": "40 °C"
      },
      {
        "key": "B",
        "text": "50 °C"
      },
      {
        "key": "C",
        "text": "55 °C"
      },
      {
        "key": "D",
        "text": "60 °C"
      }
    ],
    "answer": "B",
    "hint": "A faulty thermometer has a wrong calibration."
  },
  {
    "id": "heat-mc-2425-q04",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Which of the following pairs of objects have different specific heat capacities?",
    "options": [
      {
        "key": "A",
        "text": "1 kg of water and 2 kg of water"
      },
      {
        "key": "B",
        "text": "1 kg of liquid naphthalene and 1 kg of solid naphthalene"
      },
      {
        "key": "C",
        "text": "1 kg of oil in a glass container and 1 kg of oil in metal container"
      },
      {
        "key": "D",
        "text": "1 kg of water at 15 °C and 1 kg of water at 30 °C"
      }
    ],
    "answer": "B",
    "hint": "Which of the following pairs of objects have different specific heat capacities?",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q4.png",
      "alt": "Which of the following pairs of objects have different specific heat capacities?",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q05",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A 0.2-kg aluminium block is heated by a flame. The block is then quickly put into a polystyrene cup containing 1 kg of water at 20 °C. If the final temperature of the water is 60 °C, find the temperature of the block just before it is put into the water.\n(Specific heat capacity of aluminium = 900 J kg⁻¹ °C⁻¹, specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹)",
    "options": [
      {
        "key": "A",
        "text": "467 °C"
      },
      {
        "key": "B",
        "text": "512 °C"
      },
      {
        "key": "C",
        "text": "933 °C"
      },
      {
        "key": "D",
        "text": "993 °C"
      }
    ],
    "answer": "A",
    "hint": "A 0.2-kg aluminium block is heated by a flame."
  },
  {
    "id": "heat-mc-2425-q06",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "To prepare Gongfu tea, 0.2 kg of hot water at 70 °C is poured into a teapot of mass 0.25 kg at 20 °C.\nCalculate the final temperature of the tea. (Neglect the heat capacity of the tea leaves inside the tea pot.\nThe heat capacity of the teapot is 200 J °C⁻¹ and the specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹.)",
    "options": [
      {
        "key": "A",
        "text": "60.4 °C"
      },
      {
        "key": "B",
        "text": "61.3 °C"
      },
      {
        "key": "C",
        "text": "65.0 °C"
      },
      {
        "key": "D",
        "text": "67.2 °C"
      }
    ],
    "answer": "A",
    "hint": "0.2(4200)(70 −𝑇) = 200(𝑇−20) 58800 −840𝑇= 200𝑇−4000 1040𝑇= 62800 𝑇= 60.4 °C"
  },
  {
    "id": "heat-mc-2425-q07",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Hot tea of 200 mL at 90°C is poured into a cup at 25°C. The final temperature of the cup and the tea is\n80°C. Neglecting the heat loss to the surroundings, what is the heat capacity of the cup? Take the specific heat capacity and the density of the tea to be 4000 J kg⁻¹ °C⁻¹ and 1 kg L⁻¹.",
    "options": [
      {
        "key": "A",
        "text": "145 J °C⁻¹"
      },
      {
        "key": "B",
        "text": "153 J °C⁻¹"
      },
      {
        "key": "C",
        "text": "727 J °C⁻¹"
      },
      {
        "key": "D",
        "text": "764 J °C⁻¹"
      }
    ],
    "answer": "A",
    "hint": "0.2(1)(4000)(90 −80) = 𝐶𝑐𝑢𝑝(80 −25) 𝐶𝑐𝑢𝑝= 145 𝐽°C⁻¹"
  },
  {
    "id": "heat-mc-2425-q08",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Equal amount of energy is supplied to each of the following substances. Which of them will have the smallest rise in temperature?",
    "options": [
      {
        "key": "A",
        "text": "P"
      },
      {
        "key": "B",
        "text": "Q"
      },
      {
        "key": "C",
        "text": "R"
      },
      {
        "key": "D",
        "text": "S"
      }
    ],
    "answer": "C",
    "hint": "𝐸= (1)(4200)(∆𝑇𝑃) , ∆𝑇𝑃= 𝐸 𝐸= (2)(2300)(∆𝑇𝑄) , ∆𝑇𝑄= 𝐸 𝐸= (3)(2200)(∆𝑇𝑅) , ∆𝑇𝑅= 𝐸 𝐸= (4)(9…",
    "optionsLayout": "table",
    "optionTable": {
      "headers": [
        "Substance",
        "Mass / kg",
        "Specific heat capacity / J kg⁻¹ °C⁻¹"
      ],
      "rows": [
        {
          "key": "A",
          "cells": [
            "P",
            "1",
            "4200"
          ]
        },
        {
          "key": "B",
          "cells": [
            "Q",
            "2",
            "2300"
          ]
        },
        {
          "key": "C",
          "cells": [
            "R",
            "3",
            "2200"
          ]
        },
        {
          "key": "D",
          "cells": [
            "S",
            "4",
            "900"
          ]
        }
      ]
    }
  },
  {
    "id": "heat-mc-2425-q09",
    "section": "heat-internal-energy",
    "difficulty": "Standard",
    "stem": "The masses of two metal blocks A and B are in the ratio of 1 : 3. The specific heat capacities of A and B are in the ratio of 2 : 5. Therefore, the heat capacities of blocks A and B are in ratio of",
    "options": [
      {
        "key": "A",
        "text": "2 : 5"
      },
      {
        "key": "B",
        "text": "2 : 15"
      },
      {
        "key": "C",
        "text": "3 : 8"
      },
      {
        "key": "D",
        "text": "5 : 6"
      }
    ],
    "answer": "B",
    "hint": "𝐶𝐴= 𝑚𝐴𝑐𝐴= (1)(2) = 2 𝐶𝐵= 𝑚𝐵𝑐𝐵= (3)(5) = 15 𝐶𝐴∶𝐶𝐵= 2 ∶15"
  },
  {
    "id": "heat-mc-2425-q10",
    "section": "heat-internal-energy",
    "difficulty": "Standard",
    "stem": "Two beakers A and B contain 1 kg and 1.5 kg of liquid X respectively. A student uses an immersion heater to heat the liquid in beaker A for 3 minutes and records a temperature rise of 33 °C. Suppose the liquid in beaker B is heated using the same immersion heater for 5 minutes, estimate the temperature rise.",
    "options": [
      {
        "key": "A",
        "text": "22.0 °C"
      },
      {
        "key": "B",
        "text": "29.7 °C"
      },
      {
        "key": "C",
        "text": "36.7 °C"
      },
      {
        "key": "D",
        "text": "55.0 °C"
      }
    ],
    "answer": "C",
    "hint": "𝑃(3)(60) = 1(𝑐𝑋)(33) , 𝑃= 11𝑐𝑋 ( 11𝑐𝑋 60 ) (5)(60) = 1.5(𝑐𝑋)(∆𝑇) , ∆𝑇= 36.7°C",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q10.png",
      "alt": "Two beakers A and B contain 1 kg and 1.5 kg of liquid X respectively. A student uses an immersion h…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q11",
    "section": "heat-internal-energy",
    "difficulty": "Standard",
    "stem": "An immersion heater takes 4 minutes to raise water of 2 kg by 10°C. If the same heater is used to raise 4 kg of water by 5°C, how long will it take?",
    "options": [
      {
        "key": "A",
        "text": "1 minute"
      },
      {
        "key": "B",
        "text": "2 minute"
      },
      {
        "key": "C",
        "text": "4 minute"
      },
      {
        "key": "D",
        "text": "8 minute"
      }
    ],
    "answer": "C",
    "hint": "Pt = mc△T P(4x60) = (2)(4200)(10) P=350 W Pt = mc△T (350)t = (4)(4200)(5) t = 240 s = 4 m…"
  },
  {
    "id": "heat-mc-2425-q12",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Liquids X, Y and Z of equal mass are heated separately by three identical heaters. The graph below shows the variation of the temperatures of the liquids with time. Let cX, cY and cZ be the specific heat capacities of\nX, Y and Z respectively.\nWhich of the following relations is correct?",
    "options": [
      {
        "key": "A",
        "text": "cX = cY > cZ"
      },
      {
        "key": "B",
        "text": "cX > cY > cZ"
      },
      {
        "key": "C",
        "text": "cX > cY = cZ"
      },
      {
        "key": "D",
        "text": "cX < cY = cZ"
      }
    ],
    "answer": "A",
    "hint": "Liquids X, Y and Z of equal mass are heated separately by three identical heaters.",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q14.png",
      "alt": "Liquids X, Y and Z of equal mass are heated separately by three identical heaters. The graph below …",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q13",
    "section": "heat-internal-energy",
    "difficulty": "Standard",
    "stem": "Energy is transferred to two copper blocks X and Y at the same rate. The graph below shows how the temperatures of the blocks change with time.\nThe ratio of the heat capacity of block X to that of block Y is",
    "options": [
      {
        "key": "A",
        "text": "4 : 1"
      },
      {
        "key": "B",
        "text": "2 : 1"
      },
      {
        "key": "C",
        "text": "1 : 2"
      },
      {
        "key": "D",
        "text": "1 : 4"
      }
    ],
    "answer": "C",
    "hint": "𝑃𝑡= 𝐶𝑋(75 −25) , 𝐶𝑋= 𝑃𝑡 𝑃𝑡= 𝐶𝑌(50 −25) , 𝐶𝑌= 𝑃𝑡 𝐶𝑋∶𝐶𝑌= 1 ∶2",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q15.png",
      "alt": "Energy is transferred to two copper blocks X and Y at the same rate. The graph below shows how the …",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q14",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "A student mixes 5 kg of water at 2 °C with 2 kg water at 18 °C. The final temperature of the mixture is\n6 °C. It is known that the specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹. Which of the following statements is correct?",
    "options": [
      {
        "key": "A",
        "text": "The water absorbs 8400 J of energy from the surroundings."
      },
      {
        "key": "B",
        "text": "The water absorbs 16 800 J of energy from the surroundings."
      },
      {
        "key": "C",
        "text": "The water losses 8400 J of energy to the surroundings."
      },
      {
        "key": "D",
        "text": "The water losses 16 800 J of energy to the surroundings."
      }
    ],
    "answer": "D",
    "hint": "Energy loss from the water at 18°C= 2(4200)(18 −6) = 100800 𝐽 Energy gain by water at 2°C…",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q14.png",
      "alt": "A student mixes 5 kg of water at 2 °C with 2 kg water at 18 °C. The final temperature of the mixtur…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q15",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "An ice cube of mass 0.3 kg is heated until it just melts completely. The total energy supplied is 106.5 kJ.\nWhat is the initial temperature of the ice cube? (The specific latent heat of fusion of water is 3.34 × 10⁵ J kg⁻¹. The specific heat capacity of ice is 2100 J kg⁻¹ °C⁻¹)",
    "options": [
      {
        "key": "A",
        "text": "10 °C"
      },
      {
        "key": "B",
        "text": "3 °C"
      },
      {
        "key": "C",
        "text": "−3 °C"
      },
      {
        "key": "D",
        "text": "−10 °C"
      }
    ],
    "answer": "D",
    "hint": "𝐸= 𝑚𝑐∆𝑇+ 𝑚𝑙𝑓 106.5(1000) = 0.3(2100)(0 −𝑇) + 0.3(3.34 × 10⁵) 𝑇= −10°C",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q15.png",
      "alt": "An ice cube of mass 0.3 kg is heated until it just melts completely. The total energy supplied is 1…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q16",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "500 g ice of an unknown temperature is heated with a 600 W heater. All the ice turns into 0°C water in\n5 minutes. Assume that all the energy given out by the heater is absorbed by the ice, find the original temperature of the ice. Given that the specific heat capacity of ice is 2100 J kg⁻¹°C⁻¹ and the specific latent heat of fusion of ice is 3.34× 10⁵ J kg⁻¹.",
    "options": [
      {
        "key": "A",
        "text": "0 °C"
      },
      {
        "key": "B",
        "text": "−4.2 °C"
      },
      {
        "key": "C",
        "text": "−12.4 °C"
      },
      {
        "key": "D",
        "text": "−16.2 °C"
      }
    ],
    "answer": "C",
    "hint": "0.5(2100)(0 −𝑇) + 3.34 × 10⁵(0.5) = 600(5)(60) 𝑇= −12.4°C"
  },
  {
    "id": "heat-mc-2425-q17",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "Melting ice of mass m is added to a glass of coke of mass 3m. The final temperature of the mixture is 4°C.\nAssume that no energy is lost to the surroundings. Find the initial temperature of the coke.\nSpecific heat capacity of coke = 5300 J kg⁻¹ °C⁻¹\nSpecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nSpecific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹",
    "options": [
      {
        "key": "A",
        "text": "21.0 °C"
      },
      {
        "key": "B",
        "text": "22.1 °C"
      },
      {
        "key": "C",
        "text": "25.0 °C"
      },
      {
        "key": "D",
        "text": "26.1 °C"
      }
    ],
    "answer": "A",
    "hint": "Melting ice of mass m is added to a glass of coke of mass 3m."
  },
  {
    "id": "heat-mc-2425-q18",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Ice at −5 °C is added to 0.5 kg of hot water at 98 °C. Assume that no energy is lost to the surroundings.\nIf the final temperature of the mixture is 5 °C, what is the mass of ice used?\nSpecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nSpecific heat capacity of ice = 2100 J kg⁻¹ °C⁻¹\nSpecific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹",
    "options": [
      {
        "key": "A",
        "text": "0.47 kg"
      },
      {
        "key": "B",
        "text": "0.53 kg"
      },
      {
        "key": "C",
        "text": "0.57 kg"
      },
      {
        "key": "D",
        "text": "0.62 kg"
      }
    ],
    "answer": "A",
    "hint": "Ice at −5 °C is added to 0.5 kg of hot water at 98 °C."
  },
  {
    "id": "heat-mc-2425-q19",
    "section": "change-of-state",
    "difficulty": "Standard",
    "stem": "A microwave oven is used to heat up 0.2 kg of water at 20 °C. Energy is transferred to the water at a constant rate of 800 W. How long does it take to boil away all the water in the glass?\n(The specific latent heat of vaporization of water is 2.26 × 10⁶ J kg⁻¹. The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹.)",
    "options": [
      {
        "key": "A",
        "text": "84 s"
      },
      {
        "key": "B",
        "text": "565 s"
      },
      {
        "key": "C",
        "text": "649 s"
      },
      {
        "key": "D",
        "text": "724 s"
      }
    ],
    "answer": "C",
    "hint": "800𝑡= 0.2(4200)(100 −20) + (0.2)(2260)(1000) 𝑡= 649 𝑠"
  },
  {
    "id": "heat-mc-2425-q20",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "In an experiment, a beaker of liquid X is heated to boil using a 150 W heater. In 200 s, 0.02 kg of liquid X has boiled away. Suppose 20% of the energy has been lost to the surroundings, what is the specific latent heat of vaporization of liquid X?",
    "options": [
      {
        "key": "A",
        "text": "3.34 × 10⁵ J kg⁻¹"
      },
      {
        "key": "B",
        "text": "1.2 × 10⁶ J kg⁻¹"
      },
      {
        "key": "C",
        "text": "1.5 × 10⁶ J kg⁻¹"
      },
      {
        "key": "D",
        "text": "2.26 × 10⁶ J kg⁻¹"
      }
    ],
    "answer": "B",
    "hint": "150(200)(0.8) = 0.02𝑙𝑣 𝑙𝑣= 1.2 × 10⁶ 𝐽𝑘𝑔−1"
  },
  {
    "id": "heat-mc-2425-q21",
    "section": "change-of-state",
    "difficulty": "Standard",
    "stem": "Ken boils some water with a kettle. The water is heated from 15 °C to 100 °C in 10 min. If he forgets to shut it down, how long will it take to vaporize the water completely?\n(Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nSpecific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹)",
    "options": [
      {
        "key": "A",
        "text": "About 50 min"
      },
      {
        "key": "B",
        "text": "About 60 min"
      },
      {
        "key": "C",
        "text": "About 70 min"
      },
      {
        "key": "D",
        "text": "Cannot be determined since the mass of water is not given"
      }
    ],
    "answer": "A",
    "hint": "Ken boils some water with a kettle."
  },
  {
    "id": "heat-mc-2425-q22",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "A student sets up the apparatus as shown to determine the specific latent heat of vaporization of water.\nThe kilowatt-hour meter measures the energy supplied to the heater. The electronic balance measures the mass of water in the beaker.\nThe following results are obtained:\nEnergy supplied to boil the water = 0.013 kW h\nMass of water boiled away = 0.02 kg\nFind the value of the specific latent heat of vaporization of water.",
    "options": [
      {
        "key": "A",
        "text": "2.26 × 10⁶ J kg⁻¹"
      },
      {
        "key": "B",
        "text": "2.34 × 10⁶ J kg⁻¹"
      },
      {
        "key": "C",
        "text": "2.42 × 10⁶ J kg⁻¹"
      },
      {
        "key": "D",
        "text": "2.48 × 10⁶ J kg⁻¹"
      }
    ],
    "answer": "B",
    "hint": "𝐸= 𝑚𝑙𝑣 0.013(1000)(3600) = 0.02𝑙𝑣 𝑙𝑣= 2.34 × 10⁶ 𝐽 𝑘𝑔−1",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q25.png",
      "alt": "A student sets up the apparatus as shown to determine the specific latent heat of vaporization of w…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q23",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "A liquid of mass 0.5 kg is heated in a polystyrene cup with a 1000 W heater. The graph below shows how the temperature of the liquid varies with time.\nWhat is the latent heat of vaporization of the liquid?",
    "options": [
      {
        "key": "A",
        "text": "360 000 J"
      },
      {
        "key": "B",
        "text": "600 000 J"
      },
      {
        "key": "C",
        "text": "720 000 J"
      },
      {
        "key": "D",
        "text": "cannot be determined"
      }
    ],
    "answer": "A",
    "hint": "𝑃𝑡= 𝑚𝑙𝑣 1000(6 × 60) = 0.5𝑙𝑣 𝑙𝑣= 720000𝐽 𝑘𝑔−1",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q26.png",
      "alt": "A liquid of mass 0.5 kg is heated in a polystyrene cup with a 1000 W heater. The graph below shows …",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q24",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Two solid substances P and Q of equal mass are heated by two identical heaters until they boil. The temperatures of each substance at different times are recorded, as shown in the graph below.\nWhich of the following statements is not correct?",
    "options": [
      {
        "key": "A",
        "text": "The specific heat capacity of solid P is larger than that of solid Q."
      },
      {
        "key": "B",
        "text": "The specific heat capacity of liquid P is larger than that of liquid Q."
      },
      {
        "key": "C",
        "text": "The specific latent heat of fusion of P is larger than that of Q."
      },
      {
        "key": "D",
        "text": "The boiling point of P is higher than that of Q."
      }
    ],
    "answer": "A",
    "hint": "Two solid substances P and Q of equal mass are heated by two identical heaters until they…",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q27.png",
        "alt": "Two solid substances P and Q of equal mass are heated by two identical heaters until they boil. The…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q24.png",
        "alt": "Two solid substances P and Q of equal mass are heated by two identical heaters until they boil. The…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q25",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Energy is transferred at equal rate to two substances X and Y of the same mass. The graph below shows their temperature variations as they change from solids to liquids.\nWhich of the following statements are correct?\n(1) The melting point of substance X is higher than that of substance Y.\n(2) The specific heat capacity of solid X is smaller than that of solid Y.\n(3) The specific latent heat of fusion of substance X is smaller than that of substance Y.",
    "options": [
      {
        "key": "A",
        "text": "(1) and (2) only"
      },
      {
        "key": "B",
        "text": "(1) and (3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "C",
    "hint": "(1) is incorrect, 𝑋 melt at a lower temperature in the graph.",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q28.png",
        "alt": "Energy is transferred at equal rate to two substances X and Y of the same mass. The graph below sho…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q25.png",
        "alt": "Energy is transferred at equal rate to two substances X and Y of the same mass. The graph below sho…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q26",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Liquid X and Y of the same mass and temperature are put into a refrigerator to cool down. The graph below shows the variation of the temperatures of the liquids with time. Which of the following statements is/are correct?\n(1) The freezing point of X is higher than that of Y.\n(2) The specific heat capacity of liquid Y is lower than that of liquid X.\n(3) The specific latent heat of fusion of X is higher than that of Y.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(3) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "C",
    "hint": "(1) is correct, X change state at a higher temperature than Y.",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q29.png",
        "alt": "Liquid X and Y of the same mass and temperature are put into a refrigerator to cool down. The graph…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q26.png",
        "alt": "Liquid X and Y of the same mass and temperature are put into a refrigerator to cool down. The graph…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q27",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Solid X is heated by a 1000 W heater inside a beaker as shown in the figure below. The solid melts and vaporizes gradually. The graph below shows the variation of the reading of the electronic balance with time (the total mass of the empty beaker and the heater has already been eliminated). Which of the following statements is/are correct?\n(1) The solid X starts to melt at t1 and boil at t2.\n(2) The specific heat capacity of solid X can be calculated with P(t₁ − 0) / [m₁(T − T₀)]\n(3) The specific latent heat of vaporization of X can be calculated with lᵥ = P(t₂ − t₁) / (m₁ − m₂)",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(3) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "B",
    "hint": "(1) is incorrect, between 𝑡1 and 𝑡2, the balance reading decrease, substance is leaving t…",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q30.png",
        "alt": "Solid X is heated by a 1000 W heater inside a beaker as shown in the figure below. The solid melts …",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q27.png",
        "alt": "Solid X is heated by a 1000 W heater inside a beaker as shown in the figure below. The solid melts …",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q28",
    "section": "change-of-state",
    "difficulty": "Standard",
    "stem": "The following table shows the specific heat capacity and specific latent heat of fusion of water and copper.\nArrange the following in ascending order.\nE1 = energy required to melt 1 kg of ice at 0 °C\nE2 = energy required to raise the temperature of 1 kg of water by 1 °C\nE3 = energy required to melt 1 kg of copper at its melting point\nE4 = energy required to raise the temperature of 1 kg of copper by 1 °C",
    "options": [
      {
        "key": "A",
        "text": "E1 < E2 < E3 < E4"
      },
      {
        "key": "B",
        "text": "E2 < E4 < E3 < E1"
      },
      {
        "key": "C",
        "text": "E3 < E1 < E4 < E2"
      },
      {
        "key": "D",
        "text": "E4 < E2 < E3 < E1"
      }
    ],
    "answer": "A",
    "hint": "The following table shows the specific heat capacity and specific latent heat of fusion o…",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q31.png",
        "alt": "The following table shows the specific heat capacity and specific latent heat of fusion of water an…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q28.png",
        "alt": "The following table shows the specific heat capacity and specific latent heat of fusion of water an…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q29",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Steam at 100 °C is injected into a melting ice block of the same mass. Assume that no energy is lost to the surroundings. What is the state of the mixture?\n(Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nSpecific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹\nSpecific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹)",
    "options": [
      {
        "key": "A",
        "text": "A mixture of ice and water at 0 °C"
      },
      {
        "key": "B",
        "text": "Water at a temperature below 50 °C"
      },
      {
        "key": "C",
        "text": "Water at a temperature higher than 50 °C"
      },
      {
        "key": "D",
        "text": "A mixture of steam and water at 100 °C"
      }
    ],
    "answer": "A",
    "hint": "Steam at 100 °C is injected into a melting ice block of the same mass.",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q29.png",
      "alt": "Steam at 100 °C is injected into a melting ice block of the same mass. Assume that no energy is los…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q30",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Which of the following statements are correct?\n(1) Latent heat is the energy absorbed (or released) by a substance when it changes its state without a change of temperature.\n(2) When ice melts into water at 0 °C, the energy gained by the water molecules is called the latent heat of fusion of water.\n(3) When water changes to steam at 100 °C, the energy gained by the water molecules is called the latent heat of vaporization of water.",
    "options": [
      {
        "key": "A",
        "text": "(1) and (2) only"
      },
      {
        "key": "B",
        "text": "(1) and (3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "D",
    "hint": "Which of the following statements are correct?\n(1) Latent heat is the energy absorbed (or…",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q30.png",
      "alt": "Which of the following statements are correct? (1) Latent heat is the energy absorbed (or released)…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q31",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "A beaker of ice is heated from 0 °C to steam of 100 °C. Which of the following statements is not correct?\n(1) The molecules absorb energy when the ice changes to water.\n(2) As the water temperature increases, the molecules absorb energy.\n(3) The molecules lose energy when the water changes to steam.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "None of the above."
      }
    ],
    "answer": "B",
    "hint": "(1) is correct, the energy was absorbed as latent heat of fusion.",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q31.png",
      "alt": "A beaker of ice is heated from 0 °C to steam of 100 °C. Which of the following statements is not co…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q32",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "When an object undergoes fusion, which of the following statements is/are correct?\n(1) The average intermolecular distances between the molecules increases.\n(2) The internal energy of the object increases.\n(3) The average kinetic energy of the molecules decreases because some of the molecules have escaped.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(3) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "C",
    "hint": "When an object undergoes fusion, which of the following statements is/are correct?\n(1) Th…"
  },
  {
    "id": "heat-mc-2425-q33",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "When water vapor condenses, which of the following statements is/are correct?\n(1) The average intermolecular distances between the water molecules decreases.\n(2) The internal energy of the water decreases.\n(3) The average potential energy between the water molecules decreases.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(3) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "D",
    "hint": "(1) is correct, since the substance change from solid to liquid, the space between molecu…"
  },
  {
    "id": "heat-mc-2425-q34",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "When ice at 0 °C is mixed with water at 0 °C, which of the following is correct?",
    "options": [
      {
        "key": "A",
        "text": "Energy is transferred from ice to water."
      },
      {
        "key": "B",
        "text": "Energy is transferred from water to ice."
      },
      {
        "key": "C",
        "text": "There will be no net heat exchange between ice and water."
      },
      {
        "key": "D",
        "text": "The temperature of ice and water will become different."
      }
    ],
    "answer": "C",
    "hint": "Since there are no temperature between the ice and water, there will not be any energy tr…"
  },
  {
    "id": "heat-mc-2425-q35",
    "section": "change-of-state",
    "difficulty": "Standard",
    "stem": "If there is no heat flow between two bodies when they are in contact, then the two bodies must have the same",
    "options": [
      {
        "key": "A",
        "text": "temperature"
      },
      {
        "key": "B",
        "text": "internal energy"
      },
      {
        "key": "C",
        "text": "specific heat capacity"
      },
      {
        "key": "D",
        "text": "specific latent heat of vaporization"
      }
    ],
    "answer": "A",
    "hint": "B: Internal energy may differ as different substance may have different potential energy…"
  },
  {
    "id": "heat-mc-2425-q36",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Which of the following are the differences between boiling and evaporation?\n(1) Boiling can only take place at boiling point while evaporation can take place at any temperature.\n(2) Evaporation can only take place on the liquid surface while boiling can take place on the liquid surface as well as within the liquid.\n(3) A liquid absorbs heat from the surroundings during boiling and release heat during evaporation.",
    "options": [
      {
        "key": "A",
        "text": "(1) and (2) only"
      },
      {
        "key": "B",
        "text": "(1) and (3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "A",
    "hint": "(1) is correct, evaporation is the process of water change into gas state below boiling p…"
  },
  {
    "id": "heat-mc-2425-q37",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Which of the following is not the difference between boiling and evaporation?",
    "options": [
      {
        "key": "A",
        "text": "Latent heat of vaporization is needed in boiling, but not in evaporation."
      },
      {
        "key": "B",
        "text": "Boiling occurs at a definite temperature but evaporation does not."
      },
      {
        "key": "C",
        "text": "Boiling takes place within the whole liquid, but evaporation occurs at the surface of liquid."
      },
      {
        "key": "D",
        "text": "Bubbles are formed violently in boiling, but no bubble is formed in evaporation."
      }
    ],
    "answer": "A",
    "hint": "Which of the following is not the difference between boiling and evaporation?\nA\nLatent he…"
  },
  {
    "id": "heat-mc-2425-q38",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Which of the following cannot increase the rate of evaporation of water?",
    "options": [
      {
        "key": "A",
        "text": "Increase the surface area of water"
      },
      {
        "key": "B",
        "text": "Speed up the movement of air"
      },
      {
        "key": "C",
        "text": "Decrease the temperature of water"
      },
      {
        "key": "D",
        "text": "Decrease the humidity of air"
      }
    ],
    "answer": "A",
    "hint": "Which of the following cannot increase the rate of evaporation of water?\nA\nIncrease the s…"
  },
  {
    "id": "heat-mc-2425-q39",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Which of the following statements about heat is/are true?\n(1) Heat is used to describe the total energy stored in a body.\n(2) Heat is used to describe the energy transferred from one body to another as a result of a temperature difference between them.\n(3) A body’s internal energy is increased when it is heated.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(2) only"
      },
      {
        "key": "C",
        "text": "(1) and (3) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "D",
    "hint": "Which of the following statements about heat is/are true?\n(1) Heat is used to describe th…"
  },
  {
    "id": "heat-mc-2425-q40",
    "section": "thermometer",
    "difficulty": "Foundation",
    "stem": "The specific heat capacity of aluminium is measured by the set-up as shown in the diagram below.\nWhich of the following cannot reduce experimental error?",
    "options": [
      {
        "key": "A",
        "text": "Add some oil to the hole for placing the thermometer and heater."
      },
      {
        "key": "B",
        "text": "Place a polystyrene tile under the block."
      },
      {
        "key": "C",
        "text": "Read the final temperature a few minutes after switching off the heater."
      },
      {
        "key": "D",
        "text": "Wrap the block with cotton wool."
      }
    ],
    "answer": "C",
    "hint": "(1): Total internal energy (P.E.+K.E.) is used to describe the total energy in a body.",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q43.png",
      "alt": "The specific heat capacity of aluminium is measured by the set-up as shown in the diagram below. Wh…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q41",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "The above apparatus is used to find the specific heat capacity of a liquid. Which of the following can improve the accuracy of the experiment?\n(1) Taking the final temperature of the liquid immediately after switching off the power supply.\n(2) Covering the cup with a lid.\n(3) Stirring the liquid throughout the experiment.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(3) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "D",
    "hint": "(1): Measuring the temperature immediately without mixing the liquid allow uneven distrib…",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q44.png",
      "alt": "The above apparatus is used to find the specific heat capacity of a liquid. Which of the following …",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q42",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Which of the following is/are the precaution(s) for giving an accurate result?\n(1) Use ice of temperature well below 0 °C.\n(2) Insert the heating part of each immersion heater into the ice completely.\n(3) Cover the funnels with lids.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(2) only"
      },
      {
        "key": "C",
        "text": "(1) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "A",
    "hint": "Which of the following is/are the precaution(s) for giving an accurate result?\n(1) Use ic…",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q45.png",
      "alt": "Which of the following is/are the precaution(s) for giving an accurate result? (1) Use ice of tempe…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q43",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "The diagram below shows the apparatus used to find the specific latent heat of vaporization of water.\nWhich of the following factors will make the result obtained smaller than the true value?\n(1) Some energy supplied by the heater is lost to the surroundings.\n(2) Some water splashes out of the cup as it boils.\n(3) Some steam condenses and drips back into the cup.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(2) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "A",
    "hint": "The diagram below shows the apparatus used to find the specific latent heat of vaporizati…",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q46.png",
        "alt": "The diagram below shows the apparatus used to find the specific latent heat of vaporization of wate…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q43.png",
        "alt": "The diagram below shows the apparatus used to find the specific latent heat of vaporization of wate…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q44",
    "section": "heat-transfer",
    "difficulty": "Foundation",
    "stem": "Which of the following statements is/are correct?\n(1) No radiation is emitted from hot gases because there is no free electron in gases.\n(2) The density distribution of the heated fluid determines whether there is convection.\n(3) When conduction occurs, atoms can only vibrate in their original positions.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(3) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "D",
    "hint": "Which of the following statements is/are correct?\n(1) No radiation is emitted from hot ga…",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q44.png",
      "alt": "Which of the following statements is/are correct? (1) No radiation is emitted from hot gases becaus…",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q45",
    "section": "heat-transfer",
    "difficulty": "Standard",
    "stem": "A pot of water is heated over a gas stove as shown. Energy transfers from the stove to the water mainly by",
    "options": [
      {
        "key": "A",
        "text": "conduction"
      },
      {
        "key": "B",
        "text": "radiation"
      },
      {
        "key": "C",
        "text": "conduction and convection"
      },
      {
        "key": "D",
        "text": "convection and radiation"
      }
    ],
    "answer": "C",
    "hint": "A pot of water is heated over a gas stove as shown.",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q48.png",
        "alt": "A pot of water is heated over a gas stove as shown. Energy transfers from the stove to the water ma…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q45.png",
        "alt": "A pot of water is heated over a gas stove as shown. Energy transfers from the stove to the water ma…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q46",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "The figure below shows 3 identical metal cans containing the same amount of hot water at the same temperature. The cans are covered by a black paper, a shiny aluminium foil and a green paper respectively.\nWhich of the following graphs best shows how the temperature of the water varies with time?",
    "options": [
      {
        "key": "A",
        "text": "Graph A"
      },
      {
        "key": "B",
        "text": "Graph B"
      },
      {
        "key": "C",
        "text": "Graph C"
      },
      {
        "key": "D",
        "text": "Graph D"
      }
    ],
    "answer": "C",
    "hint": "The figure below shows 3 identical metal cans containing the same amount of hot water at…",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q49-1.png",
        "alt": "The figure below shows 3 identical metal cans containing the same amount of hot water at the same t…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/3)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q49-2.png",
        "alt": "The figure below shows 3 identical metal cans containing the same amount of hot water at the same t…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/3)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q46.png",
        "alt": "The figure below shows 3 identical metal cans containing the same amount of hot water at the same t…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (3/3)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q47",
    "section": "change-of-state",
    "difficulty": "Standard",
    "stem": "The figure below shows a paper hot pot heated by a flame.\nThe paper pot does not catch fire because",
    "options": [
      {
        "key": "A",
        "text": "the temperature of the flame is lower than the ignition temperature of the paper."
      },
      {
        "key": "B",
        "text": "paper is a good insulator of heat."
      },
      {
        "key": "C",
        "text": "the temperature of the paper pot can only rises to the boiling point of water which"
      },
      {
        "key": "D",
        "text": "the metal gauze holding the paper pot is a good insulator of heat."
      }
    ],
    "answer": "C",
    "hint": "The figure below shows a paper hot pot heated by a flame.\nThe paper pot does not catch fi…",
    "image": {
      "src": "./assets/f3-heat-mc-2425-q50.png",
      "alt": "The figure below shows a paper hot pot heated by a flame. The paper pot does not catch fire because",
      "caption": "Fig · Imported: F3 Heat MC 2024-25"
    }
  },
  {
    "id": "heat-mc-2425-q48",
    "section": "heat-transfer",
    "difficulty": "Foundation",
    "stem": "Which of the following statements about a greenhouse are correct?\n(1) All radiation entering a greenhouse is trapped inside.\n(2) A greenhouse can reduce heat loss caused by convection.\n(3) The temperature inside a greenhouse is higher than that outside.",
    "options": [
      {
        "key": "A",
        "text": "(1) and (2) only"
      },
      {
        "key": "B",
        "text": "(1) and (3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "A",
    "hint": "Which of the following statements about a greenhouse are correct?\n(1) All radiation enter…",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q51.png",
        "alt": "Which of the following statements about a greenhouse are correct? (1) All radiation entering a gree…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q48.png",
        "alt": "Which of the following statements about a greenhouse are correct? (1) All radiation entering a gree…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q49",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Which of the following methods can keep ice for a longer time in a metal container?\n(1) Paint the wall of the container black.\n(2) Wrap the container with a layer of cotton.\n(3) Put the container on a polystyrene tile.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(2) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "A",
    "hint": "Which of the following methods can keep ice for a longer time in a metal container?\n(1) P…",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q49-1.png",
        "alt": "Which of the following methods can keep ice for a longer time in a metal container? (1) Paint the w…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q49-2.png",
        "alt": "Which of the following methods can keep ice for a longer time in a metal container? (1) Paint the w…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc-2425-q50",
    "section": "heat-transfer",
    "difficulty": "Foundation",
    "stem": "The following figure shows the structure of a thermos flask.\nWhich of the components of the thermos flask is best at:\npreventing heat loss by conduction preventing heat loss by convection preventing heat loss by radiation",
    "options": [
      {
        "key": "A",
        "text": "vacuum between the double glass walls vacuum between the double glass walls vacuum between the double glass walls"
      },
      {
        "key": "B",
        "text": "vacuum between the double glass walls plastic stopper silvery glass walls"
      },
      {
        "key": "C",
        "text": "plastic stopper insulated support silvery glass walls"
      },
      {
        "key": "D",
        "text": "insulated support vacuum between the double glass walls plastic stopper"
      }
    ],
    "answer": "B",
    "hint": "The following figure shows the structure of a thermos flask.\nWhich of the components of t…",
    "images": [
      {
        "src": "./assets/f3-heat-mc-2425-q53.png",
        "alt": "The following figure shows the structure of a thermos flask. Which of the components of the thermos…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc-2425-q50.png",
        "alt": "The following figure shows the structure of a thermos flask. Which of the components of the thermos…",
        "caption": "Fig · Imported: F3 Heat MC 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc3-2425-q01",
    "section": "heat-internal-energy",
    "difficulty": "Standard",
    "stem": "A piece of meat has a heat capacity of 1800 J °C⁻¹. It is heated in a microwave oven for 1 minute and its temperature rises from −20 °C to −5 °C without any change of state. Suppose the oven has efficiency of 60%, estimate its input power.",
    "options": [
      {
        "key": "A",
        "text": "450 W"
      },
      {
        "key": "B",
        "text": "750 W"
      },
      {
        "key": "C",
        "text": "900 W"
      },
      {
        "key": "D",
        "text": "45 000 W"
      }
    ],
    "answer": "B",
    "hint": "𝑃𝑡= 𝑚𝑐∆𝑇 𝑃ሺ60ሻሺ0.6ሻ= 1800(−5 −ሺ−20ሻ) 𝑃= 750𝑊"
  },
  {
    "id": "heat-mc3-2425-q02",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Eunice mixes 260 g of tea at 70 °C with 40 g of milk at 4 °C. What is the final temperature of the mixture? Assume there is no energy loss. The specific heat capacities of tea and milk are respectively\n4100 J kg⁻¹ °C⁻¹ and 3930 J kg⁻¹ °C⁻¹.",
    "options": [
      {
        "key": "A",
        "text": "37.0 °C"
      },
      {
        "key": "B",
        "text": "37.7 °C"
      },
      {
        "key": "C",
        "text": "61.2 °C"
      },
      {
        "key": "D",
        "text": "61.5 °C"
      }
    ],
    "answer": "A",
    "hint": "Eunice mixes 260 g of tea at 70 °C with 40 g of milk at 4 °C."
  },
  {
    "id": "heat-mc3-2425-q03",
    "section": "heat-internal-energy",
    "difficulty": "Standard",
    "stem": "To prepare cup noodles, 400 g hot water at 95 °C is poured into the paper cup that contains 120 g noodles. Assume the room temperature is 25 °C. Ignore the heat loss to the surroundings. Estimate the final temperature of the mixture.\nGiven: specific heat capacity of the noodles = 1800 J kg⁻¹ °C⁻¹ specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹",
    "options": [
      {
        "key": "A",
        "text": "66.2 °C"
      },
      {
        "key": "B",
        "text": "74.0 °C"
      },
      {
        "key": "C",
        "text": "78.8 °C"
      },
      {
        "key": "D",
        "text": "87.0 °C"
      }
    ],
    "answer": "D",
    "hint": "𝐻𝑒𝑎𝑡 𝑙𝑜𝑠𝑠= 𝐻𝑒𝑎𝑡 𝑔𝑎𝑖𝑛 ሺ0.4ሻሺ4200ሻሺ95 −𝑇ሻ= ሺ0.12ሻሺ1800ሻሺ𝑇−25ሻ 𝑇= 87.0 °C"
  },
  {
    "id": "heat-mc3-2425-q04",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "If 300 g of coffee at 80 °C and 200 g of milk at 18 °C are added into a cup at 18 °C, what is the final temperature of the mixture? The specific heat capacity of coffee is 4000 J kg⁻¹ °C⁻¹, the specific heat capacity of milk is 3800 J kg⁻¹ °C⁻¹, and the heat capacity of the cup is 400 J °C⁻¹.",
    "options": [
      {
        "key": "A",
        "text": "56.0 °C"
      },
      {
        "key": "B",
        "text": "49.5 °C"
      },
      {
        "key": "C",
        "text": "43.6 °C"
      },
      {
        "key": "D",
        "text": "39.2 °C"
      }
    ],
    "answer": "A",
    "hint": "If 300 g of coffee at 80 °C and 200 g of milk at 18 °C are added into a cup at 18 °C, wha…"
  },
  {
    "id": "heat-mc3-2425-q05",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "Eunice adds some water at 98 °C into a cup of tea at 25 °C. The mass of the tea is 200 g. How much water should be added so that the temperature of the tea becomes 60 °C? Assume there is no heat lost to the surroundings.\nGiven: Specific heat capacity of tea = 4100 J kg⁻¹ °C⁻¹\nHeat capacity of cup = 100 J °C⁻¹",
    "options": [
      {
        "key": "A",
        "text": "180 g"
      },
      {
        "key": "B",
        "text": "189 g"
      },
      {
        "key": "C",
        "text": "202 g"
      },
      {
        "key": "D",
        "text": "212 g"
      }
    ],
    "answer": "C",
    "hint": "Eunice adds some water at 98 °C into a cup of tea at 25 °C."
  },
  {
    "id": "heat-mc3-2425-q06",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Two insulated metal blocks X and Y are made of different materials with unknown mass. They are heated separately by two identical electric heaters at the same power. The graph below shows how the temperatures of X and Y change with time. Which of the following statements must be correct?",
    "options": [
      {
        "key": "A",
        "text": "The specific heat capacity of Y is greater than that of X."
      },
      {
        "key": "B",
        "text": "The specific heat capacity of X is greater than that of Y."
      },
      {
        "key": "C",
        "text": "The heat capacity of Y is greater than that of X."
      },
      {
        "key": "D",
        "text": "The heat capacity of X is greater than that of Y."
      }
    ],
    "answer": "A",
    "hint": "Two insulated metal blocks X and Y are made of different materials with unknown mass.",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q13.png",
      "alt": "Two insulated metal blocks X and Y are made of different materials with unknown mass. They are heat…",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q07",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Some water of 2 kg at 20 °C is poured into a beaker of melting ice. The mixture has a temperature of 0 °C. Which of the following statements is/are correct? The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹ and the specific latent heat of fusion of ice is 3.34 × 10⁵ J kg⁻¹. Neglect any energy gained from or lost to the surroundings.\n(1)\nThe mass of melting ice must be larger than 2 kg.\n(2)\nFor the melting ice, the average kinetic energy due to random motion of the molecules remains unchanged.\n(3)\nThe total internal energy of the ice and the water remains unchanged.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(2) only"
      },
      {
        "key": "C",
        "text": "(1) and (3) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "D",
    "hint": "(1): Energy required to cool down the water to 0°C= 2×4200×20 = 168000J Let m kg be the m…"
  },
  {
    "id": "heat-mc3-2425-q08",
    "section": "change-of-state",
    "difficulty": "Standard",
    "stem": "A beaker of water, initially at 25 °C, is heated up by an immersion heater. It starts to boil in 2 minutes. How much longer does it take to boil the beaker of water completely?\nGiven:\nspecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹ specific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹",
    "options": [
      {
        "key": "A",
        "text": "10 minutes"
      },
      {
        "key": "B",
        "text": "14 minutes"
      },
      {
        "key": "C",
        "text": "18 minutes"
      },
      {
        "key": "D",
        "text": "It cannot be determined because the power of the heater and the mass of water are both not known."
      }
    ],
    "answer": "B",
    "hint": "𝑃𝑡= 𝑚𝑐∆𝑇 𝑃ሺ2ሻሺ60ሻ= 𝑚ሺ4200ሻሺ100 −25ሻ 𝑃= 2625𝑚 𝑃𝑡= 𝑚𝑙𝑣 ሺ2625𝑚ሻሺ𝑡ሻ= 𝑚ሺ2.26 × 10⁶ሻ 𝑡= 861𝑠 𝑡=…",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q8.png",
      "alt": "A beaker of water, initially at 25 °C, is heated up by an immersion heater. It starts to boil in 2 …",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q09",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A glass of water is heated by a heater from 25 °C to 100 °C in 3 minutes. How much more time is required to boil all water away?",
    "options": [
      {
        "key": "A",
        "text": "14.0 minutes"
      },
      {
        "key": "B",
        "text": "16.1 minutes"
      },
      {
        "key": "C",
        "text": "18.8 minutes"
      },
      {
        "key": "D",
        "text": "21.5 minutes"
      }
    ],
    "answer": "A",
    "hint": "A glass of water is heated by a heater from 25 °C to 100 °C in 3 minutes."
  },
  {
    "id": "heat-mc3-2425-q10",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Steam at 100 °C is mixed with ice at 0 °C. The mass of the ice is double that of the steam. What is the final temperature of the mixture?",
    "options": [
      {
        "key": "A",
        "text": "0 °C"
      },
      {
        "key": "B",
        "text": "89.5 °C"
      },
      {
        "key": "C",
        "text": "100 °C"
      },
      {
        "key": "D",
        "text": "160 °C"
      }
    ],
    "answer": "A",
    "hint": "Steam at 100 °C is mixed with ice at 0 °C.",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q10.png",
      "alt": "Steam at 100 °C is mixed with ice at 0 °C. The mass of the ice is double that of the steam. What is…",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q11",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "In an insulated container, 50 g of steam at 100 °C is injected uniformly on a glass plate. What is the final temperature of the glass plate? The mass of glass plate is 1.5 kg and its initial temperature is 25 °C.\nGiven:   Specific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹\n        Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nSpecific heat capacity of glass = 840 J kg⁻¹ °C⁻¹",
    "options": [
      {
        "key": "A",
        "text": "135 °C"
      },
      {
        "key": "B",
        "text": "115 °C"
      },
      {
        "key": "C",
        "text": "100 °C"
      },
      {
        "key": "D",
        "text": "89.7 °C"
      }
    ],
    "answer": "C",
    "hint": "Energy released to change 100 °C Steam to 100 °C water: ΔE1 = m1 lᵥ = 0.05 × ( 2.26 × 10⁶ )…",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q11.png",
      "alt": "In an insulated container, 50 g of steam at 100 °C is injected uniformly on a glass plate. What is …",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q12",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "A student adds some ice cubes having an initial temperature of −20 °C to water of mass 80 g at 30 °C. When the mixture reaches thermal equilibrium, 30 g of ice cubes is left. Find the initial mass of the ice cubes.\nNeglect the heat loss to the surroundings.\nGiven:  specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹ specific heat capacity of ice = 2100 J kg⁻¹ °C⁻¹ specific latent heat of ice = 334 000 J kg⁻¹",
    "options": [
      {
        "key": "A",
        "text": "0.0186 kg"
      },
      {
        "key": "B",
        "text": "0.0434 kg"
      },
      {
        "key": "C",
        "text": "0.0486 kg"
      },
      {
        "key": "D",
        "text": "0.0535 kg"
      }
    ],
    "answer": "D",
    "hint": "At equilibrium, the temperature is 00𝐶 All ice gains heat to reach 00𝐶, but only (m-0.03)…",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q12.png",
      "alt": "A student adds some ice cubes having an initial temperature of −20 °C to water of mass 80 g at 30 °…",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q13",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "Ice cubes of total mass 0.05 kg at 0 °C are added to water of mass 0.2 kg at room temperature of 30 °C. The final temperature of the mixture is 11 °C. How much energy does the mixture gain from the surroundings?\nGiven: specific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹ specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹",
    "options": [
      {
        "key": "A",
        "text": "2200 J"
      },
      {
        "key": "B",
        "text": "3050 J"
      },
      {
        "key": "C",
        "text": "5350 J"
      },
      {
        "key": "D",
        "text": "6190 J"
      }
    ],
    "answer": "A",
    "hint": "Ice cubes of total mass 0.05 kg at 0 °C are added to water of mass 0.2 kg at room tempera…",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q13.png",
      "alt": "Ice cubes of total mass 0.05 kg at 0 °C are added to water of mass 0.2 kg at room temperature of 30…",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q14",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "A student mixes 0.39 kg of water and 0.01 kg of ice, both at 0 °C, in a container. Then, she transfers a metal sphere of 0.1 kg at 89.3 °C into the container and stirs the mixture. If the mixture reaches equilibrium at 2 °C, what is the energy released by the metal sphere? Neglect the heat loss to the surroundings.\nGiven:\nspecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹ specific heat capacity of copper = 385 J kg⁻¹ °C⁻¹ specific latent heat of ice = 334 000 J kg⁻¹",
    "options": [
      {
        "key": "A",
        "text": "83.8 J"
      },
      {
        "key": "B",
        "text": "419 J"
      },
      {
        "key": "C",
        "text": "3360 J"
      },
      {
        "key": "D",
        "text": "6700 J"
      }
    ],
    "answer": "D",
    "hint": "𝐸𝑛𝑒𝑟𝑔𝑦 𝑟𝑒𝑙𝑒𝑎𝑠𝑒𝑑= 𝐸𝑛𝑒𝑟𝑔𝑦 𝑎𝑏𝑠𝑜𝑟𝑏𝑒𝑑 𝐸= ሺ0.39 + 0.01ሻሺ2ሻሺ4200ሻ+ ሺ0.01ሻሺ334000ሻ 𝐸= 6700 𝐽"
  },
  {
    "id": "heat-mc3-2425-q15",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Three tanks of water X, Y and Z of different temperatures and heat capacities are poured into a big well-insulated container.\nwater in X water in Y water in Z heat capacity / kJ\n°C⁻¹ temperature / °C\nWhat is the final temperature of water after mixing? Ignore the heat capacity of the big container.",
    "options": [
      {
        "key": "A",
        "text": "10 °C"
      },
      {
        "key": "B",
        "text": "16.7 °C"
      },
      {
        "key": "C",
        "text": "20 °C"
      },
      {
        "key": "D",
        "text": "33.3 °C"
      }
    ],
    "answer": "A",
    "hint": "Since there is more water in 10°C than in 30°C, the final temperature should be between 10°C…"
  },
  {
    "id": "heat-mc3-2425-q16",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Metal block A is in contact with another metal block B, and they finally reach thermal equilibrium.\nBlock A experiences a temperature rise of 10 °C and block B experiences a temperature drop of 5 °C.\nAssume there is no heat loss to the surroundings. Which of the following is correct?",
    "options": [
      {
        "key": "A",
        "text": "The initial temperature of A is higher than that of B."
      },
      {
        "key": "B",
        "text": "The energy gained by A is larger than the energy lost by B."
      },
      {
        "key": "C",
        "text": "The average kinetic energy of A increases during the heat exchange process."
      },
      {
        "key": "D",
        "text": "The internal energy of B remains the same during the heat exchange process"
      }
    ],
    "answer": "C",
    "hint": "A: As metal block A experiences a temperature rise, it is gaining energy."
  },
  {
    "id": "heat-mc3-2425-q17",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "A liquid X at 90 °C is mixed with a liquid Y at 30 °C. The final mixture has a temperature of 70 °C.\nNeglecting any heat exchange with the surroundings, which of the following statements is correct?",
    "options": [
      {
        "key": "A",
        "text": "At the final temperature, X and Y has the same internal energy."
      },
      {
        "key": "B",
        "text": "The heat lost by X is less than the heat gained by Y."
      },
      {
        "key": "C",
        "text": "X has a higher specific heat capacity than Y."
      },
      {
        "key": "D",
        "text": "X has a higher heat capacity than Y."
      }
    ],
    "answer": "D",
    "hint": "Without heat loss, by the conservation of energy Heat gain by liquid Y = Heat loss by liq…"
  },
  {
    "id": "heat-mc3-2425-q18",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Winnie pours 100 mL of tea at 50 °C into a cup at room temperature (25 °C). Heat loss to the room is\nNOT negligible. Which of the following statements are correct?\n(1)\nThe energy lost by the tea is greater than the energy gained by the cup.\n(2)\nThe average kinetic energy of the molecules in the tea decreases.\n(3)\nThe average potential energy of the molecules in the tea remains unchanged.",
    "options": [
      {
        "key": "A",
        "text": "(1) and (2) only"
      },
      {
        "key": "B",
        "text": "(1) and (3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "A",
    "hint": "Winnie pours 100 mL of tea at 50 °C into a cup at room temperature (25 °C)."
  },
  {
    "id": "heat-mc3-2425-q19",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "John uses an immersion heater of constant power to raise the temperature of liquid 𝑋 to its boiling point. He keeps heating when the liquid is boiling. Which of the following statements during boiling is/are correct?\n(1) The internal energy of the liquid is increasing.\n(2) The average kinetic energy of the liquid molecules remains unchanged.\n(3) The total kinetic energy of the liquid molecules is decreasing.",
    "options": [
      {
        "key": "A",
        "text": "(2) only"
      },
      {
        "key": "B",
        "text": "(1) and (2) only"
      },
      {
        "key": "C",
        "text": "(1) and (3) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "A",
    "hint": "John uses an immersion heater of constant power to raise the temperature of liquid 𝑋 to i…",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q19.png",
      "alt": "John uses an immersion heater of constant power to raise the temperature of liquid 𝑋 to its boilin…",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q20",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Two solid substances, X and Y, are heated with the same power. Their temperatures T change with time t in a way as shown below. Which of the following can be deduced from the graph?\n(1) X has a higher melting point than Y.\n(2) In the liquid state, X has a smaller heat capacity than Y.\n(3) The specific latent heat of fusion of X is smaller than that of Y.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(1) and (3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "A",
    "hint": "Two solid substances, X and Y, are heated with the same power.",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q32.png",
      "alt": "Two solid substances, X and Y, are heated with the same power. Their temperatures T change with tim…",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q21",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Substances X and Y of the same mass are heated at the same rate. The graphs below show their temperature–time graphs. Initially, they are in solid state. Which of the following physical quantities of substance X are higher than that of substance Y according to the graph?",
    "options": [
      {
        "key": "A",
        "text": "The specific latent heat of fusion and the specific heat capacity in solid state"
      },
      {
        "key": "B",
        "text": "The specific latent heat of fusion and the specific heat capacity in liquid state"
      },
      {
        "key": "C",
        "text": "The melting point and the specific heat capacity in solid state"
      },
      {
        "key": "D",
        "text": "The melting point and the specific heat capacity in liquid state"
      }
    ],
    "answer": "D",
    "hint": "The length of horizontal line in Y is longer than that in X.",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q33.png",
      "alt": "Substances X and Y of the same mass are heated at the same rate. The graphs below show their temper…",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q22",
    "section": "change-of-state",
    "difficulty": "Foundation",
    "stem": "Two substances P and Q, both in solid form initially, are heated up by two heaters of equal power. The figure shows how their temperatures vary with time.\nWhich of the following statements about P and Q must be correct?\n(1) P has a lower melting point than Q.\n(2) P has a larger specific latent heat of fusion than Q.\n(3) The solid form of P has a smaller heat capacity than that of Q.",
    "options": [
      {
        "key": "A",
        "text": "(1) and (2) only"
      },
      {
        "key": "B",
        "text": "(1) and (3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "B",
    "hint": "The stable temperature means the substance is changing its state.",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q34.png",
      "alt": "Two substances P and Q, both in solid form initially, are heated up by two heaters of equal power. …",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q23",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Which of the following statements about evaporation are correct?\n(1)\nA liquid releases energy to the environment for evaporation to take place.\n(2)\nEvaporation produces a cooling effect.\n(3)\nDuring evaporation, the internal energy of the remaining liquid decreases.",
    "options": [
      {
        "key": "A",
        "text": "(1) and (2) only"
      },
      {
        "key": "B",
        "text": "(1) and (3) only"
      },
      {
        "key": "C",
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "A",
    "hint": "Which of the following statements about evaporation are correct?\n(1)\nA liquid releases en…"
  },
  {
    "id": "heat-mc3-2425-q24",
    "section": "change-of-state",
    "difficulty": "Standard",
    "stem": "The figure below shows the experimental set-up for determining the specific latent heat of vaporization of water lᵥ.\nHow is the calculated value of lᵥ be affected by each of the following experimental errors?\n(1) Condensed vapour dripping back into the beaker\n(2) Water splashing out of the beaker\n(1)\n(2)",
    "options": [
      {
        "key": "A",
        "text": "decrease"
      },
      {
        "key": "B",
        "text": "decrease"
      },
      {
        "key": "C",
        "text": "increase"
      },
      {
        "key": "D",
        "text": "increase"
      }
    ],
    "answer": "C",
    "hint": "increase When water vapour condenses back to the beaker, the measured value of the change…",
    "image": {
      "src": "./assets/f3-heat-mc3-2425-q36.png",
      "alt": "The figure below shows the experimental set-up for determining the specific latent heat of vaporiza…",
      "caption": "Fig · Imported: F3 Heat MC 3 2024-25"
    }
  },
  {
    "id": "heat-mc3-2425-q25",
    "section": "heat-internal-energy",
    "difficulty": "Foundation",
    "stem": "Which of the following is/are the precaution(s) for giving an accurate result?\n(1) Use ice of temperature well below 0 °C.\n(2) Insert the heating part of each immersion heater into the ice completely.\n(3) Cover the funnels with lids.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(2) only"
      },
      {
        "key": "C",
        "text": "(1) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "A",
    "hint": "Which of the following is/are the precaution(s) for giving an accurate result?\n(1) Use ic…",
    "images": [
      {
        "src": "./assets/f3-heat-mc3-2425-q37.png",
        "alt": "Which of the following is/are the precaution(s) for giving an accurate result? (1) Use ice of tempe…",
        "caption": "Fig · Imported: F3 Heat MC 3 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc3-2425-q25.png",
        "alt": "Which of the following is/are the precaution(s) for giving an accurate result? (1) Use ice of tempe…",
        "caption": "Fig · Imported: F3 Heat MC 3 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-mc3-2425-q26",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "The above apparatus is used to find the specific heat capacity of a liquid. Which of the following can improve the accuracy of the experiment?\n(1) Taking the final temperature of the liquid immediately after switching off the power supply.\n(2) Covering the cup with a lid.\n(3) Stirring the liquid throughout the experiment.",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(3) only"
      },
      {
        "key": "C",
        "text": "(1) and (2) only"
      },
      {
        "key": "D",
        "text": "(2) and (3) only"
      }
    ],
    "answer": "D",
    "hint": "(1): Measuring the temperature immediately without mixing the liquid allow uneven distrib…",
    "images": [
      {
        "src": "./assets/f3-heat-mc3-2425-q38.png",
        "alt": "The above apparatus is used to find the specific heat capacity of a liquid. Which of the following …",
        "caption": "Fig · Imported: F3 Heat MC 3 2024-25 (1/2)"
      },
      {
        "src": "./assets/f3-heat-mc3-2425-q26.png",
        "alt": "The above apparatus is used to find the specific heat capacity of a liquid. Which of the following …",
        "caption": "Fig · Imported: F3 Heat MC 3 2024-25 (2/2)"
      }
    ]
  },
  {
    "id": "heat-lq-2425-q2b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A hot water system provides warm water to the users of a clubhouse for shower. It has an electric heater which, on average, supplies 10 000 kg of water at 50 °C per day. Suppose the temperature of water supplied to the heater is 15 °C. The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹.\n\n(b) How much is paid per day for the electricity used by the heater? (Given that electricity costs $0.9 per kW h)",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "$0.9"
            ]
          }
        ]
      }
    ],
    "hint": "How much is paid per day for the electricity used by the heater? (Given that electricity…"
  },
  {
    "id": "heat-lq-2425-q4a",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "An iron wok of mass 2 kg containing cooking oil of mass 1 kg is heated by a stove. It takes 2 minutes to raise the temperature of the wok and the oil from 20 °C to 180 °C.\n\n(a) Find the energy absorbed by the wok and the oil in the 2 minutes.\n(Heat capacity of iron = 920 J °C⁻¹, specific heat capacity of cooking oil = 2000 J kg⁻¹ °C⁻¹)",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "467000J",
              "467000 J"
            ]
          }
        ]
      }
    ],
    "hint": "Use Q = CΔT for the wok and Q = mcΔT for the oil, then add the two energies."
  },
  {
    "id": "heat-lq-2425-q6",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A piece of aluminium of mass 0.1 kg, is heated to 280 °C and then lowered into a glass beaker of mass\n0.2 kg , containing 0.6 kg of water at 18 °C. The water temperature finally reaches 27 °C. Find the specific heat capacity of aluminium.\nGiven:\nThe specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nThe specific heat capacity of glass = 800 J kg⁻¹ °C⁻¹",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "The specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹",
              "4200 J",
              "4200J"
            ]
          }
        ]
      }
    ],
    "hint": "A piece of aluminium of mass 0.1 kg, is heated to 280 °C and then lowered into a glass bea…"
  },
  {
    "id": "heat-lq-2425-q5b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A hot water system provides warm water for shower. The system has an electric heater of power 16 kW. The temperature of the cold water flowing into the system is 15 °C. The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹.\n\n(b) Suppose you want to take a shower with water at 42 °C. This can be done by mixing the hot water in",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "Suppose you want to take a shower with water at 42 °C. This can be done by mixing the hot water in",
              "42 °C",
              "42°C"
            ]
          }
        ]
      }
    ],
    "hint": "Suppose you want to take a shower with water at 42 °C.",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q5.png",
      "alt": "A hot water system provides warm water for shower. The system has an electric heater of power 16 kW…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q5(b)"
    }
  },
  {
    "id": "heat-lq-2425-q7a",
    "format": "fill",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "A metal block is first immersed in boiling water for several minutes as shown in figure 2.1. The block is transferred to a cup of cold water as shown in figure 2.2. After a while, after a while, the temperature of the water is measured.\n\n(a) The results of the experiment are as follow:\nMass of metal block = 0.8 kg\nMass of water in container Y = 0.5 kg\nInitial temperature of water in container Y = 25 °C\nFinal temperature of water in container Y = 35 °C\nSpecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nFind the specific heat capacity of the metal using the results.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹.)",
              "4200 J",
              "4200J"
            ]
          }
        ]
      }
    ],
    "hint": "The results of the experiment are as follow:\nMass of metal block = 0.8 kg\nMass of water i…",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q7.png",
      "alt": "A metal block is first immersed in boiling water for several minutes as shown in figure 2.1. The bl…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q7(a)"
    }
  },
  {
    "id": "heat-lq-2425-q7ai",
    "format": "fill",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "A metal block is first immersed in boiling water for several minutes as shown in figure 2.1. The block is transferred to a cup of cold water as shown in figure 2.2. After a while, after a while, the temperature of the water is measured.\n\n(a) some hot water is still adhered to the metal block when the block is transferred to the cold water.\nsome energy is lost to the surroundings when the metal block is transferred to the cold water.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹.)",
              "4200 J",
              "4200J"
            ]
          }
        ]
      }
    ],
    "hint": "The results of the experiment are as follow:\nMass of metal block = 0.8 kg\nMass of water i…",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q7.png",
      "alt": "A metal block is first immersed in boiling water for several minutes as shown in figure 2.1. The bl…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q7(a)(i)"
    }
  },
  {
    "id": "heat-lq-2425-q8aii",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Standard",
    "stem": "Eileen is going to cook some vegetable. If she fries the vegetable, she will use 20 g of olive oil and heat the oil to about 200 °C before putting the vegetable into the wok. If she boils the vegetable, she will boil 1 kg of water and then add 10 g of olive oil before adding the vegetable to the water. The output power of her stove is 2 000 W. (Given: Specific heat capacity of olive oil = 1970 J kg⁻¹ °C⁻¹ Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹ )\n\n(a) If 300 kJ is required to cook the vegetable, how long will it take for the whole cooking process?",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "If 300 kJ is required to cook the vegetable, how long will it take for the whole cooking process?",
              "300 kJ",
              "300kJ"
            ]
          }
        ]
      }
    ],
    "hint": "If 300 kJ is required to cook the vegetable, how long will it take for the whole cooking…"
  },
  {
    "id": "heat-lq-2425-q9b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "In the following experiment, a liquid of mass 0.3 kg is heated in the polystyrene cup by a 50-W heater.\n\n(b) After the heater is switched on, the temperature of the liquid increases from 25 °C to\n73 °C in 210 s. The specific heat capacity of the liquid is 570 J kg⁻¹ °C⁻¹. Find the heat lost in the experiment.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "After the heater is switched on, the temperature of the liquid increases from 25 °C to",
              "25 °C",
              "25°C"
            ]
          }
        ]
      }
    ],
    "hint": "After the heater is switched on, the temperature of the liquid increases from 25 °C to\n73…",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q9.png",
      "alt": "In the following experiment, a liquid of mass 0.3 kg is heated in the polystyrene cup by a 50-W hea…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q9(b)"
    }
  },
  {
    "id": "heat-lq-2425-q14a",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "The following schematic diagram shows a part of a nuclear power station. Water at 220 °C flows into the steam generator and is heated to become steam. The steam then pushes a turbine to generate electricity and is cooled in the condenser to turn back into water. The water is specially treated so that its boiling point is raised to 280 °C.\n\n(a) The flow rate of the steam is 480 kg s–1. Find the energy lost by the steam every second.\nGiven: c (steam) = 2000 J kg⁻¹ °C⁻¹",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "The flow rate of the steam is 480 kg s–1. Find the energy lost by the steam every second.",
              "480 kg",
              "480kg"
            ]
          }
        ]
      }
    ],
    "hint": "The flow rate of the steam is 480 kg s–1.",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q14.png",
      "alt": "The following schematic diagram shows a part of a nuclear power station. Water at 220 °C flows into…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q14(a)"
    }
  },
  {
    "id": "heat-lq-2425-q14b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "The following schematic diagram shows a part of a nuclear power station. Water at 220 °C flows into the steam generator and is heated to become steam. The steam then pushes a turbine to generate electricity and is cooled in the condenser to turn back into water. The water is specially treated so that its boiling point is raised to 280 °C.\n\n(b) If the internal energy of the steam is transferred to the turbine at 5.5 × 108 W, find the flow rate of the seawater.\nGiven: c (seawater) = 4000 J kg⁻¹ °C⁻¹",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "4000 J kg⁻¹ °C⁻¹",
              "4000 J",
              "4000J"
            ]
          }
        ]
      }
    ],
    "hint": "If the internal energy of the steam is transferred to the turbine at 5.5 × 108 W, find th…",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q14.png",
      "alt": "The following schematic diagram shows a part of a nuclear power station. Water at 220 °C flows into…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q14(b)"
    }
  },
  {
    "id": "heat-lq-2425-q13bii",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "Emily is enjoying hot pot. The pot is put on a stove. The soup of mass 3 kg is heated at a rate of 1000 W. Its specific heat capacity is 4200 J kg⁻¹ °C⁻¹. The heat capacity of the pot is negligible. Neglect the energy loss to the surroundings.\n\n(b) When will the soup reach 100 °C again?",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "When will the soup reach 100 °C again?",
              "100 °C",
              "100°C"
            ]
          }
        ]
      }
    ],
    "hint": "When will the soup reach 100 °C again?\n(2 marks)\nHeat (Revision)",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q13.png",
      "alt": "Emily is enjoying hot pot. The pot is put on a stove. The soup of mass 3 kg is heated at a rate of …",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q13(b)(ii)"
    }
  },
  {
    "id": "heat-lq-2425-q15b",
    "format": "fill",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "Karl adds 2 kg of water at 20 °C into a hot wok after cooking and steam is formed.\n\n(b) After the water and the wok have reached thermal equilibrium, the mass and the temperature of the water are 1.98 kg and 40 °C respectively. Estimate the initial temperature of the wok. Assume that the energy lost to the surroundings and the effect of evaporation are negligible.\nHeat capacity of wok = 1200 J °C⁻¹\nSpecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nSpecific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "Heat capacity of wok = 1200 J °C⁻¹",
              "1200 J",
              "1200J"
            ]
          }
        ]
      }
    ],
    "hint": "After the water and the wok have reached thermal equilibrium, the mass and the temperatur…"
  },
  {
    "id": "heat-lq-2425-q16b",
    "format": "fill",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "Calculate the amount of energy required to heat up 3 kg of ice at 0 °C to steam at 100 °C.\nSpecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nSpecific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹\nSpecific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹",
              "4200 J",
              "4200J"
            ]
          }
        ]
      }
    ],
    "hint": "Calculate the amount of energy required to heat up 3 kg of ice at 0 °C to steam at 100 °C…"
  },
  {
    "id": "heat-lq-2425-q18a",
    "format": "fill",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "An ice-tray consists of 12 compartments, each for making an ice cube of 30 g.\n\n(a) If the ice-tray is filled with water at room temperature (20 °C), how much energy should be removed from the water so that 12 ice cubes at −10 °C can be made?\nSpecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹\nSpecific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹\nSpecific heat capacity of ice = 2100 J kg⁻¹ °C⁻¹",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹",
              "4200 J",
              "4200J"
            ]
          }
        ]
      }
    ],
    "hint": "If the ice-tray is filled with water at room temperature (20 °C), how much energy should…",
    "images": [
      {
        "src": "./assets/f3-heat-lq-2425-q18.png",
        "alt": "An ice-tray consists of 12 compartments, each for making an ice cube of 30 g. (a) If the ice-tray i…",
        "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q18(a) (1/2)"
      },
      {
        "src": "./assets/f3-heat-lq-2425-q18b.png",
        "alt": "An ice-tray consists of 12 compartments, each for making an ice cube of 30 g. (a) If the ice-tray i…",
        "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q18(a) (2/2)"
      }
    ]
  },
  {
    "id": "heat-lq-2425-q18a-2",
    "format": "fill",
    "section": "change-of-state",
    "difficulty": "Standard",
    "stem": "An ice-tray consists of 12 compartments, each for making an ice cube of 30 g.\n\n(a) should not be used directly for this experiment.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹",
              "4200 J",
              "4200J"
            ]
          }
        ]
      }
    ],
    "hint": "If the ice-tray is filled with water at room temperature (20 °C), how much energy should…",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q18.png",
      "alt": "An ice-tray consists of 12 compartments, each for making an ice cube of 30 g. (a) should not be use…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q18(a)"
    }
  },
  {
    "id": "heat-lq-2425-q19a",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "The following diagram shows a steam oven. When the oven operates, it turns water at 25 °C into steam at 105 °C and passes the steam into the cooking chamber to cook food. Given:\nspecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹ specific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹ specific heat capacity of steam = 1900 J kg⁻¹ °C⁻¹\n\n(a) How much energy is required to heat up 1 kg of water at 25 °C to steam at 105 °C?",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "How much energy is required to heat up 1 kg of water at 25 °C to steam at 105 °C?",
              "1 kg",
              "1kg"
            ]
          }
        ]
      }
    ],
    "hint": "How much energy is required to heat up 1 kg of water at 25 °C to steam at 105 °C?\n(2 mark…",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q19d.png",
      "alt": "The following diagram shows a steam oven. When the oven operates, it turns water at 25 °C into stea…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q19(a)"
    }
  },
  {
    "id": "heat-lq-2425-q19b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "The following diagram shows a steam oven. When the oven operates, it turns water at 25 °C into steam at 105 °C and passes the steam into the cooking chamber to cook food. Given:\nspecific heat capacity of water = 4200 J kg⁻¹ °C⁻¹ specific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹ specific heat capacity of steam = 1900 J kg⁻¹ °C⁻¹\n\n(b) If the maximum rate of ejection of steam is 0.001 kg s–1, estimate the maximum power of the heater in the steam oven.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "If the maximum rate of ejection of steam is 0.001 kg s–1, estimate the maximum power of the heater",
              "0.001 kg",
              "0.001kg"
            ]
          }
        ]
      }
    ],
    "hint": "If the maximum rate of ejection of steam is 0.001 kg s–1, estimate the maximum power of t…",
    "image": {
      "src": "./assets/f3-heat-lq-2425-q19d.png",
      "alt": "The following diagram shows a steam oven. When the oven operates, it turns water at 25 °C into stea…",
      "caption": "Fig · Imported: F3 Heat LQ 2024-25 · Q19(b)"
    }
  },
  {
    "id": "heat-lq-2425-q21a",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "Sometimes milk foam is added into coffee to change its texture and favour. Matthew uses the steamer on a coffee machine to make milk foam by pumping steam at 100 °C into 600 g of milk until the temperature of the mixture reaches 65 °C. Given:\nspecific heat capacity of milk = 3930 J kg⁻¹ °C⁻¹ specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹ specific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹\n\n(a) The milk is initially at 4 °C. Estimate the mass of steam pumped into the milk. Assume that all the steam condenses and stays in the mixture.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "4 °C",
              "4°C"
            ]
          }
        ]
      }
    ],
    "hint": "The milk is initially at 4 °C."
  },
  {
    "id": "heat-lq-2425-q21b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "Sometimes milk foam is added into coffee to change its texture and favour. Matthew uses the steamer on a coffee machine to make milk foam by pumping steam at 100 °C into 600 g of milk until the temperature of the mixture reaches 65 °C. Given:\nspecific heat capacity of milk = 3930 J kg⁻¹ °C⁻¹ specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹ specific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹\n\n(b) The steamer produces steam at 100 °C using water at 20 °C at a rate of 0.18 g s–1. Estimate the power of the steamer.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "100 °C",
              "100°C"
            ]
          }
        ]
      }
    ],
    "hint": "The steamer produces steam at 100 °C using water at 20 °C at a rate of 0.18 g s–1."
  },
  {
    "id": "heat-lq-capacity-q2b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A hot water system is used to heat up 20 L of water from 60 °C to 90 °C. Find\n\n(b) the time required if energy is transferred to the water at a rate of 1200 W.   \n(The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹. The density of water is 1 kg L⁻¹.)",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "(The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹. The density of water is 1 kg L⁻¹.)",
              "4200 J",
              "4200J"
            ]
          }
        ]
      }
    ],
    "hint": "the time required if energy is transferred to the water at a rate of 1200 W."
  },
  {
    "id": "heat-lq-capacity-q7",
    "format": "fill",
    "section": "change-of-state",
    "difficulty": "Applied",
    "stem": "A student carries out an experiment to determine the specific heat capacity of copper. He heats the copper block to 100 °C with boiling water (Figure a). Then, he places the block in a cup of water and measures the temperature rise of the water (Figure b).\nThe following results are obtained:\nmass of the copper block = 80 g mass of water inside the polystyrene cup = 150 g initial water temperature = 18 °C final water temperature = 21.5 °C\nFind the specific heat capacity of copper assuming that the polystyrene cup has a negligible mass.\nCompare the experimental value with the standard value and account for any differences between them.\n(6 marks) (The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹. The standard value of the specific heat capacity of copper is 390 J kg⁻¹ °C⁻¹.)",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "18 °C",
              "18°C"
            ]
          }
        ]
      }
    ],
    "hint": "A student carries out an experiment to determine the specific heat capacity of copper.",
    "image": {
      "src": "./assets/f3-heat-lq-capacity-q7.png",
      "alt": "A student carries out an experiment to determine the specific heat capacity of copper. He heats the…",
      "caption": "Fig · Imported: F3 Heat LQ (Heat capacity) · Q7"
    }
  },
  {
    "id": "heat-lq-capacity-q8a",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "An iron wok of mass 2 kg containing cooking oil of mass 1 kg is heated by a stove. It takes 2 minutes to raise the temperature of the wok and the oil from 20 °C to 180 °C.\n\n(a) Find the energy absorbed by the wok and the oil in the 2 minutes.\n(Heat capacity of iron = 920 J°C⁻¹, specific heat capacity of cooking oil = 2000 J kg⁻¹ °C⁻¹)",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "467000J",
              "467000 J"
            ]
          }
        ]
      }
    ],
    "hint": "Use Q = CΔT for the wok and Q = mcΔT for the oil, then add the two energies."
  },
  {
    "id": "heat-lq-capacity-q9b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A student turns on the three identical air conditioners in a classroom of dimensions 9 m × 8 m × 3 m. The mass of air in every cubic metre is 1.15 kg. The specific heat capacity of air is 1000 J kg⁻¹ °C⁻¹.\n\n(b) If the temperature of the classroom drops from 33 °C to 25 °C, how much energy is removed from the air in the classroom?",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "If the temperature of the classroom drops from 33 °C to 25 °C, how much energy is removed from the",
              "33 °C",
              "33°C"
            ]
          }
        ]
      }
    ],
    "hint": "If the temperature of the classroom drops from 33 °C to 25 °C, how much energy is removed…"
  },
  {
    "id": "heat-lq-capacity-q9c",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A student turns on the three identical air conditioners in a classroom of dimensions 9 m × 8 m × 3 m. The mass of air in every cubic metre is 1.15 kg. The specific heat capacity of air is 1000 J kg⁻¹ °C⁻¹.\n\n(c) If the power of each air conditioner is 2000 W, how long does it take to cool the classroom from 33 °C to 25 °C?",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "2000 W",
              "2000W"
            ]
          }
        ]
      }
    ],
    "hint": "If the power of each air conditioner is 2000 W, how long does it take to cool the classro…"
  },
  {
    "id": "heat-lq-capacity-q10b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A hot water system provides warm water for shower. The system has an electric heater of power 8 kW. The temperature of the cold water flowing into the system is 15 °C. The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹.\n\n(b) Suppose you want to take a shower with water at 42 °C. This can be done by mixing the hot water in",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "Suppose you want to take a shower with water at 42 °C. This can be done by mixing the hot water in",
              "42 °C",
              "42°C"
            ]
          }
        ]
      }
    ],
    "hint": "Suppose you want to take a shower with water at 42 °C.",
    "image": {
      "src": "./assets/f3-heat-lq-capacity-q10.png",
      "alt": "A hot water system provides warm water for shower. The system has an electric heater of power 8 kW.…",
      "caption": "Fig · Imported: F3 Heat LQ (Heat capacity) · Q10(b)"
    }
  },
  {
    "id": "heat-lq-capacity-q11b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A hot water system provides warm water to the users of a clubhouse for shower. It has an electric heater which, on average, supplies 10 000 kg of water at 50 °C per day. Suppose the temperature of water supplied to the heater is 15 °C. The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹.\n\n(b) How much is paid per day for the electricity used by the heater? (Given that electricity costs $0.9 per kW h)",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "$0.9"
            ]
          }
        ]
      }
    ],
    "hint": "How much is paid per day for the electricity used by the heater? (Given that electricity…"
  },
  {
    "id": "heat-lq-capacity-q12a",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "Mr. Chan is enjoying Japanese hot pot. Initially, the pot contains 3 kg of water at 20 °C. When the water starts to boil, Mr. Chan puts a piece of meat at 10 °C into the water.\n\n(a) Find the energy required to raise the temperature of the water from 20 °C to 100°C.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "20 °C",
              "20°C"
            ]
          }
        ]
      }
    ],
    "hint": "Find the energy required to raise the temperature of the water from 20 °C to 100°C.",
    "image": {
      "src": "./assets/f3-heat-lq-capacity-q12.png",
      "alt": "Mr. Chan is enjoying Japanese hot pot. Initially, the pot contains 3 kg of water at 20 °C. When the…",
      "caption": "Fig · Imported: F3 Heat LQ (Heat capacity) · Q12(a)"
    }
  },
  {
    "id": "heat-lq-capacity-q12b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "Mr. Chan is enjoying Japanese hot pot. Initially, the pot contains 3 kg of water at 20 °C. When the water starts to boil, Mr. Chan puts a piece of meat at 10 °C into the water.\n\n(b) The power of the gas stove is 4000 W. Suppose 70% of the energy is lost to the surroundings, find the time required for heating the soup from 20 °C to 100°C.",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "20 °C",
              "20°C"
            ]
          }
        ]
      }
    ],
    "hint": "The power of the gas stove is 4000 W.",
    "image": {
      "src": "./assets/f3-heat-lq-capacity-q12.png",
      "alt": "Mr. Chan is enjoying Japanese hot pot. Initially, the pot contains 3 kg of water at 20 °C. When the…",
      "caption": "Fig · Imported: F3 Heat LQ (Heat capacity) · Q12(b)"
    }
  },
  {
    "id": "heat-lq-capacity-q12d",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "Mr. Chan is enjoying Japanese hot pot. Initially, the pot contains 3 kg of water at 20 °C. When the water starts to boil, Mr. Chan puts a piece of meat at 10 °C into the water.\n\n(d) Shortly after putting the meat into the pot, the temperature of the water and the meat comes to the same temperature of 98 °C. Calculate the mass of the meat.\n(Take the specific heat capacity of the meat to be 3500 J kg⁻¹ °C⁻¹. The specific heat capacity of water is\n4200 J kg⁻¹ °C⁻¹.)",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "98 °C",
              "98°C"
            ]
          }
        ]
      }
    ],
    "hint": "Shortly after putting the meat into the pot, the temperature of the water and the meat co…",
    "image": {
      "src": "./assets/f3-heat-lq-capacity-q12.png",
      "alt": "Mr. Chan is enjoying Japanese hot pot. Initially, the pot contains 3 kg of water at 20 °C. When the…",
      "caption": "Fig · Imported: F3 Heat LQ (Heat capacity) · Q12(d)"
    }
  },
  {
    "id": "heat-lq-capacity-q17b",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Applied",
    "stem": "A secondary school is currently using an electrical hot water system to provide warm water to students for shower. A salesman is persuading this school to replace the old system with a new solar hot water system. He does a simple research to convince the school the advantage of the replacement. The following information about the current water heating system is extracted from his research: Average volume of water consumed for shower (per day) = 36 000 L Average volume of hot water heated for shower (per day) = 8000 L Temperature of the hot water that left the system = 80 °C Average temperature of tap water = 20 °C Average operation time of the system (per annum) = 220 days Cost of electricity = $1.08 per kW h\n\n(b) Calculate the average cost for the electricity in one year, assuming that all energy consumed by the electrical hot water system is transferred to the water.\n\nThe information about the solar hot water system is as shown below:\nMass of hot water supplied by one unit (per day) = 120 L\nTemperature of the water heated by the system = 55 °C\nPrice of one unit = $12 000",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "55 °C",
              "55°C"
            ]
          }
        ]
      }
    ],
    "hint": "Calculate the average cost for the electricity in one year, assuming that all energy cons…"
  },
  {
    "id": "heat-lq-capacity-q17d",
    "format": "fill",
    "section": "heat-internal-energy",
    "difficulty": "Standard",
    "stem": "A secondary school is currently using an electrical hot water system to provide warm water to students for shower. A salesman is persuading this school to replace the old system with a new solar hot water system. He does a simple research to convince the school the advantage of the replacement. The following information about the current water heating system is extracted from his research: Average volume of water consumed for shower (per day) = 36 000 L Average volume of hot water heated for shower (per day) = 8000 L Temperature of the hot water that left the system = 80 °C Average temperature of tap water = 20 °C Average operation time of the system (per annum) = 220 days Cost of electricity = $1.08 per kW h\n\n(d) State one advantage and one disadvantage of the solar water heating system as compared with current system.\n (The specific heat capacity of water is 4200 J kg⁻¹ °C⁻¹. One kilowatt-hour equals 3.6MJ. The density of water is 1 kg L⁻¹.)",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Answer: "
          },
          {
            "type": "blank",
            "accept": [
              "1 °C",
              "1°C"
            ]
          }
        ]
      }
    ],
    "hint": "State one advantage and one disadvantage of the solar water heating system as compared wi…"
  }
];
