const questions = [
  {
    //Saxo
    question: "Click on this instrument's family !",
    mode: "image",
    src: "./instruments/saxophone.png",
    answers: [
      { text: "brass", correct: true },
      { text: "percussions", correct: false },
      { text: "string", correct: false }
    ]
  },

  {
    //piano
    question: "Click on this instrument's family !",
    mode: "image",
    src: "./instruments/musical-keyboard.png",
    answers: [
      { text: "brass", correct: false },
      { text: "percussions", correct: false },
      { text: "string", correct: true }
    ]
  },
  {
    //saxo
    question: "Click on this instrument's name !",
    mode: "audio",
    src: "./instruments/saxo.mp3",
    answers: [
      { text: "Violin", correct: false },
      { text: "Saxophone", correct: true },
      { text: "Electric Guitar", correct: false }
    ]
  },

  {
    //drum
    question: "Click on this instrument's family !",
    mode: "image",
    src: "./instruments/drum.png",
    answers: [
      { text: "brass", correct: false },
      { text: "percussions", correct: true },
      { text: "string", correct: false }
    ]
  },

  {
    //trumpet
    question: "Click on this instrument's family !",
    mode: "image",
    src: "./instruments/trumpet.png",
    answers: [
      { text: "percussions", correct: false },
      { text: "brass", correct: true },
      { text: "string", correct: false }
    ]
  },

  {
    //elec guitar
    question: "Click on this instrument's family !",
    mode: "image",
    src: "./instruments/guitar.png",
    answers: [
      { text: "string", correct: true },
      { text: "brass", correct: false },
      { text: "percussions", correct: false }
    ]
  },

  {
    //violin
    question: "Click on this instrument's family !",
    mode: "image",
    src: "./instruments/violin.png",
    answers: [
      { text: "brass", correct: false },
      { text: "string", correct: true },
      { text: "percussions", correct: false }
    ]
  },

  {
    //hunting horn
    question: "Click on this instrument's family !",
    mode: "image",
    src: "./instruments/postal-horn_1f4ef.png",
    answers: [
      { text: "percussions", correct: false },
      { text: "string", correct: false },
      { text: "brass", correct: true }
    ]
  },

  {
    //bell
    question: "Click on this instrument's family !",
    mode: "image",
    src: "./instruments/bell.png",
    answers: [
      { text: "brass", correct: false },
      { text: "percussions", correct: true },
      { text: "string", correct: false }
    ]
  },

  {
    //frog
    question: "Surprise! What is this nice frog's family ?",
    mode: "image",
    src: "./tricks/frog.png",
    answers: [
      { text: "Amphibian", correct: true },
      { text: "Percussions", correct: false },
      { text: "Mammal", correct: false }
    ]
  },
  {
    //shell
    question: "Trick time! Will you find ?",
    mode: "image",
    src: "./tricks/shell.png",
    answers: [
      { text: "Mollusc", correct: true },
      { text: "Brass", correct: false },
      { text: "Crustacean", correct: false }
    ]
  },
  {
    //Star
    question: "Tricky trick! Will you guess ?",
    mode: "image",
    src: "./tricks/star.png",
    answers: [
      { text: "Martian", correct: false },
      { text: "Lunar", correct: false },
      { text: "Celestial", correct: true }
    ]
  },

  {
    //piano
    question: "Click on this instrument's name !",
    mode: "audio",
    src: "./instruments/piano.mp3",
    answers: [
      { text: "Piano", correct: true },
      { text: "Hunting Horn", correct: false },
      { text: "Bell", correct: false }
    ]
  },

  {
    //drum
    question: "Click on this instrument's name !",
    mode: "audio",
    src: "./instruments/drum.mp3",
    answers: [
      { text: "Piano", correct: false },
      { text: "Saxophone", correct: false },
      { text: "Drum", correct: true }
    ]
  },

  {
    //trumpet
    question: "Click on this instrument's name !",
    mode: "audio",
    src: "./instruments/trumpet.mp3",
    answers: [
      { text: "Drum", correct: false },
      { text: "Trumpet", correct: true },
      { text: "Electric Guitar", correct: false }
    ]
  },

  {
    //elec guitar
    question: "Click on this instrument's name !",
    mode: "audio",
    src: "./instruments/elecguitar.mp3",
    answers: [
      { text: "Drum", correct: false },
      { text: "Hunting Horn", correct: false },
      { text: "Electric Guitar", correct: true }
    ]
  },
  {
    //violin
    question: "Click on this instrument's name !",
    mode: "audio",
    src: "./instruments/Sad-Violin-D-www.fesliyanstudios.com.mp3",
    answers: [
      { text: "Violin", correct: true },
      { text: "Trumpet", correct: false },
      { text: "Piano", correct: false }
    ]
  },
  {
    //hunting horn
    question: "Click on this instrument's name !",
    mode: "audio",
    src: "./instruments/horn.mp3",
    answers: [
      { text: "Saxophone", correct: false },
      { text: "Bell", correct: false },
      { text: "Hunting Horn", correct: true }
    ]
  },
  {
    // bell
    question: "Click on this instrument's name !",
    mode: "audio",
    src: "./instruments/bell.mp3",
    answers: [
      { text: "Bell", correct: true },
      { text: "Piano", correct: false },
      { text: "Trumpet", correct: false }
    ]
  },

  {
    //frog
    question: "Surprise ! Guess whooaaaat!",
    mode: "audio",
    src: "./tricks/frog.mp3",
    answers: [
      { text: "Pepe the Frog", correct: false },
      { text: "Muppet Frog", correct: false },
      { text: "Well, just a Frog", correct: true }
    ]
  },

  // {
  //   //shell
  //   question: "Now, will you get it ?",
  //   mode: "audio",
  //   src: "/tricks/shell.mp3",
  //   answers: [
  //     { text: "Petrol Shell", correct: false },
  //     { text: "Horn of plenty", correct: false },
  //     { text: "Well, just a shell", correct: true }
  //   ]
  // },

  {
    //Star
    question: "Trick time! What is it??",
    mode: "audio",
    src: "./tricks/star.mp3",
    answers: [
      { text: "Shooting star", correct: true },
      { text: "Ringo Starr", correct: false },
      { text: "JoeyStarr", correct: false }
    ]
  }
];

export default questions;
