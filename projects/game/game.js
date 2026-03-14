let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let minutes = 0;

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location

function timeCountdown () {
        minutes = minutes + 1;
        if (minutes < 10) {
            print("\nIt is 6:0" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
        }
           if (minutes >= 10) {
            print("\nIt is 6:" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
        }
}

function chooseCharacter () {
    clear();
    print("\nIn this game you will play as a high school theater student getting everything ready for opening night.");
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

    function outsideTechie() {
        clear();
        print("\nYou are Outside the theater!" + 
            "\nIt is a beautiful spring day and you have a performance tonight. As a techie, it's your job to set for the top of show, find a role of gaff tape, chat with your friend(because of course), and turn on the light board.");
        print("\nIt is 6:0" + (0+minutes) + ". The show starts in " + (60 - minutes) + " minutes");
        print("\nDo you want to enter the theater? Type where you want to go:" +
            "\n\twells_right");
    
        function processInput(input){
            if (input.toLowerCase() === "wells_right") {
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
            "\n\tstage_right" +
            "\n\thouse" +
            "\n\tcatwalks" +
            "\n\tdownstairs");
    
        function processInput(input){
            if (input.toLowerCase() === "stage_right") {
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
    }

    function stageRightTechie() {
        clear();
        print("\nYou are in Stage Right!");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tflys" +
            "\n\tstage" +
            "\n\twells_right");
    
        function processInput(input){
          if (input.toLowerCase() === "wells_right") {
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
    }

    function flysTechie() {
        clear();
        print("\nYou are in the Flys!");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage_right");
    
        function processInput(input){
            if (input.toLowerCase() === "stage_right") {
                stageRightTechie();
            } 
            else {
                stayHere();
                waitThenCall(flysTechie);
            }
        }
        waitForInput(processInput);
    }

function catwalksTechie() {
        clear();
        print("\nYou are in the Catwalks!");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\twells_right");
    
        function processInput(input){
            if (input.toLowerCase() === "wells_right") {
                wellsRightTechie();
            } 
            else {
                stayHere();
                waitThenCall(catwalksTechie);
            }   
        }
            waitForInput(processInput);
    }

    function houseTechie() {
        clear();
        print("\nYou are in the House!");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\twells_right" +
            "\n\twells_left" +
            "\n\tstage");
    
        function processInput(input){
            if (input.toLowerCase() === "wells_right") {
                wellsRightTechie();
            } 
           else if (input.toLowerCase() === "wells_left") {
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
    }

    function stageTechie() {
        clear();
        print("\nYou are on the Stage!");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage_right" +
            "\n\tstage_left" +
            "\n\thouse");
    
       function processInput(input){
            if (input.toLowerCase() === "stage_right") {
                stageRightTechie();
            } 
            else if (input.toLowerCase() === "stage_left") {
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
    }

    function wellsLeftTechie() {
        clear();
        print("\nYou are in the Left Wells!");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage_left" +
            "\n\tdownstairs");
    
        function processInput(input){
            if (input.toLowerCase() === "stage_left") {
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
    }

    function stageLeftTechie() {
        clear();
        print("\nYou are in Stage Left!");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage" +
            "\n\twells_left");
    
        function processInput(input){
            if (input.toLowerCase() === "wells_left") {
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
    }

    function downstairsTechie() {
        clear();
        print("\nYou are Downstairs!");
        timeCountdown ();
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\twells_right" +
            "\n\twells_left");
    
        function processInput(input){
            if (input.toLowerCase() === "wells_left") {
                wellsLeftTechie();
            } 
            else if (input.toLowerCase() === "wells_right") {
                wellsRightTechie();
            }
            else {
                stayHere();
                waitThenCall(downstairsTechie);
            }
        }
        waitForInput(processInput);
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