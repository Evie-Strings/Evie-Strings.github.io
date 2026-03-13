let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location

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
    function outside() {
        clear();
        print("\nYou are Outside the theater!");
        print("\nIt is a beautiful spring say at 5:00 pm and you have a performance tonight. As a techie, it's your job to set for the top of show, find a role of gaff tape, chat with your friend(because of course), and turn on the light board.");
        print("\nDo you want to enter the theater? Type where you want to go:" +
            "\n\twells_right");
    
        function processInput(input){
            if (input.toLowerCase() === "wells_right") {
                wellsRight();
            } 
            else {
                stayHere();
                waitThenCall(outside);
            }
        }
        waitForInput(processInput);
    }

    function wellsRight() {
        clear();
        print("\nYou are in the Right Wells! You see a few actors and techies milling about.");
        print("\nWhere do you want to go next? Type where you want to go:" +
            "\n\tstage_right" +
            "\n\thouse" +
            "\n\tcatwalks" +
            "\n\tdownstairs");
    
        function processInput(input){
            if (input.toLowerCase() === "stage_right") {
                stageRight();
            } 
            else if (input.toLowerCase() === "house") {
                house();
            }
            else if (input.toLowerCase() === "catwalks") {
                catwalks();
            }
            else if (input.toLowerCase() === "downstairs") {
                downstairs();
            }
            else {
                stayHere();
                waitThenCall(wellsRight);
            }
        }
        waitForInput(processInput);
    }

function stageRight() {
    clear();
    print("\nYou are in Stage Right!");
    print("\nWhere do you want to go next? Type where you want to go:" +
        "\n\tflys" +
        "\n\tstage" +
        "\n\twells_right");
    
    function processInput(input){
        if (input.toLowerCase() === "wells_right") {
            wellsRight();
        }
        else if (input.toLowerCase() === "stage") {
            stage();
        }
        else if (input.toLowerCase() === "flys") {
            flys();
        }
        else {
            stayHere();
            waitThenCall(stageRight);
        }
    }
    waitForInput(processInput);
}

function flys() {
    clear();
    print("\nYou are in the Flys!");
    print("\nWhere do you want to go next? Type where you want to go:" +
        "\n\tstage_right");
    
    function processInput(input){
        if (input.toLowerCase() === "stage_right") {
            stageRight();
        } 
        else {
            stayHere();
            waitThenCall(flys);
        }
    }
    waitForInput(processInput);
}

function catwalks() {
    clear();
    print("\nYou are in the Catwalks!");
    print("\nWhere do you want to go next? Type where you want to go:" +
        "\n\twells_right");
    
    function processInput(input){
        if (input.toLowerCase() === "wells_right") {
            wellsRight();
        } 
        else {
            stayHere();
            waitThenCall(catwalks);
        }
    }
    waitForInput(processInput);
}

function house() {
    clear();
    print("\nYou are in the House!");
    print("\nWhere do you want to go next? Type where you want to go:" +
        "\n\twells_right" +
        "\n\twells_left" +
        "\n\tstage");
    
    function processInput(input){
        if (input.toLowerCase() === "wells_right") {
            wellsRight();
        } 
        else if (input.toLowerCase() === "wells_left") {
            wellsLeft();
        }
        else if (input.toLowerCase() === "stage") {
            stage();
        }
        else {
            stayHere();
            waitThenCall(house);
        }
    }
    waitForInput(processInput);
}

function stage() {
    clear();
    print("\nYou are on the Stage!");
    print("\nWhere do you want to go next? Type where you want to go:" +
        "\n\twells_right" +
        "\n\twells_left" +
        "\n\thouse");
    
    function processInput(input){
        if (input.toLowerCase() === "wells_right") {
            wellsRight();
        } 
        else if (input.toLowerCase() === "wells_left") {
            wellsLeft();
        }
        else if (input.toLowerCase() === "house") {
            house();
        }
        else {
            stayHere();
            waitThenCall(stage);
        }
    }
    waitForInput(processInput);
}

function wellsLeft() {
    clear();
    print("\nYou are in the Left Wells!");
    print("\nWhere do you want to go next? Type where you want to go:" +
        "\n\tstage_left" +
        "\n\tdownstairs");
    
    function processInput(input){
        if (input.toLowerCase() === "stage_left") {
            stageLeft();
        } 
        else if (input.toLowerCase() === "downstairs") {
            downstairs();
        }
        else {
            stayHere();
            waitThenCall(wellsLeft);
        }
    }
    waitForInput(processInput);
}

function stageLeft() {
    clear();
    print("\nYou are in Stage Right!");
    print("\nWhere do you want to go next? Type where you want to go:" +
        "\n\tstage" +
        "\n\twells_left");
    
    function processInput(input){
        if (input.toLowerCase() === "wells_left") {
            wellsLeft();
        } 
        else if (input.toLowerCase() === "stage") {
            stage();
        }
        else {
            stayHere();
            waitThenCall(stageLeft);
        }
    }
    waitForInput(processInput);
}

function downstairs() {
    clear();
    print("\nYou are Downstairs!");
    print("\nWhere do you want to go next? Type where you want to go:" +
        "\n\twells_right" +
        "\n\twells_left");
    
    function processInput(input){
        if (input.toLowerCase() === "wells_left") {
            wellsLeft();
        } 
        else if (input.toLowerCase() === "wells_right") {
            wellsRight();
        }
        else {
            stayHere();
            waitThenCall(downstairs);
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