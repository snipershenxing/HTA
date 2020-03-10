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

const DialogueWF =
{
  1: 
  {
    text: "Hello, this is Sharrel",
    nextDialogue: [2,3,4],
  },
  2: 
  {
    text: "Our Pleasure.",
    nextDialogue: [3,4,5],
  },
  3:
  {
      text: "It’s always so nice to see you and have an opportunity to talk about the aquarium",
      nextDialogue: [6],
  },
  4:
  {
      text: "I thought it was time that I updated you two on what’s happening at the Aquarium",
      nextDialogue: [7],
  },
  5:
  {
      text: "Based on our last conversation, I am excited to share some of our new research initiatives.",
      nextDialogue: [8],
  },
  6:
  {
      text: "We have been well. Franco mentioned you had some news for us about the aquarium.",
      nextDialogue: [9,10,11],
  },
  7:
  {
      text: "We would be interested in hearing more.",
      nextDialogue: [10,11],
  },
  8:
  {
      text: "That sounds exciting. We are pleased the aquarium is moving in this direction.",
      nextDialogue: [11,12,13],
  },
  9:
  {
      text: "We have so much going on. Where do I start? The touch tank is open and the new research program is up and running",
      nextDialogue: [14],
  },
  10:
  {
      text: "I’m excited to share that we have increased attendance by 20% and we are on track to meet our goals",
      nextDialogue: [15],
  },
  11:
  {
      text: "We are really starting to see the potential for meaningful research on climate change.",
      nextDialogue: [16],
  },
  12:
  {
      text: "There is so much untapped potential in our programs. We don’t want to be thought of only as an attraction for children.",
      nextDialogue: [17],
  },
  13:
  {
      text: "As you know, the climate change research program is essential to our mission and we hope that it will begin to capture important attention.",
      nextDialogue: [18],
  },
  14:
  {
      text: "Natalie: Be careful to direct your conversation to their interests",
      nextDialogue: ["end"],
  },
  15:
  {
      text: "That sounds great. We were hoping to hear about the research initiatives",
      nextDialogue: [19],
  },
  16:
  {
      text: "We’ve been happy to see so many organizations embrace the importance of climate change.",
      nextDialogue: [19, 20],
  },
  17:
  {
      text: "I’m happy hear that.We’ve long hoped the aquarium would move in this direction.",
      nextDialogue: [20, 21],
  },
  18:
  {
      text: "It certainly has the potential and we’re happy to see the aquarium move in this direction.",
      nextDialogue: [21],
  },
  19:
  {
      text: "We’ve just published a detailed brochureand I have copies for both of you",
      nextDialogue: ["Gate1"],
  },
  20:
  {
      text: "I know your time is valuable and I brought an executive summary to review",
      nextDialogue: ["Gate1"],
  },
  21:
  {
      text: "Let’s take a moment to review this presentation I prepared for you.",
      nextDialogue: ["Gate1"],
  },
  "Gate1":
  {
      text:"",
      nextDialogue: ["Gate1-1","Gate1-2","Gate1-3","Gate1-4"],
  },
  "Gate1-4":
  {
      text:"Natalie: Be careful to direct your conversation to their interests",
      nextDialogue: ["end"],
  },
  "Gate1-1":
  {
      text:"Not right now.",
      nextDialogue: ["end"],
  },
  "Gate1-2":
  {
      text:"This is really interesting. We’d like to know more about the specifics.",
      nextDialogue: [26,27,28],
  },
  "Gate1-3":
  {
      text:"This is so exciting. How can we help?",
      nextDialogue: [29],
  },
  26:
  {
      text: "I hoped you would say that. We need tobring our climate change research forward. I think it’s time we talk about investing in our programs.",
      nextDialogue: [30],
  },
  27:
  {
      text: "Thank you for asking. We are confident we will have a director in place and a published paper in the next year.",
      nextDialogue: [31],
  },
  28:
  {
      text: "As we all know, climate change research is crucial, but we need to connect the studies to the work in our hatchery and toxicology lab.",
      nextDialogue: [32],
  },
  29:
  {
      text: "I’m pleased to hear that. Let’s review our pledge form",
      nextDialogue: [33],
  },
  30:
  {
      text: "I understand that funding is important, but we have so many commitments right now. Let’s reconnect after the holidays.",
      nextDialogue: ["end"],
  },
  31:
  {
      text: "Thanks for walking me through everything. I’m impressed with the aquarium’s commitment to research, and I’d like to help.",
      nextDialogue: [34,35],
  },
  32:
  {
      text: "This is so exciting. It is wonderful that your team is so thoughtful about research as a form of engagement and we would like to help.",
      nextDialogue: [35,36],
  },
  33:
  {
      text: "Natalie: Good job! I knew you could do it.",
      nextDialogue: ["end"],
  },
  34:
  {
      text: "I've got you down for $25,000. Can we count on you for that?",
      nextDialogue: [37],
  },
  35:
  {
      text: "Thank you. I was hoping we could count on your support. The total cost will be $50,000. A leadership gift from you can make these plans a reality",
      nextDialogue: [38],
  },
  36:
  {
      text: "Thank you. Your vision is vital to the success of this project. The total cost will be $50,000. Would you consider making a leadership gift of $25,000?",
      nextDialogue: [39],
  },
  37:
  {
      text: "You know $25,000 is a lot of money. Let me think about it and get back to you",
      nextDialogue: ["end"],
  },
  38:
  {
      text: "We’d be happy to do that. I’ll write the first check for $10, 000 and invite my friends to join me.",
      nextDialogue: [40],
  },
  39:
  {
      text: "I’d be thrilled to do that. I would also like to help by inviting some friends who support climate change research to join me.",
      nextDialogue: [40],
  },
  40:
  {
      text: "Thank you for your generosity!",
      nextDialogue: ["end"],
  },
}
export default Dialogue;