let program = document.getElementById("program");

program.addEventListener("click", access1, {
	once: true
});


function access1() {
        document.write('<button id="program" style="font-size: 20px; width: 300px; padding: 12px;">Access Main Program</button><br><br>ACCESS DENIED<br><br>');
        document.write('<button id="security" style="font-size: 20px; width: 300px; padding: 12px;">Access Main Security</button>');    
    
        security.addEventListener("click", access2, {
		once: true
	}); 
}

function access2() {
        document.write("<br><br>ACCESS DENIED<br><br>");
        document.write('<button id="grid" style="font-size: 20px; width: 300px; padding: 12px;">Access Main Security Grid</button><br><br>');
    
        grid.addEventListener("click", accessDenied, {
		once: true
	});    
       
}

function accessDenied() {
        let magicWord = "Ah ah ah, you didn't say the magic word.<br>";
        let response = "<br>Please!! God dammit! I hate this hacker crap.";
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

}