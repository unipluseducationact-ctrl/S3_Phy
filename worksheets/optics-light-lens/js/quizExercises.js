const T = (value) => ({ type: "text", value });
const B = (...accept) => ({ type: "blank", accept: [...accept] });
const fillLine = (...segments) => ({ segments });

export const QUIZ_EXERCISES = [
  {
    "id": "optics-tf-01",
    "format": "tf",
    "section": "reflection",
    "difficulty": "Foundation",
    "stem": "The image formed by a plane mirror can be projected onto a screen.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "F",
    "hint": "Plane mirror images are virtual."
  },
  {
    "id": "optics-tf-02",
    "format": "tf",
    "section": "reflection",
    "difficulty": "Foundation",
    "stem": "The image formed by a plane mirror is laterally inverted.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "Left and right are swapped in the mirror image."
  },
  {
    "id": "optics-tf-03",
    "format": "tf",
    "section": "reflection",
    "difficulty": "Standard",
    "stem": "When a plane mirror moves towards an observer at 1 m s−1, the image moves towards the observer at 2 m s−1.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "Image and object distances change together, so relative speed doubles."
  },
  {
    "id": "optics-tf-04",
    "format": "tf",
    "section": "refraction-snells-law",
    "difficulty": "Foundation",
    "stem": "When light travels from an optically denser medium to a less dense medium, it bends away from the normal.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "Speed increases in the less dense medium."
  },
  {
    "id": "optics-tf-05",
    "format": "tf",
    "section": "reflection",
    "difficulty": "Foundation",
    "stem": "Diffuse reflection does not obey the laws of reflection.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "F",
    "hint": "Each ray still obeys the law of reflection; the surface is just rough."
  },
  {
    "id": "optics-tf-06",
    "format": "tf",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "The critical angle for total internal reflection depends on the refractive indices of the two media.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "Critical angle is determined by the ratio of refractive indices."
  },
  {
    "id": "optics-tf-07",
    "format": "tf",
    "section": "convex-lens",
    "difficulty": "Foundation",
    "stem": "A convex lens is a converging lens.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "Convex lenses converge parallel rays."
  },
  {
    "id": "optics-tf-08",
    "format": "tf",
    "section": "concave-lens",
    "difficulty": "Foundation",
    "stem": "A concave lens is a diverging lens.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "Concave lenses spread parallel rays apart."
  },
  {
    "id": "optics-tf-09",
    "format": "tf",
    "section": "convex-lens",
    "difficulty": "Foundation",
    "stem": "A real image can be formed on a screen.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "Real images are formed where light rays actually meet."
  },
  {
    "id": "optics-tf-10",
    "format": "tf",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "When an object is placed at 2F in front of a convex lens, the image is inverted and the same size as the object.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "Object at 2F gives image at 2F with magnification −1."
  },
  {
    "id": "optics-tf-11",
    "format": "tf",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "The human eye forms a real, inverted image on the retina.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "The eye lens converges light to a real image on the retina."
  },
  {
    "id": "optics-tf-12",
    "format": "tf",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "When light travels from air into water, total internal reflection cannot occur.",
    "options": [
      {
        "key": "T",
        "text": "True",
        "textZh": "正確"
      },
      {
        "key": "F",
        "text": "False",
        "textZh": "錯誤"
      }
    ],
    "answer": "T",
    "hint": "TIR requires light to go from denser to less dense medium."
  },
  {
    "id": "optics-fill-01",
    "format": "fill",
    "section": "reflection",
    "difficulty": "Applied",
    "stem": "Fill in the blank — plane mirror motion",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "When a plane mirror moves towards a girl at 1 m s⁻¹, her image moves towards her at "
          },
          {
            "type": "blank",
            "accept": [
              "2",
              "2 m s-1",
              "2 m s⁻¹",
              "2 m/s",
              "2 ms-1"
            ]
          },
          {
            "type": "text",
            "value": " m s⁻¹."
          }
        ]
      }
    ],
    "hint": "Image distance changes at twice the mirror speed."
  },
  {
    "id": "optics-fill-02",
    "format": "fill",
    "section": "refraction-snells-law",
    "difficulty": "Foundation",
    "stem": "Fill in the blank — refractive index",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "The refractive index of water is approximately "
          },
          {
            "type": "blank",
            "accept": [
              "1.33",
              "1.3"
            ]
          },
          {
            "type": "text",
            "value": "."
          }
        ]
      }
    ],
    "hint": "Common value used in S3 optics questions."
  },
  {
    "id": "optics-fill-03",
    "format": "fill",
    "section": "total-internal-reflection",
    "difficulty": "Standard",
    "stem": "Fill in the blank — total internal reflection",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Total internal reflection occurs when light travels from an optically "
          },
          {
            "type": "blank",
            "accept": [
              "denser",
              "more dense",
              "optically denser"
            ]
          },
          {
            "type": "text",
            "value": " medium to a less dense medium, with angle of incidence greater than the critical angle."
          }
        ]
      }
    ],
    "hint": "TIR needs denser-to-less-dense boundary."
  },
  {
    "id": "optics-fill-04",
    "format": "fill",
    "section": "convex-lens",
    "difficulty": "Foundation",
    "stem": "Fill in the blank — lens types",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "A lens that is thicker at the centre than at the edge is a "
          },
          {
            "type": "blank",
            "accept": [
              "convex",
              "converging"
            ]
          },
          {
            "type": "text",
            "value": " lens."
          }
        ]
      }
    ],
    "hint": "Convex lenses converge light."
  },
  {
    "id": "optics-fill-05",
    "format": "fill",
    "section": "concave-lens",
    "difficulty": "Foundation",
    "stem": "Fill in the blank — image types",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "A "
          },
          {
            "type": "blank",
            "accept": [
              "virtual",
              "Virtual"
            ]
          },
          {
            "type": "text",
            "value": " image cannot be formed on a screen."
          }
        ]
      }
    ],
    "hint": "Virtual images are formed where rays appear to meet."
  },
  {
    "id": "optics-fill-06",
    "format": "fill",
    "section": "convex-lens",
    "difficulty": "Standard",
    "stem": "Fill in the blank — lens formula case",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "An object placed "
          },
          {
            "type": "blank",
            "accept": [
              "2F",
              "2f",
              "twice the focal length",
              "at 2F"
            ]
          },
          {
            "type": "text",
            "value": " in front of a convex lens forms an image that is inverted and the same size as the object."
          }
        ]
      }
    ],
    "hint": "Special ray diagram case at 2F.",
    "answer": "2F"
  },
  {
    "id": "optics-fill-07",
    "format": "fill",
    "section": "refraction-snells-law",
    "difficulty": "Standard",
    "stem": "Fill in the blank — Snell's law",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "Snell's law: n₁ sin i = n₂ sin "
          },
          {
            "type": "blank",
            "accept": [
              "r",
              "r.",
              "angle of refraction"
            ]
          },
          {
            "type": "text",
            "value": "."
          }
        ]
      }
    ],
    "hint": "i = angle of incidence, r = angle of refraction."
  },
  {
    "id": "optics-fill-08",
    "format": "fill",
    "section": "refraction-snells-law",
    "difficulty": "Foundation",
    "stem": "Fill in the blank — refraction direction",
    "lines": [
      {
        "segments": [
          {
            "type": "text",
            "value": "When light enters an optically denser medium, it bends "
          },
          {
            "type": "blank",
            "accept": [
              "towards",
              "toward"
            ]
          },
          {
            "type": "text",
            "value": " the normal."
          }
        ]
      }
    ],
    "hint": "Light slows down in a denser medium."
  }
];
