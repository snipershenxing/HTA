const Dialogue = {
  1: {
    text: "Hello, Dr.Walker's Office.",
    nextDialogue: [1],
  },
  2: {
    text: "Hello Franco, this is (Player Name) from the aquarium. How have you been?",
    nextDialogue: 5,
  },
  3: {
    text: "Hi Franco. It’s (PlayerName) from the aquarium. I hope you are doing well. I’m calling to find a time with Jennifer to follow-up our conversations.",
    nextDialogue: 1,
  },
  4: {
    text: "Hello Franco. This is (PlayerName) from the aquarium. I am calling to find a time to get together with Mrs.Walker.",
    nextDialogue: 1,
  },
  5: {
    text: "I'm doing well. What is this call regarding?",
    nextDialogue: [8, 9],
  },
  7: {
    text: `That’s “Dr.Walker” I can’t talk for long. What is this regarding?`,
    nextDialogue: [11, 12],
  }
};

export default Dialogue;