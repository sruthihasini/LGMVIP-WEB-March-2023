let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {


        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'del') {
            string = ""

            document.querySelector('input').value = string;
        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})




const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
// const keys = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});