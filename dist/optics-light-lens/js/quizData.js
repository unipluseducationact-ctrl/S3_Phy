import { QUIZ_EXERCISES } from "./quizExercises.js?v=20260629-6";

export const QUIZ_SECTIONS = [
  {
    "id": "reflection",
    "label": "Reflection",
    "labelZh": "反射"
  },
  {
    "id": "refraction-snells-law",
    "label": "Refraction and Snell's Law",
    "labelZh": "折射與司乃耳定律"
  },
  {
    "id": "total-internal-reflection",
    "label": "Total Internal Reflection",
    "labelZh": "全內反射"
  },
  {
    "id": "concave-lens",
    "label": "Concave lens",
    "labelZh": "凹透鏡"
  },
  {
    "id": "convex-lens",
    "label": "Convex Lens",
    "labelZh": "凸透鏡"
  }
];

const MCQ_ITEMS = [
  {
    "id": "light-2024-q01",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "The following figure shows a periscope which is used to observe an object O. What is the distance of the final image seen from the observer?",
    "options": [
      {
        "key": "A",
        "text": "a+b"
      },
      {
        "key": "B",
        "text": "b+c"
      },
      {
        "key": "C",
        "text": "a+c"
      },
      {
        "key": "D",
        "text": "a+b+c"
      }
    ],
    "answer": "D",
    "hint": "The following figure shows a periscope which is used to observe an object O. What is the distance of the final image seen from the observer? 6 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q01-fig.png",
      "alt": "Diagram for light-2024-q01",
      "caption": "Fig - Question 1"
    }
  },
  {
    "id": "light-2024-q02",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "A boy standing 2 m in front of a vertical plane mirror looks at the image of a picture 50 cm behind him as shown. What is the distance between the boy and the image of the picture?",
    "options": [
      {
        "key": "A",
        "text": "2 m"
      },
      {
        "key": "B",
        "text": "2.5 m"
      },
      {
        "key": "C",
        "text": "4 m"
      },
      {
        "key": "D",
        "text": "4.5 m"
      }
    ],
    "answer": "D",
    "hint": "2 m 2.5 m 4 m 4.5 m",
    "image": {
      "src": "./assets/light-2024-q02-fig.png",
      "alt": "Diagram for light-2024-q02",
      "caption": "Fig - Question 2"
    }
  },
  {
    "id": "light-2024-q03",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "A piece of paper printed with letters “PHYSICS” is placed in front of a vertical plane mirror as shown in the above figure. Which of the following figures best shows the image observed by the observer?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "B",
    "image": {
      "src": "./assets/light-2024-q03-fig.png",
      "alt": "Diagram for light-2024-q03",
      "caption": "Fig - Question 3"
    }
  },
  {
    "id": "light-2024-q04",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "A girl is standing in front of a plane mirror which is hanging on the wall as shown in the figure. She is just able to see her feet through the mirror. In\n\nwhich of the following situations can she still see her feet through the mirror?\n\n(1) The girl stands at the same position but raises the mirror.\n\n(2) The girl walks towards the mirror.\n\n(3) The girl walks away from the mirror.",
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
    "hint": "2.5 𝑚. The distance between the boy and the image is 2.5 + 2 = 4.5 𝑚 (1) is incorrect, the lower edge of the mirror will not be able to reflect the light from the feet to her eyes. (2) and (3) are correct. Look at the following figures.",
    "image": {
      "src": "./assets/light-2024-q04-fig.png",
      "alt": "Diagram for light-2024-q04",
      "caption": "Fig - Question 4"
    }
  },
  {
    "id": "light-2024-q05",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "A duck is swimming in a pond. The photograph shows the image of the duck formed by the surface of the water.\n\nWhich of the following properties of the image are correct?\n\n(1) The image is real.\n\n(2) The image is as large as the object.\n\n(3) The image is laterally inverted.",
    "options": [
      {
        "key": "A",
        "text": "(1) and (2) only"
      },
      {
        "key": "B",
        "text": "(2) and (3) only"
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
    "answer": "B",
    "image": {
      "src": "./assets/light-2024-q05-fig.png",
      "alt": "Diagram for light-2024-q05",
      "caption": "Fig - Question 5"
    }
  },
  {
    "id": "light-2024-q06",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "In the figure below, what is the angle of reflection on mirror M₂?",
    "options": [
      {
        "key": "A",
        "text": "40°"
      },
      {
        "key": "B",
        "text": "45°"
      },
      {
        "key": "C",
        "text": "50°"
      },
      {
        "key": "D",
        "text": "55°"
      }
    ],
    "answer": "A",
    "hint": "In the figure below, what is the angle of reflection on mirror M₂? 40° 45° 50° 55°",
    "image": {
      "src": "./assets/light-2024-q06-fig.png",
      "alt": "Diagram for light-2024-q06",
      "caption": "Fig - Question 6"
    }
  },
  {
    "id": "light-2024-q07",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "In the figure below, the angle of incidence of a ray on a plane mirror is 30°. What is the angle of reflection if the mirror is rotated anti-clockwise through an angle of 20°?",
    "options": [
      {
        "key": "A",
        "text": "10°"
      },
      {
        "key": "B",
        "text": "20°"
      },
      {
        "key": "C",
        "text": "30°"
      },
      {
        "key": "D",
        "text": "Cannot be determined"
      }
    ],
    "answer": "A",
    "hint": "In the figure below, the angle of incidence of a ray on a plane mirror is 30°. What is the angle of reflection if the mirror is rotated anti-clockwise through an angle of 20°? 10° 20° 30° 7 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q07-fig.png",
      "alt": "Diagram for light-2024-q07",
      "caption": "Fig - Question 7"
    }
  },
  {
    "id": "light-2024-q08",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "Which of the following statements concerning the image of an object formed by reflection in a plane mirror is incorrect?",
    "options": [
      {
        "key": "A",
        "text": "The image is erect."
      },
      {
        "key": "B",
        "text": "The image has the same size as the object."
      },
      {
        "key": "C",
        "text": "The distance of the image from the mirror is the same as the distance of the object from the mirror."
      },
      {
        "key": "D",
        "text": "The image can be formed on a screen."
      }
    ],
    "answer": "D",
    "hint": "Which of the following statements concerning the image of an object formed by reflection in a plane mirror is incorrect?"
  },
  {
    "id": "light-2024-q09",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "Which of the following statements about diffuse reflection are correct?\n\n(1) Diffuse reflection does not obey the laws of reflection.\n\n(2) A clear image would not be formed on a rough surface where diffuse reflection takes place.\n\n(3) We can see non-luminous objects due to diffuse reflection.",
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
    "hint": "Which of the following statements about diffuse reflection are correct? (1) Diffuse reflection does not obey the laws of reflection. (2) A clear image would not be formed on a rough surface where diffuse reflection takes place. (3) We can see non-luminous objects due to diffuse reflection."
  },
  {
    "id": "light-2024-q10",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "A clear image of a pen is formed by a plane mirror but not a metal plate as shown below. Which of the following is a reason for this?",
    "options": [
      {
        "key": "A",
        "text": "The plane mirror reflects light but the metal plate does not."
      },
      {
        "key": "B",
        "text": "Reflection of light by the plane mirror obeys the laws of reflection but that by the metal plate does not."
      },
      {
        "key": "C",
        "text": "The plane mirror provides diffuse reflection of light but the metal plate does not."
      },
      {
        "key": "D",
        "text": "The plane mirror reflects parallel light rays into the same direction but the metal plate does not."
      }
    ],
    "answer": "D",
    "image": {
      "src": "./assets/light-2024-q10-fig.png",
      "alt": "Diagram for light-2024-q10",
      "caption": "Fig - Question 10"
    }
  },
  {
    "id": "light-2024-q11",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "A ray of light from an object O passes through a periscope made of 2 plane mirrors P and Q as shown. The distance that the image of O appear to be away from the observer is",
    "options": [
      {
        "key": "A",
        "text": "4 m above mirror Q"
      },
      {
        "key": "B",
        "text": "4.5 m above mirror Q"
      },
      {
        "key": "C",
        "text": "4 m in front of the observer E"
      },
      {
        "key": "D",
        "text": "4.5 m in front of the observer E"
      }
    ],
    "answer": "D",
    "image": {
      "src": "./assets/light-2024-q11-fig.png",
      "alt": "Diagram for light-2024-q11",
      "caption": "Fig - Question 11"
    }
  },
  {
    "id": "light-2024-q12",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "An object is placed near one end of a periscope as shown. Which of the following figures best represents the image observed?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "D",
    "image": {
      "src": "./assets/light-2024-q12-fig.png",
      "alt": "Diagram for light-2024-q12",
      "caption": "Fig - Question 12"
    }
  },
  {
    "id": "light-2024-q13",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "An object is placed near one end of a periscope as shown. Which of the following figures best represents the image observed?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "A",
    "hint": "3 𝑚 Image distance of mirror Q is 3 + 1 = 4 𝑚. The image of mirror Q is 4 + 0.5 = 4.5 𝑚 form the observer. When object distance decrease by 1 𝑚, image distance also decreases by 1 𝑚, thus the distance between the image and the object decrease by 2 𝑚 The image is inverted vertically twice in the opposite direction to cancel out the inversion effects. The image is inverted vertically twice in the same direction to provide a vertically inverted image. 8 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q13-fig.png",
      "alt": "Diagram for light-2024-q13",
      "caption": "Fig - Question 13"
    }
  },
  {
    "id": "light-2024-q14",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "A girl stands in front of a plane mirror. When the mirror is moved towards the girl at a speed of 1 m s⁻¹, her image moves",
    "options": [
      {
        "key": "A",
        "text": "towards the girl at a speed of 1 m s⁻¹."
      },
      {
        "key": "B",
        "text": "towards the girl at a speed of 2 m s⁻¹."
      },
      {
        "key": "C",
        "text": "away from the girl at a speed of 0.5 m s⁻¹."
      },
      {
        "key": "D",
        "text": "away from the girl at a speed of 2 m s⁻¹."
      }
    ],
    "answer": "B"
  },
  {
    "id": "light-2024-q15",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "The figure above is the image of a clock formed by a plane mirror. What is the real time?",
    "options": [
      {
        "key": "A",
        "text": "3 : 55"
      },
      {
        "key": "B",
        "text": "4 : 05"
      },
      {
        "key": "C",
        "text": "7 : 55"
      },
      {
        "key": "D",
        "text": "8 : 05"
      }
    ],
    "answer": "D",
    "hint": "The figure above is the image of a clock formed by a plane mirror. What is the real time?",
    "image": {
      "src": "./assets/light-2024-q15-fig.png",
      "alt": "Diagram for light-2024-q15",
      "caption": "Fig - Question 15"
    }
  },
  {
    "id": "light-2024-q16",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "The image of a plane mirror\n\n(1) cannot be formed on a screen\n\n(2) cannot be photographed\n\n(3) cannot be observed be naked eye",
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
    "answer": "A",
    "hint": "The image of a plane mirror (1) cannot be formed on a screen (2) cannot be photographed (3) cannot be observed be naked eye"
  },
  {
    "id": "light-2024-q17",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "A man 1.8 m tall is standing in front of a plane mirror of length p cm. The distance between the bottom of the mirror and the ground is q cm. His eyes are 1.7 m above the ground. In which of the following situations can the man see his entire body in the mirror?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "B",
    "hint": "90 90 90 85 100 70 100 65",
    "images": [
      {
        "src": "./assets/light-2024-q17-fig.png",
        "alt": "Diagram for light-2024-q17",
        "caption": "Fig - Question 17"
      },
      {
        "src": "./assets/light-2024-q17-fig-2.png",
        "alt": "Options A–D for light-2024-q17",
        "caption": "Options A–D"
      }
    ]
  },
  {
    "id": "light-2024-q18",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "A plane mirror is hanging on a wall and three light bulbs P, Q and R are situated near it as shown in the figure below. Three of the light rays emitted from the bulbs are reflected by the upper edge of the mirror as shown in the figure. Which of the bulbs can be seen by the observer through the mirror?",
    "options": [
      {
        "key": "A",
        "text": "P only"
      },
      {
        "key": "B",
        "text": "R only"
      },
      {
        "key": "C",
        "text": "P, Q and R"
      },
      {
        "key": "D",
        "text": "None of them"
      }
    ],
    "answer": "B",
    "hint": "1.7 2 = 0.85 𝑚. And the mirror should be half of the height of the man. Which is 1.8 2 = 0.6 𝑚 Since the angle of incidence and reflection can only be increase as the light rays reflect at the lower points of the mirror, the reflected light rays can only bend more downwards to the observers but not upwards. 9 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q18-fig.png",
      "alt": "Diagram for light-2024-q18",
      "caption": "Fig - Question 18"
    }
  },
  {
    "id": "light-2024-q19",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "The diagram shows the plan of a rectangular room of length 10 m and breadth 6 m. A plane mirror MN of length 2 m is fixed on the front wall PQ. An observer at position X, looking into the mirror, can see the end wall RS by reﬂection. In order that the whole end wall RS can just be seen by reﬂection in MN, the observer has to move to another position to observe. What is the distance of this new position from the mirror?",
    "options": [
      {
        "key": "A",
        "text": "4 m"
      },
      {
        "key": "B",
        "text": "5 m"
      },
      {
        "key": "C",
        "text": "6 m"
      },
      {
        "key": "D",
        "text": "8 m"
      }
    ],
    "answer": "B",
    "hint": "The diagram shows the plan of a rectangular room of length 10 m and breadth 6 m. A plane mirror MN of length 2 m is fixed on the front wall PQ. An observer at position X, looking into the mirror, can see the end wall RS by reﬂection. In order that the whole end wall RS can just be seen by reﬂection in MN, the observer has to move to another position to observe. What is the distance of this new position from the mirror? 10 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q19-fig.png",
      "alt": "Diagram for light-2024-q19",
      "caption": "Fig - Question 19"
    }
  },
  {
    "id": "light-2024-q20",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "John stands in front of a vertical plane mirror AB, where point A is 1.8 m above the ground (see the figure below). John’s eye is 1.6 m above the ground and 1 m from the mirror. Looking into the mirror, he can see a wall 3 m behind him. A spider is moving down on the wall. What is the maximum height h of the spider that John can see its image in the mirror?",
    "options": [
      {
        "key": "A",
        "text": "1.8 m"
      },
      {
        "key": "B",
        "text": "2.0 m"
      },
      {
        "key": "C",
        "text": "2.4 m"
      },
      {
        "key": "D",
        "text": "2.6 m"
      }
    ],
    "answer": "D",
    "hint": "John stands in front of a vertical plane mirror AB, where point A is 1.8 m above the ground (see the figure below). John’s eye is 1.6 m above the ground and 1 m from the mirror. Looking into the mirror, he can see a wall 3 m behind him. 1.8 m 2.0 m 2.4 m 2.6 m",
    "image": {
      "src": "./assets/light-2024-q20-fig.png",
      "alt": "Diagram for light-2024-q20",
      "caption": "Fig - Question 20"
    }
  },
  {
    "id": "light-2024-q21",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "A girl with her eyes 1.5 m above the ground stands in front of a wall, as shown in the figure below. If a small mirror is to be hung on the wall, how high should it be placed so that the girl can see the light in the mirror?",
    "options": [
      {
        "key": "A",
        "text": "1.50 m above the ground"
      },
      {
        "key": "B",
        "text": "1.63 m above the ground"
      },
      {
        "key": "C",
        "text": "1.75 m above the ground"
      },
      {
        "key": "D",
        "text": "1.83 m above the ground"
      }
    ],
    "answer": "D",
    "hint": "1.50 m above the ground 1.63 m above the ground 1.75 m above the ground 1.83 m above the ground 𝑥 0.2 = 3+1 1 (𝑐𝑜𝑟𝑟, 𝑠𝑖𝑑𝑒 ~∆) 𝑥= 0.8 ℎ= 0.8 + 1.6 + 0.2 = 2.6 𝑚 𝑦 (2.5 −1) = 1.5 1.5 + 3 𝑦= 0.333𝑚 The required height = 1.5 + 𝑦= 1.833𝑚 above the ground",
    "image": {
      "src": "./assets/light-2024-q21-fig.png",
      "alt": "Diagram for light-2024-q21",
      "caption": "Fig - Question 21"
    }
  },
  {
    "id": "light-2024-q22",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "In the following figure, two plane mirrors at right angles face each other. An object is placed at O. Multiple images are thus formed by the mirrors. Which of the following is/are not the image(s) formed by the mirrors?",
    "options": [
      {
        "key": "A",
        "text": "I₂ only"
      },
      {
        "key": "B",
        "text": "I₃ only"
      },
      {
        "key": "C",
        "text": "I₂ and I₄ only"
      },
      {
        "key": "D",
        "text": "I₂, I₃ and I₄ only"
      }
    ],
    "answer": "C",
    "hint": "In the following figure, two plane mirrors at right angles face each other. An object is placed at O. Multiple images are thus formed by the mirrors. Which of the following is/are not the image(s) formed by the mirrors? 11 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q22-fig.png",
      "alt": "Diagram for light-2024-q22",
      "caption": "Fig - Question 22"
    }
  },
  {
    "id": "light-2024-q23",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "Which of the following is not an example of refraction?",
    "options": [
      {
        "key": "A",
        "text": "A chopstick appears bent when dipped in water."
      },
      {
        "key": "B",
        "text": "A distorted image is observed on a ruffled water surface."
      },
      {
        "key": "C",
        "text": "A goldfish in a tank appears nearer and bigger than it really is."
      },
      {
        "key": "D",
        "text": "Stars appear higher than they really are when we look up from the ground."
      }
    ],
    "answer": "B",
    "hint": "Which of the following is not an example of refraction?"
  },
  {
    "id": "light-2024-q24",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "What is/are the advantage(s) of right-angled prisms over plane mirrors in periscopes?\n\n(1) The image is erect.\n\n(2) Multiple images are not formed.\n\n(3) The image is of the same size as the object.",
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
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "A",
    "hint": "What is/are the advantage(s) of right-angled prisms over plane mirrors in periscopes? (1) The image is erect. (2) Multiple images are not formed. (3) The image is of the same size as the object."
  },
  {
    "id": "light-2024-q25",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "Which of the following statements about refraction of light is/are correct?\n\n(1) A light ray is bent towards the normal when it passes from a less dense medium to a denser medium.\n\n(2) The ratio of the angle of incidence to the angle of refraction is constant.\n\n(3) When a light ray passes form one medium to another, it is refracted because the speed of light is different in the two different media.",
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
    "answer": "C",
    "hint": "Which of the following statements about refraction of light is/are correct? (1) A light ray is bent towards the normal when it passes from a less dense medium to a denser medium. (2) The ratio of the angle of incidence to the angle of refraction is constant. (3) When a light ray passes form one medium to another, it is refracted because the speed of light is different in the two different media."
  },
  {
    "id": "light-2024-q26",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "The figure below show a light ray entering medium Y from medium X. Which statement(s) is/are correct?\n\n(1) The light travels faster in medium X.\n\n(2)  is the angle of refraction.\n\n(3) Medium X can be water while medium Y is air.",
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
    "answer": "A",
    "hint": "The figure below show a light ray entering medium Y from medium X. Which statement(s) is/are correct? (1) The light travels faster in medium X. (2)  is the angle of refraction. (3) Medium X can be water while medium Y is air.",
    "image": {
      "src": "./assets/light-2024-q26-fig.png",
      "alt": "Diagram for light-2024-q26",
      "caption": "Fig - Question 26"
    }
  },
  {
    "id": "light-2024-q27",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "The following figure shows a light ray travelling from medium X to a vacuum. What is the refractive index of medium X?",
    "options": [
      {
        "key": "A",
        "text": "B"
      },
      {
        "key": "C",
        "text": "D"
      }
    ],
    "answer": "A",
    "hint": "The following figure shows a light ray travelling from medium X to a vacuum. What is the refractive index of medium X?",
    "image": {
      "src": "./assets/light-2024-q27-fig.png",
      "alt": "Diagram for light-2024-q27",
      "caption": "Fig - Question 27"
    }
  },
  {
    "id": "light-2024-q28",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "A ray of light passes through a glass prism as shown. The refractive index of the glass is",
    "options": [
      {
        "key": "A",
        "text": "1.34"
      },
      {
        "key": "B",
        "text": "1.49"
      },
      {
        "key": "C",
        "text": "1.52"
      },
      {
        "key": "D",
        "text": "1.55"
      }
    ],
    "answer": "B",
    "hint": "Apply Snell's law at each prism face using the angles shown in the diagram.",
    "image": {
      "src": "./assets/light-2024-q28-fig.png",
      "alt": "Diagram for light-2024-q28",
      "caption": "Fig - Question 28"
    }
  },
  {
    "id": "light-2024-q29",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "A light ray travels from air to water (refractive index 1.33) as shown. What is the angle between the reflected ray and the refracted ray?",
    "options": [
      {
        "key": "A",
        "text": "97°"
      },
      {
        "key": "B",
        "text": "105°"
      },
      {
        "key": "C",
        "text": "111°"
      },
      {
        "key": "D",
        "text": "117°"
      }
    ],
    "answer": "C",
    "hint": "97° 105° 111° 117° 1 sin 40° = 1.33 sin w w = 28.9° 12 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q29-fig.png",
      "alt": "Diagram for light-2024-q29",
      "caption": "Fig - Question 29"
    }
  },
  {
    "id": "light-2024-q30",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A light ray striking a boundary at O undergoes reflection and refraction as shown above. OW, OX and OY are the paths of the light ray. PQ and RS are perpendicular to each other.\n\nWhich of the following deductions are correct?\n\n(1) OW represents the incident ray\n\n(2) PQ is normal to the boundary\n\n(3) The refractive index is 1.19",
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
    "hint": "32. The figures below show how a light ray travels from medium X to medium Y and from medium Y to medium Z. When a light ray travels from medium X to medium Z with an angle of incidence of 20°, what will be the angle of refraction?",
    "image": {
      "src": "./assets/light-2024-q30-fig.png",
      "alt": "Diagram for light-2024-q30",
      "caption": "Fig - Question 30"
    }
  },
  {
    "id": "light-2024-q31",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A ray of light is incident from air to an equilateral triangular glass prism at an angle . Its consequent path is shown below. The refractive index of the glass is 1.6. What is ?",
    "options": [
      {
        "key": "A",
        "text": "14.4°"
      },
      {
        "key": "B",
        "text": "21.3°"
      },
      {
        "key": "C",
        "text": "35.6°"
      },
      {
        "key": "D",
        "text": "42.0°"
      }
    ],
    "answer": "C",
    "hint": "14.4° 21.3° 35.6° 42.0° 13 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q31-fig.png",
      "alt": "Diagram for light-2024-q31",
      "caption": "Fig - Question 31"
    }
  },
  {
    "id": "light-2024-q32",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "The figures below show how a light ray travels from medium X to medium Y and from medium Y to medium Z. When a light ray travels from medium X to medium Z with an angle of incidence of 20°, what will be the angle of refraction?",
    "options": [
      {
        "key": "A",
        "text": "45.0°"
      },
      {
        "key": "B",
        "text": "52.5°"
      },
      {
        "key": "C",
        "text": "57.0°"
      },
      {
        "key": "D",
        "text": "65.0°"
      }
    ],
    "answer": "C",
    "hint": "The figures below show how a light ray travels from medium X to medium Y and from medium Y to medium Z. When a light ray travels from medium X to medium Z with an angle of incidence of 20°, what will be the angle of refraction?",
    "image": {
      "src": "./assets/light-2024-q32-fig.png",
      "alt": "Diagram for light-2024-q32",
      "caption": "Fig - Question 32"
    }
  },
  {
    "id": "light-2024-q33",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "The speeds of light in medium 𝑋 and medium 𝑌 are 2 × 108 m s⁻¹ and 1.5 × 108 m s⁻¹ respectively What is the critical angle for the interface of the two media?",
    "options": [
      {
        "key": "A",
        "text": "19.5°"
      },
      {
        "key": "B",
        "text": "30°"
      },
      {
        "key": "C",
        "text": "41.8°"
      },
      {
        "key": "D",
        "text": "48.6°"
      }
    ],
    "answer": "D",
    "hint": "The speeds of light in medium 𝑋 and medium 𝑌 are 2 × 108 m s⁻¹ and 1.5 × 108 m s⁻¹ respectively What is the critical angle for the interface of the two media? 19.5° 30° 41.8° 48.6° 14 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "light-2024-q34",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "The figure shows a diver looking at a helicopter that stays still in air. Which position best shows the apparent position of the helicopter?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "B",
    "hint": "The figure shows a diver looking at a helicopter that stays still in air. Which position best shows the apparent position of the helicopter?",
    "image": {
      "src": "./assets/light-2024-q34-fig.png",
      "alt": "Diagram for light-2024-q34",
      "caption": "Fig - Question 34"
    }
  },
  {
    "id": "light-2024-q35",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "Mary looks vertically at the bottom of a pool as shown. The apparent depth of the pool depends on\n\n(1) the distance between Mary’s eye and the pool.\n\n(2) the actual depth of the pool.\n\n(3) the refractive index of the liquid in the pool.",
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
    "hint": "Mary looks vertically at the bottom of a pool as shown. The apparent depth of the pool depends on (1) the distance between Mary’s eye and the pool. (2) the actual depth of the pool. (3) the refractive index of the liquid in the pool.",
    "image": {
      "src": "./assets/light-2024-q35-fig.png",
      "alt": "Diagram for light-2024-q35",
      "caption": "Fig - Question 35"
    }
  },
  {
    "id": "light-2024-q36",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "When light travels from an optically denser medium to an optically less dense medium,\n\n(1) its speed increases.\n\n(2) its colour changes.\n\n(3) it bends away from the normal.",
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
    "answer": "C",
    "hint": "When light travels from an optically denser medium to an optically less dense medium, (1) its speed increases. (2) its colour changes. (3) it bends away from the normal. 33. The speeds of light in medium 𝑋 and medium 𝑌 are 2 × 108 m s⁻¹ and 1.5 × 108 m s⁻¹ respectively What is the critical angle for the interface of the two media? 19.5° 30° 41.8° 48.6° 14 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "light-2024-q37",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "A ray of light travelling in medium A strikes a rectangular block made of material P. Afterwards, the ray of light leaves the rectangular block and travels in medium A again. Suppose light travels slower in medium A than in the block. Which of the following figures best represents the path of the light ray?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "B",
    "image": {
      "src": "./assets/light-2024-q37-fig.png",
      "alt": "Diagram for light-2024-q37",
      "caption": "Fig - Question 37"
    }
  },
  {
    "id": "light-2024-q38",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "Which of the following statements concerning total internal reflection of light is/are correct?\n\n(1) The angle of reflection equals to the critical angle.\n\n(2) Total internal reflection of light will not occur when light enters an optically less dense medium.\n\n(3) The critical angle depends on the refractive index.",
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
    "hint": "Which of the following statements concerning total internal reflection of light is/are correct? (1) The angle of reflection equals to the critical angle. (2) Total internal reflection of light will not occur when light enters an optically less dense medium. (3) The critical angle depends on the refractive index. 1 𝑛. 15 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "light-2024-q39",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "The figure below shows a ray of light entering and leaving a device in the dashed line box. There is a pair of 45°−90°−45° glass prisms in the device. The refractive index of glass is 1.5. How are the glass prisms set?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "C",
    "hint": "The figure below shows a ray of light entering and leaving a device in the dashed line box. There is a pair of 45°−90°−45° glass prisms in the device. The refractive index of glass is 1.5. How are the glass prisms set?",
    "image": {
      "src": "./assets/light-2024-q39-fig.png",
      "alt": "Diagram for light-2024-q39",
      "caption": "Fig - Question 39"
    }
  },
  {
    "id": "light-2024-q40",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "A light ray passes through a spherical air bubble in water. Which of the following represents the path of the emergent ray?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "B",
    "hint": "When light enters air from water it bends away from the normal; when it leaves the air bubble back into water it bends toward the normal.",
    "image": {
      "src": "./assets/light-2024-q40-fig.png",
      "alt": "Diagram for light-2024-q40",
      "caption": "Fig - Question 40"
    }
  },
  {
    "id": "light-2024-q41",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "The figure below shows the path of a light ray travelling through a prism. The refractive index of the glass must be larger than",
    "options": [
      {
        "key": "A",
        "text": "1.00."
      },
      {
        "key": "B",
        "text": "1.33."
      },
      {
        "key": "C",
        "text": "1.41."
      },
      {
        "key": "D",
        "text": "1.52."
      }
    ],
    "answer": "C",
    "hint": "The figure below shows the path of a light ray travelling through a prism. The refractive index of the glass must be larger than 1.00. 1.33. 1.41. 1.52.",
    "image": {
      "src": "./assets/light-2024-q41-fig.png",
      "alt": "Diagram for light-2024-q41",
      "caption": "Fig - Question 41"
    }
  },
  {
    "id": "light-2024-q42",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "It is known that the refractive index of ice is lower than that of quartz, which is in turn lower than that of diamond. The figure below shows how a ray of light travels through the three materials. Which of the following combinations is the most appropriate? material A material B material C",
    "options": [
      {
        "key": "A",
        "text": "ice quartz diamond"
      },
      {
        "key": "B",
        "text": "quartz diamond ice"
      },
      {
        "key": "C",
        "text": "ice diamond quartz"
      },
      {
        "key": "D",
        "text": "diamond quartz ice"
      }
    ],
    "answer": "B",
    "hint": "It is known that the refractive index of ice is lower than that of quartz, which is in turn lower than that of diamond. The figure below shows how a ray of light travels through the three materials. Which of the following combinations is the most appropriate? material A material B material C",
    "image": {
      "src": "./assets/light-2024-q42-fig.png",
      "alt": "Diagram for light-2024-q42",
      "caption": "Fig - Question 42"
    }
  },
  {
    "id": "light-2024-q43",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "A light ray travels from medium I to medium IV, as shown in the following figure. Arrange the refractive indices of the media in ascending order.",
    "options": [
      {
        "key": "A",
        "text": "IV < II < I < III"
      },
      {
        "key": "B",
        "text": "III < IV < II < I"
      },
      {
        "key": "C",
        "text": "IV < II < III < I"
      },
      {
        "key": "D",
        "text": "III < I < IV < II"
      }
    ],
    "answer": "A",
    "hint": "16 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024-q43-fig.png",
      "alt": "Diagram for light-2024-q43",
      "caption": "Fig - Question 43"
    }
  },
  {
    "id": "light-2024-q44",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "When a ray of light travels from medium X to medium Y, total internal reflection may occur. The critical angle for the interface between these two media is 50°. The refractive index of medium Y is 1.4. Find the refractive index of medium X.",
    "options": [
      {
        "key": "A",
        "text": "1.07"
      },
      {
        "key": "B",
        "text": "1.31"
      },
      {
        "key": "C",
        "text": "1.83"
      },
      {
        "key": "D",
        "text": "2.18"
      }
    ],
    "answer": "C",
    "hint": "When a ray of light travels from medium X to medium Y, total internal reflection may occur. The critical angle for the interface between these two media is 50°. The refractive index of medium Y is 1.4. Find the refractive index of medium X. 1.07 1.31 1.83 2.18 17 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "light-2024-q45",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "A light ray travels from medium A to medium B at shown. Total internal reflection will occur if the angle of incidence is greater than",
    "options": [
      {
        "key": "A",
        "text": "29.5°."
      },
      {
        "key": "B",
        "text": "39.2°."
      },
      {
        "key": "C",
        "text": "42.8°."
      },
      {
        "key": "D",
        "text": "46.9°."
      }
    ],
    "answer": "D",
    "hint": "39.2°. 42.8°. 1 𝑛, 𝑛= 1.49. 1.49 sin 30° = sin 𝜃, 𝜃= 48.3° Since the light ray bend toward normal when enter B from A, B is a denser medium. 𝑛𝐴sin 50° = 𝑛𝐵sin 34° 𝑛𝐴 𝑛𝐵= 0.729974492 sin 𝐶= 𝑛𝐴 𝑛𝐵 , sin 𝐶= 0.729974492 𝐶= 46.9°",
    "image": {
      "src": "./assets/light-2024-q45-fig.png",
      "alt": "Diagram for light-2024-q45",
      "caption": "Fig - Question 45"
    }
  },
  {
    "id": "light-2024-q46",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "A ray of light travels from air into a medium as shown. The angle of incidence is then varied. Which of the following statements is correct?",
    "options": [
      {
        "key": "A",
        "text": "Total internal reflection occurs when the angle of incidence is larger than 29°."
      },
      {
        "key": "B",
        "text": "Total internal reflection occurs when the angle of incidence is larger than 40°."
      },
      {
        "key": "C",
        "text": "Total internal reflection occurs when the angle of incidence is larger than 49°."
      },
      {
        "key": "D",
        "text": "Total internal reflection would never occur no matter what the angle of incidence is."
      }
    ],
    "answer": "D",
    "image": {
      "src": "./assets/light-2024-q46-fig.png",
      "alt": "Diagram for light-2024-q46",
      "caption": "Fig - Question 46"
    }
  },
  {
    "id": "light-2024-q47",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "A light ray enters a plastic prism. The critical angle of the plastic is 42°. Which of the following ray diagrams is correct?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "C",
    "image": {
      "src": "./assets/light-2024-q47-fig.png",
      "alt": "Diagram for light-2024-q47",
      "caption": "Fig - Question 47"
    }
  },
  {
    "id": "light-2024-q48",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A ray of light strikes the water-air boundary at an angle of incidence of 45° as shown. It is known that the refractive index of water is 1.33. Which of the subsequent paths of the light ray is/are possible.",
    "options": [
      {
        "key": "A",
        "text": "X only"
      },
      {
        "key": "B",
        "text": "Z only"
      },
      {
        "key": "C",
        "text": "X and Y only"
      },
      {
        "key": "D",
        "text": "X and Z only"
      }
    ],
    "answer": "D",
    "image": {
      "src": "./assets/light-2024-q48-fig.png",
      "alt": "Diagram for light-2024-q48",
      "caption": "Fig - Question 48"
    }
  },
  {
    "id": "light-2024-q49",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A light ray is directed from medium X to a glass and then towards air as shown. All interfaces are parallel. Find the reflective index of X.",
    "options": [
      {
        "key": "A",
        "text": "1.14"
      },
      {
        "key": "B",
        "text": "1.31"
      },
      {
        "key": "C",
        "text": "1.56"
      },
      {
        "key": "D",
        "text": "Cannot be determined"
      }
    ],
    "answer": "B",
    "hint": "Use Snell's law at each parallel interface to relate the refractive indices.",
    "image": {
      "src": "./assets/light-2024-q49-fig.png",
      "alt": "Diagram for light-2024-q49",
      "caption": "Fig - Question 49"
    }
  },
  {
    "id": "light-2024-q50",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A boy looks at a point P at the bottom of a tank filled with water along the direction AB as shown in the figure. The depth and the refractive index of water are 10 cm and 1.33 respectively. Find the distance 𝑥 between point P and the edge of the tank.",
    "options": [
      {
        "key": "A",
        "text": "3.6 cm"
      },
      {
        "key": "B",
        "text": "6.3 cm"
      },
      {
        "key": "C",
        "text": "7.5 cm"
      },
      {
        "key": "D",
        "text": "10 cm"
      }
    ],
    "answer": "B",
    "hint": "6.3 cm 7.5 cm 2 𝑚: sin 𝐶= 1 1.33, 𝐶= 48.7° ℎ= (1) tan(90° −48.7°) = 0.88 𝑚",
    "image": {
      "src": "./assets/light-2024-q50-fig.png",
      "alt": "Diagram for light-2024-q50",
      "caption": "Fig - Question 50"
    }
  },
  {
    "id": "light-2024-q51",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A small fish hides from a fisherman under the centre of a floating circular dish with diameter of 2 m, as shown in the following diagram. If the fish does not want the fisherman to see it and it moves only vertically, how far can the fish move down the water? (Given: refractive index of water = 1.33)",
    "options": [
      {
        "key": "A",
        "text": "0.53 m"
      },
      {
        "key": "B",
        "text": "0.66 m"
      },
      {
        "key": "C",
        "text": "0.75 m"
      },
      {
        "key": "D",
        "text": "0.88 m"
      }
    ],
    "answer": "D",
    "hint": "0.53 m 0.66 m 0.75 m 0.88 m 50. A boy looks at a point P at the bottom of a tank filled with water along the direction AB as shown in the figure. The depth and the refractive index of water are 10 cm and 1.33 respectively. Find the distance 𝑥 between point P and the edge of the tank. 6.3 cm 7.5 cm 2 𝑚: sin 𝐶= 1 1.33, 𝐶= 48.7° ℎ= (1) tan(90° −48.7°) = 0.88 𝑚 48. A ray of light strikes the water-air boundary at an angle of incidence of 45° as shown. It is known that the refractive index of water is 1.33. Which of the subsequent paths of the light ray is/are possible.",
    "image": {
      "src": "./assets/light-2024-q51-fig.png",
      "alt": "Diagram for light-2024-q51",
      "caption": "Fig - Question 51"
    }
  },
  {
    "id": "light-2024-q52",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A diver is diving in the sea and his eyes are h m below the water surface. The refractive index of water is 1.33. As the diver looks upwards, the sky is compressed into a circular patch of diameter 6.84 m at the water surface. Find h.",
    "options": [
      {
        "key": "A",
        "text": "2 m"
      },
      {
        "key": "B",
        "text": "3 m"
      },
      {
        "key": "C",
        "text": "4 m"
      },
      {
        "key": "D",
        "text": "5 m"
      }
    ],
    "answer": "B",
    "hint": "1.33. As the diver looks upwards, the sky is compressed into a circular patch of diameter 6.84 m at the water surface. Find h. 2 m 3 m 4 m 5 m",
    "image": {
      "src": "./assets/light-2024-q52-fig.png",
      "alt": "Diagram for light-2024-q52",
      "caption": "Fig - Question 52"
    }
  },
  {
    "id": "light-2024-q53",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "Which diagram below correctly show the spectrum formed from white light by a glass prism",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "B",
    "hint": "Which diagram below correctly show the spectrum formed from white light by a glass prism",
    "image": {
      "src": "./assets/light-2024-q53-fig.png",
      "alt": "Diagram for light-2024-q53",
      "caption": "Fig - Question 53"
    }
  },
  {
    "id": "light-2024-q54",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "Two coloured light rays, X and Y, travel from glass to vacuum at different angles of incidence. They travel along the same path in vacuum as shown.\n\nWhich of the following statements are correct?\n\n(1) The refractive index of the X is less than that of Y\n\n(2) The speed of X in glass less than that of Y\n\n(3) If X strikes the glass-vacuum boundary at the angle of incidence the same as that of Y, total internal reflection does not occur",
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
    "hint": "Two coloured light rays, X and Y, travel from glass to vacuum at different angles of incidence. They travel along the same path in vacuum as shown. Which of the following statements are correct? (1) The refractive index of the X is less than that of Y (2) The speed of X in glass less than that of Y (3) If X strikes the glass-vacuum boundary at the angle of incidence the same as that of Y, total internal reflection does not occur 1 1.33 , 𝐶= 48.75° 6.84(0.5) ℎ = tan 48.75° ℎ= 3.1 𝑚",
    "image": {
      "src": "./assets/light-2024-q54-fig.png",
      "alt": "Diagram for light-2024-q54",
      "caption": "Fig - Question 54"
    }
  },
  {
    "id": "light-2024b-q01",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "What types of light rays do figures (a), (b) and (c) represent? Figure (a) Figure (b) Figure (c)",
    "options": [
      {
        "key": "A",
        "text": "convergent divergent parallel"
      },
      {
        "key": "B",
        "text": "divergent parallel convergent"
      },
      {
        "key": "C",
        "text": "parallel divergent convergent"
      },
      {
        "key": "D",
        "text": "divergent convergent parallel"
      }
    ],
    "answer": "D",
    "hint": "What types of light rays do figures (a), (b) and (c) represent? Figure (a) Figure (b) Figure (c)",
    "image": {
      "src": "./assets/light-2024b-q01-fig.png",
      "alt": "Diagram for light-2024b-q01",
      "caption": "Fig - Question 1"
    }
  },
  {
    "id": "light-2024b-q02",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "A clock is facing a plane mirror on a wall. The figure below shows the image of the clock in the mirror. What is the actual time at this instant?",
    "options": [
      {
        "key": "A",
        "text": "2:58"
      },
      {
        "key": "B",
        "text": "3:02"
      },
      {
        "key": "C",
        "text": "8:58"
      },
      {
        "key": "D",
        "text": "12:13"
      }
    ],
    "answer": "B",
    "hint": "2:58 3:02 8:58 12:13 2 警告: 不可翻印,販賣,違者必究 2024-25 Light revision 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024b-q02-fig.png",
      "alt": "Diagram for light-2024b-q02",
      "caption": "Fig - Question 2"
    }
  },
  {
    "id": "light-2024b-q03",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "The figure below shows a periscope (潛望鏡) which consists of two plane mirrors. A man sees an object F through the periscope. What is the image that he sees?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "D",
    "hint": "The figure below shows a periscope (潛望鏡) which consists of two plane mirrors.",
    "images": [
      {
        "src": "./assets/light-2024b-q03-fig.png",
        "alt": "Diagram for light-2024b-q03",
        "caption": "Fig - Question 3"
      },
      {
        "src": "./assets/light-2024b-q03-fig-2.png",
        "alt": "Options A–D for light-2024b-q03",
        "caption": "Options A–D"
      }
    ]
  },
  {
    "id": "light-2024b-q04",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "Three letters are written on a piece of cardboard, as shown in the figure below. Which of the following can be the image(s) of the cardboard formed by a plane mirror?",
    "options": [
      {
        "key": "A",
        "text": "(2) only"
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
    "hint": "Three letters are written on a piece of cardboard, as shown in the figure below. Which of the following can be the image(s) of the cardboard formed by a plane mirror?",
    "image": {
      "src": "./assets/light-2024b-q04-fig.png",
      "alt": "Diagram for light-2024b-q04",
      "caption": "Fig - Question 4"
    }
  },
  {
    "id": "light-2024b-q05",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "Heidi is standing between two parallel mirrors, M₁ and M₂, with their reflective surfaces facing each other as shown below. When Heidi looks at M₁, she sees multiple images in the mirror. Which of the following is/are the image(s) of Heidi seen in M₁?",
    "options": [
      {
        "key": "A",
        "text": "I₁ only"
      },
      {
        "key": "B",
        "text": "I₁ and I₂ only"
      },
      {
        "key": "C",
        "text": "I₁ and I₃ only"
      },
      {
        "key": "D",
        "text": "I₁, I₃ and I₄ only"
      }
    ],
    "answer": "C",
    "hint": "Heidi is standing between two parallel mirrors, M₁ and M₂, with their reflective surfaces facing each other as shown below. When Heidi looks at M₁, she sees multiple images in the mirror. Which of the following is/are the image(s) of Heidi seen in M₁? 3 警告: 不可翻印,販賣,違者必究 2024-25 Light revision 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024b-q05-fig.png",
      "alt": "Diagram for light-2024b-q05",
      "caption": "Fig - Question 5"
    }
  },
  {
    "id": "light-2024b-q06",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "In the figure below, what is the angle of reflection of the ray on mirror M₂?",
    "options": [
      {
        "key": "A",
        "text": "40°"
      },
      {
        "key": "B",
        "text": "45°"
      },
      {
        "key": "C",
        "text": "50°"
      },
      {
        "key": "D",
        "text": "55°"
      }
    ],
    "answer": "A",
    "hint": "In the figure below, what is the angle of reflection of the ray on mirror M₂? 40° 45° 50° 55°",
    "image": {
      "src": "./assets/light-2024b-q06-fig.png",
      "alt": "Diagram for light-2024b-q06",
      "caption": "Fig - Question 6"
    }
  },
  {
    "id": "light-2024b-q07",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "John is in front of a plane mirror. If the mirror moves away from him at a speed of 2 m s⁻¹, at what speed does his image move away from him?",
    "options": [
      {
        "key": "A",
        "text": "1 m s⁻¹"
      },
      {
        "key": "B",
        "text": "2 m s⁻¹"
      },
      {
        "key": "C",
        "text": "4 m s⁻¹"
      },
      {
        "key": "D",
        "text": "8 m s⁻¹"
      }
    ],
    "answer": "C",
    "hint": "John is in front of a plane mirror. If the mirror moves away from him at a speed of 2 m s⁻¹, at what speed does his image move away from him? 1 m s⁻¹ 2 m s⁻¹ 4 m s⁻¹ 8 m s⁻¹"
  },
  {
    "id": "light-2024b-q08",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "A beam of sunlight is incident on a plane mirror as shown in the figure. The light beam is reflected and hits point P on a wall. How should the mirror be rotated so that the reflected beam hits point Q? Direction of rotation Angle of rotation",
    "options": [
      {
        "key": "A",
        "text": "clockwise 10°"
      },
      {
        "key": "B",
        "text": "clockwise 20°"
      },
      {
        "key": "C",
        "text": "anticlockwise 10°"
      },
      {
        "key": "D",
        "text": "anticlockwise 20°"
      }
    ],
    "answer": "A",
    "hint": "10° 20° 10° 20° 1 2 = 0.5 𝑚 1 −𝑥= 1 2 2𝑥= 1 −𝑥 𝑥= 0.333 𝑚 Required length = 0.5 + 0.333 = 0.833 m 4 警告: 不可翻印,販賣,違者必究 2024-25 Light revision 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024b-q08-fig.png",
      "alt": "Diagram for light-2024b-q08",
      "caption": "Fig - Question 8"
    }
  },
  {
    "id": "light-2024b-q09",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "Three dancers O, P and Q stand in front of a plane mirror as shown. What is the minimum width of the mirror for dancer O to see both dancers P and Q?",
    "options": [
      {
        "key": "A",
        "text": "0.667 m"
      },
      {
        "key": "B",
        "text": "0.833 m"
      },
      {
        "key": "C",
        "text": "1 m"
      },
      {
        "key": "D",
        "text": "1.33 m"
      }
    ],
    "answer": "B",
    "hint": "Three dancers O, P and Q stand in front of a plane mirror as shown. What is the minimum width of the mirror for dancer O to see both dancers P and Q? 0.833 m 1 m",
    "image": {
      "src": "./assets/light-2024b-q09-fig.png",
      "alt": "Diagram for light-2024b-q09",
      "caption": "Fig - Question 9"
    }
  },
  {
    "id": "light-2024b-q10",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "Daisy is sitting on a chair and a clock is installed on the wall at 3 m behind her. She wants to install a plane mirror on the wall at 2 m in front of her so that she can see the image of the clock in the mirror. Daisy’s eyes and the clock are at 1.5 m and 2.7 m above the ground respectively. Find the minimum height of the upper edge of the mirror.",
    "options": [
      {
        "key": "A",
        "text": "0.77 m"
      },
      {
        "key": "B",
        "text": "1.08 m"
      },
      {
        "key": "C",
        "text": "1.84 m"
      },
      {
        "key": "D",
        "text": "1.98 m"
      }
    ],
    "answer": "C",
    "hint": "0.77 m 1.08 m 1.84 m 1.98 m 11. John wants to estimate the speed of a cloud in the following experiment. The cloud is moving horizontally at a height of 3000 m above the ground. He looks at the image of the cloud in a mirror of 0.6 m wide placed on the horizontal ground 1.5 m below his eye level. He finds that the image of the cloud takes 20 s to move across the mirror. What is the approximate speed of the cloud? 2.7 −1.5 −𝑥= 2 2 + 3 5𝑥= 2.4 −2𝑥 𝑥= 0.343 𝑚 Minimum height = 0.343 + 1.5 = 1.84 m Let x m be the distance travelled by the cloud 0.6 𝑥= 1.5 3000 + 1.5 𝑥= 1200.6 𝑚 𝐴𝑝𝑝𝑟𝑜𝑥𝑖𝑚𝑎𝑡𝑒 𝑠𝑝𝑒𝑒𝑑= 1",
    "image": {
      "src": "./assets/light-2024b-q10-fig.png",
      "alt": "Diagram for light-2024b-q10",
      "caption": "Fig - Question 10"
    }
  },
  {
    "id": "light-2024b-q11",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "John wants to estimate the speed of a cloud in the following experiment. The cloud is moving horizontally at a height of 3000 m above the ground. He looks at the image of the cloud in a mirror of 0.6 m wide placed on the horizontal ground 1.5 m below his eye level. He finds that the image of the cloud takes 20 s to move across the mirror. What is the approximate speed of the cloud?",
    "options": [
      {
        "key": "A",
        "text": "0.03 ms⁻¹"
      },
      {
        "key": "B",
        "text": "0.06 ms⁻¹"
      },
      {
        "key": "C",
        "text": "60 ms⁻¹"
      },
      {
        "key": "D",
        "text": "150 ms⁻¹"
      }
    ],
    "answer": "C",
    "hint": "John wants to estimate the speed of a cloud in the following experiment. The cloud is moving horizontally at a height of 3000 m above the ground. He looks at the image of the cloud in a mirror of 0.6 m wide placed on the horizontal ground 1.5 m below his eye level. He finds that the image of the cloud takes 20 s to move across the mirror. What is the approximate speed of the cloud? 2.7 −1.5 −𝑥= 2 2 + 3 5𝑥= 2.4 −2𝑥 𝑥= 0.343 𝑚 Minimum height = 0.343 + 1.5 = 1.84 m Let x m be the distance travelled by the cloud 0.6 𝑥= 1.5 3000 + 1.5 𝑥= 1200.6 𝑚 𝐴𝑝𝑝𝑟𝑜𝑥𝑖𝑚𝑎𝑡𝑒 𝑠𝑝𝑒𝑒𝑑= 1200.6 20 ≈60 𝑚𝑠−1 5 警告: 不可翻印,販賣,",
    "image": {
      "src": "./assets/light-2024b-q11-fig.png",
      "alt": "Diagram for light-2024b-q11",
      "caption": "Fig - Question 11"
    }
  },
  {
    "id": "light-2024b-q12",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "Ivan of height 1.8 m checks his appearance from a plane mirror before he leaves home for school. His eyes are 10 cm below the top of his head. The ray diagram below shows that he can just see his whole body in the mirror.\n\nWhich of the following statements is/are correct?\n\n(1) The length of the mirror is 0.9 m.\n\n(2) His image will be larger if he walks towards the mirror.\n\n(3) He can only see part of his image if he walks towards the mirror.",
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
    "hint": "Ivan of height 1.8 m checks his appearance from a plane mirror before he leaves home for school. His eyes are 10 cm below the top of his head. The ray diagram below shows that he can just see his whole body in the mirror. Which of the following statements is/are correct? (1) The length of the mirror is 0.9 m. (2) His image will be larger if he walks towards the mirror. (3) He can only see part of his image if he walks towards the mirror. 13. A meter rule PQ with a small hole drilled at the 25 cm mark is held vertically as shown. A plane mirror MN is placed in front of the ruler and parallel to",
    "image": {
      "src": "./assets/light-2024b-q12-fig.png",
      "alt": "Diagram for light-2024b-q12",
      "caption": "Fig - Question 12"
    }
  },
  {
    "id": "light-2024b-q13",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "A meter rule PQ with a small hole drilled at the 25 cm mark is held vertically as shown. A plane mirror MN is placed in front of the ruler and parallel to it. If an observer looks at the mirror through the hole closely, state the portion of the meter ruler that he can see.",
    "options": [
      {
        "key": "A",
        "text": "5 cm to 30 cm"
      },
      {
        "key": "B",
        "text": "5 cm to 35 cm"
      },
      {
        "key": "C",
        "text": "10 cm to 35 cm"
      },
      {
        "key": "D",
        "text": "15 cm to 30 cm"
      }
    ],
    "answer": "B",
    "image": {
      "src": "./assets/light-2024b-q13-fig.png",
      "alt": "Diagram for light-2024b-q13",
      "caption": "Fig - Question 13"
    }
  },
  {
    "id": "light-2024b-q14",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "Which of the following statement(s) about the virtual image is/are correct?\n\n(1) Virtual image must be erect.\n\n(2) Virtual image cannot be captured by a camera.\n\n(3) Virtual image can be seen by the naked eyes.",
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
    "hint": "Which of the following statement(s) about the virtual image is/are correct? (1) Virtual image must be erect. (2) Virtual image cannot be captured by a camera. (3) Virtual image can be seen by the naked eyes. 6 警告: 不可翻印,販賣,違者必究 2024-25 Light revision 薈進教育中心 Unit Education Tel: 98583618 16. A light ray is entering an air bubble inside water as shown on the right. Which part best represents the emerging ray? 17. A ray of light passes through media X, Y and Z as shown. Which of the following statements about the three media are correct? (1) Z is optically denser than X. (2) Light travels the faste"
  },
  {
    "id": "light-2024b-q15",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A light ray enters a semicircular glass block as shown.\n\nWhich of the following equations is/are correct?\n\n(1) i = r1\n\n(2) Refractive index of glass = sin r2 / sin i\n\n(3) r1 = r2",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
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
    "hint": "By the law of reflection at the flat surface, i = r1. Snell's law gives n = sin r2 / sin i (glass to air). r1 and r2 are not equal in general.",
    "image": {
      "src": "./assets/light-2024b-q15-fig.png",
      "alt": "Diagram for light-2024b-q15",
      "caption": "Fig - Question 15"
    }
  },
  {
    "id": "light-2024b-q16",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "A light ray is entering an air bubble inside water as shown on the right. Which part best represents the emerging ray?",
    "options": [
      {
        "key": "A",
        "text": "Path"
      },
      {
        "key": "B",
        "text": "Path"
      },
      {
        "key": "C",
        "text": "Path"
      },
      {
        "key": "D",
        "text": "Path"
      }
    ],
    "answer": "A",
    "image": {
      "src": "./assets/light-2024b-q16-fig.png",
      "alt": "Diagram for light-2024b-q16",
      "caption": "Fig - Question 16"
    }
  },
  {
    "id": "light-2024b-q17",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A ray of light passes through media X, Y and Z as shown.\n\nWhich of the following statements about the three media are correct?\n\n(1) Z is optically denser than X.\n\n(2) Light travels the fastest in X.\n\n(3) Y has the greatest refractive index.",
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
    "image": {
      "src": "./assets/light-2024b-q17-fig.png",
      "alt": "Diagram for light-2024b-q17",
      "caption": "Fig - Question 17"
    }
  },
  {
    "id": "light-2024b-q18",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "A light ray passes from air into water (refractive index 1.33). What is the angle between the reflected ray and the refracted ray?",
    "options": [
      {
        "key": "A",
        "text": "97°"
      },
      {
        "key": "B",
        "text": "105°"
      },
      {
        "key": "C",
        "text": "111°"
      },
      {
        "key": "D",
        "text": "117°"
      }
    ],
    "answer": "D",
    "hint": "97° 105° 111° 117° 1sin (90° −50°) = 1.33𝑠𝑖𝑛𝜃𝑤 𝜃𝑤= 28.9° 2.5 × 108 = 1.2 𝑛𝑋𝑠𝑖𝑛𝜃𝑋= 𝑛𝑌𝑠𝑖𝑛𝜃𝑌 1.2𝑠𝑖𝑛40° = 𝑛𝑌𝑠𝑖𝑛25° 𝑛𝑌= 1.83 𝑛𝑎𝑠𝑖𝑛𝜃𝑎= 𝑛𝑟𝑠𝑖𝑛𝜃𝑟 1𝑠𝑖𝑛60° = 1.621𝑠𝑖𝑛𝜃𝑟 𝜃𝑟= 32.3° 𝑛𝑎𝑠𝑖𝑛𝜃𝑎= 𝑛𝑏𝑠𝑖𝑛𝜃𝑏 1𝑠𝑖𝑛60° = 1.639𝑠𝑖𝑛𝜃𝑏 𝜃𝑏= 31.9° 𝑅𝑒𝑞𝑢𝑖𝑟𝑒𝑑 𝑎𝑛𝑔𝑙𝑒= 32.3° −31.9° = 0.4° 0.5 −0 = 1.4 sin C = 1 𝑛𝑏 sin 𝐶= 1 1.4 𝐶= 45.6° 8 警告: 不可翻印,販賣,違者必究 2024-25 Light revision 薈進教育中心 Unit Education Tel: 98583618 22. When a ray of light travels from medium X to medium Y, total internal reflection may occur. The critical angle for the interface between these two media is 50°. The refractive index of medium Y is 1.4. Find the refract",
    "image": {
      "src": "./assets/light-2024b-q18-fig.png",
      "alt": "Diagram for light-2024b-q18",
      "caption": "Fig - Question 18"
    }
  },
  {
    "id": "light-2024b-q19",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A ray of light travels from medium X to medium Y as shown. The speed of light in air and medium X are 3  108 m s⁻¹ and 2.5  108 m s⁻¹ respectively. Find the refractive index of medium Y.",
    "options": [
      {
        "key": "A",
        "text": "1.27"
      },
      {
        "key": "B",
        "text": "1.29"
      },
      {
        "key": "C",
        "text": "1.52"
      },
      {
        "key": "D",
        "text": "1.83"
      }
    ],
    "answer": "A",
    "hint": "1.27 1.29 1.52 1.83",
    "image": {
      "src": "./assets/light-2024b-q19-fig.png",
      "alt": "Diagram for light-2024b-q19",
      "caption": "Fig - Question 19"
    }
  },
  {
    "id": "light-2024b-q20",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "Suppose the refractive indices of the glass for red light and blue light are 1.621 and 1.639 respectively. Find the angle between the paths of red light and blue light in the glass.",
    "options": [
      {
        "key": "A",
        "text": "0.2°"
      },
      {
        "key": "B",
        "text": "0.4°"
      },
      {
        "key": "C",
        "text": "0.6°"
      },
      {
        "key": "D",
        "text": "0.8°"
      }
    ],
    "answer": "B",
    "hint": "Suppose the refractive indices of the glass for red light and blue light are 1.621 and 1.639 respectively. Find the angle between the paths of red light and blue light in the glass. 0.4° 0.6°",
    "image": {
      "src": "./assets/light-2024b-q20-fig.png",
      "alt": "Diagram for light-2024b-q20",
      "caption": "Fig - Question 20"
    }
  },
  {
    "id": "light-2024b-q21",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "A ray of light enters a transparent block from air as shown in Figure a. The angle of incidence i is varied and the corresponding angle of refraction r is measured. A graph of sin i against sin r is obtained (Fig b). What is the critical angle for the interface between the block and air?",
    "options": [
      {
        "key": "A",
        "text": "45.6°"
      },
      {
        "key": "B",
        "text": "44.2°"
      },
      {
        "key": "C",
        "text": "30.0°"
      },
      {
        "key": "D",
        "text": "20.5°"
      }
    ],
    "answer": "B",
    "hint": "45.6° 44.2° 30.0° 20.5°",
    "image": {
      "src": "./assets/light-2024b-q21-fig.png",
      "alt": "Diagram for light-2024b-q21",
      "caption": "Fig - Question 21"
    }
  },
  {
    "id": "light-2024b-q23",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "As shown in the figure, a light ray travelling in the air passes through a transparent block whose refractive index is 1.33. Find θ.",
    "options": [
      {
        "key": "A",
        "text": "26.6°"
      },
      {
        "key": "B",
        "text": "30.4°"
      },
      {
        "key": "C",
        "text": "59.6°"
      },
      {
        "key": "D",
        "text": "63.4°"
      }
    ],
    "answer": "C",
    "hint": "26.6° 59.6° 63.4° 9 警告: 不可翻印,販賣,違者必究 2024-25 Light revision 薈進教育中心 Unit Education Tel: 98583618 26. A ray of light passes from air to media X and then Y as shown. Find the critical angle for the interface between air and medium Y. 27.8° 38.9° 51.1° 62.2°",
    "image": {
      "src": "./assets/light-2024b-q23-fig.png",
      "alt": "Diagram for light-2024b-q23",
      "caption": "Fig - Question 23"
    }
  },
  {
    "id": "light-2024b-q25",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "Which of the following combinations of refractive indices gives the smallest critical angle for the interface between media X and Y? Refractive index of medium X Refractive index of medium Y",
    "options": [
      {
        "key": "A",
        "text": "1.6 1.1"
      },
      {
        "key": "B",
        "text": "1.7 1.1"
      },
      {
        "key": "C",
        "text": "2.0 1.5"
      },
      {
        "key": "D",
        "text": "2.1 1.5"
      }
    ],
    "answer": "C",
    "hint": "Which of the following combinations of refractive indices gives the smallest critical angle for the interface between media X and Y? Refractive index of medium X Refractive index of medium Y 1.6 1.1 1.7 1.1 2.0 1.5 2.1 1.5 1.6 = 0.6875 𝐵: 1.1 1.7 = 0.647 𝐶: 1.5 2.0 = 0.75 𝐷: 1.5 2.1 = 0.714 24. A ray of light is incident from air to an equilateral triangular glass prism at an angle . Its consequent path is shown below. The refractive index of the glass is 1.6. What is ? 14.4° 21.3° 35.6° 42.0°"
  },
  {
    "id": "light-2024b-q26",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "A ray of light passes from air to media X and then Y as shown. Find the critical angle for the interface between air and medium Y.",
    "options": [
      {
        "key": "A",
        "text": "27.8°"
      },
      {
        "key": "B",
        "text": "38.9°"
      },
      {
        "key": "C",
        "text": "51.1°"
      },
      {
        "key": "D",
        "text": "62.2°"
      }
    ],
    "answer": "C",
    "hint": "27.8° 38.9° 51.1° 62.2°",
    "image": {
      "src": "./assets/light-2024b-q26-fig.png",
      "alt": "Diagram for light-2024b-q26",
      "caption": "Fig - Question 26"
    }
  },
  {
    "id": "light-2024b-q27",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "A light ray emerges from a glass block to air as shown below. What is the critical angle for the interface between the glass block and air?",
    "options": [
      {
        "key": "A",
        "text": "20.0°"
      },
      {
        "key": "B",
        "text": "27.7°"
      },
      {
        "key": "C",
        "text": "36.7°"
      },
      {
        "key": "D",
        "text": "51.3°"
      }
    ],
    "answer": "D",
    "hint": "10 警告: 不可翻印,販賣,違者必究 2024-25 Light revision 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/light-2024b-q27-fig.png",
      "alt": "Diagram for light-2024b-q27",
      "caption": "Fig - Question 27"
    }
  },
  {
    "id": "light-2024b-q30",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "Which of the following statements is/are correct?\n\nGiven:\nrefractive index of pure water = 1.33\nrefractive index of peanut oil = 1.47\n\n(1) The apparent depth of a beaker filled with pure water is less than that of the same beaker filled with peanut oil.\n\n(2) In air, the critical angle of peanut oil is smaller than that of pure water.\n\n(3) Total internal reflection may occur when light enters pure water from peanut oil.",
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
    "hint": "Which of the following statements is/are correct? Given: refractive index of pure water = 1.33 refractive index of peanut oil = 1.47 (1) The apparent depth of a beaker filled with pure water is less than that of the same beaker filled with peanut oil. (2) In air, the critical angle of peanut oil is smaller than that of pure water. (3) Total internal reflection may occur when light enters pure water from peanut oil. 1 𝑛 when travelling from the medium to air, the larger the refractive index, the smaller the critical angle. As peanut oil has a larger refractive index, it has a smaller critical a"
  },
  {
    "id": "light-2024b-q31",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A diver is diving in the sea and his eyes are h m below the water surface. The refractive index of water is 1.33. As the diver looks upwards, the sky is compressed into a circular patch of diameter 6.84 m at the water surface. Find h.",
    "options": [
      {
        "key": "A",
        "text": "1 m"
      },
      {
        "key": "B",
        "text": "2 m"
      },
      {
        "key": "C",
        "text": "3 m"
      },
      {
        "key": "D",
        "text": "4 m"
      }
    ],
    "answer": "C",
    "hint": "1.33. As the diver looks upwards, the sky is compressed into a circular patch of diameter 6.84 m at the water surface. Find h. 2 m 3 m",
    "image": {
      "src": "./assets/light-2024b-q31-fig.png",
      "alt": "Diagram for light-2024b-q31",
      "caption": "Fig - Question 31"
    }
  },
  {
    "id": "light-2024b-q32",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "The following diagrams show a light ray hitting a semicircular glass block in different ways. C is the center of the semicircular block. The critical angle of the glass is 42°. Which of the diagrams are correct?",
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
    "hint": "The following diagrams show a light ray hitting a semicircular glass block in different ways. C is the center of the semicircular block. The critical angle of the glass is 42°. Which of the diagrams are correct?",
    "image": {
      "src": "./assets/light-2024b-q32-fig.png",
      "alt": "Diagram for light-2024b-q32",
      "caption": "Fig - Question 32"
    }
  },
  {
    "id": "light-2024b-q33",
    "section": "total-internal-reflection",
    "difficulty": "Applied",
    "stem": "A light ray travels from air to a prism as shown. The refractive index of the prism is 1.4. Which of the following correctly shows the path of the light ray?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "D",
    "hint": "At the first prism-air interface the angle of incidence exceeds the critical angle, so total internal reflection occurs; when light leaves the prism into air it bends away from the normal.",
    "image": {
      "src": "./assets/light-2024b-q33-fig.png",
      "alt": "Diagram for light-2024b-q33",
      "caption": "Fig - Question 33"
    }
  },
  {
    "id": "light-2024b-q34",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "An object is placed in front of an optical device. The device consists of two 45°−90°−45° glass prisms. The critical angle of the glass prism is 42°. Which of the following devices can produce an inverted image?",
    "options": [
      {
        "key": "A",
        "text": "(2) only"
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
    "image": {
      "src": "./assets/light-2024b-q34-fig.png",
      "alt": "Diagram for light-2024b-q34",
      "caption": "Fig - Question 34"
    }
  },
  {
    "id": "light-2024b-q35",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A light ray is directed towards medium X from air as shown. The two interfaces are parallel to each other. The refractive index of medium X is 1.84. Which of the following figures correctly shows the path of the light ray?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "C",
    "image": {
      "src": "./assets/light-2024b-q35-fig.png",
      "alt": "Diagram for light-2024b-q35",
      "caption": "Fig - Question 35"
    }
  },
  {
    "id": "lens-2024-q01",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "In the figure, F, F’ are the foci of the convex lens and AB is an incident ray. Which of the following paths best represents the emergent ray?",
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
    "answer": "B",
    "hint": "In the figure, F, F’ are the foci of the convex lens and AB is an incident ray. Which of the following paths best represents the emergent ray?",
    "image": {
      "src": "./assets/lens-2024-q01-fig.png",
      "alt": "Diagram for lens-2024-q01",
      "caption": "Fig - Question 1"
    }
  },
  {
    "id": "lens-2024-q02",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Which of the following descriptions about a convex lens is/are correct?\n\n(1) A convex lens is a converging lens.\n\n(2) The image formed by a convex lens is always real.\n\n(3) The image formed by a convex lens is always magnified.",
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
    "hint": "Which of the following descriptions about a convex lens is/are correct? (1) A convex lens is a converging lens. (2) The image formed by a convex lens is always real. (3) The image formed by a convex lens is always magnified."
  },
  {
    "id": "lens-2024-q03",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "Some letters are viewed through a lens. The image of the letters is shown in the following figure. If the lens is moved away from the letters, which of the following correctly describes how the appearance of the image changes?",
    "options": [
      {
        "key": "A",
        "text": "Magnified, erect → magnified, inverted → diminished, inverted"
      },
      {
        "key": "B",
        "text": "Magnified, erect → magnified, inverted → more magnified, inverted"
      },
      {
        "key": "C",
        "text": "Magnified, erect → diminished, inverted → more diminished, inverted"
      },
      {
        "key": "D",
        "text": "Magnified, erect → magnified, inverted → more magnified, erect"
      }
    ],
    "answer": "A",
    "hint": "Some letters are viewed through a lens. The image of the letters is shown in the following figure. If the lens is moved away from the letters, which of the following correctly describes how the appearance of the image changes?",
    "image": {
      "src": "./assets/lens-2024-q03-fig.png",
      "alt": "Diagram for lens-2024-q03",
      "caption": "Fig - Question 3"
    }
  },
  {
    "id": "lens-2024-q04",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "A student observes the print on a piece of paper as shown.\n\nWhich of the following statements about the image formed by lens are incorrect?\n\n(1) The image formed is virtual.\n\n(2) The object distance is equal to the focal length of the lens.\n\n(3) When the lens is moved towards the print slightly, the print would be further magnified.",
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
    "hint": "1 𝑓= 1 𝑢− 1 𝑣 , when 𝑢 decrease 𝑣also decrease the image size (2): Virtual image can be formed by a magnifying convex lens. 6 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618 7. 2011 CE MC Q.16 The figure above shows an object O and its image I formed by a lens. Which of the following about the lens used and its position is correct? Type of lens Position of lens",
    "image": {
      "src": "./assets/lens-2024-q04-fig.png",
      "alt": "Diagram for lens-2024-q04",
      "caption": "Fig - Question 4"
    }
  },
  {
    "id": "lens-2024-q05",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "An object is placed in front of a convex lens as shown. When the object moves towards the left, how does the image move?",
    "options": [
      {
        "key": "A",
        "text": "The image moves towards the right and approaches F’"
      },
      {
        "key": "B",
        "text": "The image moves away from F’ on the same side of the object"
      },
      {
        "key": "C",
        "text": "The image towards the left and approaches F."
      },
      {
        "key": "D",
        "text": "The image moves away from F on the opposite side of the object"
      }
    ],
    "answer": "C",
    "image": {
      "src": "./assets/lens-2024-q05-fig.png",
      "alt": "Diagram for lens-2024-q05",
      "caption": "Fig - Question 5"
    }
  },
  {
    "id": "lens-2024-q06",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Which of the following statements about convex lens are correct?\n\n(1) A convex lens is thicker at the centre than at the edge.\n\n(2) A convex lens has two foci.\n\n(3) When parallel rays of light pass through a convex lens, the rays must converge to the focus.",
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
    "hint": "Which of the following statements about convex lens are correct? (1) A convex lens is thicker at the centre than at the edge. (2) A convex lens has two foci. (3) When parallel rays of light pass through a convex lens, the rays must converge to the focus. 1 𝑓= 1 𝑢+ 1 𝑣 , when 𝑢 increase, 𝑣 decrease, the object will move toward"
  },
  {
    "id": "lens-2024-q07",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "2011 CE MC Q.16 The figure above shows an object O and its image I formed by a lens. Which of the following about the lens used and its position is correct? Type of lens Position of lens",
    "options": [
      {
        "key": "A",
        "text": "concave X"
      },
      {
        "key": "B",
        "text": "concave Y"
      },
      {
        "key": "C",
        "text": "convex X"
      },
      {
        "key": "D",
        "text": "convex Y"
      }
    ],
    "answer": "D",
    "hint": "2011 CE MC Q.16 The figure above shows an object O and its image I formed by a lens. Which of the following about the lens used and its position is correct? Type of lens Position of lens",
    "image": {
      "src": "./assets/lens-2024-q07-fig.png",
      "alt": "Diagram for lens-2024-q07",
      "caption": "Fig - Question 7"
    }
  },
  {
    "id": "lens-2024-q08",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "An image is formed by a convex lens as shown. The ray diagram is drawn to scale. Which of the following is the possible object?",
    "options": [
      {
        "key": "A",
        "text": "P only"
      },
      {
        "key": "B",
        "text": "Q only"
      },
      {
        "key": "C",
        "text": "R only"
      },
      {
        "key": "D",
        "text": "All of the above"
      }
    ],
    "answer": "C",
    "hint": "7 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/lens-2024-q08-fig.png",
      "alt": "Diagram for lens-2024-q08",
      "caption": "Fig - Question 8"
    }
  },
  {
    "id": "lens-2024-q09",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "The figure above shows an object and its image formed by a convex lens. What are the positions of the lens and its principal focus? Position of the lens Position of the principal focus",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B."
      },
      {
        "key": "C",
        "text": "B"
      }
    ],
    "answer": "C",
    "hint": "The figure above shows an object and its image formed by a convex lens. What are the positions of the lens and its principal focus? Position of the lens Position of the principal focus",
    "image": {
      "src": "./assets/lens-2024-q09-fig.png",
      "alt": "Diagram for lens-2024-q09",
      "caption": "Fig - Question 9"
    }
  },
  {
    "id": "lens-2024-q10",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "An object O is placed on one side of a convex lens as shown. F and F' are the foci of the lens. At which point is the image formed?",
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
    "answer": "D",
    "image": {
      "src": "./assets/lens-2024-q10-fig.png",
      "alt": "Diagram for lens-2024-q10",
      "caption": "Fig - Question 10"
    }
  },
  {
    "id": "lens-2024-q11",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Two arrows are drawn as shown on a screen, placed at a distance 2f from a converging lens of focal length f. Which of the following diagrams correctly represents the image seen when the screen is viewed through the lens?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "D",
    "hint": "8 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/lens-2024-q11-fig.png",
      "alt": "Diagram for lens-2024-q11",
      "caption": "Fig - Question 11"
    }
  },
  {
    "id": "lens-2024-q12",
    "section": "convex-lens",
    "difficulty": "Foundation",
    "stem": "Human eye consists of a convex lens which forms an image on the retina. What is the nature of the image?",
    "options": [
      {
        "key": "A",
        "text": "Real, erect and diminished"
      },
      {
        "key": "B",
        "text": "Real, inverted and diminished"
      },
      {
        "key": "C",
        "text": "Virtual, erect and diminished"
      },
      {
        "key": "D",
        "text": "Virtual, inverted and diminished"
      }
    ],
    "answer": "B",
    "hint": "Human eye consists of a convex lens which forms an image on the retina. What is the nature of the image? 11. 8 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "lens-2024-q13",
    "section": "convex-lens",
    "difficulty": "Foundation",
    "stem": "An illuminated object is placed 40 cm in front of a convex lens of a focal length 20 cm. What is the nature of image formed?",
    "options": [
      {
        "key": "A",
        "text": "Erect and magnified"
      },
      {
        "key": "B",
        "text": "Erect and is the same size as the object"
      },
      {
        "key": "C",
        "text": "Inverted and diminished"
      },
      {
        "key": "D",
        "text": "Inverted and is the same size as the object"
      }
    ],
    "answer": "D"
  },
  {
    "id": "lens-2024-q14",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "As shown in the figure, an object of height 5 cm is placed 20 cm away from a convex lens of a focal length of 10 cm.\n\nWhich of the following statements are correct?\n\n(1) The image formed has the same size as the object.\n\n(2) The image formed is inverted.\n\n(3) The observer must use a screen in order to see the image.",
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
    "image": {
      "src": "./assets/lens-2024-q14-fig.png",
      "alt": "Diagram for lens-2024-q14",
      "caption": "Fig - Question 14"
    }
  },
  {
    "id": "lens-2024-q15",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "An object of height 5 cm is placed 5 cm in front of a convex lens as shown. The image forms on the same side of the object. The image has a height of 10 cm and is 10 cm away from the mirror.\n\nWhich of the following statements is/are correct?\n\n(1) The image formed as shown above cannot be seen by the observer.\n\n(2) The focal length of the convex lens is 10 cm.\n\n(3) When the object is placed at a position 10 cm away from the lens, the image formed has a height of 2.5 cm.",
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
    "answer": "B",
    "hint": "1 𝑓= 1 0.05 − 1 0.1 , 𝑓= 10 𝑐𝑚 (3) is incorrect, if the object distance is same as the focal length of the convex lens, the image will be formed at infinity. 9 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/lens-2024-q15-fig.png",
      "alt": "Diagram for lens-2024-q15",
      "caption": "Fig - Question 15"
    }
  },
  {
    "id": "lens-2024-q16",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "An object is placed in front of a convex lens. The image formed has the same size as the object. The separation between the object and the image is 40 cm.\n\nWhich of the following statements is/are correct?\n\n(1) The focal length of the convex lens is 20 cm\n\n(2) If the object is move slightly towards the lens, the distance between the object and the image will be larger\n\n(3) If the object is move slightly away from the lens, the image will become smaller",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(1) and (2) only"
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
    "hint": "1 𝑓= 1 𝑢+ 1 𝑣 , when 1 10 = 1 18 + 1 𝑣 , 𝑣= 22.5 𝑐𝑚. When 𝑢 change to 18, the distance between the image and the object become 40.5 𝑐𝑚. (3) is correct, 1 𝑓= 1 𝑢+ 1 𝑣, when 𝑢 increase, 𝑣 decrease, the image will be smaller. 18. Which of the following statements about the following experiment is/are correct? (1) The focal length of the convex lens is equal to the distance between the convex lens and the lamp-housing. (2) The brightness and shape of the image will not change if the plane mirror is moved a little bit backwards. (3) The shape of the image will not change if the upper half of the le"
  },
  {
    "id": "lens-2024-q17",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "An object is placed in front of a lens and a plane mirror as shown. The image is formed at where the object is. What is the focal length of the lens?",
    "options": [
      {
        "key": "A",
        "text": "8 cm"
      },
      {
        "key": "B",
        "text": "15 cm"
      },
      {
        "key": "C",
        "text": "16 cm"
      },
      {
        "key": "D",
        "text": "30 cm"
      }
    ],
    "answer": "D",
    "hint": "15 cm 16 cm",
    "image": {
      "src": "./assets/lens-2024-q17-fig.png",
      "alt": "Diagram for lens-2024-q17",
      "caption": "Fig - Question 17"
    }
  },
  {
    "id": "lens-2024-q18",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "Which of the following statements about the following experiment is/are correct?\n\n(1) The focal length of the convex lens is equal to the distance between the convex lens and the lamp-housing.\n\n(2) The brightness and shape of the image will not change if the plane mirror is moved a little bit backwards.\n\n(3) The shape of the image will not change if the upper half of the lens is covered by a card.",
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
    "answer": "D",
    "hint": "Which of the following statements about the following experiment is/are correct? (1) The focal length of the convex lens is equal to the distance between the convex lens and the lamp-housing. (2) The brightness and shape of the image will not change if the plane mirror is moved a little bit backwards. (3) The shape of the image will not change if the upper half of the lens is covered by a card. 10 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/lens-2024-q18-fig.png",
      "alt": "Diagram for lens-2024-q18",
      "caption": "Fig - Question 18"
    }
  },
  {
    "id": "lens-2024-q19",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "An illuminated letter “R” is placed in front of a lens as shown below and an image is formed on a screen. The object distance is 30 cm and the image distance is 20 cm. If a piece of paper is used to cover one-half of the lens, which of the following describes the change in the image as seen by the observer?",
    "options": [
      {
        "key": "A",
        "text": "The whole image can still be seen but the image becomes dimmer"
      },
      {
        "key": "B",
        "text": "The whole image can still be seen and its brightness remains unchanged"
      },
      {
        "key": "C",
        "text": "Only half of the image can be seen and the image becomes dimmer"
      },
      {
        "key": "D",
        "text": "Only half of the image can be seen and its brightness remains unchanged"
      }
    ],
    "answer": "A",
    "image": {
      "src": "./assets/lens-2024-q19-fig.png",
      "alt": "Diagram for lens-2024-q19",
      "caption": "Fig - Question 19"
    }
  },
  {
    "id": "lens-2024-q20",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Which of the following about real image formed by a single simple lens are correct?\n\n(1) Real images can be seen by naked eye and photographed by camera\n\n(2) Real images must be inverted\n\n(3) A screen must be used to observe the image formed",
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
    "hint": "Which of the following about real image formed by a single simple lens are correct? (1) Real images can be seen by naked eye and photographed by camera (2) Real images must be inverted (3) A screen must be used to observe the image formed 11 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "lens-2024-q21",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "A lens is placed 10 cm in front of a lined paper, as shown in the figure. Only convex lenses can produce a magnified image. Which diagram shows the correct image formed?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "C",
    "hint": "1 𝑓= 1 10 − 1 20 , 𝑓= 20 𝑐𝑚",
    "image": {
      "src": "./assets/lens-2024-q21-fig.png",
      "alt": "Diagram for lens-2024-q21",
      "caption": "Fig - Question 21"
    }
  },
  {
    "id": "lens-2024-q22",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Lens AB forms an image as shown above. What is he focal length of the lens AB?",
    "options": [
      {
        "key": "A",
        "text": "2 cm"
      },
      {
        "key": "B",
        "text": "4 cm"
      },
      {
        "key": "C",
        "text": "5.2 cm"
      },
      {
        "key": "D",
        "text": "8 cm"
      }
    ],
    "answer": "D",
    "hint": "Lens AB forms an image as shown above. What is he focal length of the lens AB?",
    "image": {
      "src": "./assets/lens-2024-q22-fig.png",
      "alt": "Diagram for lens-2024-q22",
      "caption": "Fig - Question 22"
    }
  },
  {
    "id": "lens-2024-q23",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "An object is placed 5 cm in front of a convex lens with a focal length of 3 cm. In applying the lens formula to find the position of the image,\n\nwhich of the following statements is/are correct?\n\n(1) f is −3 cm.\n\n(2) u is +5 cm.\n\n(3) The image is 1.875 cm from the lens on the same side of the object.",
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
        "text": "(3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "B"
  },
  {
    "id": "lens-2024-q24",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "A virtual image is formed by a convex lens of a focal length of 10 cm. The linear magnification of the image is 2. What is the object distance?",
    "options": [
      {
        "key": "A",
        "text": "5 cm"
      },
      {
        "key": "B",
        "text": "10 cm"
      },
      {
        "key": "C",
        "text": "20 cm"
      },
      {
        "key": "D",
        "text": "cannot be determined"
      }
    ],
    "answer": "A",
    "hint": "10 cm 20 cm 1 10 = 1 𝑢− 1 2𝑢 1 10 = 1 2𝑢 𝑢= 5 𝑐𝑚"
  },
  {
    "id": "lens-2024-q25",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "A virtual image is formed by a convex lens of a focal length of 5 cm. The distance between the object and the image is 15 cm. What is the object distance?",
    "options": [
      {
        "key": "A",
        "text": "3.96 cm"
      },
      {
        "key": "B",
        "text": "5.00 cm"
      },
      {
        "key": "C",
        "text": "10 cm"
      },
      {
        "key": "D",
        "text": "19.0 cm"
      }
    ],
    "answer": "A",
    "hint": "5.00 cm 10 cm 1 5 = 1 𝑢− 1 𝑢+15 , 1 5 = 𝑢+15−𝑢 𝑢(𝑢+15) 𝑢2 + 15𝑢= 75 𝑢= 3.96 𝑜𝑟 𝑢= −18.95 (𝑟𝑒𝑗𝑒𝑐𝑡𝑒𝑑) The object distance is 3.96 𝑐𝑚 12 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "lens-2024-q26",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "A student places a magnifying glass 3 cm away from the print of a book. The linear magnification of the image formed is 3. What is the distance between the print and its image?",
    "options": [
      {
        "key": "A",
        "text": "1 cm"
      },
      {
        "key": "B",
        "text": "3 cm"
      },
      {
        "key": "C",
        "text": "6 cm"
      },
      {
        "key": "D",
        "text": "9 cm"
      }
    ],
    "answer": "C",
    "hint": "3 cm 6 cm"
  },
  {
    "id": "lens-2024-q27",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "An object is placed in front of a convex lens and an image is formed behind the lens. The graph above shows the relationship between the object distance u and the image distance v. What is the focal length of the lens?",
    "options": [
      {
        "key": "A",
        "text": "10 cm"
      },
      {
        "key": "B",
        "text": "20 cm"
      },
      {
        "key": "C",
        "text": "30 cm"
      },
      {
        "key": "D",
        "text": "40 cm"
      }
    ],
    "answer": "A",
    "hint": "20 cm 30 cm 1 𝑓= 1 20 + 1 20 𝑓= 10 𝑐𝑚",
    "image": {
      "src": "./assets/lens-2024-q27-fig.png",
      "alt": "Diagram for lens-2024-q27",
      "caption": "Fig - Question 27"
    }
  },
  {
    "id": "lens-2024-q28",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "A student holds a lens 3 cm above a piece of paper. The image of the letters ‘AT’ is shown in the figure below. Its magnification is 3. Find the image distance and the focal length of the lens. Image distance Focal length of the lens",
    "options": [
      {
        "key": "A",
        "text": "1 cm 0.75 cm"
      },
      {
        "key": "B",
        "text": "1 cm 1.5 cm"
      },
      {
        "key": "C",
        "text": "9 cm 2.25 cm"
      },
      {
        "key": "D",
        "text": "9 cm 4.5 cm"
      }
    ],
    "answer": "D",
    "hint": "1 cm 0.75 cm 1 cm 1.5 cm 9 cm 2.25 cm 9 cm 4.5 cm Since the image is erect and magnified, the lens is convex. 1 1 u v f + = . 1 1 1 3 9 4 5 cm . f f + = − = The focal length of the lens is 4.5 cm. 13 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/lens-2024-q28-fig.png",
      "alt": "Diagram for lens-2024-q28",
      "caption": "Fig - Question 28"
    }
  },
  {
    "id": "lens-2024-q29",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "A real image is formed by a convex lens of a focal length of 20 cm. The distance between the object and the image is 80 cm. What is the object distance?",
    "options": [
      {
        "key": "A",
        "text": "20 cm"
      },
      {
        "key": "B",
        "text": "40 cm"
      },
      {
        "key": "C",
        "text": "80 cm"
      },
      {
        "key": "D",
        "text": "160 cm"
      }
    ],
    "answer": "B",
    "hint": "40 cm 80 cm 1 20 = 1 𝑢+ 1 80−𝑢, 1 20 = 80−𝑢+𝑢 𝑢(80−𝑢) 80𝑢−𝑢2 = 1600 𝑢= 40"
  },
  {
    "id": "lens-2024-q30",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "A convex lens is used to form an image of an object clearly on a screen as shown. If the screen is moved away from the lens,\n\nwhich of the following method may lead to the formation of a clear image on the screen again?\n\n(1) The object is fixed while the lens is moved towards the screen\n\n(2) The object is moved towards the lens, keeping the lens position fixed\n\n(3) The object is moved with the lens together, and towards the screen",
    "options": [
      {
        "key": "A",
        "text": "(1) only"
      },
      {
        "key": "B",
        "text": "(1) and (2) only"
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
    "hint": "1 𝑓= 1 𝑢+ 1 𝑣, when 𝑢 increase, 𝑣 decrease, the image will never be located on the screen. (2) is correct, when 𝑢 decrease, 𝑣 increase, which may cause the image fall on the screen again. (3) is correct, since the object and image distance unchanged, moving the object and the lens to the screen may cause the image fall on the screen again.",
    "image": {
      "src": "./assets/lens-2024-q30-fig.png",
      "alt": "Diagram for lens-2024-q30",
      "caption": "Fig - Question 30"
    }
  },
  {
    "id": "lens-2024-q31",
    "section": "convex-lens",
    "difficulty": "Applied",
    "stem": "A student puts an object in front of a convex lens. He varies the object distance u and records the corresponding image distance v. The figure below shows the graph of 1/v against 1/u.\n\nWhich of the following statements about this graph is/are correct?\n\n(1) The x-intercept equals 1/f.\n\n(2) The y-intercept equals 1/f.\n\n(3) The slope equals -1.",
    "options": [
      {
        "key": "A",
        "text": "(3) only"
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
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "D",
    "hint": "From 1/u + 1/v = 1/f, rearrange to 1/v = -1/u + 1/f. The slope is -1; the y-intercept and x-intercept are both 1/f.",
    "image": {
      "src": "./assets/lens-2024-q31-fig.png",
      "alt": "Diagram for lens-2024-q31",
      "caption": "Fig - Question 31"
    }
  },
  {
    "id": "lens-2024-q32",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "A student sets up the following apparatus (Fig a) to study the relationship between the linear magnification m of the image produced by the convex lens and the image distance v. A graph of m against v is obtained (Fig b). If another convex lens of greater refractive index is used, which of the following graphs (in dotted line) best shows the new m–v graph?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "C",
    "hint": "1 𝑢 + 1 𝑣 = 1 𝑓, 𝑣 𝑢 + 1 = 1 𝑓𝑣 m = 1 𝑓𝑣 − 1 The intercept on the vertical axis is always equal to –1. The slope of the m–v graph is . A convex lens of greater refractive index has a shorter focal length f, and its m–v graph has a greater slope. 15 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/lens-2024-q32-fig.png",
      "alt": "Diagram for lens-2024-q32",
      "caption": "Fig - Question 32"
    }
  },
  {
    "id": "lens-2024-q33",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "If F and F ' are the foci of a convex lens, which of the following ray diagrams is/are incorrect?",
    "options": [
      {
        "key": "A",
        "text": "(3) only"
      },
      {
        "key": "B",
        "text": "(1) and (2) only"
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
    "hint": "If F and F ' are the foci of a convex lens, which of the following ray diagrams is/are incorrect?",
    "image": {
      "src": "./assets/lens-2024-q33-fig.png",
      "alt": "Diagram for lens-2024-q33",
      "caption": "Fig - Question 33"
    }
  },
  {
    "id": "lens-2024-q34",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "If F and F ' are the foci of a concave lens, which of the following ray diagrams is/are incorrect?",
    "options": [
      {
        "key": "A",
        "text": "(2) only"
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
    "hint": "If F and F ' are the foci of a concave lens, which of the following ray diagrams is/are incorrect? 16 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618 37. 2011 CE MC Q.16",
    "image": {
      "src": "./assets/lens-2024-q34-fig.png",
      "alt": "Diagram for lens-2024-q34",
      "caption": "Fig - Question 34"
    }
  },
  {
    "id": "lens-2024-q35",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "Which of the following figures are incorrect? (Note: F and F′ are the foci of the concave lens.)",
    "options": [
      {
        "key": "A",
        "text": "(2) only"
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
    "hint": "Which of the following figures are incorrect? (Note: F and F′ are the foci of the concave lens.)",
    "image": {
      "src": "./assets/lens-2024-q35-fig.png",
      "alt": "Diagram for lens-2024-q35",
      "caption": "Fig - Question 35"
    }
  },
  {
    "id": "lens-2024-q36",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "In each of the following diagrams, L is a concave lens and its two principal foci are denoted by F and F’. Which of the ray diagrams is/are possible?",
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
    "answer": "A",
    "hint": "In each of the following diagrams, L is a concave lens and its two principal foci are denoted by F and F’. Which of the ray diagrams is/are possible?",
    "image": {
      "src": "./assets/lens-2024-q36-fig.png",
      "alt": "Diagram for lens-2024-q36",
      "caption": "Fig - Question 36"
    }
  },
  {
    "id": "lens-2024-q37",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "2011 CE MC Q.16 An object is placed in front of a concave lens. Which of the following descriptions about the image formed by the lens is incorrect?",
    "options": [
      {
        "key": "A",
        "text": "It is always virtual"
      },
      {
        "key": "B",
        "text": "It is always diminished"
      },
      {
        "key": "C",
        "text": "It is always between the object and the lens"
      },
      {
        "key": "D",
        "text": "It will be formed at infinity if the object is placed at the focus of the lens"
      }
    ],
    "answer": "D",
    "hint": "2011 CE MC Q.16"
  },
  {
    "id": "lens-2024-q38",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "Which of the following statements about the image formed by a concave lens is/are correct?\n\n(1) It is between the lens and object.\n\n(2) It is always diminished.\n\n(3) It will be formed at infinity if the object is located at the focus of the lens.",
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
    "answer": "B",
    "hint": "Which of the following statements about the image formed by a concave lens is/are correct? (1) It is between the lens and object. (2) It is always diminished. (3) It will be formed at infinity if the object is located at the focus of the lens."
  },
  {
    "id": "lens-2024-q39",
    "section": "concave-lens",
    "difficulty": "Applied",
    "stem": "An object AB is placed at a distance of one focal length 𝑓 in front of a concave lens as shown in the figure. What are the position and the nature of the image? Position Nature",
    "options": [
      {
        "key": "A",
        "text": "at P virtual and erect"
      },
      {
        "key": "B",
        "text": "at Q virtual and erect"
      },
      {
        "key": "C",
        "text": "at R real and inverted"
      },
      {
        "key": "D",
        "text": "at S real and inverted"
      }
    ],
    "answer": "B",
    "hint": "17 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618",
    "image": {
      "src": "./assets/lens-2024-q39-fig.png",
      "alt": "Diagram for lens-2024-q39",
      "caption": "Fig - Question 39"
    }
  },
  {
    "id": "lens-2024-q40",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "A lens is used to look at some words on a piece of paper. The image of the words “PHYSICS” is shown on the right.\n\nWhich of the following statements is/are correct?\n\n(1) The lens is converging lens\n\n(2) The image lies between the paper and the lens\n\n(3) The image is virtual",
    "options": [
      {
        "key": "A",
        "text": "(2) only"
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
    "hint": "39. An object AB is placed at a distance of one focal length 𝑓 in front of a concave lens as shown in the figure. What are the position and the nature of the image? Position Nature 17 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618 42. According to the figure, which of the following about the image 𝐼 is correct? Magnification Image nature 0.5 real 0.5 virtual 2 real 2 virtual 10 20 = 2. Since the image is at the same side of the object, it is virtual. 41. In the following diagram, intervals AB, BC, CD, DE and EF are of equal length. An object is placed at O. When a lens is put in ",
    "image": {
      "src": "./assets/lens-2024-q40-fig.png",
      "alt": "Diagram for lens-2024-q40",
      "caption": "Fig - Question 40"
    }
  },
  {
    "id": "lens-2024-q41",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "In the following diagram, intervals AB, BC, CD, DE and EF are of equal length. An object is placed at O. When a lens is put in front of the object, an image of the object is formed at I.\n\nWhich of the following show(s) the possible position(s), type(s) and focal length(s) of the lens? Position Type Focal length\n\n(1) C Convex lens about 1 interval\n\n(2) F Concave lens about 2 interval\n\n(3) D Convex lens about 1 interval",
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
    "answer": "B",
    "hint": "In the following diagram, intervals AB, BC, CD, DE and EF are of equal length. An object is placed at O. When a lens is put in front of the object, an image of the object is formed at I. Which of the following show(s) the possible position(s), type(s) and focal length(s) of the lens? Position Type Focal length (1) C",
    "image": {
      "src": "./assets/lens-2024-q41-fig.png",
      "alt": "Diagram for lens-2024-q41",
      "caption": "Fig - Question 41"
    }
  },
  {
    "id": "lens-2024-q42",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "According to the figure, which of the following about the image 𝐼 is correct? Magnification Image nature",
    "options": [
      {
        "key": "A",
        "text": "0.5 real"
      },
      {
        "key": "B",
        "text": "0.5 virtual"
      },
      {
        "key": "C",
        "text": "2 real"
      },
      {
        "key": "D",
        "text": "2 virtual"
      }
    ],
    "answer": "B",
    "hint": "0.5 real 0.5 virtual 2 real 2 virtual 10 20 = 2. Since the image is at the same side of the object, it is virtual.",
    "image": {
      "src": "./assets/lens-2024-q42-fig.png",
      "alt": "Diagram for lens-2024-q42",
      "caption": "Fig - Question 42"
    }
  },
  {
    "id": "lens-2024-q43",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "A light ray is refracted by a lens L as shown. Estimate the focal length of the lens.",
    "options": [
      {
        "key": "A",
        "text": "4 cm"
      },
      {
        "key": "B",
        "text": "8 cm"
      },
      {
        "key": "C",
        "text": "12 cm"
      },
      {
        "key": "D",
        "text": "16 cm"
      }
    ],
    "answer": "B",
    "hint": "4 cm 8 cm 12 cm 16 cm For option (1), the object distance is smaller than the focal length of the convex lens, so the image should be formed on the same side as the object. ∴ (1) is incorrect. For option (2), a concave lens should form an image within a focal length from the lens. The image should be on the same side as the object. ∴ (2) is correct. For option (3), the object distance is between f and 2f, so the image distance should be greater than 2f. The image and the object should be on opposite sides of the lens. ∴ (3) is incorrect. 18 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 9",
    "image": {
      "src": "./assets/lens-2024-q43-fig.png",
      "alt": "Diagram for lens-2024-q43",
      "caption": "Fig - Question 43"
    }
  },
  {
    "id": "lens-2024-q44",
    "section": "concave-lens",
    "difficulty": "Applied",
    "stem": "An object of height 5 cm is placed in front of a concave lens of a focal length of 10 cm. Suppose the height of the image is 2.5 cm, what is the image distance?",
    "options": [
      {
        "key": "A",
        "text": "1 cm"
      },
      {
        "key": "B",
        "text": "5 cm"
      },
      {
        "key": "C",
        "text": "10 cm"
      },
      {
        "key": "D",
        "text": "20 cm"
      }
    ],
    "answer": "B",
    "hint": "5 cm 10 cm"
  },
  {
    "id": "lens-2024-q45",
    "section": "concave-lens",
    "difficulty": "Foundation",
    "stem": "An object is placed 30 cm in front of a concave lens. The linear magnification of the image is 0.25. What is the focal length of the lens?",
    "options": [
      {
        "key": "A",
        "text": "7.5 cm"
      },
      {
        "key": "B",
        "text": "10 cm"
      },
      {
        "key": "C",
        "text": "30 cm"
      },
      {
        "key": "D",
        "text": "120 cm"
      }
    ],
    "answer": "B",
    "hint": "10 cm 30 cm 2.5 5 = 0.5, − 1 𝑓= 1 𝑢− 1 0.5𝑢 − 1 10 = − 1 𝑢 , 𝑢= 10 𝑐𝑚 − 1 𝑓= 1 30 − 1 30(0.25) 𝑓= 10 𝑐𝑚 46. A man is reading some print with a concave lens. The lens is 9 cm in front of the print and the linear magnification of the image is 0.4. What is the distance between the print and its image? 5.4 cm 9 cm 19 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "lens-2024-q46",
    "section": "concave-lens",
    "difficulty": "Applied",
    "stem": "A man is reading some print with a concave lens. The lens is 9 cm in front of the print and the linear magnification of the image is 0.4. What is the distance between the print and its image?",
    "options": [
      {
        "key": "A",
        "text": "3.6 cm"
      },
      {
        "key": "B",
        "text": "5.4 cm"
      },
      {
        "key": "C",
        "text": "9 cm"
      },
      {
        "key": "D",
        "text": "12.6 cm"
      }
    ],
    "answer": "B",
    "hint": "5.4 cm 9 cm 19 2025-26 Lens revision MC 薈進教育中心 Unit Education Tel: 98583618"
  },
  {
    "id": "lens-2024-q47",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "An object is placed 12 cm in front of a convex lens. An image is formed 24 cm from the lens. What is the focal length of the lens if the image is:\n\n(1) real;\n\n(2) virtual?",
    "options": [
      {
        "key": "A",
        "text": "real: 24 cm; virtual: 8 cm"
      },
      {
        "key": "B",
        "text": "real: 12 cm; virtual: 8 cm"
      },
      {
        "key": "C",
        "text": "real: 8 cm; virtual: 12 cm"
      },
      {
        "key": "D",
        "text": "real: 8 cm; virtual: 24 cm"
      }
    ],
    "answer": "D"
  },
  {
    "id": "lens-2024-q48",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "In the following diagram, lenses X and Y are made of the same material but have different shapes, while lenses X and Z are made of different materials but have the same shape.\n\nWhich of the following statements is/are correct?\n\n(1) X, Y and Z are diverging lenses.\n\n(2) Y has a shorter focal length than X.\n\n(3) Z has a shorter focal length than X.",
    "options": [
      {
        "key": "A",
        "text": "(2) only"
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
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "D",
    "hint": "In the following diagram, lenses X and Y are made of the same material but have different shapes, while lenses X and Z are made of different materials but have the same shape. Which of the following statements is/are correct? (1) X, Y and Z are diverging lenses. (2) Y has a shorter focal length than X. (3) Z has a shorter focal length than X. 50. A parallel light beam passes through two lenses L1 and L2 as shown. A narrower parallel beam emerges from L2. Which of the following statements must be correct? (1) One principal focus of L1 overlaps one principal focus of L2. (2) The focal length of ",
    "image": {
      "src": "./assets/lens-2024-q48-fig.png",
      "alt": "Diagram for lens-2024-q48",
      "caption": "Fig - Question 48"
    }
  },
  {
    "id": "lens-2024-q49",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "The following diagram shows two parallel light rays passing through two lenses. Which types of lenses are placed in regions P and Q respectively? P Q",
    "options": [
      {
        "key": "A",
        "text": "convex convex"
      },
      {
        "key": "B",
        "text": "convex concave"
      },
      {
        "key": "C",
        "text": "concave convex"
      },
      {
        "key": "D",
        "text": "concave concave"
      }
    ],
    "answer": "C",
    "hint": "The following diagram shows two parallel light rays passing through two lenses. Which types of lenses are placed in regions P and Q respectively? P Q",
    "image": {
      "src": "./assets/lens-2024-q49-fig.png",
      "alt": "Diagram for lens-2024-q49",
      "caption": "Fig - Question 49"
    }
  },
  {
    "id": "lens-2024-q50",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "A parallel light beam passes through two lenses L1 and L2 as shown. A narrower parallel beam emerges from L2.\n\nWhich of the following statements must be correct?\n\n(1) One principal focus of L1 overlaps one principal focus of L2.\n\n(2) The focal length of L1 is longer than that of L2.\n\n(3) Both L1 and L2 are convex lenses.",
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
    "answer": "C",
    "image": {
      "src": "./assets/lens-2024-q50-fig.png",
      "alt": "Diagram for lens-2024-q50",
      "caption": "Fig - Question 50"
    }
  },
  {
    "id": "lens-2526-q01",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "3. Three convex lenses, A, B and C, of focal lengths fA, fB and fC respectively, are used to refract some light rays as shown. Which of the following is correct?",
    "options": [
      {
        "key": "A",
        "text": "fA > fB = fC"
      },
      {
        "key": "B",
        "text": "fA = fB < fC"
      },
      {
        "key": "C",
        "text": "fA < fB = fC"
      },
      {
        "key": "D",
        "text": "fA = fB > fC"
      }
    ],
    "answer": "B",
    "hint": "3. Three convex lenses, A, B and C, of focal lengths fA, fB and fC respectively, are used to refract some light rays as shown. Which of the following is correct? 4. 2 薈進教育中心 Unit Education Tel: 98583618 2025-26 Lens revision",
    "image": {
      "src": "./assets/lens-2526-q01-fig.png",
      "alt": "Diagram for lens-2526-q01",
      "caption": "Fig - Question 1"
    }
  },
  {
    "id": "lens-2526-q02",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Which of the following optical device will always form a virtual image of a real object regardless of how far the object is away from the device?\n\n(1) Plane mirror\n\n(2) Convex lens\n\n(3) Concave lens",
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
    "answer": "B"
  },
  {
    "id": "lens-2526-q03",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Three convex lenses, A, B and C, of focal lengths fA, fB and fC respectively, are used to refract some light rays as shown. Which of the following is correct?",
    "options": [
      {
        "key": "A",
        "text": "fA > fB = fC"
      },
      {
        "key": "B",
        "text": "fA = fB < fC"
      },
      {
        "key": "C",
        "text": "fA < fB = fC"
      },
      {
        "key": "D",
        "text": "fA = fB > fC"
      }
    ],
    "answer": "D",
    "hint": "Three convex lenses, A, B and C, of focal lengths fA, fB and fC respectively, are used to refract some light rays as shown. Which of the following is correct?",
    "image": {
      "src": "./assets/lens-2526-q03-fig.png",
      "alt": "Diagram for lens-2526-q03",
      "caption": "Fig - Question 3"
    }
  },
  {
    "id": "lens-2526-q05",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "A beam of light ray is incident on a convex lens (with foci F and F') from the left as shown in the figure below. Out of the 4 possible paths (A, B, C and D), which of them best shows the path of the ray as it emerges from the lens?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "D",
    "image": {
      "src": "./assets/lens-2526-q05-fig.png",
      "alt": "Diagram for lens-2526-q05",
      "caption": "Fig - Question 5"
    }
  },
  {
    "id": "lens-2526-q06",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "The figure below shows three light rays (X, Y and Z) originated from an object (O). The paths for light rays X and Y are shown. Which points in the figure will ray Z pass through?",
    "options": [
      {
        "key": "A",
        "text": "Point P"
      },
      {
        "key": "B",
        "text": "Point Q"
      },
      {
        "key": "C",
        "text": "Point R"
      },
      {
        "key": "D",
        "text": "Point S"
      }
    ],
    "answer": "A",
    "image": {
      "src": "./assets/lens-2526-q06-fig.png",
      "alt": "Diagram for lens-2526-q06",
      "caption": "Fig - Question 6"
    }
  },
  {
    "id": "lens-2526-q08",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "If F and F' represent the foci of the concave lens, which of the following ray diagrams correctly shows the path of the light ray through the concave lens?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "answer": "D",
    "image": {
      "src": "./assets/lens-2526-q08-fig.png",
      "alt": "Diagram for lens-2526-q08",
      "caption": "Fig - Question 8"
    }
  },
  {
    "id": "lens-2526-q09",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Which of the rays in the following ray diagram is inconsistent with others?",
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
    "answer": "B",
    "image": {
      "src": "./assets/lens-2526-q09-fig.png",
      "alt": "Diagram for lens-2526-q09",
      "caption": "Fig - Question 9"
    }
  },
  {
    "id": "lens-2526-q10",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "A distant object gradually approaches a convex lens along its principal axis. The image formed will\n\n(1) remain inverted.\n\n(2) change from real to virtual after the object passes through the principal focus of the lens.\n\n(3) increase in size before the object reaches the principal focus of the lens.",
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
        "text": "(2) and (3) only"
      },
      {
        "key": "D",
        "text": "(1), (2) and (3)"
      }
    ],
    "answer": "C",
    "hint": "4 薈進教育中心 Unit Education Tel: 98583618 2025-26 Lens revision"
  },
  {
    "id": "lens-2526-q11",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Two parallel light rays pass through a lens as shown. They intersected at a point 15 cm away from the lens on the right.\n\nWhich of the following statements is/are correct?\n\n(1) If both rays shift downwards slightly, the point of intersection will shift downwards.\n\n(2) If both rays shift to the left slightly, the point of intersection will remain unchanged.\n\n(3) The focal length of the lens is 15 cm.",
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
    "image": {
      "src": "./assets/lens-2526-q11-fig.png",
      "alt": "Diagram for lens-2526-q11",
      "caption": "Fig - Question 11"
    }
  },
  {
    "id": "lens-2526-q12",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Lenses A and B have the same size and shape but are made of materials X and Y respectively. Suppose material X has a lower refractive index than material Y.\n\nWhich of the following statements is/are correct?\n\n(1) Lens A has a longer focal length than lens B if they are convex lenses.\n\n(2) Lens A has a longer focal length than lens B if they are concave lenses.\n\n(3) Light travels slower in lens A than in lens B.",
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
    "answer": "C"
  },
  {
    "id": "lens-2526-q13",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "The sharp image of a light source is formed at P as shown.\n\nWhich of the following ways can give a sharp image of the light source on the screen?\n\n(1) Place another convex lens in front of the lens.\n\n(2) Move the light source farther away from the lens.\n\n(3) Replace the convex lens by another one of longer focal length.",
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
    "hint": "(1) and (2) are correct, since that lens A have a smaller refractive index, light ray will be reflected lesser thus it will have a smaller focal length. (3) is incorrect, light travel slower in material that have greater refractive index. 5 薈進教育中心 Unit Education Tel: 98583618 2025-26 Lens revision",
    "image": {
      "src": "./assets/lens-2526-q13-fig.png",
      "alt": "Diagram for lens-2526-q13",
      "caption": "Fig - Question 13"
    }
  },
  {
    "id": "lens-2526-q14",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "A magnifying glass is used to read some small print in a book. The glass is placed 3 cm from the book and the magnification is 3. What is the distance between the book and the image of the print?",
    "options": [
      {
        "key": "A",
        "text": "1 cm"
      },
      {
        "key": "B",
        "text": "6 cm"
      },
      {
        "key": "C",
        "text": "9 cm"
      },
      {
        "key": "D",
        "text": "12 cm"
      }
    ],
    "answer": "B"
  },
  {
    "id": "lens-2526-q15",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "When an object is placed 10 cm in front of a lens, an erect image with a magnification of 1.5 is formed. What is the focal length of the lens?",
    "options": [
      {
        "key": "A",
        "text": "3.33 cm"
      },
      {
        "key": "B",
        "text": "6 cm"
      },
      {
        "key": "C",
        "text": "10 cm"
      },
      {
        "key": "D",
        "text": "30 cm"
      }
    ],
    "answer": "D"
  },
  {
    "id": "lens-2526-q16",
    "section": "concave-lens",
    "difficulty": "Standard",
    "stem": "An object is placed 20 cm from a concave lens of focal length 15 cm. What is the image distance?",
    "options": [
      {
        "key": "A",
        "text": "0.12 cm"
      },
      {
        "key": "B",
        "text": "5 cm"
      },
      {
        "key": "C",
        "text": "8.6 cm"
      },
      {
        "key": "D",
        "text": "60 cm"
      }
    ],
    "answer": "C"
  }
];

export const QUIZ_ITEMS = [...MCQ_ITEMS, ...QUIZ_EXERCISES];
