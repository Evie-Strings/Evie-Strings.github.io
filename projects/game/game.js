let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let minutes = 0;
let lightBoardOn = false;
let gaffTapeFound = false;
let gaffTapeDelivered = false;
let setForTopOfShow = false;
let chatWithFriend = false;

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location

function timeCountdown () {
        minutes = minutes + 1;
        if (minutes < 10) {
            print("\nIt is 6:0" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
        }
        else if (minutes >= 10) {
            print("\nIt is 6:" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
        }
}

function chooseCharacter () {
    clear();
    print('\nIn this game you will play as a high school theater student getting everything ready for opening night.');
    print("\nWho do you want to play as:" +
        "\n\tactor" +
        "\n\ttechie")

        function processInput(input){
            if (input.toLowerCase() === "actor") {
                actor();
            } 
            else if (input.toLowerCase() === "techie") {
                techie();
            }
            else {
                stayHere();
                waitThenCall(chooseCharacter);
            }
        }
        waitForInput(processInput);
}
function techie () { 
    clear();
    outsideTechie();

    function gameEndTechie () {
        if (gaffTapeDelivered == true && lightBoardOn == true && setForTopOfShow == true && chatWithFriend == true) {
            print("That's all you needed to get done! Head back to stage right for the show to start.");
        }
        else if (minutes == 60 && gaffTapeDelivered == false) {
            gameActive = false;
            clear();
            print("\nIt is 7:00. The show is starting.");
            print("\nThe show goes fine, but a bunch of wires come undone backstage. Unfortunately, nobody can find the gaff tape required to fix them, and several actors trip. Their choreography looks a little strange that night, but hopefully no one in the audience noticed.");
        }
        else if (minutes == 60 && lightBoardOn == false) {
            gameActive = false;
            clear();
            print("\nIt is 7:00. The show is starting.");
            print("\nOr, it would be, but we have to get the light board running and cues ready to go. It's crazy that someone missed this! As it is, the show is delayed 5 minutes.");
        }
        else if (minutes == 60 && setForTopOfShow == false) {
            gameActive = false;
            clear();
            print("\nIt is 7:00. The show is starting.");
            print("\nThe crew has to rush putting the set pieces where they go with all the audience in the theater. Predictably, they miss a couple, and several set changes drag on for a long time while everyone talks over headset about what they're going to do." + 
                 "Not a great opening night, that's for sure.");
        }
        else if (minutes == 60 && chatWithFriend == false) {
            gameActive = false;
            clear();
            print("\nIt is 7:00. The show is starting.");
            print("\nThe show goes fine, nothing wrong, but you really wish you had gotten a chance to talk to your bestie. Maybe tomorrow.");
        }
    }

    function winGame () {
        if (gaffTapeDelivered == true && lightBoardOn == true && setForTopOfShow == true && chatWithFriend == true) {
            clear();
            print("\nIt is 7:00. The show is starting.");
            print("The show goes perfectly, no hiccups, no missed lines or cues, and no fighting backstage. You leave the theater ready to do it again tomorrow.");
            gameActive = false;
        }
    }
    
    function outsideTechie() {
        clear();
        print("\nYou are Outside the theater!" + 
            "\nIt is a beautiful spring day and you have a performance tonight. As a techie, it's your job to set for the top of show, find and deliver a roll of gaff tape, chat with your friend(because of course), and turn on the light board.");
        print("\nIt is 6:0" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
        print("\nDo you want to enter the theater? Type where you want to go:" +
            "\n\twells right");
    
        function processInput(input){
            if (input.toLowerCase() === "wells right") {
                wellsRightTechie();
            } 
            else {
                stayHere();
                waitThenCall(outsideTechie);
            }
        }
        waitForInput(processInput);
    }

    function wellsRightTechie() {
        clear();
        print("\nYou are in the Right Wells! You see a few actors and techies milling about.");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage right" +
            "\n\thouse" +
            "\n\tcatwalks" +
            "\n\tdownstairs");
    
        function processInput(input){
            if (input.toLowerCase() === "stage right") {
                stageRightTechie();
            } 
            else if (input.toLowerCase() === "house") {
                houseTechie();
            }
            else if (input.toLowerCase() === "catwalks") {
                catwalksTechie();
            }
            else if (input.toLowerCase() === "downstairs") {
                downstairsTechie();
            }
            else {
                stayHere();
                waitThenCall(wellsRightTechie);
            }
        }
        waitForInput(processInput);

        gameEndTechie();
    }

    function stageRightTechie() {
        clear();
        print("\nYou are in Stage Right!");
        print("You see your Stage Manager passing out headsets and a group of kids play some sort of card game on the floor. It looks like they're gambling, it's probably best if you don't get involved");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tflys" +
            "\n\tstage" +
            "\n\twells right");
    
        function processInput(input){
          if (input.toLowerCase() === "wells right") {
            wellsRightTechie();
            }
            else if (input.toLowerCase() === "stage") {
                stageTechie();
            }
            else if (input.toLowerCase() === "flys") {
                flysTechie();
            }
            else {
                stayHere();
                waitThenCall(stageRightTechie);
            }
        }
        waitForInput(processInput);

        winGame();
    }

    function flysTechie() {
        clear();
        print("\nYou are in the Flys!");
        timeCountdown ();
        if (gaffTapeFound == false) {
            print("You come up to the flys to find your friend. They're nowhere to be found, but you do find do a roll of gaff tape." +
                "\nWhat's this doing here? I'd better get this to the sound board!");
            timeCountdown ();
            gaffTapeFound = true;
         }
         else if (gaffTapeFound == true) {
            print("There's not much up here.")
         }
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage right");
    
        function processInput(input){
            if (input.toLowerCase() === "stage right") {
                stageRightTechie();
            } 
            else {
                stayHere();
                waitThenCall(flysTechie);
            }
        }
        waitForInput(processInput);

        gameEndTechie();
    }

function catwalksTechie() {
        clear();
        print("\nYou are in the Catwalks!");
        timeCountdown ();
        if (minutes <= 15) {
            print("The door is locked right now. Maybe if you come back later...");
        }
        else if (lightBoardOn == true) {
            print("There's not much up here.");
        }
        else if (minutes > 15 && lightBoardOn == false) {
            print("\nYou walk over to the light board and realize it's not turned on." + 
                "\nThat's an easy fix!" +
                "\nYou turn on the lightboard and go to cue 1."); 
            timeCountdown ();
            lightBoardOn = true;
        }
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\twells right");
    
        function processInput(input){
            if (input.toLowerCase() === "wells right") {
                wellsRightTechie();
            } 
            else {
                stayHere();
                waitThenCall(catwalksTechie);
            }   
        }
        waitForInput(processInput);

        gameEndTechie();
    }

    function houseTechie() {
        clear();
        print("\nYou are in the House!");
        timeCountdown ();
        if (gaffTapeFound == true && gaffTapeDelivered == false) {
            print("\nYou walk through the house. You see the leads lined up at the sound board to get their mics on. You walk over and put the roll of gaff tape on the sound board and greet the sound techie sitting there.");
            gaffTapeDelivered = true;
            timeCountdown ();
        }
        else if (gaffTapeFound == false || gaffTapeDelivered == true) {
            print("\nYou walk through the house. You see a group of actors chatting in the seats and some front of house kids running between the house and the lobby.");
        }
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\twells right" +
            "\n\twells left" +
            "\n\tstage");
    
        function processInput(input){
            if (input.toLowerCase() === "wells right") {
                wellsRightTechie();
            } 
           else if (input.toLowerCase() === "wells left") {
                wellsLeftTechie();
            }
            else if (input.toLowerCase() === "stage") {
                stageTechie();
            }
            else {
                stayHere();
                waitThenCall(houseTechie);
            }
        }
        waitForInput(processInput);

        gameEndTechie();
    }

    function stageTechie() {
        clear();
        print("\nYou are on the Stage!");
        timeCountdown ();
        if (setForTopOfShow == false) {
            print("You walk out on stage and see that all the set pieces are still behind the midstage traveller. You take a few minutes to put all the set pieces where they go for the show.");
            setForTopOfShow = true;
            minutes = minutes + 10;
            if (minutes < 10) {
                print("\nIt is 6:0" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
            }
            else if (minutes >= 10) {
                print("\nIt is 6:" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
            }
        }
        else {
            print("The actors are doing mic check right now. Probably best to get out of their way.")
        }
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage right" +
            "\n\tstage left" +
            "\n\thouse");
    
       function processInput(input){
            if (input.toLowerCase() === "stage right") {
                stageRightTechie();
            } 
            else if (input.toLowerCase() === "stage left") {
                stageLeftTechie();
            }
            else if (input.toLowerCase() === "house") {
               houseTechie();
            }   
            else {
                stayHere();
                waitThenCall(stageTechie);
            }
        }
        waitForInput(processInput);

        gameEndTechie();
    }

    function wellsLeftTechie() {
        clear();
        print("\nYou are in the Left Wells!");
        timeCountdown ();
        print("\nThere's not much here.");
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage left" +
            "\n\tdownstairs");
    
        function processInput(input){
            if (input.toLowerCase() === "stage left") {
                stageLeftTechie();
            } 
            else if (input.toLowerCase() === "downstairs") {
                downstairsTechie();
            }
            else {
               stayHere();
               waitThenCall(wellsLeftTechie);
            }
        }
        waitForInput(processInput);

        gameEndTechie();
    }

    function stageLeftTechie() {
        clear();
        print("\nYou are in Stage Left!");
        timeCountdown ();
        if (chatWithFriend == false) {
            print("You walk over and see your friend checking their cue sheet. The two of you get into a lengthy conversation about your web design class.");
            chatWithFriend = true;
            minutes = minutes + 20;
            if (minutes < 10) {
                print("\nIt is 6:0" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
            }
            else if (minutes >= 10) {
                print("\nIt is 6:" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
            }
        }
        else {
            print("You get jumpscared by Munchkin #5, who runs away cackling. It might be best to find another place to sit.")
        }

        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage" +
            "\n\twells left");
        function processInput(input){
            if (input.toLowerCase() === "wells left") {
                wellsLeftTechie();
            } 
            else if (input.toLowerCase() === "stage") {
                stageTechie();
            }
            else {
                stayHere();
                waitThenCall(stageLeftTechie);
            }
        }
        waitForInput(processInput);

        gameEndTechie();
    }

    function downstairsTechie() {
        clear();
        print("\nYou are Downstairs!");
        timeCountdown ();
        print("\nYou see groups of actors running around, stashing props, putting on makeup, and chatting. It doesn't look like you're needed down here.");
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\twells right" +
            "\n\twells left");
    
        function processInput(input){
            if (input.toLowerCase() === "wells left") {
                wellsLeftTechie();
            } 
            else if (input.toLowerCase() === "wells right") {
                wellsRightTechie();
            }
            else {
                stayHere();
                waitThenCall(downstairsTechie);
            }
        }
        waitForInput(processInput);

        gameEndTechie();
    }
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            chooseCharacter();
    }
    waitForInput(processInput);
}