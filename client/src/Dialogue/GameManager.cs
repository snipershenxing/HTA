using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using UnityEngine.UI;
using UnityEngine.Video;


public class GameManager : MonoBehaviour
{

    private static GameManager instance;
    public Dictionary<string, Dialogue> dialogJW1 = new Dictionary<string, Dialogue>();

    public int totalPoints;
    GameObject textObj;
    [SerializeField]
    int levelCount = 6;
    [SerializeField]
    float loadTime = 1.0f;

    [SerializeField]
    int[] MinvalueGate_one;
    [SerializeField]
    int[] MaxvalueGate_one;
    [SerializeField]
    int[] MinvalueGate_two;
    [SerializeField]
    int[] MaxvalueGate_two;
    [SerializeField]
    int[] MinvalueGate_last;
    [SerializeField]
    int[] MaxvalueGate_last;
    [SerializeField]
    int[] failurevalueGate_one;

    public bool daDots = false;
    public  int version;
    public bool[] phoneCheck;
    public string donor = "Walker";
    public GameObject introDial;


    public string curentBackground;
    public float AudioLenth;
    // vido var
    public VideoClip[] walkerPhoneVid;
    public AudioClip[] WalkerFrancoLines;
    // Start is called before the first frame update
    public VideoClip[] fabioNwalkerVid;
    public AudioClip[] fabioNwalkerLines;

    public static GameManager Instance
    {
        get
        {
            if (instance == null)
            {
                instance = FindObjectOfType<GameManager>();
                DontDestroyOnLoad(instance.gameObject);
            }
            else if (instance != FindObjectOfType<GameManager>())
            {
                Destroy(FindObjectOfType<GameManager>());
            }
            return instance;
        }
    }

    public virtual void Awake()
    {
        if (instance == null)
        {
            
            instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }


    }
 
    void Start()
    {
        CreateJWTree(dialogJW1, 1);
        Setup();
        phoneCheck = new bool[levelCount];

        if(phoneCheck[0] == false)
        {
            introDial.SetActive(true);
        }
      
    }
    


    // Update is called once per frame
    void Update()
    {

    }

    void Setup()
    {
        if (dialogJW1["1"])
        {

        }
        else
        {

        }
    }

    //** will change the chosen dictionary**
    //1-create the first tree for Jen Walker(Franco's tree)
    //2-create the tree for emailing Franco
    //3-create the last tree for Jen Walker (interview)
    public void CreateJWTree(Dictionary<string, Dialogue> dialog, int _version)
    {
        // Call with Franco for Dr.Walker 
        version = _version;
        if (version == 1) {
            dialog.Add("1", new Dialogue("1", "Hello, Dr.Walker's Office.", 0, new string[] { "2", "3", "4" }, false, walkerPhoneVid[0], WalkerFrancoLines[0]));
            dialog.Add("2", new Dialogue("2", "Hello Franco, this is (Player Name) from the aquarium. How have you been?", 2, new string[] { "5" }, true, walkerPhoneVid[2], WalkerFrancoLines[1]));
            dialog.Add("3", new Dialogue("3", "Hi Franco. It’s (PlayerName) from the aquarium. I hope you are doing well." + " I’m calling to find a time with Jennifer to follow-up our conversations.", 3, new string[] { "6" }, true, walkerPhoneVid[1], WalkerFrancoLines[2]));
            dialog.Add("4", new Dialogue("4", "Hello Franco. This is  (PlayerName) from the aquarium. I am calling to find " +" a time to get together with Mrs.Walker.", 1, new string[] { "7" }, true, walkerPhoneVid[3], WalkerFrancoLines[3]));
            dialog.Add("5", new Dialogue("5", "I'm doing well. What is this call regarding?", 0, new string[] { "8", "9" }, false, walkerPhoneVid[4], WalkerFrancoLines[4]));
            dialog.Add("6", new Dialogue("6", "Oh hi, yes, (PlayerName). We have a meeting in a minute, but I can talk for a bit now. Anything you want me to share with Jennifer?", 0, new string[] { "9", "10" }, false, walkerPhoneVid[5], WalkerFrancoLines[5]));
            dialog.Add("7", new Dialogue("7", "That’s “Dr.Walker” I can’t talk for long. What is this regarding?", 0, new string[] { "11", "12" }, false, walkerPhoneVid[6], WalkerFrancoLines[6]));
            dialog.Add("8", new Dialogue("8", "That’s great. I wanted to find a time with Jennifer to talk more about all the exciting things going on, and how she could be involved", 2, new string[] { "Gate1" }, true, walkerPhoneVid[2], WalkerFrancoLines[7]));
            dialog.Add("9", new Dialogue("9", " I have been keeping Jennifer updated, and I have more to tell her.", 1, new string[] { "Gate1" }, true, walkerPhoneVid[2], WalkerFrancoLines[8]));
            dialog.Add("10", new Dialogue("10", "Jennifer asked me to follow up when we had the new research director on board. He started last month and I have exciting news to share with her. We would love her support with the new projects.", 3, new string[] { "Gate1" }, true, walkerPhoneVid[1], WalkerFrancoLines[9]));
            dialog.Add("11", new Dialogue("11", "Oh my, yes. It’s been such a busy week – I can’t believe I did that.. What might work for her? I will try to accommodate my schedule", 1, new string[] { "Gate1" }, true, walkerPhoneVid[3], WalkerFrancoLines[10]));
            dialog.Add("12", new Dialogue("12", "Franco, I am so sorry. I didn’t mean to disrespect Dr. Walker – I would never do something like that.I just wanted to find a time to talk with her.", 0, new string[] { "Gate1" }, true, walkerPhoneVid[3], WalkerFrancoLines[11]));

            dialog.Add("Gate1", new Dialogue("Gate1", "", 0, new string[] { "Gate1-1", "Gate1-2", "Gate1-3" }, false, null, null));//at the gate will choose the next node based on points in Update
      0-2      dialog.Add("Gate1-1", new Dialogue("Gate1-1", "We’re all very busy. I’ll try to find some time on her calendar.", 0, new string[] { "19", "20" }, false, walkerPhoneVid[9], WalkerFrancoLines[12]));
      3-7      dialog.Add("Gate1-2", new Dialogue("Gate1-2", "I know Jennifer and her husband have been talking about how they’ld want to get involved. I know she is interested, but she and her husband have been traveling. I’ll need to check the calendar.", 0, new string[] { "16", "17" }, false, walkerPhoneVid[8], WalkerFrancoLines[13]));
      >= 8      dialog.Add("Gate1-3", new Dialogue("Gate1-3", "Well, thank you for letting me know. That’s great to hear. I know Jennifer and her husband have been talking about how they’ld want to get involved.", 0, new string[] { "17", "18" }, false, walkerPhoneVid[7], WalkerFrancoLines[14]));

            dialog.Add("16", new Dialogue("16", "Thank you. I’ll email you with some times", 1, new string[] { "Gate2" }, true, walkerPhoneVid[2], WalkerFrancoLines[15]));
            dialog.Add("17", new Dialogue("17", "Thank you for sharing that. I know you and the Walkers are all busy. Can they do Tuesday morning or Wednesday later in the day?", 3, new string[] { "Gate2" }, true, walkerPhoneVid[2], WalkerFrancoLines[16]));
            dialog.Add("18", new Dialogue("18", "That’s great to hear. I look forward to talking with them further in the next weeks and exploring their thinking. What time might work in their calendar?", 3, new string[] { "Gate2" }, true, walkerPhoneVid[1], WalkerFrancoLines[17]));
            dialog.Add("19", new Dialogue("19", "Thank you, Franco. I appreciate your assistance. Please let me know how the next couple of weeks look", 2, new string[] { "Gate2" }, true, walkerPhoneVid[3], WalkerFrancoLines[18]));
            dialog.Add("20", new Dialogue("20", "I’ll check back when you have some more time. I’ll give you a call Monday afternoon", 1, new string[] { "Gate2" }, true, walkerPhoneVid[3], WalkerFrancoLines[19]));

            dialog.Add("Gate2", new Dialogue("Gate2", "", 0, new string[] { "Gate2-1", "Gate2-2", "Gate2-3" }, false, null, null));//at the gate will choose the next node based on points in Update
            dialog.Add("Gate2-1", new Dialogue("Gate2-1", "Unfortunately, I do need to go. I’ll let her know you called", 0, new string[] { "End" }, false, walkerPhoneVid[3], WalkerFrancoLines[20]));
            dialog.Add("Gate2-2", new Dialogue("Gate2-2", "Alright – Unfortunately, I do need to go, but I will let her know you called. Could you please follow up later in the week?", 0, new string[] { "End" }, false, walkerPhoneVid[2], WalkerFrancoLines[21]));
            dialog.Add("Gate2-3", new Dialogue("Gate2-3", "It looks like they are both available Wednesday at 1:30. I’ll add that to the calendar. Please email me the location.", 0, new string[] { "End" }, false, walkerPhoneVid[1], WalkerFrancoLines[22]));

            dialog.Add("End", new Dialogue("End", "", 0, new string[] { "End" }, false, null, null));
        }
        // In person meeting with Dr.Walker
        if (version == 2)
        {
            
            dialog.Add("1", new Dialogue("1", "Thanks for meeting me here. ", 0, new string[] { "2" }, true, fabioNwalkerVid[1], fabioNwalkerLines[0]));
            dialog.Add("2", new Dialogue("2", "Our Pleasure.", 0, new string[] { "3","4","5"}, false, fabioNwalkerVid[0], fabioNwalkerLines[1]));
            dialog.Add("3", new Dialogue("3", "It’s always so nice to see you and have an opportunity to talk about the aquarium" , 1, new string[] { "6" }, true, fabioNwalkerVid[2], fabioNwalkerLines[2]));
            dialog.Add("4", new Dialogue("4", "I thought it was time that I updated you two on what’s happening at the Aquarium" , 2, new string[] { "7" }, true, fabioNwalkerVid[2], fabioNwalkerLines[3]));
            dialog.Add("5", new Dialogue("5", "Based on our last conversation, I am excited to share some of our new research initiatives.", 4, new string[] { "8"}, true, fabioNwalkerVid[1], fabioNwalkerLines[4]));
            dialog.Add("6", new Dialogue("6", "We have been well. Franco mentioned you had some news for us about the aquarium.", 0, new string[] { "9", "10", "11" }, false, fabioNwalkerVid[4], fabioNwalkerLines[5]));
            dialog.Add("7", new Dialogue("7", "We would be interested in hearing more.", 0, new string[] { "10", "11" }, false, fabioNwalkerVid[5], fabioNwalkerLines[6]));
            dialog.Add("8", new Dialogue("8", "That sounds exciting. We are pleased the aquarium is moving in this direction.", 0, new string[] { "11","12","13" }, false, fabioNwalkerVid[6], fabioNwalkerLines[7]));
            dialog.Add("9", new Dialogue("9", "We have so much going on. Where do I start? The touch tank is open and the new research program is up and running", 0, new string[] { "14" }, true, fabioNwalkerVid[3], fabioNwalkerLines[8]));
            dialog.Add("10", new Dialogue("10", "I’m excited to share that we have increased attendance by 20% and we are on track to meet our goals", 1, new string[] { "15" }, true, fabioNwalkerVid[2], fabioNwalkerLines[9]));
            dialog.Add("11", new Dialogue("11", "We are really starting to see the potential for meaningful research on climate change.", 3, new string[] { "16" }, true, fabioNwalkerVid[2], fabioNwalkerLines[10]));
            dialog.Add("12", new Dialogue("12", "There is so much untapped potential in our programs. We don’t want to be thought of only as an attraction for children.", 4, new string[] { "17" }, true, fabioNwalkerVid[1], fabioNwalkerLines[11]));
            dialog.Add("13", new Dialogue("13", "As you know, the climate change research program is essential to our mission and we hope that it will begin to capture important attention.", 5, new string[] { "18" }, true, fabioNwalkerVid[1], fabioNwalkerLines[12]));
            dialog.Add("14", new Dialogue("14", "Natalie: Be careful to direct your conversation to their interests", 0, new string[] {"End" }, false, fabioNwalkerVid[3], null));
            dialog.Add("15", new Dialogue("15", "That sounds great. We were hoping to hear about the research initiatives", 0, new string[] { "19" }, false, fabioNwalkerVid[7], fabioNwalkerLines[13]));
            dialog.Add("16", new Dialogue("16", "We’ve been happy to see so many organizations embrace the importance of climate change.", 0, new string[] { "19","20" }, false, fabioNwalkerVid[8], fabioNwalkerLines[14]));
            dialog.Add("17", new Dialogue("17", "I’m happy hear that.We’ve long hoped the aquarium would move in this direction.", 0, new string[] { "20", "21" }, false, fabioNwalkerVid[9], fabioNwalkerLines[15]));
            dialog.Add("18", new Dialogue("18", "It certainly has the potential and we’re happy to see the aquarium move in this direction.", 0, new string[] { "21" }, false, fabioNwalkerVid[10], fabioNwalkerLines[16]));
            dialog.Add("19", new Dialogue("19", "We’ve just published a detailed brochureand I have copies for both of you", 0, new string[] { "Gate1" }, true, fabioNwalkerVid[2], fabioNwalkerLines[17]));
            dialog.Add("20", new Dialogue("20", "I know your time is valuable and I brought an executive summary to review", 4, new string[] { "Gate1" }, true, fabioNwalkerVid[1], fabioNwalkerLines[18]));
            dialog.Add("21", new Dialogue("21", "Let’s take a moment to review this presentation I prepared for you.", 5, new string[] { "Gate1" }, true, fabioNwalkerVid[1], fabioNwalkerLines[19]));

            dialog.Add("Gate1", new Dialogue("Gate1", "", 0, new string[] { "Gate1-1","Gate1-2","Gate1-3","Gate1-4" }, false, null, null));
            dialog.Add("Gate1-4", new Dialogue("Gate1-4", "Natalie: Be careful to direct your conversation to their interests", 0, new string[] { "End" }, false, fabioNwalkerVid[3], null));
            dialog.Add("Gate1-1", new Dialogue("Gate1-1", "Not right now.", 0, new string[] { "End" }, false, fabioNwalkerVid[11], fabioNwalkerLines[20]));
            dialog.Add("Gate1-2", new Dialogue("Gate1-2", "This is really interesting. We’d like to know more about the specifics.", 0, new string[] { "26","27","28" }, false, fabioNwalkerVid[12], fabioNwalkerLines[21]));
            dialog.Add("Gate1-3", new Dialogue("Gate1-3", "This is so exciting. How can we help? ", 0, new string[] { "29" }, false, fabioNwalkerVid[13], fabioNwalkerLines[22]));

            dialog.Add("26", new Dialogue("26", "I hoped you would say that. We need tobring our climate change research forward. I think it’s time we talk about investing in our programs.", 1, new string[] { "30" }, true, fabioNwalkerVid[2], fabioNwalkerLines[23]));
            dialog.Add("27", new Dialogue("27", "Thank you for asking. We are confident we will have a director in place and a published paper in the next year.", 3, new string[] { "31" }, false, fabioNwalkerVid[2], fabioNwalkerLines[24]));
            dialog.Add("28", new Dialogue("28", "As we all know, climate change research is crucial, but we need to connect the studies to the work in our hatchery and toxicology lab.", 5, new string[] { "32" }, false, fabioNwalkerVid[2], fabioNwalkerLines[25]));
            dialog.Add("29", new Dialogue("29", "I’m pleased to hear that. Let’s review our pledge form", 0, new string[] { "33" }, false, fabioNwalkerVid[1], fabioNwalkerLines[26]));
            dialog.Add("30", new Dialogue("30", "I understand that funding is important, but we have so many commitments right now. Let’s reconnect after the holidays.", 0, new string[] { "End" }, false, fabioNwalkerVid[14], fabioNwalkerLines[27]));
            dialog.Add("31", new Dialogue("31", "Thanks for walking me through everything. I’m impressed with the aquarium’s commitment to research, and I’d like to help.", 0, new string[] { "34","35" }, false, fabioNwalkerVid[15], fabioNwalkerLines[28]));
            dialog.Add("32", new Dialogue("32", "This is so exciting. It is wonderful that your team is so thoughtful about research as a form of engagement and we would like to help.", 0, new string[] { "35", "36" }, false, fabioNwalkerVid[16], fabioNwalkerLines[29]));
            dialog.Add("33", new Dialogue("33", "Natalie: Good job! I knew you could do it.", 0, new string[] { "End" }, false, fabioNwalkerVid[1], null));
            dialog.Add("34", new Dialogue("34", "I've got you down for $25,000. Can we count on you for that?", 1, new string[] { "37" }, true, fabioNwalkerVid[3], fabioNwalkerLines[30]));
            dialog.Add("35", new Dialogue("35", "Thank you. I was hoping we could count on your support. The total cost will be $50,000. A leadership gift from you can make these plans a reality", 3, new string[] { "38" }, true, fabioNwalkerVid[1], fabioNwalkerLines[31]));
            dialog.Add("36", new Dialogue("36", "Thank you. Your vision is vital to the success of this project. The total cost will be $50,000. Would you consider making a leadership gift of $25,000?", 5, new string[] { "39" }, false, fabioNwalkerVid[1], fabioNwalkerLines[32]));
            dialog.Add("37", new Dialogue("37", "You know $25,000 is a lot of money. Let me think about it and get back to you", 0, new string[] { "End" }, false, fabioNwalkerVid[17], fabioNwalkerLines[33]));
            dialog.Add("38", new Dialogue("38", "We’d be happy to do that. I’ll write the first check for $10, 000 and invite my friends to join me.", 0, new string[] { "40" }, false, fabioNwalkerVid[18], fabioNwalkerLines[34]));
            dialog.Add("39", new Dialogue("39", "I’d be thrilled to do that. I would also like to help by inviting some friends who support climate change research to join me.", 0, new string[] { "40" }, false, fabioNwalkerVid[19], fabioNwalkerLines[35]));
            dialog.Add("40", new Dialogue("40", "Thank you for your generosity!", 0, new string[] { "End" }, false, fabioNwalkerVid[1], fabioNwalkerLines[36]));
            
            dialog.Add("End", new Dialogue("End", "", 0, new string[] { "End" }, false, null, null));
        }
        //Calling Sherrel for setting up an apointment
        if (version == 3)
        {
            dialog.Add("1", new Dialogue("1", "Hello, this is Sharrel", 0, new string[] { "2","3","4" }, false, null, null));
            dialog.Add("2", new Dialogue("2", "Hello Sharrel, this is (PlayerName) from the Aquarium, I was wondering if you had a minute to talk?", 1, new string[] { "5" }, true, null, null));
            dialog.Add("3", new Dialogue("3", "Good morning Mrs. Letkin, this is (PlayerName) from the Aquarium.I hope you remember our conversation at(CDEventHere); is it possible to discuss your interest in ourorganization?", 3, new string[] { "6" }, true, null, null));
            dialog.Add("4", new Dialogue("4", "Hi Sharrel! It's (PlayerName) from the Aquarium.Just wondering if we can pick up our conversation from the other day.", 5, new string[] { "6" }, true, null, null));
            dialog.Add("5", new Dialogue("5", "I'm sorry, I'm very busy right now, but I have a minute or two to talk.Will this be quick ? ", 0, new string[] { "7", "8" }, false, null, null));
            dialog.Add("6", new Dialogue("6", "Sure I have time to talk. What do we need to discuss? How's the Aquarium doing?", 0, new string[] { "9", "10" }, false, null, null));
            dialog.Add("7", new Dialogue("7", "Yes, this'll be just a quick chat.Is that ok ?", 0, new string[] { "Gate1" }, true, null, null));
            dialog.Add("8", new Dialogue("8", "Oh, I'm sorry for bothering you; I can make this brief. We are just about to reopen the touch tank exhibit.", 2, new string[] { "Gate1" }, true, null, null));
            dialog.Add("9", new Dialogue("9", "Things are good. I just wanted to let you know we secured some foundation funding to support marine illustrations in our new exhibits.", 4, new string[] { "Gate1" }, true, null, null));
            dialog.Add("10", new Dialogue("10", "Things are going well. I know how passionate you are about marine illustrations. We have just secured an exciting new artist for a 6 month residency to work on our illustrations in our galleries.", 5, new string[] { "Gate1" }, true, null, null));

            dialog.Add("Gate1", new Dialogue("Gate1", "", 0, new string[] { "Gate1-1", "Gate1-2", "Gate1-3" }, false, null, null));
            dialog.Add("Gate1-1", new Dialogue("Gate1-1", "I don't really have much time right now", 0, new string[] { "14" , "15"}, false, null, null));
            dialog.Add("Gate1-2", new Dialogue("Gate1-2", "Sounds like your guys are on the right track", 0, new string[] { "15", "16" }, false, null, null));
            dialog.Add("Gate1-3", new Dialogue("Gate1-3", "That's great to hear! Original artwork is such a powerful tool for engagement.", 0, new string[] { "16", "17" }, false, null, null));

            dialog.Add("14", new Dialogue("14", "You know, why don't you just come over sometime instead and I can catch you up on what's been going on?", 0, new string[] { "18" }, true, null, null));
            dialog.Add("15", new Dialogue("15", "I could tell you more when you have time.", 2, new string[] { "19" }, true, null, null));
            dialog.Add("16", new Dialogue("16", "Thank you Sharrel! I was hoping you'd be interested in hearing about our plans at the Aquarium.", 3, new string[] { "20" }, true, null, null));
            dialog.Add("17", new Dialogue("17", "If you'd like, we could schedule a time to discuss the Aquarium's progress and future.", 4, new string[] { "21" }, true, null, null));
            dialog.Add("18", new Dialogue("18", "I really don't have time for this.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("19", new Dialogue("19", "We have so many commitments right now, I just don't think this is a good time.", 0, new string[] { "22", "23" }, false, null, null));
            dialog.Add("20", new Dialogue("20", "Ok, I'd like to know more.", 0, new string[] { "23", "24" }, false, null, null));
            dialog.Add("21", new Dialogue("21", "I would like that.", 0, new string[] { "24","25" }, false, null, null));
            dialog.Add("22", new Dialogue("22", "Trust me, you'll want to hear this.", 0, new string[] { "Gate2" }, true, null, null));
            dialog.Add("23", new Dialogue("23", "I think this would come across better if we met in person.", 2, new string[] { "Gate2" }, true, null, null));
            dialog.Add("24", new Dialogue("24", "I would love to set up a time where I could fill you in and discuss how you can get involved.", 3, new string[] { "Gate2" }, true, null, null));
            dialog.Add("25", new Dialogue("25", "I have some ideas about how you can get involved that I would like to discuss with you in person.How does your schedule look for the next few weeks ?", 4, new string[] { "Gate2" }, true, null, null));

            dialog.Add("Gate2", new Dialogue("Gate2", "", 0, new string[] { "Gate2-1","Gate2-2", "Gate2-3","Gate2-4" }, false, null, null));
            dialog.Add("Gate2-1", new Dialogue("Gate2-1", "I will have to think about this.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("Gate2-2", new Dialogue("Gate2-2", "Sure we can meet. Let's set up something for next month.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("Gate2-3", new Dialogue("Gate2-3", "I'd like that, how about we meet this Friday ?", 0, new string[] { "30" }, false, null, null));
            dialog.Add("Gate2-4", new Dialogue("Gate2-4", "No, I don't think I have the capacity to add anything right now.", 0, new string[] { "30" }, false, null, null));

            dialog.Add("30", new Dialogue("30", "How about you come to my house and we can chat ? ", 0, new string[] { "31", "32", "33" }, false, null, null));
            dialog.Add("31", new Dialogue("31", "Actually, I know the Maitre' D at that new restaurant Chez Jacques.I heard it's fantastic, have you been ? ", 0, new string[] { "34" }, true, null, null));
            dialog.Add("32", new Dialogue("32", "I don't want to put you to any trouble. Why don't we meet at the café on 5th ? ", 0, new string[] { "35" }, true, null, null));
            dialog.Add("33", new Dialogue("33", "Thank you so much, I'd love to see your home.", 0, new string[] { "36" }, true, null, null));
            dialog.Add("34", new Dialogue("34", "Oh I've heard wonderful things about it.The waitlist for reservations is so long.Let's go.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("35", new Dialogue("35", "That's really thoughtful of you.I like that café.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("36", new Dialogue("36", "Terrific, I'll send you my address.", 0, new string[] { "End" }, false, null, null));

            dialog.Add("End", new Dialogue("End", "", 0, new string[] { "End" }, false, null, null));
        }
        // The ask for Sherrel
        
        if (version == 4)
        {
            dialog.Add("1", new Dialogue("1", "Thank you for taking the time to meet with me. I've been looking forward to sharing our plans to incorporate marine illustrations throughout the Aquarium.", 0, new string[] { "2" }, true, null, null));
            dialog.Add("2", new Dialogue("2", "I've been looking forward to hearing your plans.", 0, new string[] { "3","4", "5","6" }, false, null, null));
            dialog.Add("3", new Dialogue("3", "I just wanted to let you know we secured some foundation funding to support marine illustrations in our new exhibits.I know we talked about this before, but I just think it is so wonderful and we are really excited about it.", 1, new string[] { "7" }, true, null, null));
            dialog.Add("4", new Dialogue("4", "I know how passionate you are about marine illustration. We have secured an exciting new artist for a 6 month residency to work on illustrations around the Aquarium. I'm sure you are as excited as we are", 2, new string[] { "8" }, true, null, null));
            dialog.Add("5", new Dialogue("5", "We appreciate your passion for contemporary art and marine illustrations and are hoping you would be interested in expanding the illustrations we've planned for the touch tank.", 3, new string[] { "9" }, true, null, null));
            dialog.Add("6", new Dialogue("6", "Your commitment to contemporary art and its power to engage people has inspired us to expand our marine illustration plans to the touch tank exhibit. It is the most visited room at the Aquarium and this will create a unique multisensory experience for all of our guests.", 4, new string[] { "9" }, true, null, null));
            dialog.Add("7", new Dialogue("7", "You had mentioned that on the phone.Is there anything else you wanted to discuss ? ", 0, new string[] { "10", "11" }, false, null, null));
            dialog.Add("8", new Dialogue("8", "I was pleased to hear that.Why don't you tell me more about those plans ? ", 0, new string[] { "11","12" }, false, null, null));
            dialog.Add("9", new Dialogue("9", "Your team is really on the right track. Engagement is such a popular buzzword these days and so few organizations realize what it takes to do it correctly.", 0, new string[] { "12","13" }, false, null, null));
            dialog.Add("10", new Dialogue("10", "Oh yes actually, we have secured an exciting new artist for a 6 month residency.", 1, new string[] { "Gate1" }, true, null, null));
            dialog.Add("11", new Dialogue("11", "We are actually hoping to add illustrations to the touch tank", 2, new string[] { "Gate1" }, true, null, null));
            dialog.Add("12", new Dialogue("12", "Expanding illustrations to the touch tank room will create a unique multisensory experience for our guests in the most visited room in the Aquarium.", 3, new string[] { "Gate1" }, true, null, null));
            dialog.Add("13", new Dialogue("13", "I am so happy to hear you say that.We have had an interdisciplinary team working on this for the last two years.", 4, new string[] { "Gate1" }, true, null, null));

            dialog.Add("Gate1", new Dialogue("Gate1", "", 0, new string[] { "Gate1-1","Gate1-2", "Gate1-3","Gate1-4" }, false, null, null));
            dialog.Add("Gate1-1", new Dialogue("Gate1-1", "No, I don’t think that I have the capacity to add anything right now.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("Gate1-2", new Dialogue("Gate1-2", "I will have to think about this.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("Gate1-3", new Dialogue("Gate1-3", "Thanks for walking me through everything.I’m impressed with your commitment to illustration as a form of engagement, and I’d like to help.", 0, new string[] { "18","19" }, false, null, null));
            dialog.Add("Gate1-4", new Dialogue("Gate1-4", "This is so exciting. It is wonderful that your team is so thoughtful about illustration and I would love to extend those plans to the touch tank.", 0, new string[] { "19","20" }, false, null, null));

            dialog.Add("18", new Dialogue("18", "I've got you down for $25, 000.Can we count on you for that ? ", 1, new string[] { "21" }, true, null, null));
            dialog.Add("19", new Dialogue("19", "Thank you Sharrel. I was hoping we could count on your support.The total cost will be $50, 000.A leadership gift from you can make these plans a reality", 2, new string[] { "22" }, true, null, null));
            dialog.Add("20", new Dialogue("20", "Thank you Sharrel. Your vision is vital to the success of this project.The total cost will be $50, 000.Would you consider making a leadership gift of $25, 000 ? ", 3, new string[] { "23" }, true, null, null));
            dialog.Add("21", new Dialogue("21", "You know $25,000 is a lot of money. Let me think about it and get back to you", 0, new string[] { "End" }, false, null, null));
            dialog.Add("22", new Dialogue("22", "I’d be happy to do that. I’ll write the first check for $10, 000.And invite my friends to join me.", 0, new string[] { "24" }, false, null, null));
            dialog.Add("23", new Dialogue("23", "I’d be thrilled to do that. I would also like to help by inviting some friends who support illustration to join me.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("24", new Dialogue("24", "Thank you for your generosity! Your gift will impact hundreds of thousands of children each year.", 1, new string[] { "End" }, true, null, null));

            dialog.Add("End", new Dialogue("End", "", 0, new string[] { "End" }, false, null, null));
        }
        //JP Call
        if(version == 5)
        {
            dialog.Add("1", new Dialogue("1", "Hi it's JP", 0, new string[] { "2","3","4"}, false, null, null));
            dialog.Add("2", new Dialogue("2", "Good Morning, this is (Player Name) from the LoDo Aquarium. I’d like to talk about meeting up to discuss supporting our organization.", 1, new string[] { "5" }, true, null, null));
            dialog.Add("3", new Dialogue("3", "Hi J.P. This is (The Player) from the LoDo Aquarium.I was wanting to further discuss helping the aquarium.", 3, new string[] { "6" }, true, null, null));
            dialog.Add("4", new Dialogue("4", "Hello, J.P.! This is (The Player) calling from theLoDo Aquarium. I’m calling to follow up on our conversation about partnering with us.", 5, new string[] { "6" }, true, null, null));
            dialog.Add("5", new Dialogue("5", "Okay. I have a little time to talk but I’m pretty busy.", 0, new string[] { "7", "8", "9" }, false, null, null));
            dialog.Add("6", new Dialogue("6", "Good to hear from you. How have things been going?", 0, new string[] { "10", "11" }, false, null, null));
            dialog.Add("7", new Dialogue("7", "Okay. It’s going to be hard to tell you everything right now. We have so much going on.It’s hard to know where to start", 1, new string[] { "Gate1" }, true, null, null));
            dialog.Add("8", new Dialogue("8", "I understand you are busy. We do have a lot of exciting news about our plans to share with you. Is it possible to find another time to talk about the touch tank and our summer programming?", 2, new string[] { "Gate1" }, true, null, null));
            dialog.Add("9", new Dialogue("9", "I don’t want to take up too much of your time.I thought you would be happy to know we are expanding the touch tank exhibit and our summer programming", 3, new string[] { "Gate1" }, true, null, null));
            dialog.Add("10", new Dialogue("10", "They’re going great! Attendance and engagement are up significantly, and we have just announced some exciting plans for the touch tank and our summer programming. I thought your grandkids would be interested", 4, new string[] { "Gate1" }, true, null, null));
            dialog.Add("11", new Dialogue("11", "Thank you forasking, J.P. I think you will be the most interested in some new opportunities for your grandchildren. We are expanding the touch tank and I thought they might be interested in our new summer programs", 5, new string[] { "Gate1" }, true, null, null));

            dialog.Add("Gate1", new Dialogue("Gate1", "", 0, new string[] { "Gate1-1", "Gate1-2", "Gate1-3" }, false, null, null));
            dialog.Add("Gate1-1", new Dialogue("Gate1-1", "I think finding another time to talk would be better.", 0, new string[] { "15", "16" }, false, null, null));
            dialog.Add("Gate1-2", new Dialogue("Gate1-2", "That’s great to hear. All of the grandchildren enjoy the aquarium and we’ll definitely bring them when they visit next summer.", 0, new string[] { "17" , "18" }, false, null, null));
            dialog.Add("Gate1-3", new Dialogue("Gate1-3", "That is really exciting. The aquarium is becoming more and more important to all of my grandchildren. It is wonderful that you have new developments every time they visit.", 0, new string[] { "18","19" }, false, null, null));

            dialog.Add("15", new Dialogue("15", "Sure, let’s schedule a time meet to discuss numbers.", 1, new string[] { "20" }, true, null, null));
            dialog.Add("16", new Dialogue("16", "Yes, of course.I know you are busy. Would it be OK for me to reach out next week ?", 2, new string[] { "21" }, true, null, null));
            dialog.Add("17", new Dialogue("17", "Fantastic. I’d be happy to arrange some unique opportunities for them. Could we get together to review the options ? ", 3, new string[] { "21" }, true, null, null));
            dialog.Add("18", new Dialogue("18", "That is so great to hear.We want to make sure families like yours always have new experiences and opportunities to learn.I have a few ideas about things they might enjoy during their next visit and how you can get more involved.How does your schedule look for the next few weeks?", 4, new string[] { "22" }, true, null, null));
            dialog.Add("19", new Dialogue("19", "Thank you, J.P., We want to make sure families like yours always have new experiences and opportunities to learn.I have some ideas about behind the scenes opportunities for your family and would love for you to be more involved.Are you available for lunch on Wednesday of later in the day Thursday ?", 5, new string[] { "23" }, true, null, null));
            dialog.Add("20", new Dialogue("20", "Natalie may explain that you should look more towards the donor’s interests rather than the statistics of the organization.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("21", new Dialogue("21", "I’d be interested in hearing more. Why don’t you try calling me next week?", 0, new string[] { "End" }, false, null, null));
            dialog.Add("22", new Dialogue("22", "I’ll be out of town for a couple of weeks, but we could get together the week of the 21st.", 0, new string[] { "24", "25" }, false, null, null));
            dialog.Add("23", new Dialogue("23", "That sounds great.I’m free for lunch on Wednesday and want to hear what you have in mind.", 0, new string[] { "29" }, false, null, null));
            dialog.Add("24", new Dialogue("24", "That sounds good. I’ll reach out to you again then and we can schedule a time to meet in person.", 2, new string[] { "Gate2" }, true, null, null));
            dialog.Add("25", new Dialogue("25", "OK. I am flexible on Wednesday, Thursday and Friday of that week.What time works best for you ? ", 3, new string[] { "Gate2" }, true, null, null));
            dialog.Add("26", new Dialogue("26", "I’ll have to think about it.Call me back next week.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("27", new Dialogue("27", "It looks like I am available for lunch on Wednesday.", 0, new string[] { "29" }, false, null, null));
            dialog.Add("28", new Dialogue("28", "(There is no line here)", 0, new string[] { "29" }, false, null, null));
            dialog.Add("29", new Dialogue("29", "Sounds Good", 0, new string[] { "30" }, true, null, null));
            dialog.Add("30", new Dialogue("30", "Where would we meet up? How about my cabin?", 0, new string[] { "31", "32", "33" }, false, null, null));
            dialog.Add("31", new Dialogue("31", "Actually, I know the Maitre' D at that new restaurant Chez Jacques.I heard it's fantastic, have you been ?", 0, new string[] { "34" }, true, null, null));
            dialog.Add("32", new Dialogue("32", "I don't want to put you to any trouble. Why don't we meet at the café on 5th ? ", 0, new string[] { "35" }, true, null, null));
            dialog.Add("33", new Dialogue("33", "Thank you so much, I'd love to see your cabin.", 0, new string[] { "36" }, true, null, null));
            dialog.Add("34", new Dialogue("34", "Oh I've heard wonderful things about it.The waitlist for reservations is so long.Let's go.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("35", new Dialogue("35", "That's really thoughtful of you.I like that café.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("36", new Dialogue("36", "Natalie explains why this location is not a place you want to make an ask and takes the player back to previous choice.", 0, new string[] { "End" }, false, null, null));

            dialog.Add("End", new Dialogue("End", "", 0, new string[] { "End" }, false, null, null));
        }
        // JP Ask
        if (version == 6)
        {
            //dialog.Add("", new Dialogue("", "", 0, new string[] { }, false, null, null));
            dialog.Add("1", new Dialogue("1", "Thank you for making the time to meet with me. I’ve been looking forward to sharing some of my ideas for your grandkids and would love to see you get more involved with the LoDo Aquarium", 0, new string[] { "2" }, true, null, null));
            dialog.Add("2", new Dialogue("2", "Thank you. I’ve been looking forward to hearing what you have in mind.", 0, new string[] { "3", "4", "5", "6" }, false, null, null));

            dialog.Add("3", new Dialogue("3", "We are excited about expanding the touch tank and adding conservation programming whichwould benefit your grandchildren.The total budget is $50, 000 and we are hoping you will make a leadership gift of $25,000.", 1, new string[] { "7" }, true, null, null));
            dialog.Add("4", new Dialogue("4", "We think that your vision and your assets would benefit everyone at the aquarium.Our new plans for the touch tank and summer programming would open up some opportunities behind the scenes for your grandchildren and we are hoping you will consider a leadership gift to the campaign.", 2, new string[] { "8" }, true, null, null));
            dialog.Add("5", new Dialogue("5", "It was wonderful to see so much of you and your family at the aquarium last summer. Our plans for the touch tank and summer programming would open up opportunities for your grandchildren to learn firsthand about conservation by working with our staff.", 3, new string[] { "9" }, true, null, null));
            dialog.Add("6", new Dialogue("6", "I am hopeful your grandchildren will participate, perhaps even with an eye toward future internships, in our plans to expand the touch tank and summer programming.We would also love to include them in some behind the scenes opportunities to meet the scientists and some of the more unique animals in the collection.", 4, new string[] { "9" }, true, null, null));

            dialog.Add("7", new Dialogue("7", "I am interested in supporting the aquarium and it does mean a lot to my grandkids, but I’m not ready to commit to a gift of that size.", 0, new string[] { "11", "12" }, false, null, null));
            dialog.Add("8", new Dialogue("8", "I might be able to help with that, but I would like to understand more about the opportunities for my grandchildren", 0, new string[] { "12", "13" }, false, null, null));
            dialog.Add("9", new Dialogue("9", "I agree. I really like what you guys are doing and I think the kids will enjoy getting more involved when they are here visiting.How can I help ?", 0, new string[] {"13", "14" }, false, null, null));

            dialog.Add("10", new Dialogue("10", "What amount would you consider ? ", 1, new string[] { "Gate2" }, false, null, null));
            dialog.Add("11", new Dialogue("11", "Our plans for the touch tank and summer programming would open up opportunities for your grandchildren to learn firsthand about conservation by working with our staff.", 2, new string[] { "Gate2" }, false, null, null));
            dialog.Add("12", new Dialogue("12", "I am hopeful your grandchildren will participate, in our plans to expand the touch tank and summer programming.We would also love to include them in some behind the scenes opportunities to meet the scientists and some of the more unique animals in the collection.", 3, new string[] { "Gate2" }, false, null, null));
            dialog.Add("13", new Dialogue("13", "The total budget is $50, 000 and we are hoping you would consider a leadership gift to the campaign of $25, 000 which will set a powerful example for our supporters and ensure this vision is realized", 3, new string[] { "Gate2" }, false, null, null));
            dialog.Add("14", new Dialogue("14", "I’d love to have you visit the aquarium and get your input on the overall plan. The budget for the project is $50, 000 and we are hoping you will consider a leadership gift to the campaign of $25, 000.At that level, we would include a naming opportunity for the touch tank.", 4, new string[] {"Gate2" }, true, null, null));

            dialog.Add("Gate2", new Dialogue("Gate2", "", 0, new string[] { }, false, null, null));
            dialog.Add("Gate2-1", new Dialogue("Gate2-1", "Natalie will explain where you messed up, such as asking too much for the money.One should keep the donor’s interests in mind in addition to the money.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("Gate2-2", new Dialogue("Gate2-2", "Hmm, I’ll have to think about this. Let’s set up another meeting to talk further.", 0, new string[] { "End" }, false, null, null));
            dialog.Add("Gate2-3", new Dialogue("Gate2-3", "Well I’d certainly be willing to help you reach that, but I don’t want to cover 50 % of the campaign on my own.I’d be willing to give $12, 500. When you find another donor for that amount, I would be happy to share why I am supporting the aquarium at this level.", 0, new string[] { "19" }, false, null, null));
            dialog.Add("Gate2-4", new Dialogue("Gate2-4", "I hadn’t really considered giving you that much, but you’ve really helped me understand how great this could be, not just for my grandchildren, but for so many of your visitors.I’d be honored.", 0, new string[] { "20" }, false, null, null));

            dialog.Add("19", new Dialogue("19", "Thank you for your generosity!I can’t tell you how much we appreciate your gift and your offer to be a resource for your peers!", 0, new string[] {"21" }, false, null, null));
            dialog.Add("20", new Dialogue("20", "Thank you for your generosity! I am so looking forward to working with you on this project and arranging those opportunities we discussed for your grandkids to get to know the scientists and some of the star animals.", 0, new string[] {"22" }, false, null, null));
            dialog.Add("21", new Dialogue("21", "Natalie may comment as to why J.P.may not have wanted to donate as much.  Maybe due to apprehension.", 0, new string[] {"End" }, false, null, null));
            dialog.Add("22", new Dialogue("22", "Natalie congratulates you!", 0, new string[] {"End" }, false, null, null));

            dialog.Add("End", new Dialogue("End", "", 0, new string[] { "End" }, false, null, null));
        }
    }


    public int SetTotalPoints(int toAdd)
    {
        totalPoints += toAdd;
        return totalPoints;
    }

    public int getCurrentTotalPoints()
    {
        return totalPoints;
    }

    public float getLoadTime()
    {
        return loadTime;
    }

    public int GetGateOneMin(int PointVer)
    {
        return MinvalueGate_one[PointVer];
    }

    public int GetGateOneMax(int PointVer)
    {
        return MaxvalueGate_one[PointVer];
    }

    public int GetGateTwoMin(int PointVer)
    {
        return MinvalueGate_two[PointVer];
    }

    public int GetGateTwoMax(int PointVer)
    {
        return MaxvalueGate_two[PointVer];
    }

    public int GetGateLastMin(int PointVer)
    {
        return MinvalueGate_last[PointVer];
    }

    public int GetGateLastMax(int PointVer)
    {
        return MaxvalueGate_last[PointVer];
    }

    public int GetGateOnefailure(int PointVer)
    {
        return failurevalueGate_one[PointVer];
    }
    public void resetDict()
    {
        Dialogue dialogue = dialogJW1["1"];
    }
}


public class Dialogue : MonoBehaviour
{
    string nodeName;
    public string text;
    int points;
    public string[] nextNodes;
    bool isPlayerSpeaker;
    VideoClip nextVido;
    AudioClip nextLine;
    //constructor
    public Dialogue(string _name, string _text, int _points, string[] _nextNodes, bool _isPlayerSpeaker, VideoClip _nextVideo, AudioClip _nextLine)
    {
        nodeName = _name;
        text = _text;
        points = _points;
        nextNodes = _nextNodes;
        isPlayerSpeaker = _isPlayerSpeaker;
        nextVido = _nextVideo;
        nextLine = _nextLine;

    }

    //get the name of the node
    public string getNodeName()
    {
        return nodeName;
    }

    //get the dialogue text in node
  public string getText()
    {
        return text;
    }

    //get the points this node is worth
   public int getPoints()
    {
        return points;
    }

    //get the nodes to follow this node
   public string[] getNextNodes()
    {
        return nextNodes;
    }
    // get if player is specker
    public bool getisPlayerSpeaker()
    {
        return isPlayerSpeaker;
    }

    public VideoClip getNextVideo()
    {
        return nextVido;
    }

    public AudioClip getNextLine()
    {
        return nextLine;
    }
}

