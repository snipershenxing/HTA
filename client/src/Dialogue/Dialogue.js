const Dialogue = {
  Franco: {
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

    16: {
      text: `Thank you. I’ll email you with some times.`,
      nextDialogue: "Gate2",
      addScore: 1,
    },
    17: {
      text: `Thank you for sharing that. I know you and the Walkers are all busy. Can they do Tuesday morning or Wednesday later in the day?`,
      nextDialogue: "Gate2",
      addScore: 3,
    },
    18: {
      text: `That’s great to hear. I look forward to talking with them further in the next weeks and exploring their thinking. What time might work in their calendar?`,
      nextDialogue: "Gate2",
      addScore: 3,
    },
    19: {
      text: `Thank you, Franco. I appreciate your assistance. Please let me know how the next couple of weeks look.`,
      nextDialogue: "Gate2",
      addScore: 2,
    },
    20: {
      text: `I’ll check back when you have some more time. I’ll give you a call Monday afternoon.`,
      nextDialogue: "Gate2",
      addScore: 1,
    },

    "Gate2-1": {
      text: `Unfortunately, I do need to go. I’ll let her know you called.`,
      nextDialogue: "End",
      addScore: 0,
    },
    "Gate2-2": {
      text: `Alright – Unfortunately, I do need to go, but I will let her know you called. Could you please follow up later in the week?`,
      nextDialogue: "End",
      addScore: 0,
    },
    "Gate2-3": {
      text: `It looks like they are both available Wednesday at 1:30. I’ll add that to the calendar. Please email me the location.`,
      nextDialogue: "End",
      addScore: 0,
    },
  },

  Walker: {
    1:
    {
      text: "Thanks for meeting me here.",
      nextDialogue: 2,
      addScore: 0,
    },
    2:
    {
      text: "Our Pleasure.",
      nextDialogue: [3, 4, 5],
      addScore: 0,
    },
    3:
    {
      text: "It’s always so nice to see you and have an opportunity to talk about the aquarium",
      nextDialogue: 6,
      addScore: 1,
    },
    4:
    {
      text: "I thought it was time that I updated you two on what’s happening at the Aquarium",
      nextDialogue: 7,
      addScore: 2,
    },
    5:
    {
      text: "Based on our last conversation, I am excited to share some of our new research initiatives.",
      nextDialogue: 8,
      addScore: 4,

    },
    6:
    {
      text: "We have been well. Franco mentioned you had some news for us about the aquarium.",
      nextDialogue: [9, 10, 11],
      addScore: 0,
    },
    7:
    {
      text: "We would be interested in hearing more.",
      nextDialogue: [10, 11],
      addScore: 0,
    },
    8:
    {
      text: "That sounds exciting. We are pleased the aquarium is moving in this direction.",
      nextDialogue: [11, 12, 13],
      addScore: 0,
    },
    9:
    {
      text: "We have so much going on. Where do I start? The touch tank is open and the new research program is up and running",
      nextDialogue: 14,
      addScore: 0,
    },
    10:
    {
      text: "I’m excited to share that we have increased attendance by 20% and we are on track to meet our goals",
      nextDialogue: 15,
      addScore: 1,
    },
    11:
    {
      text: "We are really starting to see the potential for meaningful research on climate change.",
      nextDialogue: 16,
      addScore: 3,
    },
    12:
    {
      text: "There is so much untapped potential in our programs. We don’t want to be thought of only as an attraction for children.",
      nextDialogue: 17,
      addScore: 4,
    },
    13:
    {
      text: "As you know, the climate change research program is essential to our mission and we hope that it will begin to capture important attention.",
      nextDialogue: 18,
      addScore: 5,
    },
    14:
    {
      text: "Natalie: Be careful to direct your conversation to their interests",
      nextDialogue: "End",
      addScore: 0,
    },
    15:
    {
      text: "That sounds great. We were hoping to hear about the research initiatives",
      nextDialogue: [19],
      addScore: 0,
    },
    16:
    {
      text: "We’ve been happy to see so many organizations embrace the importance of climate change.",
      nextDialogue: [19, 20],
      addScore: 0,
    },
    17:
    {
      text: "I’m happy hear that.We’ve long hoped the aquarium would move in this direction.",
      nextDialogue: [20, 21],
      addScore: 0,
    },
    18:
    {
      text: "It certainly has the potential and we’re happy to see the aquarium move in this direction.",
      nextDialogue: [21],
      addScore: 0,
    },
    19:
    {
      text: "We’ve just published a detailed brochureand I have copies for both of you",
      nextDialogue: ["Gate1"],
      addScore: 0,
    },
    20:
    {
      text: "I know your time is valuable and I brought an executive summary to review",
      nextDialogue: ["Gate1"],
      addScore: 4,
    },
    21:
    {
      text: "Let’s take a moment to review this presentation I prepared for you.",
      nextDialogue: ["Gate1"],
      addScore: 5,
    },
    "Gate1":
    {
      text: "",
      nextDialogue: ["Gate1-1", "Gate1-2", "Gate1-3", "Gate1-4"],
      addScore: 0,
    },
    "Gate1-4":
    {
      text: "Natalie: Be careful to direct your conversation to their interests",
      nextDialogue: ["end"],
      addScore: 0,
    },
    "Gate1-1":
    {
      text: "Not right now.",
      nextDialogue: ["end"],
      addScore: 0,
    },
    "Gate1-2":
    {
      text: "This is really interesting. We’d like to know more about the specifics.",
      nextDialogue: [26, 27, 28],
      addScore: 0,
    },
    "Gate1-3":
    {
      text: "This is so exciting. How can we help?",
      nextDialogue: [29],
      addScore: 0,
    },
    26:
    {
      text: "I hoped you would say that. We need tobring our climate change research forward. I think it’s time we talk about investing in our programs.",
      nextDialogue: [30],
      addScore: 1,
    },
    27:
    {
      text: "Thank you for asking. We are confident we will have a director in place and a published paper in the next year.",
      nextDialogue: 31,
      addScore: 3,
    },
    28:
    {
      text: "As we all know, climate change research is crucial, but we need to connect the studies to the work in our hatchery and toxicology lab.",
      nextDialogue: 32,
      addScore: 5,
    },
    29:
    {
      text: "I’m pleased to hear that. Let’s review our pledge form",
      nextDialogue: 33,
      addScore: 0,
    },
    30:
    {
      text: "I understand that funding is important, but we have so many commitments right now. Let’s reconnect after the holidays.",
      nextDialogue: ["end"],
      addScore: 0,
    },
    31:
    {
      text: "Thanks for walking me through everything. I’m impressed with the aquarium’s commitment to research, and I’d like to help.",
      nextDialogue: [34, 35],
      addScore: 0,
    },
    32:
    {
      text: "This is so exciting. It is wonderful that your team is so thoughtful about research as a form of engagement and we would like to help.",
      nextDialogue: [35, 36],
      addScore: 0,
    },
    33:
    {
      text: "Natalie: Good job! I knew you could do it.",
      nextDialogue: ["end"],
      addScore: 0,
    },
    34:
    {
      text: "I've got you down for $25,000. Can we count on you for that?",
      nextDialogue: [37],
      addScore: 1,
    },
    35:
    {
      text: "Thank you. I was hoping we could count on your support. The total cost will be $50,000. A leadership gift from you can make these plans a reality",
      nextDialogue: [38],
      addScore: 3,
    },
    36:
    {
      text: "Thank you. Your vision is vital to the success of this project. The total cost will be $50,000. Would you consider making a leadership gift of $25,000?",
      nextDialogue: 39,
      addScore: 5,
    },
    37:
    {
      text: "You know $25,000 is a lot of money. Let me think about it and get back to you",
      nextDialogue: ["end"],
      addScore: 0,
    },
    38:
    {
      text: "We’d be happy to do that. I’ll write the first check for $10, 000 and invite my friends to join me.",
      nextDialogue: 40,
      addScore: 0,
    },
    39:
    {
      text: "I’d be thrilled to do that. I would also like to help by inviting some friends who support climate change research to join me.",
      nextDialogue: 40,
      addScore: 0,
    },
    40:
    {
      text: "Thank you for your generosity!",
      nextDialogue: ["end"],
      addScore: 0,
    },
  },
  Romero1: {

  },
  Romero2: {

  },
  Sherl1: {
    1:
    {
      text: "Hello, this is Sharrel",
      nextDialogue: [2,3,4],
      addScore: 0,
    },   
    2:
    {
      text: "Hello Sharrel, this is (PlayerName) from the Aquarium, I was wondering if you had a minute to talk?",
      nextDialogue: 5,
      addScore: 1,
    },
    3:
    {
      text: "Hello Sharrel, this is (PlayerName) from the Aquarium, I was wondering if you had a minute to talk?",
      nextDialogue: 6,
      addScore: 3,
    },
    4:
    {
      text: "Hi Sharrel! It's (PlayerName) from the Aquarium.Just wondering if we can pick up our conversation from the other day.",
      nextDialogue: 6,
      addScore: 5,
    },
    5:
    {
      text: "I'm sorry, I'm very busy right now, but I have a minute or two to talk.Will this be quick ?",
      nextDialogue: [7,8],
      addScore: 0,
    },
    6:
    {
      text: "Sure I have time to talk. What do we need to discuss? How's the Aquarium doing?",
      nextDialogue: [9,10],
      addScore: 0,
    },
    7:
    {
      text: "Yes, this'll be just a quick chat.Is that ok ?",
      nextDialogue: "Gate1",
      addScore: 0,
    },
    8:
    {
      text: "Oh, I'm sorry for bothering you; I can make this brief. We are just about to reopen the touch tank exhibit.",
      nextDialogue: "Gate1",
      addScore: 2,
    },
    9:
    {
      text: "Things are good. I just wanted to let you know we secured some foundation funding to support marine illustrations in our new exhibits.",
      nextDialogue: "Gate1",
      addScore: 4,
    },
    10:
    {
      text: "Things are going well. I know how passionate you are about marine illustrations. We have just secured an exciting new artist for a 6 month residency to work on our illustrations in our galleries.",
      nextDialogue: "Gate1",
      addScore: 5,
    },
    "Gate1":
    {
      text: "",
      nextDialogue: 0,
      addScore: ["Gate1-1", "Gate1-2", "Gate1-3"],
    },
    "Gate1-1":
    {
      text: "I don't really have much time right now",
      nextDialogue: [14, 15],
      addScore: 0,
    },
    "Gate1-2":
    {
      text: "Sounds like your guys are on the right track",
      nextDialogue: [15,16],
      addScore: 0,
    },
    "Gate1-3":
    {
      text: "That's great to hear! Original artwork is such a powerful tool for engagement.",
      nextDialogue: [16,17],
      addScore: 0,
    },
    14:
    {
      text: "You know, why don't you just come over sometime instead and I can catch you up on what's been going on?",
      nextDialogue: 18,
      addScore: 0,
    },
    15:
    {
      text: "I could tell you more when you have time.",
      nextDialogue: 19,
      addScore: 2,
    },
    16:
    {
      text: "Thank you Sharrel! I was hoping you'd be interested in hearing about our plans at the Aquarium.",
      nextDialogue: 20,
      addScore: 3,
    },
    17:
    {
      text: "If you'd like, we could schedule a time to discuss the Aquarium's progress and future.",
      nextDialogue: 21,
      addScore: 4,
    },
    18:
    {
      text: "I really don't have time for this.",
      nextDialogue: ["End"],
      addScore: 0,
    },
    19:
    {
      text: "We have so many commitments right now, I just don't think this is a good time.",
      nextDialogue: [22,23],
      addScore: 0,
    },
    20:
    {
      text: "Ok, I'd like to know more.",
      nextDialogue: [23,24],
      addScore: 0,
    },
    21:
    {
      text: "I would like that.",
      nextDialogue: [24,25],
      addScore: 0,
    },
    22:
    {
      text: "Trust me, you'll want to hear this.",
      nextDialogue: "Gate2",
      addScore: 0,
    },
    23:
    {
      text: "I think this would come across better if we met in person.",
      nextDialogue: "Gate2",
      addScore: 2,
    },
    24:
    {
      text: "I would love to set up a time where I could fill you in and discuss how you can get involved.",
      nextDialogue: "Gate2",
      addScore: 3,
    },
    25:
    {
      text: "I have some ideas about how you can get involved that I would like to discuss with you in person.How does your schedule look for the next few weeks ?",
      nextDialogue: "Gate2",
      addScore: 4,
    },
    "Gate2":
    {
      text: "",
      nextDialogue: ["Gate2-1","Gate2-2", "Gate2-3","Gate2-4"],
      addScore: 0,
    },
    "Gate2-1":
    {
      text: "I will have to think about this.",
      nextDialogue: ["End"],
      addScore: 0,
    },
    "Gate2-2":
    {
      text: "Sure we can meet. Let's set up something for next month.",
      nextDialogue: ["End"],
      addScore: 0,
    },
    "Gate2-3":
    {
      text: "I'd like that, how about we meet this Friday ?",
      nextDialogue: [30],
      addScore: 0,
    },
    "Gate2-4":
    {
      text: "No, I don't think I have the capacity to add anything right now.",
      nextDialogue: [30],
      addScore: 0,
    },
    30:
    {
      text: "How about you come to my house and we can chat ?",
      nextDialogue: [31,32,33],
      addScore: 0,
    },
    31:
    {
      text: "Actually, I know the Maitre' D at that new restaurant Chez Jacques.I heard it's fantastic, have you been ?",
      nextDialogue: 34,
      addScore: 0,
    },
    32:
    {
      text: "I don't want to put you to any trouble. Why don't we meet at the café on 5th ?",
      nextDialogue: 35,
      addScore: 0,
    },
    33:
    {
      text: "Thank you so much, I'd love to see your home.",
      nextDialogue: 36,
      addScore: 0,
    },
    34:
    {
      text: "Oh I've heard wonderful things about it.The waitlist for reservations is so long.Let's go.",
      nextDialogue: ["End"],
      addScore: 0,
    },
    35:
    {
      text: "That's really thoughtful of you.I like that café.",
      nextDialogue: ["End"],
      addScore: 0,
    },
    36:
    {
      text: "Terrific, I'll send you my address.",
      nextDialogue: ["End"],
      addScore: 0,
    },
    
  },

  Sherl2: {
    1:
    {
      text: "Thank you for taking the time to meet with me. I've been looking forward to sharing our plans to incorporate marine illustrations throughout the Aquarium.",
      nextDialogue: 2,
      addScore: 0,
    },
    2:
    {
      text: "I've been looking forward to hearing your plans.",
      nextDialogue: [3,4,5,6],
      addScore: 0,
    },
    3:
    {
      text: "I just wanted to let you know we secured some foundation funding to support marine illustrations in our new exhibits.I know we talked about this before, but I just think it is so wonderful and we are really excited about it.",
      nextDialogue: 7,
      addScore: 1,
    },
    4:
    {
      text: "I know how passionate you are about marine illustration. We have secured an exciting new artist for a 6 month residency to work on illustrations around the Aquarium. I'm sure you are as excited as we are",
      nextDialogue: 8,
      addScore: 2,
    },
    5:
    {
      text: "We appreciate your passion for contemporary art and marine illustrations and are hoping you would be interested in expanding the illustrations we've planned for the touch tank.",
      nextDialogue: 9,
      addScore: 3,
    },
    6:
    {
      text: "Your commitment to contemporary art and its power to engage people has inspired us to expand our marine illustration plans to the touch tank exhibit. It is the most visited room at the Aquarium and this will create a unique multisensory experience for all of our guests.",
      nextDialogue: 9,
      addScore: 4,
    },
    7:
    {
      text: "You had mentioned that on the phone.Is there anything else you wanted to discuss ?",
      nextDialogue: [10,11],
      addScore: 0,
    },
    8:
    {
      text: "I was pleased to hear that.Why don't you tell me more about those plans ?",
      nextDialogue: [11,12],
      addScore: 0,
    },
    9:
    {
      text: "Your team is really on the right track. Engagement is such a popular buzzword these days and so few organizations realize what it takes to do it correctly.",
      nextDialogue: [12,13],
      addScore: 0,
    },
    10:
    {
      text: "Oh yes actually, we have secured an exciting new artist for a 6 month residency.",
      nextDialogue: "Gate1",
      addScore: 1,
    },
    11:
    {
      text: "We are actually hoping to add illustrations to the touch tank",
      nextDialogue: "Gate1",
      addScore: 2,
    },
    12:
    {
      text: "Expanding illustrations to the touch tank room will create a unique multisensory experience for our guests in the most visited room in the Aquarium.",
      nextDialogue: "Gate1",
      addScore: 3,
    },
    13:
    {
      text: "I am so happy to hear you say that.We have had an interdisciplinary team working on this for the last two years.",
      nextDialogue: "Gate1",
      addScore: 4,
    },
    "Gate1":
    {
      text: "",
      nextDialogue: 0,
      addScore: 0,
    },
    "Gate1-1":
    {
      text: "No, I don’t think that I have the capacity to add anything right now.",
      nextDialogue: ["End"],
      addScore: 0,
    },
    "Gate1-2":
    {
      text: "I will have to think about this.",
      nextDialogue: ["End"],
      addScore: 0,
    },
    "Gate1-3":
    {
      text: "Thanks for walking me through everything.I’m impressed with your commitment to illustration as a form of engagement, and I’d like to help.",
      nextDialogue: [18,19],
      addScore: 0,
    },
    "Gate1-4":
    {
      text: "This is so exciting. It is wonderful that your team is so thoughtful about illustration and I would love to extend those plans to the touch tank.",
      nextDialogue: [19,20],
      addScore: 0,
    },
    18:
    {
      text: "",
      nextDialogue: 0,
      addScore: 0,
    },
    19:
    {
      text: "",
      nextDialogue: 0,
      addScore: 0,
    },
    20:
    {
      text: "",
      nextDialogue: 0,
      addScore: 0,
    },
    21:
    {
      text: "",
      nextDialogue: 0,
      addScore: 0,
    },
    22:
    {
      text: "",
      nextDialogue: 0,
      addScore: 0,
    },
    23:
    {
      text: "",
      nextDialogue: 0,
      addScore: 0,
    },
    24:
    {
      text: "",
      nextDialogue: 0,
      addScore: 0,
    },
  },
  
}


export default Dialogue;
// export default DialogueW2;