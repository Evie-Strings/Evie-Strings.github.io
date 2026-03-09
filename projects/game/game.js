let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function wellsRight() {
    clear();
    print("\nYou are in the Right Wells!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tstage_right" +
        "\n\thouse" +
        "\n\tcatwalks");
    
    function processInput(input){
        if (input.toLowerCase() === "stage_right") {
            stageRight();
        } 
        else if (input.toLowerCase() === "house") {
            locationC();
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
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tflys" +
        "\n\tstage" +
        "\n\twells_right");
    
    function processInput(input){
        if (input.toLowerCase() === "wells_right") {
            wellsRight();
        } else {
            stayHere();
            waitThenCall(stageRight);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            wellsRight();
    }
    waitForInput(processInput);
}