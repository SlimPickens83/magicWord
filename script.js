let program = document.getElementById("program");
let secButton = true;
let gridButton = true;

program.addEventListener("click", access1);


function access1() {
        document.write("<button>Access Main Program</button><br><br>ACCESS DENIED<br><br>");
        document.write('<button id="security">Access Main Security</button>');    
    
        security.addEventListener("click", access2); 
}

function access2() {
    if (secButton) {
        document.write("<br><br>ACCESS DENIED<br><br>");
        document.write('<button id="grid">Access Main Security Grid</button><br><br>');
    
        grid.addEventListener("click", accessDenied);
    
        secbutton = false;
    }
}

function accessDenied() {
    if (gridButton) {
        let magicWord = "Ah ah ah, you didn't say the magic word.<br>";
        let response = "<br>Please!! God damn it! I hate this hacker crap.";
        let andersonPatience = 50;

        for (let i = 0; i < 41; i++) {
        document.write("ACCESS DENIED<br>");
        }

        document.write("<br>");

        while (andersonPatience > 0) {
            document.write(magicWord + "<br>");
            andersonPatience--;
        }

        if (andersonPatience === 0) {
            document.write("<br>" + response);
            andersonPatience--;
        }

        gridButton = false;
    }
}