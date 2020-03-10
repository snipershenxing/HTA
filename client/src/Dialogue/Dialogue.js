const Dialogue = {
  1: {
    text: "Hello, Dr.Walker's Office.",
    nextDialogue: [2, 3, 4],
    addScore: 0,
  },
  2: {
    text: "Hello Franco, this is (Player Name) from the aquarium. How have you been?",
    nextDialogue: 5,
    addScore: 2,
  },
  3: {
    text: "Hi Franco. It’s (PlayerName) from the aquarium. I hope you are doing well. I’m calling to find a time with Jennifer to follow-up our conversations.",
    nextDialogue: 6,
    addScore: 3,
  },
  4: {
    text: "Hello Franco. This is (PlayerName) from the aquarium. I am calling to find a time to get together with Mrs.Walker.",
    nextDialogue: 7,
    addScore: 1,
  },
  5: {
    text: "I'm doing well. What is this call regarding?",
    nextDialogue: [8, 9],
    addScore: 0,
  },
  6: {
    text: "Oh hi, yes, (PlayerName). We have a meeting in a minute, but I can talk for a bit now. Anything you want me to share with Jennifer?",
    nextDialogue: [9, 10],
    addScore: 0,
  },
  7: {
    text: `That’s “Dr.Walker” I can’t talk for long. What is this regarding?`,
    nextDialogue: [11, 12],
    addScore: 0,
  },
  8: {
    text: `That’s great. I wanted to find a time with Jennifer to talk more about all the exciting things going on, and how she could be involved`,
    nextDialogue: "Gate1",
    addScore: 2,
  },
  9: {
    text: `I have been keeping Jennifer updated, and I have more to tell her.`,
    nextDialogue: "Gate1",
    addScore: 1,
  },
  10: {
    text: `Jennifer asked me to follow up when we had the new research director on board. He started last month and I have exciting news to share with her. We would love her support with the new projects.`,
    nextDialogue: "Gate1",
    addScore: 3,
  },
  11: {
    text: `Oh my, yes. It’s been such a busy week – I can’t believe I did that.. What might work for her? I will try to accommodate my schedule`,
    nextDialogue: "Gate1",
    addScore: 1,
  },
  12: {
    text: `Franco, I am so sorry. I didn’t mean to disrespect Dr. Walker – I would never do something like that.I just wanted to find a time to talk with her.`,
    nextDialogue: "Gate1",
    addScore: 0,
  },

  "Gate1-1": {
    text: `We’re all very busy. I’ll try to find some time on her calendar.`,
    nextDialogue: [19, 20],
    addScore: 0,
  },
  "Gate1-2": {
    text: `I know Jennifer and her husband have been talking about how they’ld want to get involved. I know she is interested, but she and her husband have been traveling. I’ll need to check the calendar.`,
    nextDialogue: [16, 17],
    addScore: 0,
  },
  "Gate1-3": {
    text: `Well, thank you for letting me know. That’s great to hear. I know Jennifer and her husband have been talking about how they’ld want to get involved.`,
    nextDialogue: [17, 18],
    addScore: 0,
  },
};

export default Dialogue;