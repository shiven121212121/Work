let count = 5;

document.getElementById("two").addEventListener("click", function() {
    if (count < 25) {
        count += 5;
    }
    
    var size = count + "0px"; // Generates "50px", "100px", etc.
    document.getElementById("one").style.height = size;
    document.getElementById("one").style.width = size;

    if (count == 10) {
        this.textContent = "Are you sure?";
    } else if (count == 15) {
        this.textContent = "TRY AGAIN"; // Fixed quotes
    }
    else if (count == 20) {
        this.textContent = "Please"; // Fixed quotes
    }
    else if (count == 25) {
        this.style.display="none";// Fixed quotes
    }
    
});
document.getElementById("one").addEventListener("click", function() {
    document.querySelector("#text").textContent="I Love You";
    document.querySelector("#first-photo").src="friends-chandler-monica.gif"
    document.querySelector("#one").style.display="none";
    document.querySelector("#two").style.display="none";
    document.querySelector(".gtext").style.display="flex";
    document.querySelectorAll(".grid").forEach(a => {
        a.style.display = "grid";
    });
    var audio = new Audio('song.mp3');
    audio.play();   

});
