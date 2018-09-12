function functie(directie){
    var whatIsHappened;
    switch(directie){
        case "forward":
            whatIsHappened = "Go forward";
        break;
        case "back":
            whatIsHappened = "Go back";
        break;
        case "right":
            whatIsHappened = "Go right";
        break;
        case "left":
            whatIsHappened = "Go left";
        break;
        default:
        whatIsHappened = "Wrong direction!";
    }
    return whatIsHappened;
}

