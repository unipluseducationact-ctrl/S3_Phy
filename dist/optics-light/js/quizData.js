import { QUIZ_EXERCISES } from "./quizExercises.js";
import { QUIZ_LQ_ITEMS } from "./quizLqItems.js";

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
    "section": "reflection",
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
    "section": "refraction-snells-law",
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
    "stem": "In the figure below, what is the angle of reflection on mirror M2?",
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
    "hint": "In the figure below, what is the angle of reflection on mirror M2? 40° 45° 50° 55°",
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
    "stem": "A girl stands in front of a plane mirror. When the mirror is moved towards the girl at a speed of 1 m s−1, her image moves",
    "options": [
      {
        "key": "A",
        "text": "towards the girl at a speed of 1 m s−1."
      },
      {
        "key": "B",
        "text": "towards the girl at a speed of 2 m s−1."
      },
      {
        "key": "C",
        "text": "away from the girl at a speed of 0.5 m s−1."
      },
      {
        "key": "D",
        "text": "away from the girl at a speed of 2 m s−1."
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
    "stem": "A man 1.8 m tall is standing in front of a plane mirror of length p cm. The distance between the bottom of the mirror and the ground is q cm. His eyes are 1.7 m above the ground. In which of the following situations can the man see his entire body in the mirror? p q",
    "options": [
      {
        "key": "A",
        "text": "90"
      },
      {
        "key": "B",
        "text": "90"
      },
      {
        "key": "C",
        "text": "100"
      },
      {
        "key": "D",
        "text": "100"
      }
    ],
    "answer": "B",
    "hint": "90 90 90 85 100 70 100 65",
    "image": {
      "src": "./assets/light-2024-q17-fig.png",
      "alt": "Diagram for light-2024-q17",
      "caption": "Fig - Question 17"
    }
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
    "stem": "John stands in front of a vertical plane mirror AB, where point A is 1.8 m above the ground (see the figure below). John’s eye is 1.6 m above the ground and 1 m from the mirror. Looking into the mirror, he can see a wall 3 m behind him.",
    "options": [
      {
        "key": "A",
        "text": "spider is moving down on the wall. What is the maximum height h of the spider that John can see its image in the mirror?"
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
        "text": "I2 only"
      },
      {
        "key": "B",
        "text": "I3 only"
      },
      {
        "key": "C",
        "text": "I2 and I4 only"
      },
      {
        "key": "D",
        "text": "I2, I3 and I4 only"
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
    "section": "refraction-snells-law",
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
    "stem": "The speeds of light in medium 𝑋 and medium 𝑌 are 2 × 108 m s−1 and 1.5 × 108 m s−1 respectively What is the critical angle for the interface of the two media?",
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
    "hint": "The speeds of light in medium 𝑋 and medium 𝑌 are 2 × 108 m s−1 and 1.5 × 108 m s−1 respectively What is the critical angle for the interface of the two media? 19.5° 30° 41.8° 48.6° 14 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618"
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
    "hint": "When light travels from an optically denser medium to an optically less dense medium, (1) its speed increases. (2) its colour changes. (3) it bends away from the normal. 33. The speeds of light in medium 𝑋 and medium 𝑌 are 2 × 108 m s−1 and 1.5 × 108 m s−1 respectively What is the critical angle for the interface of the two media? 19.5° 30° 41.8° 48.6° 14 警告: 不可翻印,販賣,違者必究 2025-26 Light revision (MC set 1) 薈進教育中心 Unit Education Tel: 98583618"
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
    "section": "refraction-snells-law",
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
    "section": "total-internal-reflection",
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
    "image": {
      "src": "./assets/light-2024b-q03-fig.png",
      "alt": "Diagram for light-2024b-q03",
      "caption": "Fig - Question 3"
    }
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
    "stem": "Heidi is standing between two parallel mirrors, M1 and M2, with their reflective surfaces facing each other as shown below. When Heidi looks at M1, she sees multiple images in the mirror. Which of the following is/are the image(s) of Heidi seen in M1?",
    "options": [
      {
        "key": "A",
        "text": "I1 only"
      },
      {
        "key": "B",
        "text": "I1 and I2 only"
      },
      {
        "key": "C",
        "text": "I1 and I3 only"
      },
      {
        "key": "D",
        "text": "I1, I3 and I4 only"
      }
    ],
    "answer": "C",
    "hint": "Heidi is standing between two parallel mirrors, M1 and M2, with their reflective surfaces facing each other as shown below. When Heidi looks at M1, she sees multiple images in the mirror. Which of the following is/are the image(s) of Heidi seen in M1? 3 警告: 不可翻印,販賣,違者必究 2024-25 Light revision 薈進教育中心 Unit Education Tel: 98583618",
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
    "stem": "In the figure below, what is the angle of reflection of the ray on mirror M2?",
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
    "hint": "In the figure below, what is the angle of reflection of the ray on mirror M2? 40° 45° 50° 55°",
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
    "stem": "John is in front of a plane mirror. If the mirror moves away from him at a speed of 2 m s−1, at what speed does his image move away from him?",
    "options": [
      {
        "key": "A",
        "text": "1 m s−1"
      },
      {
        "key": "B",
        "text": "2 m s−1"
      },
      {
        "key": "C",
        "text": "4 m s−1"
      },
      {
        "key": "D",
        "text": "8 m s−1"
      }
    ],
    "answer": "C",
    "hint": "John is in front of a plane mirror. If the mirror moves away from him at a speed of 2 m s−1, at what speed does his image move away from him? 1 m s−1 2 m s−1 4 m s−1 8 m s−1"
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
        "text": "0.03 ms−1"
      },
      {
        "key": "B",
        "text": "0.06 ms−1"
      },
      {
        "key": "C",
        "text": "60 ms−1"
      },
      {
        "key": "D",
        "text": "150 ms−1"
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
    "stem": "A ray of light travels from medium X to medium Y as shown. The speed of light in air and medium X are 3  108 m s−1 and 2.5  108 m s−1 respectively. Find the refractive index of medium Y.",
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
    "stem": "Which of the following statements is/are correct?\n\nGiven:\nrefractive index of pure water = 1.33 refractive index of peanut oil = 1.47\n\n(1) The apparent depth of a beaker filled with pure water is less than that of the same beaker filled with peanut oil.\n\n(2) In air, the critical angle of peanut oil is smaller than that of pure water.\n\n(3) Total internal reflection may occur when light enters pure water from peanut oil.",
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
    "id": "light-test5-q01",
    "section": "reflection",
    "difficulty": "Foundation",
    "stem": "Which of the following statements is/are correct?\n(1) Virtual images cannot be caught on screen.\n(2) Virtual images cannot be seen by eye.\n(3) Virtual images cannot be photographed by a camera.",
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
    "hint": "Virtual images are formed by diverging rays that appear to diverge from a point behind the mirror. They cannot be projected onto a screen, but they can be seen by the eye or photographed by a camera because the eye/camera lens converges the diverging rays onto the retina/sensor."
  },
  {
    "id": "light-test5-q02",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "A man standing in front of a plane mirror runs towards the mirror at a speed of 2 m s⁻¹. The speed of the image relative to the man is",
    "options": [
      {
        "key": "A",
        "text": "1 m s⁻¹ towards him."
      },
      {
        "key": "B",
        "text": "2 m s⁻¹ towards him."
      },
      {
        "key": "C",
        "text": "3 m s⁻¹ towards him."
      },
      {
        "key": "D",
        "text": "4 m s⁻¹ towards him."
      }
    ],
    "answer": "D",
    "hint": "When the man runs towards the mirror at 2 m s⁻¹, his image also runs towards the mirror at 2 m s⁻¹ from the opposite side. Therefore, the relative speed of the image towards the man is 2 + 2 = 4 m s⁻¹."
  },
  {
    "id": "light-test5-q03",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "Light travels between two media X and Y. If the refractive index of X is greater than the refractive index of Y, which of the following is/are possible ray diagram(s)?",
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
    "hint": "Since refractive index of X is greater than Y, X is optically denser than Y. When light goes from X to Y (denser to less dense), it bends away from the normal, or undergoes total internal reflection if the angle of incidence is greater than the critical angle. When light goes from Y to X (less dense to denser), it bends towards the normal.",
    "image": {
      "src": "./assets/light-test5-q03-fig.png",
      "alt": "Diagram for light-test5-q03",
      "caption": "Fig · Question 3"
    }
  },
  {
    "id": "light-test5-q04",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "A ray of light travelling in air enters a semi-circular glass block as shown above. Different values of the angle of incidence θ and the corresponding values of the angle of refraction ∅ are measured. Which of the following represents the refractive index of the glass?",
    "options": [
      {
        "key": "A",
        "text": "the slope of the graph of sin ∅ against sin θ"
      },
      {
        "key": "B",
        "text": "the slope of the graph θ against ∅"
      },
      {
        "key": "C",
        "text": "the reciprocal of sin θ when ∅ = 90°"
      },
      {
        "key": "D",
        "text": "the reciprocal of sin ∅ when θ = 90°"
      }
    ],
    "answer": "D",
    "hint": "By Snell's law, when light goes from glass to air, n_glass * sin(∅) = n_air * sin(θ). Since n_air = 1, we have n_glass * sin(∅) = sin(θ). If θ = 90°, sin(θ) = 1, so n_glass * sin(∅) = 1, which gives n_glass = 1 / sin(∅). Thus, the refractive index of the glass is the reciprocal of sin(∅) when θ = 90°.",
    "image": {
      "src": "./assets/light-test5-q04-fig.png",
      "alt": "Diagram for light-test5-q04",
      "caption": "Fig · Question 4"
    }
  },
  {
    "id": "light-test5-q05",
    "section": "refraction-snells-law",
    "difficulty": "Applied",
    "stem": "A light ray travels from a perspex plate into air. We know that the refractive index of the perspex plate is 1.47. Which of the following pairs is the possible values of the angle of incidence (i) and angle of refraction (r)?",
    "options": [
      {
        "key": "A",
        "text": "i = 80.0°, r = 53.5°"
      },
      {
        "key": "B",
        "text": "i = 20.0°, r = 50.0°"
      },
      {
        "key": "C",
        "text": "i = 47.4°, r = 30.0°"
      },
      {
        "key": "D",
        "text": "i = 36.0°, r = 60.0°"
      }
    ],
    "answer": "D",
    "hint": "By Snell's law, n_perspex * sin(i) = n_air * sin(r) => 1.47 * sin(i) = sin(r). Let's test the options: For D, 1.47 * sin(36.0°) = 1.47 * 0.5878 ≈ 0.864, and sin(60.0°) ≈ 0.866. This is extremely close and matches the law of refraction."
  },
  {
    "id": "light-test5-q06",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "Dylan and Vera stand in front of the middle of a plane mirror which is 0.8 m wide. Dylan is 0.6 m away from the mirror and Vera is 1 m away from Dylan. Then Dylan starts to walk towards the right at 0.5 m s⁻¹. Vera just cannot see Dylan’s image in the mirror after time t. What is t?",
    "options": [
      {
        "key": "A",
        "text": "0.8 s"
      },
      {
        "key": "B",
        "text": "1.1 s"
      },
      {
        "key": "C",
        "text": "1.5 s"
      },
      {
        "key": "D",
        "text": "2.1 s"
      }
    ],
    "answer": "B",
    "hint": "Using similar triangles and the field of view of the mirror, the maximum distance Dylan can walk to the right from the center while his image is still visible to Vera can be calculated. The field of view limit on the right is reached when Dylan walks 0.55 m. Since speed is 0.5 m s⁻¹, t = 0.55 / 0.5 = 1.1 s.",
    "image": {
      "src": "./assets/light-test5-q06-fig.png",
      "alt": "Diagram for light-test5-q06",
      "caption": "Fig · Question 6"
    }
  }
];

export const QUIZ_ITEMS = [...MCQ_ITEMS, ...QUIZ_EXERCISES, ...QUIZ_LQ_ITEMS];
