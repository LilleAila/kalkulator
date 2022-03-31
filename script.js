math.createUnit('shrek', '8 feet');

let count = 0;
let rickrollCount = 3;

u(".calculatorContainer").on("submit", e => {
    e.preventDefault();
    
    count++;

    if(count >= rickrollCount) rickroll();

    if((document.querySelector(".calculator").value).replaceAll(" ", "") == "9+10") {
        document.querySelector(".answer").value = "21";
        return;
    }

    let answer = 0;
    try {
        answer = math.evaluate(document.querySelector(".calculator").value);
    }
    catch (error) {
        answer = error;
    }
    document.querySelector(".answer").value = answer;
})

function rickroll() {
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}